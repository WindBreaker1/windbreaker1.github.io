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
    .replace(/{{image}}/g, frontmatter.image || '../images/default-posts-list-image.png')
    .replace(/{{content}}/g, htmlContent);

  const slug = file.replace('.md', '.html');
  const outputPath = path.join(OUTPUT_DIR, slug);
  
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);
  fs.writeFileSync(outputPath, outputHtml);
  console.log(`Generated: ${slug}`);
});




// ----------------------------------- //

const OUTPUT_DIR2 = path.join(__dirname, '/');

const targetFiles = [
  'index.html',
  'page/blog.html',
];

// List of all posts
const outputFiles = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.html'));

// Build list of all posts with metadata
const allPosts = fs.readdirSync(CONTENT_DIR)
  .filter(f => f.endsWith('.md'))
  .map(file => {
    const filePath = path.join(CONTENT_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter } = matter(content);
    
    const htmlFile = file.replace('.md', '.html');
    const cleanUrl = file.replace('.md', '');
    const cleanedUrl = cleanUrl.replace(/[\s.,]+$/, '');
    const title = frontmatter.title || file.replace('.md', '').split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    const icon = frontmatter.icon || '../images/scroll-text.svg';
    const image = frontmatter.image || '../images/default-posts-list-image.png';
    const description = frontmatter.description || '';
    const date = frontmatter.date ? new Date(frontmatter.date) : new Date(0);
    
    return {
      date,
      html: 
      ` <a class="posts-list-item" href="/post/${cleanedUrl}">
          <img class="post-image" src="${image}" alt="">
          <div class="post-info">
            <h3>${title}</h3>
            <h4>Published: ${frontmatter.date}</h4>
            <p>${description}</p>
          </div>
        </a>`
    };
  })
  .sort((a, b) => b.date - a.date); // Sort by date: latest first

// All posts list (for blog page)
const listItems = allPosts
  .map(item => item.html)
  .join('\n');

// Recent posts list (for home page, top 5 only)
const recentListItems = allPosts
  .slice(0, 5)
  .map(item => item.html)
  .join('\n');

// Inject the generated posts lists into each target file
const postsListRegex = /<ul class="posts-list">[\s\S]*?<\/ul>/i;

targetFiles.forEach(relPath => {
  const filePath = path.join(OUTPUT_DIR2, relPath);
  if (!fs.existsSync(filePath)) {
    console.warn(`Skipping missing file: ${relPath}`);
    return;
  }

  let fileContent = fs.readFileSync(filePath, 'utf8');
  if (postsListRegex.test(fileContent)) {
    // Use recent list for home page, full list for blog page
    const listToUse = relPath === 'index.html' ? recentListItems : listItems;
    fileContent = fileContent.replace(postsListRegex, `<ul class="posts-list">\n${listToUse}\n</ul>`);
    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log(`Updated posts-list in: ${relPath}`);
  } else {
    console.warn(`No <ul class="posts-list"> container found in ${relPath}; skipping.`);
  }
});
