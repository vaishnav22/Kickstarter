import web3 from './web3'
import KickstarterFactory from './build/KickstarterFactory.json'

const constructor = new web3.eth.Contract(
    JSON.parse(KickstarterFactory.interface),
    '0x00292Ce06E0F02b8D0704F96B51998A7B39b99F4'
);

export default constructor;