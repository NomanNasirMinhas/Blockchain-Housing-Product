const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "65aa6605125e4029a39ba21274cc9723";
//
// const fs = require('fs');
const mnemonic = "atom zoo humble crash wasp trash ridge embrace flip rookie window know";
var localmnemonic = "baby donate remain nominee excuse tube usual blush slim decorate trap half";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(localmnemonic, "HTTP://127.0.0.1:7545", 0, 50);
      },
      network_id: '*',
      gas: 9999999,
      websockets: true
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 10000000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
  },


  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.2",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}
