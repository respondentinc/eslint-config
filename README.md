# Respondent ESLint Configs

Contains eslint configs for our Javascript, Typescript, and Vue applications. These configs are based on the [Airbnb eslint config](https://github.com/airbnb/javascript).

## Getting Setup

The config does not come along with its own dependencies and instead relies on peer dependencies being installed. 

### Base Config (no Vue or Typescript)

To get started with the base JS config, run:

`$ npm i -D @respondentinc/eslint-config eslint-config-airbnb-base eslint-plugin-import`

And in your `.eslintrc` file, put:

```json
{
	"extends": ["respondent"]
}
```

### Typescript

For Typescript applications, run:

```
$ npm i -D @respondentinc/eslint-config \
    eslint-config-airbnb-base \
    eslint-plugin-import \
    eslint-config-airbnb-typescript \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser 
```

And in your `.eslintrc` file, put:

```json
{
	"extends": ["respondent/typescript"]
}
```

### Vue

For Vue applications, run:

```
$ npm i -D @respondentinc/eslint-config \
    eslint-config-airbnb-base \
    eslint-plugin-import \
    eslint-plugin-vue \
    eslint-plugin-vuetify
```

And in your `.eslintrc` file, put:

```json
{
	"extends": ["respondent/vue"]
}
```

## Github's ridiculous tab width

You may notice that this config uses tabs instead of spaces. This is great for accessibility because it allows each developer to configure their editor to use the tab size that is easiest for them to read. 

The downside here is that Github displays tabs as 8 spaces. To make it so that your code is still legible on Github, include a [.editorconfig](https://editorconfig.org/) file in your project with the following:

```
root = true

[*.{js,vue,ts,html,css,scss}]
charset = utf-8
indent_style = tab
indent_size = 4
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```
