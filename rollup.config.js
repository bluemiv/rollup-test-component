import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
export default {
    input: "./src/index.js", // 원본 소스 진입점
    output: {
        file: "./dist/index.bundle.js", // 빌드 산출물 경로
        format: "es", // 출력 형식
        sourcemap: true, // 소스 앱으로 원본 소스와 매핑. (디버깅을 위함)
    },
    plugins: [
        nodeResolve({
            extensions,
        }),
        babel({
            babelHelpers: "bundled",
            presets: ["@babel/preset-env", "@babel/preset-react"],
            exclude: "./node_modules/**",
            extensions,
        }),
    ],
}