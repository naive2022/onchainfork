require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require('dotenv').config()


const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const Mumbai_RPC_URL = process.env.Mumbai_RPC_URL
const MNEMONIC = process.env.MNEMONIC
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
    defaultNetwork: "mumbi",
    networks: {

        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            /** accounts: {
                mnemonic: MNEMONIC,
            },**/
            saveDeployments: true,
        },

        mumbi: {
            url: Mumbai_RPC_URL,
            accounts: [PRIVATE_KEY],
            /** accounts: {
                mnemonic: MNEMONIC,
            }, **/
            saveDeployments: true,
        },
        polygon: {
            url: "https://rpc-mainnet.maticvigil.com/",
            // accounts: [PRIVATE_KEY],
            accounts: {
                mnemonic: MNEMONIC,
            },
            saveDeployments: true,
        },
    },
    etherscan: {
        apiKey: POLYGONSCAN_API_KEY
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0 // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
        feeCollector: {
            default: 1
        }
    },
    solidity: {
        compilers: [
            {
                version: "0.8.0"
            },
            {
                version: "0.7.0"
            },
            {
                version: "0.6.6"
            },
            {
                version: "0.4.24"
            }
        ]
    },
    mocha: {
        timeout: 100000
    }
}
