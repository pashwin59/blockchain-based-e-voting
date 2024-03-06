require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "zmLMJvxIYUc_-cOkWlayN_OoNz8IV2V3";

const GOERLI_PRIVATE_KEY = "8c443f44a635c5be642da3c3a1c0a8bd7546ff4779fbf3fa0a6de64cbf1a2725";

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [ GOERLI_PRIVATE_KEY ]
    }
  },
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};
