import NodePath from "path";
import RollupJson from "@rollup/plugin-json";
import RollupNodeResolve from "@rollup/plugin-node-resolve";
import RollupCommonjs from "@rollup/plugin-commonjs";
import RollupCopy from "rollup-plugin-copy";


const resolveFile = (path) => NodePath.resolve(__dirname, path);

const externalPackages = [
   '@tarojs/components-rn/dist/components/Button',
   'react-native',
   '@tarojs/runtime-rn',
   'react/jsx-runtime',
];

export default {
  input: resolveFile('rn/index.js'),
  output: [
    {
      file: resolveFile('dist/index.js'),
      format: "cjs",
      sourcemap: true,
    },
    {
      file: resolveFile('dist/index.esm.js'),
      format: "es",
      sourcemap: true,
    },
  ],
  external: externalPackages,
  plugins: [
    RollupNodeResolve({
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }),
    RollupCommonjs({
      include: /\/node_modules\//,
    }),
    RollupJson(),
    RollupCopy({
      targets: [
        {
          src: resolveFile("src/style"),
          dest: resolveFile("dist"),
        },
      ],
    }),
  ],
};