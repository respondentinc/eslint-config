# Respondent ESLint Configs

Contains eslint configs for our Javascript, Typescript, and Vue applications. These configs are based on the [Airbnb eslint config](https://github.com/airbnb/javascript).

## Getting Setup

The config does not come along with its own dependencies and instead relies on peer dependencies being installed. 

### Base Config (no Vue or Typescript)

To get started with the base JS config, run:

`$ npx install-peerdeps --dev eslint-config-respondent`

And in your `.eslintrc` file, put:

```json
{
	"extends": ["respondent"]
}
```

### Typescript

For Typescript applications, run:

`$ npx install-peerdeps --dev eslint-config-respondent-typescript`

And in your `.eslintrc` file, put:

```json
{
	"extends": ["respondent-typescript"]
}
```

### Vue

For Vue applications, run:

`$ npx install-peerdeps --dev eslint-config-respondent-vue`

And in your `.eslintrc` file, put:

```json
{
	"extends": ["respondent-vue"]
}
```