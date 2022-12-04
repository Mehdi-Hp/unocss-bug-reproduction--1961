module.exports = {
	plugins: [
		require('postcss-custom-selectors'),
		require('postcss-unitlist')({
			media: true,
			replace: true,
			propList: ['*'],
			unitList: [
				{
					math: '$word / 2',
					word: 'x',
					unit: 'rem'
				}
			]
		}),
		require('postcss-preset-env')({
			preserve: true,
			stage: 0
		}),
		require('postcss-custom-media'),
		require('autoprefixer'),
		require('cssnano')
	]
};
