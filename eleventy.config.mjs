// import { EleventyRenderPlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async (eleventyConfig) => {
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("TODO.md");

  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPassthroughCopy("styles/");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("public/");

  eleventyConfig.setLiquidOptions({ jsTruthy: true });

  // eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {});

  const res = await fetch("https://neocities.org/api/info?sitename=x3n1", {
    headers: { "Access-Control-Allow-Origin": "https://neocities.org" },
  });
  const { info: siteInfo } = await res.json();

  const currentDate = new Date();
  eleventyConfig.addShortcode(
    "siteAge",
    () => currentDate - new Date(siteInfo.last_updated)
  );

  eleventyConfig.addShortcode("lastUpdated", () =>
    new Date(siteInfo.last_updated).toUTCString()
  );
  eleventyConfig.addShortcode("currentYear", () => currentDate.getFullYear());
  eleventyConfig.addShortcode(
    "myCurrentAge",
    () => currentDate.getFullYear() - 1996
  );
  eleventyConfig.addShortcode("visitCounter", () => siteInfo.hits);
};
