
// Function that adds HTML string to runway.html
function ladyHtml(id){               
    let ladyString = 
                `<div class="col-lg-4 ladyBox id="ladyId ${id}" $m-2 light-b-shadow">
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
        console.log(ladyString);

       $("#ladyDiv").prepend(ladyString);

}

/* function ladyObj(myLadyData) {
    let dna = {

    }

} 
*/