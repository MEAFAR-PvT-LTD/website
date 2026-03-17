module.exports = function (eleventyConfig) {
  const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const isUserOrOrgPagesRepo = repositoryName
    ?.toLowerCase()
    .endsWith(".github.io");

  // Detect GitHub Actions by checking for GITHUB_REPOSITORY (always set in GH Actions)
  const isGitHubActions = !!process.env.GITHUB_REPOSITORY;

  const pathPrefix =
    process.env.ELEVENTY_PATH_PREFIX ||
    (isGitHubActions && repositoryName && !isUserOrOrgPagesRepo
      ? `/${repositoryName}/`
      : "/");

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
    pathPrefix,
  };
};
