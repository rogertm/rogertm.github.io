/**
 * Gulp Tasks
 */

/**
 * Load Plugins
 */
const { gulp, dest, src, series, watch, task } = require('gulp');
const gulpCopy 			= require('gulp-copy');
const del				= require('del');

/**
 * Assets
 */
let assets 			= 'assets/';
let assetsScss		= assets +'scss/';
let assetsJs		= assets +'js/';
let nodeSrc			= 'node_modules/';

/**
 * Node Modules
 */
let bootstrapScss	= nodeSrc +'bootstrap/scss/**/*';
let bootstrapJs		= nodeSrc +'bootstrap/dist/js/bootstrap.bundle.min.js';
let jquery			= nodeSrc +'jquery/dist/jquery.min.js';

/**
 * Copy required dependencies from node_modules/* to assets/scss/
 */
function scss(){
	return src([bootstrapScss])
		.pipe(gulpCopy(assetsScss, {prefix: 1}));
}

/**
 * Copy required dependencies from node_modules/* to assets/js/
 */
function js(){
	return src([bootstrapJs, jquery])
		.pipe(gulpCopy(assetsJs, {prefix: 1}));
}

/**
 * Do the job
 */
exports.default = series( scss, js );
