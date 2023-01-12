import typescript from "@rollup/plugin-typescript"
import nodeResolve from "@rollup/plugin-node-resolve"
import terser from '@rollup/plugin-terser'

export default {
    input: './src/index.ts',
    plugins: [ 
        typescript(), 
        nodeResolve(), 
        terser()
    ],
    output: {
        file: './dist/index.js',
        format: 'cjs'
    }
}
