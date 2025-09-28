export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("chattable.css");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("svg");
};
