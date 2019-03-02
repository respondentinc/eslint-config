# @respondent/eslint-config

The base ESLint configuration used at Respondent.

## Setup

- Install the dependency

      $ npm install @respondent/eslint-config
    
- Extend from it in your local `.eslintrc` file and set the proper environment

      {
        "extend": "@respondent"
        "env": {
            "node": true,
            "mocha": true
        }
      }
