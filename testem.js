/* eslint-env node */
module.exports = {
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "launch_in_ci": [
    "Chrome"
  ],
  "launch_in_dev": [
    "Chrome"
  ],
  "browser_args": {
    "Chrome": [
      "--touch-events",
      "--disable-gpu",
      "--headless",
      "--enable-logging --v=1"
    ]
  }
};
