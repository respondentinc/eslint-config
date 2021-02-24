module.exports = {
	extends: [
		'airbnb-typescript/base',
		require.resolve('./index.js'),
	],
	rules: {
		'@typescript-eslint/indent': [2, 'tab'],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
	},
};
