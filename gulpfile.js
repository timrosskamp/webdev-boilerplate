const gulp = require('gulp')
const pump = require('pump')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const sassInlineSVG = require('sass-inline-svg')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

gulp.task('sass', done => {
	pump([
		gulp.src('src/scss/style.scss', {
			sourcemaps: true
		}),
		sass.sync({
			outputStyle: 'expanded',
			functions: {
				svg: sassInlineSVG('./src/svg/', [])
			}
		}),
		postcss([
			autoprefixer()
        ]),
		gulp.dest('dist/', {
			sourcemaps: '.'
		})
	], done)
});

gulp.task('cssmin', done => {
	pump([
		gulp.src('dist/style.css'),
		postcss([
			cssnano()
		]),
		rename({
			extname: '.min.css'
		}),
		gulp.dest('dist/')
	], done)
})

gulp.task('default', gulp.series('sass', 'cssmin', () => {
	gulp.watch(['src/scss/**'], gulp.series('sass', 'cssmin'))
}))