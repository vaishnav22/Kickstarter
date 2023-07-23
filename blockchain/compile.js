const path = require('path')
const fs = require('fs-extra')
const solc = require('solc')

const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath)

const kickstarterPath = path.resolve(__dirname, 'contracts','Kickstarter.sol')
const source = fs.readFileSync(kickstarterPath, 'utf-8')

var input = {
    language: "Solidity",
    sources: {
      "Kickstarter.sol": {
        content: source
      }
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"]
        }
      }
    }
};
  
const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Kickstarter.sol'];
  
fs.ensureDirSync(buildPath)

for (let contract in output) {
  fs.outputJSONSync(
    path.resolve(buildPath, contract.replace(":", '') + ".json"),
    output[contract]
  )
}