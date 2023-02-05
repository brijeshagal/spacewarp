require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hyperspace:{
      url: 'https://api.hyperspace.node.glif.io/rpc/v0',
      chainId: 3141,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    }
  }
};
