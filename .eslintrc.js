module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-ruijadom`
  extends: ["ruijadom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
