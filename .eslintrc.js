module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'globals': {
		JSX: "readonly",
		Code: true
	  },
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		indent: "off",
		quotes: 0,
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
		"comma-dangle": ["warn", "never"],
		"no-underscore-dangle": 0,
		"no-restricted-syntax": 0,
		"consistent-return": 0,
		"max-len": ["error", 130],
		"import/prefer-default-export": 0,
		"react/jsx-wrap-multilines": 0,
		"react/jsx-indent-props": [1, 4],
		"@typescript-eslint/no-shadow": ["error", { "builtinGlobals": false, "hoist": "never", "allow": [] }],
		"react/no-unescaped-entities": 0,
		"react/require-default-props": 0,
		"react/jsx-one-expression-per-line": 0,
		"no-plusplus": 0,
		"import/no-unresolved": 0,
		"jsx-a11y/anchor-is-valid": 0,
		"react/jsx-no-undef": 0,
		"jsx-a11y/click-events-have-key-events": 0,
		"jsx-a11y/no-noninteractive-element-interactions": 0,
		"@typescript-eslint/no-non-null-assertion": 0,
		"react/jsx-props-no-spreading": 0,
		camelcase: "warn",
		"no-console": ["warn", { allow: ["error"] }],
		"operator-linebreak": "off",
		"arrow-body-style": "off",
		"no-trailing-spaces": "off",
		"jsx-a11y/no-static-element-interactions": "off",
		"jsx-a11y/aria-role": "off",
		"@typescript-eslint/explicit-module-boundary-types": 0,
		"padded-blocks": "off",
		"no-tabs": "off",
		radix: "warn",
		"linebreak-style": 0,
		"react/jsx-first-prop-new-line": "off",
		"react/jsx-closing-bracket-location": "off",
		"object-curly-spacing": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ["error", { "args": "none" }],
		"no-mixed-spaces-and-tabs" : "off",
		"react/jsx-closing-tag-location": "off",
		"jsx-a11y/mouse-events-have-key-events": "off",
		"jsx-a11y/label-has-associated-control": [ "error", {
		  "required": {
			"some": [ "nesting", "id"  ]
		  }
		}],
		"jsx-a11y/label-has-for": [ "error", {
		  "required": {
			"some": [ "nesting", "id"  ]
		  }
		}],
		"react/jsx-key": ["warn", { "checkFragmentShorthand": false }],
		"import/order": ["warn", {
		  "newlines-between": "never",
		  "groups": ["builtin", "external", "internal"],
		  "pathGroups": [
			{
			  "pattern": "react",
			  "group": "external",
			  "position": "before"
			},
			{
			  "pattern": "next",
			  "group": "external",
			  "position": "before"
			},
			{
			  "pattern": "next/**",
			  "group": "external",
			  "position": "before"
			},
			{
			  "pattern":"@material-ui",
			  "group": "external",
			  "position":"before"
			},
			{
			  "pattern": "~/**",
			  "group": "external",
			  "position": "before"
			},
			{
			  "pattern": "@src/**",
			  "group": "internal"
			},
			{
			  "pattern": "@pages/**",
			  "group": "internal"
			},
			{
			  "pattern": "@layouts/**",
			  "group": "internal"
			},
			{
			  "pattern": "@components/**",
			  "group": "internal"
			},
			{
			  "pattern": "@assets/**",
			  "group": "internal"
			},
			{
			  "pattern": "~/styles/**",
			  "group": "internal"
			},
			{
			  "pattern": "~/*.css",
			  "group": "internal",
			  "poition":"after"
			}
		  ],
		  "pathGroupsExcludedImportTypes": ["react"],
		  "alphabetize": {
			"order": "asc",
			"caseInsensitive": true
		  }
		}]
	  }
};
