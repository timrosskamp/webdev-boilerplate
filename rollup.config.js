import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import includePaths from 'rollup-plugin-includepaths';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/js/index.js',
    output: {
        file: 'assets/js/app.bundle.js',
        format: 'iife'
    },
    plugins: [
        commonjs({
            include: 'node_modules/**'
        }),
        includePaths({
            paths: [
                'src/js'
            ]
        }),
        resolve({
            extensions: [
                '.js'
            ]
        }),
        babel()
    ]
}