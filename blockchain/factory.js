import web3 from './web3'
import KickstarterFactory from './build/KickstarterFactory.json'

const constructor = new web3.eth.Contract(
    KickstarterFactory.abi,
    '0xE8C6829f9C1a24Cf31d140736FF862fC4311656A'
);

export default constructor;