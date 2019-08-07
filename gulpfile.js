const gulp = require('gulp');
const pump = require('pump');
const concat = require('gulp-concat');
const gulpSass = require('gulp-sass');
const sassInlineSVG = require('sass-inline-svg');
const postcss = require('gulp-postcss');
const mqpacker = require('css-mqpacker');
const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

function sass(done){
	pump([
		gulp.src(['src/scss/main.scss']),
		concat('style.site.css'),
		gulpSass({
			functions: {
				svg: sassInlineSVG('./src/svg/', [])
			}
		}),
		postcss([
            mqpacker({
                sort: true
			}),
			pxtorem({
                rootValue: 16,
                unitPrecision: 3,
                propList: [
                    'font',
					'font-size',
					'line-height',
                    'letter-spacing'
                ],
                replace: true,
                mediaQuery: true
            }),
			autoprefixer(),
			cssnano()
        ]),
		gulp.dest('dist/')
	], done);
}

function watch(){
	gulp.watch(['src/scss/**'], sass);
}

exports.build = sass;
exports.watch = gulp.series(sass, watch);