module.exports = {
	env: {
		'jest/globals': true,
	},
	plugins: ['jest'],
	extends: 'airbnb-base',
	globals: { jest: 'readonly' },
	rules: {
		'consistent-return': 0,
		indent: [2, 'tab'],
		'no-tabs': 0,
		'no-param-reassign': 0,
		'no-underscore-dangle': 0,
		'max-classes-per-file': ['error', 2],
		'max-len': ['error', 150, 2, {
			ignoreUrls: true,
			ignoreComments: false,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
		}],
	},
};
