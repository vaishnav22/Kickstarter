const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')

const web3 = new Web3(ganache.provider())

const compiledKickstarterFactory = require('../blockchain/build/KickstarterFactory.json')
const compiledKickstarter = require('../blockchain/build/Kickstarter.json')


let kickstarter
let factory
let accounts
let kickstarterAddress

beforeEach(async () => {
    accounts = await web3.eth.getAccounts()

    factory = await new web3.eth.Contract(JSON.parse(compiledKickstarterFactory.interface))
    .deploy({ data: compiledKickstarterFactory.bytecode})
    .send({ from: accounts[0], gas: '1000000'});

    await factory.methods.createKickstarter('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    [kickstarterAddress] = await factory.methods.getDeployedKickstarters().call();

    kickstarter = await new web3.eth.Contract(
        JSON.parse(compiledKickstarter.interface),
        kickstarterAddress
    );
});