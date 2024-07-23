// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  coverageAnalysis: "off",
  jest: {
    projectType: "custom",
    configFile: "jest.config.json",
    enableFindRelatedTests: true,
  },
  tsconfigFile: "tsconfig.json",
  mutate: ["src/**/*.ts", "!src/**/*.spec.ts"],
};
export default config;
