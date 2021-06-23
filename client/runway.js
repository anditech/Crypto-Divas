var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x417d147023a41d29Aa58b2DB4f84B567ABA91b13";

$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
        user = accounts[0];

  //      console.log(instance);

        // as reccomended by template the call of the inital function is here

        showLadies();
    });
    
});

// Initial  function call

async function showLadies(){
    let idsArray;
    try {
        idsArray = await instance.methods.ladiesOfOwner(user).call(); 
    } catch(err){
        console.log(err + "Can't get the array");
    }
    console.log(idsArray);

    for (let i = 0; i < idsArray.length; i++) {
       let myLadyData = await instance.methods.getLady(idsArray[i]).call();
       let id = idsArray[i];
        console.log(myLadyData);
        console.log(id);
        
    } 
    
    }

    



// Function Control to organize the different steps 
function insertLady(id) {
    ladyHtml(id);
}



/*


async function showLadies(){
    let idsArray;
    try{
        idsArray = await instance.methods.ladiesOfOwner(user).call();
        console.log(idsArray);
    } catch(err){
        console.log(err + "Can't get the array");
    }

    
    for (let i = 0; i < idsArray.length; i++) {
       let myLadyData = await instance.methods.getLady(idsArray[i]).call();
        console.log(myLadyData);
        
    } 
    
    }


*/