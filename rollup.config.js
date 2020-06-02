import noderesolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
import { resolve } from 'path'

export default [{
    input: 'src/js/index.js',
    output: [{
        file: 'dist/script.js',
        format: 'iife',
        sourcemap: true
    }, {
        file: 'dist/script.min.js',
        format: 'iife',
        plugins: [
            terser()
        ]
    }],
    plugins: [
        alias({
            entries: {
                '@js': resolve('./src/js/')
            }
        }),
		babel({
			babelHelpers: 'bundled',
			presets: [
				['@babel/preset-env', {
					targets: '> 2% in DE, not dead, IE 11',
                    loose: true,
                    modules: false
				}]
			],
			plugins: [
				['@babel/plugin-proposal-class-properties', {
					loose: true
				}]
			]
		}),
        noderesolve(),
        commonjs()
    ]
}]