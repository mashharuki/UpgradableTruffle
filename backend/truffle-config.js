require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const {
  HD_MNEMONIC,
} = process.env;


module.exports = {
  networks: {
    bsctest: {
      provider: () => new HDWalletProvider(HD_MNEMONIC, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    fuji: {
      provider: () => new HDWalletProvider(HD_MNEMONIC, `https://api.avax-test.network/ext/bc/C/rpc`),
      network_id: 43113,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    sandverce: {
      provider: () => new HDWalletProvider(HD_MNEMONIC, `https://rpc.sandverse.oasys.games`),
      network_id: 20197,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  mocha: {

  },
  compilers: {
    solc: {
      version: "0.8.10",    
      // docker: true,        
        settings: {          
          optimizer: {
            enabled: false,
            runs: 200
          },
      //  evmVersion: "byzantium"
        }
    }
  },
};