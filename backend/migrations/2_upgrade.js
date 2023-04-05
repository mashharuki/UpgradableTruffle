const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const LogicV2 = artifacts.require('LogicV2');

module.exports = async function (deployer) {
  const upgraded = await upgradeProxy("", LogicV2, { deployer });
}
