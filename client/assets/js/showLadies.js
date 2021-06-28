
// Function that adds HTML string to runway.html
function ladyHtml(id){               
    let ladyString = 
                `<div id="ladyId${id}" class="col-lg-4 ladyBox  $m-2 light-b-shadow" >
                <!-- My Lady -->
                <div class="missTake">
                    <div id="theHead" class="head">
                        <div class="hair ">
                            <div class="theHair"></div>
                            <div class="theHair"></div>
                            <div class="theHair"></div>
                            <div class="theHair"></div>
                            <div class="theHair"></div>
                            <div class="theHair"></div>

                            <div class="flower"></div>
                        </div>
                        <div class="nose"></div>
                        <div class="mouth"></div>
                        <div class="eyes">
                            <div class="eye">
                                <span class="pupils">
                                    <div class="eyes iris">
                                        <div class="iris little-iris"></div>
                                    </div>
                                </span>
                            </div>
                            <div class="eye">
                                <span class="pupils">
                                    <div class="eyes iris">
                                        <div class="iris little-iris"></div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="arms" id="theArms">
                        <span class="bracelet"></span>
                        <div class="dress">
                            
                            <div class="diamond">
                                <div></div>
                                <div class="d1"></div>
                                <div class="d1"></div>
                                <div class="d1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            
            <!-- End of lady -->
            <br>
            <!-- DNA of lady -->
            <div class="dnaDiv" id="ladyDNA">
                <b>

                <ul class="myLadyDetails">
                    <li id="ladyNumber"></li>
                    <li id="ladyMomId"></li>
                    <li id="ladyDadId"></li>
                    <li id="generation"></li>
                    <li id="birthTime"></li>
                 </ul>

                    DNA:
                    <!-- Colors -->
                    <span id="dnabody"></span>
                    <span id="dnamouth"></span>
                    <span id="dnaeyes"></span>
                    <span id="dnadress"></span>
                                                
                    <!-- Dragttributes -->
                    <span id="dnaEyeShape"></span>
                    <span id="dnaFashionShape"></span>
                    <span id="dnaflower"></span>
                    <span id="dnaFlowerColor2"></span>                                    
                    <span id="dnaanimation"></span>
                    <span id="dnaspecial"></span>

                    
                </b>
            </div>
                
            
            
        </div> 
                `
        //  console.log(ladyString);
       $("#ladyDiv").prepend(ladyString);
}

// Object to organize each gene
function ladyObj(myLadyData) {

    let dna = {
        // Colors
    headcolor : myLadyData.genes.substring(0, 2),   
    mouthColor : myLadyData.genes.substring(2, 4),
    eyesColor : myLadyData.genes.substring(4, 6),
    dressColor : myLadyData.genes.substring(6, 8),
    // Dragttributes
    eyeShape : myLadyData.genes.substring(8, 9),
    fashionShape : myLadyData.genes.substring(9, 10),
    flowerColor : myLadyData.genes.substring(10, 12),
    flowerColor2 : myLadyData.genes.substring(12, 14),
    // Animation
    animation : myLadyData.genes.substring(14, 15),
    lastNum :  myLadyData.genes.substring(15, 16)
    };

    //console.log(dna);
    return dna;
} 

// Function showing details about each lady 
function ladyDetails(myLadyData, id) {
    $(`#ladyId${id} #ladyNumber`).html('My ID: ' + id);
    $(`#ladyId${id} #ladyMomId`).html('Lady Mom ID: ' + myLadyData.ladyMomId);
    $(`#ladyId${id} #ladyDadId`).html('Lady Dad ID: ' + myLadyData.ladyDadId);
    $(`#ladyId${id} #generation`).html('Generation: ' + myLadyData.generation);
    $(`#ladyId${id} #birthTime`).html(`Birth: ${ladyBirth(myLadyData.birthTime)}`);
}

// Function rendering each new created lady on runway.html
function renderFreshlady(dnaObject, id) {

    let eyeNumber = parseInt(dnaObject.eyeShape);
    let fashionNumber = parseInt(dnaObject.fashionShape);
    let animationNumber = parseInt(dnaObject.animation);


    headColor(colors[dnaObject.headcolor],dnaObject.headcolor, id);
    
    mouthColor(colors[dnaObject.mouthColor],dnaObject.mouthColor, id);
    
    eyeColor(colors[dnaObject.eyesColor],dnaObject.eyesColor, id);
    
    dressColor(colors[dnaObject.dressColor],dnaObject.dressColor, id);
    
    eyeVariation(eyeNumber, id);
    
    fashionVariation(fashionNumber, id);
    
    flowerColor(colors[dnaObject.flowerColor],dnaObject.flowerColor, id);
    
    flowerColor2(colors[dnaObject.flowerColor2],dnaObject.flowerColor2, id);
    
    animationVariation(animationNumber, id);
    
}
   

// Time Stamp Function

function ladyBirth(timestamp) {
    //  Date object with the timestamp
    let t = new Date(timestamp * 1000);

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let day = days[t.getDay()];
    let d = t.getDate();
    let m = months[t.getMonth()];
    let y = t.getFullYear();
    let h = t.getHours();
    let min = t.getMinutes();
    
    let dateOB = `${day} ${d} ${m} ${y}`;
    let hrs = ` at ${h} : ${min}`;
   // console.log(dateOB + hrs);

    return dateOB + hrs;
}

