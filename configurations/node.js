module.exports = {
  "extends": "justinlocsei/configurations/default",
  "env": {
    "node": true
  },
  "ecmaFeatures": {
    "arrowFunctions": true
  },
  "rules": {
    "arrow-body-style": [2, "as-needed"],
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": [2, {"after": true, "before": true}],
    "callback-return": 2,
    "handle-callback-err": 2,
    "no-arrow-condition": 2,
    "no-mixed-requires": 2,
    "no-new-require": 2,
    "no-path-concat": 2
  }
};
