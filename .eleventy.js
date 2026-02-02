module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByGlob("projects/*.md").reverse();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    pathPrefix: "/",
  };
};
