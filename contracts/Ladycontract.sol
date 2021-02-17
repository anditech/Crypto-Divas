pragma solidity ^0.5.12;

import "./IERC721.sol";

contract Ladycontract is IERC721 {

    string public constant name = "AndiLadies";
    string public constant symbol = "AL";

struct Lady {          // Struct showing each Lady's dragttributes 
    uint256 genes;
    uint64 birthTime;
    uint32 ladyMomId;
    uint32 ladyDadId;
    uint16 generation;
}

Lady[] ladies;  // Array that holds ecah Lady, the first lady will have ID[0] and that is the unique ID 

mapping (uint256 => address) public ladyIndexToOwner; // mapping from ladyID to address that indicates the Owner
mapping (address => uint256) ownershipTokenCount; // mapping from address to count -> how many ladies the address owns 

function balanceOf(address owner) external view returns (uint256 balance){ 
    return ownershipTokenCount[owner];
}

function totalSupply() external view returns (uint256 total){
    return 
}

function name() external view returns (string memory tokenName){
    return name;
}

function symbol() external view returns (string memory tokenSymbol){
    return symbol;
}

function ownerOf(uint256 tokenId) external view returns (address owner){
    return ladyIndexToOwner;
}

 function transfer(address to, uint256 tokenId) external{

 }

}