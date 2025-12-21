const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  screenshotOnRunFailure: true,

  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',

    env: {
      apiUrl: 'https://jsonplaceholder.typicode.com'
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    }
  }
});
