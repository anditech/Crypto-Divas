var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0xb73ca45343045B143cD9D99202cf87b07B87Df67";

$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
        user = accounts[0];

        console.log(instance);

    })
})