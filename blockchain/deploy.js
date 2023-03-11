const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const compiledKickstarterFactory = require('./build/KickstarterFactory.json')

const provider = new HDWalletProvider(
    'thank emerge excite submit candy kitten blast hawk edge deny source mansion',
    'https://goerli.infura.io/v3/8bcaf0b727b3490cbc60754b601838a8'
)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const data = await new web3.eth.Contract(compiledKickstarterFactory.abi)
        .deploy({ data: compiledKickstarterFactory.evm.bytecode.object})
        .send({ gas: '1400000', from: accounts[0] })

    console.log('Contract deployed to', data.options.address)
    provider.engine.stop()
}
deploy()