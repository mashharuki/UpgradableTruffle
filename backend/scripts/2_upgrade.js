const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const LogicV2 = artifacts.require('LogicV2');

module.exports = async function (deployer) {
  const upgraded = await upgradeProxy("0x08FeD32A2043DbCFbb1CE9d9b62416B9095CaD13", LogicV2, { deployer });
  console.log(`deployed: ${upgraded.address}`)
}
