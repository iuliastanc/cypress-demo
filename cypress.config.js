const { defineConfig } = require('cypress');

const e2eConfig = {
  baseUrl: 'http://qatools.ro',
  video: false,
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
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
