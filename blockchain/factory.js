import web3 from './web3'
import KickstarterFactory from './build/KickstarterFactory.json'

const constructor = new web3.eth.Contract(
    KickstarterFactory.abi,
    '0x2707c730A74Ac3333E59F8262bEab1e1e7FA5C85'
);

export default constructor;