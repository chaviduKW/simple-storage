// imports
const { ethers } = require("hardhat")
//async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying contract...")
  const simpleStorage = await SimpleStorageFactory.deploy()
  // await simpleStorage.deployed()
  console.log(`Deployed contract to:${simpleStorage.target}`)
}
//main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
