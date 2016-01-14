module.exports = {
  "extends": "justinlocsei/configurations/node",
  "env": {
    "mocha": true
  },
  "plugins": [
    "mocha"
  ],
  "rules": {
    "mocha/no-exclusive-tests": 1,
    "mocha/no-global-tests": 2
  }
};

