module.exports = {
  // node.js向けのルールセットを追加
  extends: "@cybozu/eslint-config/presets/node-prettier",
  env: {
    mocha: true,
  },
};
