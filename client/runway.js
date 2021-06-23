var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x417d147023a41d29Aa58b2DB4f84B567ABA91b13";

$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
        user = accounts[0];

  //      console.log(instance);

        // as reccomended by Jon's template the call of the inital function is here

        showLadies();

/*

//      I had my function this way before 

        async function showLadies(){
            var ladyArray;
            var myLady;
            try{
                ladyArray = await instance.methods.ladiesOfOwner(user).call();
                console.log(ladyArray);
            } catch(err){
                console.log("Can't get the array");
            }
            for (let i = 0; i < ladyArray.length; i++) {
                myLady = await instance.methods.getLady(ladyArray[i]).call();
                console.log(myLady);
                
            } 
            
            }
            showLadies();
            */
    });
    
});


// Initial  function call

async function showLadies(){
    var ladyArray;
    var myLady;
    try{
        ladyArray = await instance.methods.ladiesOfOwner(user).call();
        console.log(ladyArray);
    } catch(err){
        console.log(err + "Can't get the array");
    }
    for (let i = 0; i < ladyArray.length; i++) {
        myLady = await instance.methods.getLady(ladyArray[i]).call();
        console.log(myLady);
        
    } 
    
    }

    
async function showMyLadies(id) {
    let ladyData = await instance.methods.getLady(id).call();
    insertLady(id);
}

// Function Control to organize the different steps 
function insertLady(id) {
    ladyHtml(id);
}
