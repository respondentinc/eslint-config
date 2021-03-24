module.exports = {
	extends: [
		'plugin:vue/recommended',
		require.resolve('./index.js'),
	],
	rules: {
		'import/prefer-default-export': 'off',
		'vue/html-indent': ['error', 'tab', {
			'attribute': 1,
			'baseIndent': 1,
			'closeBracket': 0,
			'alignAttributesVertically': true,
			'ignores': []
		}]
	},
	plugins: [
		'vue',
		'vuetify',
	],
};
