const { defineConfig } = require('cypress');

const e2eConfig = {
  baseUrl: 'http://qatools.ro',
  video: false,
  reporter: 'cypress-mochawesome-reporter',
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        logToTerminal(message) {
          console.log(`@@@ ${message}`);
          return null;
        },
      });
    },
    ...e2eConfig,
  },
});
