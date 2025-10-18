const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const marked = require('marked');

const CONTENT_DIR = path.join(__dirname, 'content');
const OUTPUT_DIR = path.join(__dirname, 'post');
const TEMPLATE_PATH = path.join(__dirname, 'template.html');

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
    .replace(/{{date}}/g, frontmatter.date)
    .replace(/{{icon}}/g, frontmatter.icon || '../images/battery-full.png')
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

const listItems = outputFiles.map(file => {
  const title = file.replace('.html', '').split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  return `  <li><a href="/post/${file}">${title}</a></li>`;
}).join('\n');

// Read existing index.html
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Replace a placeholder or inject into a container (e.g., <div id="posts"></div>)
indexContent = indexContent.replace(
    '<!-- posts -->',
    listItems + '\n <!-- ❎posts -->'
);

// Save updated index.html
fs.writeFileSync(indexPath, indexContent);