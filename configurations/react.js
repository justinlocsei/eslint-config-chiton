module.exports = {
  "extends": "justinlocsei/configurations/es6",
  "ecmaFeatures": {
    "jsx": true
  },
  "env": {
    "browser": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "jsx-quotes": [2, "prefer-double"],
    "react/jsx-boolean-value": [2, "always"],
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-handler-names": 2,
    "react/jsx-no-bind": 2,
    "react/jsx-no-duplicate-props": [2, {"ignoreCase": true}],
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-uses-vars": 2,
    "react/no-danger": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-multi-comp": 2,
    "react/no-unknown-property": 2,
    "react/prop-types": 2,
    "react/require-extension": 2,
    "react/self-closing-comp": 2,
    "react/wrap-multilines": 2
  }
};

