// const contractListPromise = import("../contracts/hardhat_contracts.json");
// @ts-ignore
// const externalContractsPromise = import("../contracts/external_contracts");

export const loadAppContracts = async () => {
  const config = {};
  config.deployedContracts = {};
  config.externalContracts = {};
  return config;
};
