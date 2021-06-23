pragma solidity ^0.5.12;
import "./Ownable.sol";
import "./IERC721.sol";

contract Ladycontract is IERC721, Ownable  {

    uint256 public constant CREATION_LIMIT_GEN0 = 20;
    string public constant name = "CryptoLadies";
    string public constant symbol = "LADY";

    event Birth(
        address owner, 
        uint256 littleLadyId, 
        uint256 ladyMomId, 
        uint256 ladyDadId, 
        uint256 genes
    );

    struct Lady {          // Struct showing each Lady's dragttributes 
        uint256 genes;
        uint64 birthTime;
        uint32 ladyMomId;
        uint32 ladyDadId;
        uint16 generation;
    }

Lady[] ladies;  // Array that holds each Lady, the first lady will have ID[0] and that is the unique ID 
                // 

mapping (uint256 => address) public ladyIndexToOwner; // mapping from ladyID to address that indicates the Owner
mapping (address => uint256) ownershipTokenCount; // mapping from address to count -> how many ladies the address owns 

uint256 public gen0Counter;

function getLady(uint256 _id) external view returns (
    uint256 birthTime,
    uint256 ladyMomId,
    uint256 ladyDadId,
    uint256 generation,
    uint256 genes
)
{
    Lady storage lady = ladies [_id];

    birthTime = uint256(lady.birthTime);
    ladyMomId = uint256(lady.ladyMomId);
    ladyDadId = uint256(lady.ladyDadId);
    generation = uint256(lady.generation);
    genes = lady.genes;

}

function ladiesOfOwner(address _owner) external view returns (uint256[] memory) {
    // array of fixed size as I know the balanceOf(address owner) tokens which is set as ownershipTokenCount array of _owner
    uint256[] memory result = new uint256[](ownershipTokenCount[_owner]);
    // counter starts at 0 as per the first index of array which is also the ID of ladies
    uint256 counter = 0;
    // loop thru all the ladies[] to find the ladies owned by _owner
    for (uint256 i = 0; i < ladies.length; i++) {
            if (ladyIndexToOwner[i] == _owner) {
                result[counter] = i;
                counter++;
            }
    }
    return result;  // this will return an array of indexes owned by _owner
}

function createLadyGen0(uint256 _genes) public onlyOwner returns (uint256) {
    require(gen0Counter < CREATION_LIMIT_GEN0);

    gen0Counter++;
    
    // Gen0 have no owners, they are own by the contract
    // We have to run _createLady with 0s for momId, dadId and generation
    return _createLady(0, 0, 0, _genes, msg.sender);

}

function _createLady(
    uint256 _ladyMomId,
    uint256 _ladyDadId,
    uint256 _generation,
    uint256 _genes,
    address _owner
) private returns (uint256) {
    Lady memory _lady = Lady({
        genes: _genes,
        birthTime: uint64(now),
        ladyMomId: uint32(_ladyMomId),
        ladyDadId: uint32(_ladyDadId),
        generation: uint16(_generation)
    });

    uint256 newLadyId = ladies.push(_lady) -1;

    emit Birth(_owner, newLadyId, _ladyMomId, _ladyDadId, _genes);

    _transfer(address(0), _owner, newLadyId);

    return newLadyId;

}

function balanceOf(address owner) external view returns (uint256 balance){ 
    return ownershipTokenCount[owner];
}
// Returns the length of the array of ladies in existence
function totalSupply() public view returns (uint256 total){
    return ladies.length;
}

function ownerOf(uint256 _tokenId) external view returns (address owner){
    return ladyIndexToOwner[_tokenId];
}

function transfer(address _to, uint256 _tokenId) external {
    require(_to != address(0));
    require(_to != address(this));
    require(_owns(msg.sender, _tokenId));

    _transfer(msg.sender, _to, _tokenId);

}

function _transfer(address _from, address _to, uint256 _tokenId) internal {
    ownershipTokenCount[_to]++;

    ladyIndexToOwner[_tokenId] = _to;

    if (_from != address(0)) {
        ownershipTokenCount[_from]--;
    }

    // Emit transfer event.
    emit Transfer(_from, _to, _tokenId);

}

function _owns(address _claimant, uint256 _tokenId) internal view returns (bool) {
    return ladyIndexToOwner[_tokenId] == _claimant;

}

/*
function _name() external view returns (string memory tokenName) {
    tokenName = name;
    return
};


 function _symbol() external view returns (string memory tokenSymbol) {

 };



*/




}