const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("images");
  
  let markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItFootnote);

  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
