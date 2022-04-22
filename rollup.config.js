// rollup.config.js
import { defineConfig } from "rollup";
import typescript from "rollup-plugin-typescript2";

export default defineConfig({
  input: "src/public_api.ts",
  output: {
    file: "dist/main.js",
    format: "commonjs",
  },
  plugins: [typescript({})],
  treeshake: true,
});
