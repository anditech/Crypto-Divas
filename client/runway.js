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
        insertLady(myLadyData, id);
    } 
    
    }

// Function Control to organize the different steps 
function insertLady(myLadyData, id) {
    ladyHtml(id);  // => adds HTML string to runway.html

    let dnaObject = ladyObj(myLadyData);  // => reorganises the single DNA strand as an object from lady object


// This function shows Lady details... not yet defined
/* function ladyDetails(myLadyData) {
    myLadyData.generation
    myLadyData.birthtime
}
*/

// calls functions which style the HTML for each separate owned lady
// I can't make this function work.
// function renderFreshlady(dna, id);


}







