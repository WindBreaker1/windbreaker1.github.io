const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const marked = require('marked');

const CONTENT_DIR = path.join(__dirname, 'content');
const OUTPUT_DIR = path.join(__dirname, 'post');
const TEMPLATE_PATH = path.join(__dirname, 'templates/post-template.html');

// Read template
const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// Process all .md files
fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md')).forEach(file => {
  const filePath = path.join(CONTENT_DIR, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content: markdownContent } = matter(content);
  const htmlContent = marked.parse(markdownContent);
  const outputHtml = template
    .replace(/{{title}}/g, frontmatter.title)
    .replace(/{{description}}/g, frontmatter.description || '')
    .replace(/{{tags}}/g, frontmatter.tags || '')
    .replace(/{{date}}/g, frontmatter.date)
    .replace(/{{icon}}/g, frontmatter.icon || '../images/scroll-text.svg')
    .replace(/{{image}}/g, frontmatter.image || '../images/anime-walkman.gif')
    .replace(/{{content}}/g, htmlContent);

  const slug = file.replace('.md', '.html');
  const outputPath = path.join(OUTPUT_DIR, slug);
  
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);
  fs.writeFileSync(outputPath, outputHtml);
  console.log(`Generated: ${slug}`);
});




// ----------------------------------- //

const OUTPUT_DIR2 = path.join(__dirname, '/');

const indexPath = path.join(OUTPUT_DIR2, 'index.html');

// List of all posts
const outputFiles = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.html'));

const listItems = fs.readdirSync(CONTENT_DIR)
  .filter(f => f.endsWith('.md'))
  .map(file => {
    const filePath = path.join(CONTENT_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter } = matter(content);
    
    const htmlFile = file.replace('.md', '.html');
    const cleanUrl = file.replace('md', '');
    const cleanedUrl = cleanUrl.replace(/[\s.,]+$/, '');
    const title = frontmatter.title || file.replace('.md', '').split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    const icon = frontmatter.icon || '../images/scroll-text.svg';
    const image = frontmatter.image || '../images/anime-walkman.gif'
    const description = frontmatter.description || '';
    
    return `<li class="posts-list-item"><a href="/post/${cleanedUrl}"><img class="icon" src="${icon}" alt=""><h3>${title}</h3><p>${description}</p></a></li>`;
  })
  .join('\n');

// Read existing index.html
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Replace a placeholder or inject into a container (e.g., <div id="posts"></div>)
// The [\s\S]*? pattern matches any character (including newlines) non-greedily, so it handles any formatting inside the tags.
indexContent = indexContent.replace(
  /<ul class="posts-list">[\s\S]*?<\/ul>/,
  `<ul class="posts-list">\n${listItems}\n</ul>`
);

// Save updated index.html
fs.writeFileSync(indexPath, indexContent);
