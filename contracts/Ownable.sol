pragma solidity ^0.5.12;

contract Ownable {
    
     // variable to set the owner
    address public owner;
    
    // Allows to reduce code repetition, to clarify it and simplify it.
    modifier onlyOwner(){
        require(msg.sender == owner);
        _; // means continue executiion
    }
    
      // constructor is the function that runs whenever the contract is created
    constructor() public{
    // This code will be called only when the contract is created. 
    // the msg.sender in the constructor will be the person that initiates the conctract creation and it will only runs ONCE
        owner = msg.sender;
    }
    
}