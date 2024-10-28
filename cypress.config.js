const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      "baseUrl": "https://ecommerce-playground.lambdatest.io/",
        "defaultCommandTimeout": 13000,
        "pageLoadTimeout": 50000,
       "viewportHeight": 800,
       "viewportWidth": 1500
  },
});
