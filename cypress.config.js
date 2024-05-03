const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // URL Dinamica
    baseUrl: "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F",

    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
});
