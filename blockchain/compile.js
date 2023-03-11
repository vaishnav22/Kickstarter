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
  
const output = JSON.parse(solc.compile(JSON.stringify(input)));
  
if (output.errors) {
    output.errors.forEach(err => {
      console.log(err.formattedMessage);
    });
} else {
    const contracts = output.contracts["Kickstarter.sol"];
    fs.ensureDirSync(buildPath);
    for (let contractName in contracts) {
      const contract = contracts[contractName];
      fs.writeFileSync(
        path.resolve(buildPath, `${contractName}.json`),
        JSON.stringify(contract, null, 2),
        "utf8"
      );
    }
}