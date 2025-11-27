module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // Global styles are imported in main.ts instead of additionalData
        // to avoid circular dependency issues
        additionalData: ``,
      },
    },
  },
};
