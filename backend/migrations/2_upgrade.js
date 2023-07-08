const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const LogicV2 = artifacts.require('LogicV2');

module.exports = async function (deployer) {
  const upgraded = await upgradeProxy("0x8DF7e6234f76e8fAC829feF83E7520635359094C", LogicV2, { deployer });
  console.log(`deployed: ${upgraded.address}`)
}
