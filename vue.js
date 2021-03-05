module.exports = {
	extends: [
		'plugin:vue/recommended',
		require.resolve('./index.js'),
	],
	rules: {
		'import/prefer-default-export': 'off',
	},
	plugins: [
		'vue',
		'vuetify',
	],
};
