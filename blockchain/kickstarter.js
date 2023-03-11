import web3 from './web3'
import Kickstarter from './build/Kickstarter.json'

export default (address) => {
    return new web3.eth.Contract(
        Kickstarter.abi,
        address
    )
}