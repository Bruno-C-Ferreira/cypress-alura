const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'sqxtbr',
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: true,
    html: true,
    json: false,
    timestamp: "ddmmyyyy_HHMMss"
  },
  e2e: {
    baseUrl: "https://alura-fotos.herokuapp.com/#/home",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
