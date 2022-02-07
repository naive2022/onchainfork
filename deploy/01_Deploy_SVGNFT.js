let { networkConfig } = require('../helper-hardhat-config')
const fs = require('fs')

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
}) => {

    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()

    log("----------------------------------------------------")
    const SVGNFT = await deploy('SVGNFT', {
        from: deployer,
        log: true
    })
    const svgNFTContract = await ethers.getContractFactory("SVGNFT")
    const accounts = await hre.ethers.getSigners()
    const signer = accounts[0]
    const svgNFT = new ethers.Contract(SVGNFT.address, svgNFTContract.interface, signer)
    const networkName = networkConfig[chainId]['name']
    let filepath = "./img/tre.txt"
    let svg = fs.readFileSync(filepath, { encoding: "utf8" })
    tx = await svgNFT.create(svg)
    await tx.wait(1)
    log(`You've made your first NFT!`)
}
