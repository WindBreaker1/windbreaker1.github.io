const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const RSS = require('rss');

const CONTENT_DIR = path.join(__dirname, 'content');
const OUTPUT_DIR = path.join(__dirname, 'post');
const RSS_FILE = path.join(__dirname, 'rss.xml');

// RSS Feed Options
const feedOptions = {
  title: 'My Blog',
  description: 'A blog about programming and web development.',
  site_url: 'https://yourdomain.com', // Replace with your actual domain
  feed_url: 'https://yourdomain.com/rss.xml', // Replace with your actual RSS URL
  managing_editor: 'your-email@example.com',
  web_master: 'your-email@example.com',
  copyright: 'Copyright 2025 My Blog',
  language: 'en',
  categories: ['Technology', 'Programming'],
  pubDate: new Date().toUTCString()
};

// Create the RSS feed
const feed = new RSS(feedOptions);

// Process all .md files
fs.readdirSync(CONTENT_DIR)
  .filter(f => f.endsWith('.md'))
  .forEach(file => {
    const filePath = path.join(CONTENT_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content: markdownContent } = matter(content);

    const htmlContent = markdownContent;

    // Ensure categories is always an array
    const categories = frontmatter.tags
      ? (Array.isArray(frontmatter.tags) ? frontmatter.tags : [frontmatter.tags])
      : ['Uncategorized'];

    const item = {
      title: frontmatter.title,
      description: frontmatter.description || 'No description provided.',
      url: `https://yourdomain.com/post/${file.replace('.md', '')}`,
      author: frontmatter.author || 'Anonymous',
      date: frontmatter.date || new Date().toUTCString(),
      categories: categories, // Now guaranteed to be an array
      guid: `https://yourdomain.com/post/${file.replace('.md', '')}`
    };

    feed.item(item);
  });

// Write the RSS feed to a file
fs.writeFileSync(RSS_FILE, feed.xml({ indent: true }));
console.log(`RSS feed generated at: ${RSS_FILE}`);