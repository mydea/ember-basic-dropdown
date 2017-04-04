/* eslint-env node */
module.exports = {
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "launch_in_ci": [
    // "PhantomJS",
    "Chrome"
  ],
  "launch_in_dev": [
    // "PhantomJS",
    "Chrome"
  ],
  "browser_args": {
    "Chrome": [
      "--touch-events",
      "--headless",
      "--disable-gpu"
    ]
  }
};
