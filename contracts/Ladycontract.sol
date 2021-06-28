pragma solidity ^0.5.12;

import "./Ownable.sol";
import "./IERC721.sol";
import "./IERC721Receiver.sol";

contract Ladycontract is IERC721, Ownable  {

    uint256 public constant CREATION_LIMIT_GEN0 = 20;
    string public constant nombre = "CryptoLadies";
    string public constant simbolo = "LADY";

    bytes4 internal constant MAGIC_ERC721_RECEIVED = bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));

   

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

mapping (uint256 => address) public ladyIndexToApproved;
mapping (address => mapping (address => bool)) private _operatorApprovals;

uint256 public gen0Counter;



function _safeTransfer(address _from, address _to, uint256 _tokenId, bytes memory _data) internal {
    _transfer(_from, _to, _tokenId);
    require( _checkERC721Support(_from, _to, _tokenId, _data) );
}

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

 function name() external view returns (string memory tokenName) {
     return nombre;

 }

   
function symbol() external view returns (string memory tokenSymbol) {
    return simbolo;

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
        delete ladyIndexToApproved[_tokenId];
    }

    // Emit transfer event.
    emit Transfer(_from, _to, _tokenId);

}

function _owns(address _claimant, uint256 _tokenId) internal view returns (bool) {
    return ladyIndexToOwner[_tokenId] == _claimant;

}

function approve(address _to, uint256 _tokenId) external {
    require(_owns(msg.sender, _tokenId));

    _approve(_tokenId, _to);
    emit Approval(msg.sender, _to, _tokenId);
}

function _approve(uint256 _tokenId, address _approved) internal {
    ladyIndexToApproved[_tokenId] = _approved;
}


function setApprovalForAll(address _operator, bool _approved) external {
    require(_operator != msg.sender);

    _operatorApprovals[msg.sender][_operator] = _approved;
    emit ApprovalForAll(msg.sender, _operator, _approved);

}

function getApproved(uint256 _tokenId) public view returns (address) {
    require(_tokenId < ladies.length); // token must exist

    return ladyIndexToApproved[_tokenId];
}

function isApprovedForAll(address owner, address operator) public view returns (bool) {
    return _operatorApprovals[owner][operator];

}

function transferFrom(address _from, address _to, uint256 _tokenId) external {
    require(_to != address(0)); // cant send token to a 0 address
    // require msg.sender is the owner or msg.sender is approved for the _tokenId or msg.sender is operator from _from
    require(msg.sender == _from || _approvedFor(msg.sender, _tokenId) || isApprovedForAll(_from, msg.sender));
    require(_owns(_from, _tokenId));
    require(_tokenId < ladies.length);

    _transfer(_from, _to, _tokenId);
}

function _approvedFor(address _claimant, uint256 _tokenId) internal view returns (bool) {
    return ladyIndexToApproved[_tokenId] == _claimant;
}

function _checkERC721Support(address _from, address _to, uint256 _tokenId, bytes memory _data) internal returns (bool) {
    if( !_isContract(_to) ) {
        return true;
    }
    else {
         // Call on ERC721Received in the _to contract
        bytes4 returnData = IERC721Receiver(_to).onERC721Received(msg.sender, _from, _tokenId, _data);
        return returnData = MAGIC_ERC721_RECEIVED;
        // Check return value 
    }
   
}

function _isContract(address _to) view internal returns (bool) {
    uint32 size;
    assembly{
        size := extcodesize(_to)
    }
    return size > 0;
}

}