const { DateTime } = require("luxon");
module.exports = function (eleventyConfig) {
  // To copy assets to public folder
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");

  // For the date and year display
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Return your Object options:
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
    dir: {
      input: "src",
      includes: "_includes",
      output: "public",
    },
  };
};
