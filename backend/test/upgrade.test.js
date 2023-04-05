const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const LogicV1 = artifacts.require('LogicV1');
const LogicV2 = artifacts.require('LogicV2');

describe('upgrades', () => {
  it('upgrades test', async () => {
    const logicV1 = await deployProxy(LogicV1, [42]);
    const logicV2 = await upgradeProxy(logicV1.address, LogicV2);
    // get value
    const value = await logicV2.value();
    // check
    assert.equal(value.toString(), '42');
  });
});