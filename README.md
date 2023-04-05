# UpgradableTruffle
UpgradableTruffle

## 動かし方

- デプロイ

```bash
npm run deploy:bsctest
```

```bash
> backend@1.0.0 deploy:bsctest
> npx truffle migrate --f 1 --to 1 --network bsctest


Compiling your contracts...
===========================
> Compiling ./contracts/LogicV1.sololc-bin. Attempt #1
> Compiling ./contracts/LogicV2.sol
> Compiling ./contracts/interfaces/ILogic.sol
> Compiling @openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol
> Compiling @openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol
> Artifacts written to /Users/harukikondo/git/UpgradableTruffle/backend/build/contracts
> Compiled successfully using:
   - solc: 0.8.10+commit.fc410830.Emscripten.clang
⠏ Fetching solc version list from solc-bin. Attempt #1
⠙ Fetching solc version list from solc-bin. Attempt #1
Starting migrations.... Attempt #1.
======================
> Network name:    'bsctest'
> Network id:      97
> Block gas limit: 49998474 (0x2faea8a)


1_deploy.js
===========
⠹ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'LogicV1'. Attempt #1.
   -------------------
   > transaction hash:    0x87060a5bff54b30801d776b314790ab30d97e317c76ebf323b55a9dbd600624cding compiler. Attempt #1.
   > Blocks: 0            Seconds: 0lc-bin. Attempt #1
   > contract address:    0xfFC2535688c5C053CF6E4C1B9452Fa14c092fe45
   > block number:        28665845 0
   > block timestamp:     1680688712
   > account:             0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072
   > balance:             3.931788608
   > gas used:            359668 (0x57cf4)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00359668 ETH

   Pausing for 10 confirmations...

   --------------------------------
   > confirmation number: 1 (block: 28665846)ttempt #1
   > confirmation number: 3 (block: 28665848)ttempt #1
   > confirmation number: 4 (block: 28665849)ttempt #1
   > confirmation number: 5 (block: 28665850)ttempt #1
   > confirmation number: 7 (block: 28665852)ttempt #1
   > confirmation number: 8 (block: 28665853)ttempt #1
   > confirmation number: 9 (block: 28665854)ttempt #1
   > confirmation number: 11 (block: 28665856)tempt #1
⠦ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'ProxyAdmin'ttempt #1.
   ----------------------
   > transaction hash:    0x44a60c4a1a811abfd68e00e5cb00635e25361e4530b000a6c109fe3dbb4613eeding compiler. Attempt #1.
   > Blocks: 0            Seconds: 0lc-bin. Attempt #1
   > contract address:    0x10545794Ac5b7F3d38F2C895F4d37eF8746E52e1
   > block number:        28665857 0
   > block timestamp:     1680688748
   > account:             0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072
   > balance:             3.926940938
   > gas used:            484767 (0x7659f)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00484767 ETH

   Pausing for 10 confirmations...

   --------------------------------
   > confirmation number: 1 (block: 28665858)ttempt #1
   > confirmation number: 3 (block: 28665860)ttempt #1
   > confirmation number: 4 (block: 28665861)ttempt #1
   > confirmation number: 5 (block: 28665862)ttempt #1
   > confirmation number: 7 (block: 28665864)ttempt #1
   > confirmation number: 8 (block: 28665865)ttempt #1
   > confirmation number: 9 (block: 28665866)ttempt #1
   > confirmation number: 11 (block: 28665868)tempt #1
⠹ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'TransparentUpgradeableProxy'
   ---------------------------------------
   > transaction hash:    0x0ffade5344a49028a8b3366ea3d40ae04c901edf024e6fbd6c7ba74a34bfad01ding compiler. Attempt #1.
   > Blocks: 0            Seconds: 0lc-bin. Attempt #1
   > contract address:    0x08FeD32A2043DbCFbb1CE9d9b62416B9095CaD13
   > block number:        28665869 0
   > block timestamp:     1680688784
   > account:             0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072
   > balance:             3.920600028
   > gas used:            634091 (0x9aceb)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00634091 ETH

   Pausing for 10 confirmations...

   --------------------------------
   > confirmation number: 1 (block: 28665870)ttempt #1
   > confirmation number: 2 (block: 28665871)ttempt #1
   > confirmation number: 4 (block: 28665873)ttempt #1
   > confirmation number: 5 (block: 28665874)ttempt #1
   > confirmation number: 6 (block: 28665875)ttempt #1
   > confirmation number: 8 (block: 28665877)ttempt #1
   > confirmation number: 9 (block: 28665878)ttempt #1
   > confirmation number: 10 (block: 28665879)tempt #1
   > Saving artifactsr. Attempt #1.
   -------------------------------------
   > Total cost:          0.01478526 ETH

Summary
=======
> Total deployments:   3
> Final cost:          0.01478526 ETH
```

- アップグレード

コマンドを打つ前に`migrations/2_upgrade.js`ファイルの中身のコントラクトアドレスを自分がデプロイしたアドレスに書き換えること！！
指定するアドレスは、デプロイコマンドで出力される`TransparentUpgradeableProxy`コントラクトのアドレス！

```bash
npm run upgrade:bsctest
```

```bash
Starting migrations...
======================
> Network name:    'bsctest'
> Network id:      97
> Block gas limit: 49803929 (0x2f7f299)


2_upgrade.js
============

   Deploying 'LogicV2'
   -------------------
   > transaction hash:    0x83ff7c36b7be71a06a0576e2acbec23548b6e8c2a31a433ab97024e1cba0a077
   > Blocks: 0            Seconds: 0
   > contract address:    0x9FeA082420CaBCae227aab5042b772636bcf00da
   > block number:        28666825
   > block timestamp:     1680691652
   > account:             0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072
   > balance:             3.916346688
   > gas used:            425334 (0x67d76)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00425334 ETH

   Pausing for 10 confirmations...

   --------------------------------
   > confirmation number: 1 (block: 28666826)
   > confirmation number: 3 (block: 28666828)
   > confirmation number: 4 (block: 28666829)
   > confirmation number: 5 (block: 28666830)
   > confirmation number: 6 (block: 28666831)
   > confirmation number: 8 (block: 28666833)
   > confirmation number: 9 (block: 28666834)
   > confirmation number: 11 (block: 28666836)
deployed: 0x08FeD32A2043DbCFbb1CE9d9b62416B9095CaD13
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00425334 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.00425334 ETH
```

## デプロイしたコントラクト

1. [LogicV1](https://testnet.bscscan.com/address/0x10545794Ac5b7F3d38F2C895F4d37eF8746E52e1)

2. [LogicV2]()