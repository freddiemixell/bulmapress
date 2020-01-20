const pkg = require('./package.json');
const {
	getFileLoaderOptions,
	issuerForNonStyleFiles,
	issuerForStyleFiles,
	fileLoader,
} = require('@wpackio/scripts');

module.exports = {
	// Project Identity
	appName: 'paperPress', // Unique name of your project
	type: 'theme', // Plugin or theme
	slug: 'paper-press', // Plugin or Theme slug, basically the directory name under `wp-content/<themes|plugins>`
	// Used to generate banners on top of compiled stuff
	bannerConfig: {
		name: 'paperPress',
		author: '',
		license: 'UNLICENSED',
		link: 'UNLICENSED',
		version: pkg.version,
		copyrightText:
			'This software is released under the UNLICENSED License\nhttps://opensource.org/licenses/UNLICENSED',
		credit: true,
	},
	// Hook into babeloverride so that we can add react-hot-loader plugin
	jsBabelOverride: defaults => ({
		...defaults,
		"plugins": ["babel-plugin-styled-components"],
	}),
	// Files we need to compile, and where to put
	files: [
		{
			name: 'theme',
			entry: {
				main: ['./js/theme/index.js'],
				paperBlocks: [ './blocks/library/index.js' ],
			},
			webpackConfig: (config, merge, appDir, isDev) => {
				const svgoLoader = {
					loader: 'svgo-loader',
					options: {
						plugins: [
							{ removeTitle: true },
							{ convertColors: { shorthex: false } },
							{ convertPathData: false },
						],
					},
				};
				// create module rules
				const configWithSvg = {
					module: {
						rules: [
							// SVGO Loader
							// https://github.com/rpominov/svgo-loader
							// This rule handles SVG for javascript files
							{
								test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
								use: [
									{
										loader: fileLoader,
										options: getFileLoaderOptions(
											appDir,
											isDev,
											false
										),
									},
									svgoLoader,
								],
								issuer: issuerForNonStyleFiles,
							},
							// This rule handles SVG for style files
							{
								test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
								use: [
									{
										loader: fileLoader,
										options: getFileLoaderOptions(
											appDir,
											isDev,
											true
										),
									},
									svgoLoader,
								],
								issuer: issuerForStyleFiles,
							},
						],
					},
				};
				// merge the new module.rules with webpack-merge api
				return merge(config, configWithSvg);
			}
		}
	],
	// Output path relative to the context directory
	// We need relative path here, else, we can not map to publicPath
	outputPath: 'dist',
	// Project specific config
	// Needs react(jsx)?
	hasReact: true,
	// Needs sass?
	hasSass: true,
	// Needs less?
	hasLess: false,
	// Needs flowtype?
	hasFlow: false,
	// Externals
	// <https://webpack.js.org/configuration/externals/>
	externals: {
		jquery: 'jQuery',
		'react': 'React',
    	'react-dom': 'ReactDOM',
	},
	// Webpack Aliases
	// <https://webpack.js.org/configuration/resolve/#resolve-alias>
	alias: undefined,
	// Show overlay on development
	errorOverlay: true,
	// Auto optimization by webpack
	// Split all common chunks with default config
	// <https://webpack.js.org/plugins/split-chunks-plugin/#optimization-splitchunks>
	// Won't hurt because we use PHP to automate loading
	optimizeSplitChunks: true,
	// Usually PHP and other files to watch and reload when changed
	watch: './inc|includes/**/*.php',
	// Files that you want to copy to your ultimate theme/plugin package
	// Supports glob matching from minimatch
	// @link <https://github.com/isaacs/minimatch#usage>
	packageFiles: [
		'inc/**',
		'vendor/**',
		'dist/**',
		'*.php',
		'*.md',
		'readme.txt',
		'languages/**',
		'layouts/**',
		'LICENSE',
		'*.css',
	],
	// Path to package directory, relative to the root
	packageDirPath: 'package',
};
