var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x5cc049de8a1F7372357a933aCaD359BEd40301bd";

$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
        user = accounts[0];

        console.log(instance);

        instance.events.Birth().on('data', function(event){
            console.log(event);
            let owner = event.returnValues.owner;
            let littleLadyId = event.returnValues.littleLadyId;
            let ladyMomId = event.returnValues.ladyMomId;
            let ladyDadId = event.returnValues.ladyDadId;
            let genes = event.returnValues.genes
            $("#ladyCreation").css("display", "block");
            $("#ladyCreation").text("Bravo, you just created a Lady! Owner: " + owner 
                                +" Little Lady Id: " + littleLadyId 
                                +" Lady Mom Id: " + ladyMomId 
                                +" Lady Dad Id: " + ladyDadId
                                +" Genes: " + genes)

        }).on('error', console.error);

    })
})

function createLady(){
    var dnaString = getDna();
    instance.methods.createLadyGen0(dnaString).send({}, function(error, txHash){
        if(error)
            console.log(error);
        else {
            console.log("Success " + txHash);
            console.log(`New Lady has been created to user address ${user} .`);

        }
            
    })
}

