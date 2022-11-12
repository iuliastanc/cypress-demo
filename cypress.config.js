const { defineConfig } = require('cypress');

const e2eConfig = {
  baseUrl: 'http://qatools.ro',
  video: false,
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    ...e2eConfig,
  },
});
