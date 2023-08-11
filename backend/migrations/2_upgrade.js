const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const LogicV2 = artifacts.require('LogicV2');

module.exports = async function (deployer) {
  // please set proxy contract
  const upgraded = await upgradeProxy("0xa05Db9C31B6ffB6aB817D346E99095e1c1c8317D", LogicV2, { deployer });
  console.log(`deployed: ${upgraded.address}`)
}
