pragma solidity ^0.4.17;

contract KickstarterFactory {
    address[] public deployedKickstarter;

    function createKickstarter(uint min) public {
        address newKicstarter = new Kickstarter(min, msg.sender);
        deployedKickstarter.push(newKicstarter);
    }

    function getDeployedKickstarters() public view returns (address[]) {
        return deployedKickstarter;
    }
}

contract Kickstarter {
    uint public initialPool;
    mapping(address => bool) public doners;
    uint public donersCount;
    address public admin;

    struct Petition {
        string description;
        uint price;
        address recipient;
        bool isDone;
        uint backerCount;
        mapping(address => bool) backers;
    }

    Petition[] public petitions;

    function Kickstarter(uint deposit, address user) public {
        admin = user;
        initialPool = deposit;
    }

    modifier restricted() {
        require(msg.sender == admin);
        _;
    }

    function donate() public payable {
        require(msg.value > initialPool);

        doners[msg.sender] = true;
        donersCount++;
    }

    function createProposal(string description, uint price, address recipient) public restricted {
        require(doners[msg.sender]);
        Petition memory newPetition = Petition({
            description: description, 
            price: price, 
            recipient: recipient, 
            isDone: false, 
            backerCount: 0
        });
        petitions.push(newPetition);
    }

    function passRequest(uint index) public {
        Petition storage petition = petitions[index];

        require(doners[msg.sender]);
        require(!petition.backers[msg.sender]);

        petition.backers[msg.sender] = true;
        petition.backerCount++;
    }

    function finalizePetition(uint index) public restricted {
        Petition storage petition = petitions[index];

        require(petition.backerCount > (donersCount / 2));
        require(!petition.isDone);

        petition.recipient.transfer(petition.price);
        petition.isDone = true;
    }

}
