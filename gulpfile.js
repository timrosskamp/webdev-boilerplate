const { task, watch, src, dest, series } = require('gulp');
const pump = require('pump');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const mqpacker = require('css-mqpacker');
const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

task('sass', function(done){
	pump([
		src(['src/scss/main.scss']),
		concat('style.site.css'),
		sass(),
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
			cssnano({
				discardComments: {
					removeAll: true
				}
			})
        ]),
		dest('dist/')
	], done);
});

task('watch', series('sass', () => {
	watch(['src/scss/**'], ['sass']);
}));