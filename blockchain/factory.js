import web3 from './web3'
import KickstarterFactory from './build/KickstarterFactory.json'

const constructor = new web3.eth.Contract(
    KickstarterFactory.abi,
    '0xa77D416cF5276fFc887172De1F450A944CCdD475'
);

export default constructor;