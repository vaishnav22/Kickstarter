pragma solidity ^0.6.5;

contract KickstarterFactory {
    address payable[] public deployedKickstarter;

    function createKickstarter(uint min, string memory name) public {
        address newKicstarter = address(new Kickstarter(min, msg.sender, name));
        deployedKickstarter.push(payable(newKicstarter));
    }

    function getDeployedKickstarters() public view returns (address payable[] memory) {
        return deployedKickstarter;
    }
}

contract Kickstarter {
    uint public initialPool;
    mapping(address => bool) public doners;
    uint public donersCount;
    address public admin;
    string projectName;

    struct Petition {
        string description;
        uint price;
        address recipient;
        bool isDone;
        uint backerCount;
        mapping(address => bool) backers;
    }

    Petition[] public petitions;

    constructor (uint deposit, address user, string memory name) public {
        admin = user;
        initialPool = deposit;
        projectName = name;
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

    function createProposal(string memory description, uint price, address recipient) public restricted {
        require(doners[msg.sender]);
        Petition storage newPetition = petitions.push();
            newPetition.description = description;
            newPetition.price = price;
            newPetition.recipient = recipient;
            newPetition.isDone = false;
            newPetition.backerCount = 0;
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

        payable(petition.recipient).transfer(petition.price);
        petition.isDone = true;
    }

    function getDetails() public view returns (uint, uint, uint, uint, address, string memory) {
        return (
            initialPool,
            address(this).balance,
            petitions.length,
            donersCount,
            admin,
            projectName
        );
    }

    function getPetetionsCount() public view returns (uint) {
        return petitions.length;
    }

}
