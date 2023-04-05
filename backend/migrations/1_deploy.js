const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const LogicV1 = artifacts.require('LogicV1');

module.exports = async function (deployer) {
  const instance = await deployProxy(LogicV1, [42], { deployer });
}