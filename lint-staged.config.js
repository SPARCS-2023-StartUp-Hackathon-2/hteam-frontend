const lintStagedConfig = {
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit --pretty",
};

module.exports = lintStagedConfig;
