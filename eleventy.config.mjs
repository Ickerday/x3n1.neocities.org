export default (eleventyConfig) => {
  eleventyConfig.ignores.add("README.md");

  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("chattable.css");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("svg");
};
