
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.head, .arms').css('background', '#' + color);  //This changes the color of the cat
    $('#headcode').html('code: ' + code); //This updates text of the badge next to the slider
    $('#dnabody').html(code); //This updates the body color part of the DNA that is displayed below the cat
}

function mouthColor(color,code) {
    $('.mouth').css('background', '#' + color);  //This changes the color of the mouth
    $('#mouthCode').html('code: ' + code);  //This updates text of the badge next to the slider
    $('#dnamouth').html(code);  //This updates the mouth color part of the DNA that is displayed below the cat
}

function eyeColor(color,code) {
    $('.pupils').css('background', '#' + color);  // This changes thre color of the eyes
    $('#eyeCode').html('code: ' + code);  // This updates text of the badge next to slider
    $('#dnaeyes').html(code);  //This updates the body color part of the DNA that is displayed below the cat 
}

function flowerColor(color,code) {
    $('.flower').css('background', '#' + color);
    $('#flowerCode').html('code: ' + code);
    $('#dnaflower').html(code);
}

function dressColor(color, code) {
    $('.dress').css('background', '#' + color);
    $('#dressCode').html('code: ' + code);
    $('#dnadress').html(code);
}

function flowerColor2(color, code) {
    $('.flower::before, .flower::after').css('background', '#' + color);
    $('#flowerCode2').html('code: ' + code);
    $('#dnaFlowerColor2').html(code);
}


//###################################################
//Functions below will be used later on in the project
//###################################################

// Variation functions for range-bars 
// Eyes variation
function eyeVariation(num) {

    $('#dnaEyeShape').html(num)
    switch (num) {
        case 1:
            normalEyes();
            $('#eyeName').html('Attentive'); // Set badge to "Attentive"
            break;
        case 2:
            normalEyes();  // Reset
            $('#eyeName').html('Relaxed');  // Set badge to "Relaxed"
            eyesType1();
            break;   
        case 3:
            normalEyes(); // Reset
            $('#eyeName').html('Bitchy');  // Set badge to "Bitchy"
            eyesType2(); 
            break;   
        case 4:
            normalEyes();  // Reset
            $('#eyeName').html('Duuuh');  // Set badge to "Duuh"
            eyesType3();
            break; 
    }
}
// Dress & Bracelet Vairations
function fashionVariation(num) {

    $('#dnaFashionShape').html(num)
    switch (num) {
        case 1:
            normalDress();
            normalDecoration();  
            $('#fashionName').html('Free | Wide'); // Set badge to Free Wide          
            break; 
        case 2:
            normalDress();
            normalDecoration();  // Reset
            $('#fashionName').html('Neck | Medium'); // Set badge to Neck Medium     
            dressType1();     
            decorationType1();
            break;   
        case 3:
            normalDress();
            normalDecoration();  // Reset
            $('#fashionName').html('Shoulder | Fine'); // Set badge to Shoulder Fine      
            dressType2();       
            decorationType2();
            break; 
        case 3:
            normalDress();
            normalDecoration();  // Reset
            $('#fashionName').html('Shoulder | Fine'); // Set badge to Shoulder Fine      
            dressType2();       
            decorationType2();
            break;
        case 4:
            normalDress();
            normalDecoration();  // Reset
            $('#fashionName').html('Free | Medium'); // Set badge to Free Medium      
            normalDress();      
            decorationType1();
            break
        case 5:
            normalDress();
            normalDecoration();  // Reset
            $('#fashionName').html('Neck | Fine'); // Set badge to Neck Fine      
            dressType1();        
            decorationType2();
            break;   
        case 6:
            normalDress();
            normalDecoration();  // Reset
            $('#fashionName').html('Shoulder | Wide'); // Set badge to Shoulder Wide     
            dressType2();       
            normalDecoration(); 
            break;
        case 7:
            normalDress();
            normalDecoration();  // Reset
            $('#fashionName').html('Free | Fine'); // Set badge to Free Fine      
            normalDress();        
            decorationType2();
            break; 
        case 8:
            normalDress();
            normalDecoration();  // Reset
            $('#fashionName').html('Neck| Wide'); // Set badge to Neck Wide      
            dressType1();        
            normalDecoration();
            break;
        case 9:
            normalDress();
            normalDecoration();  // Reset
            $('#fashionName').html('Shoulder | Medium'); // Set badge to Shoulder Medium      
            dressType2();        
            decorationType1();
            break;    
    }
}

// Animation
function animationVariation(num) {

    $('#dnaanimation').html(num)
    switch (num) {
        case 1:
            animationType1();
            $('#animationName').html('Moving Head'); // Set badge to Moving head
            break;
        case 2:
            animationType2();
            $('#animationName').html('Shiny Diamond'); // Set badge to Shiny diamond
            break;
        case 3:
            animationType3();
            $('#animationName').html('Shiny Hair'); // Set badge to Shiny hair
            break;
        case 4:
            animationType4();
            $('#animationName').html('Dancing Queen'); // Set badge to Dancing Queen
            break;    
         
    }
}
function animationType1() {
    // Reset animation here
    resetAnimation();
    $("#theHead").addClass("movingHead");
}
function animationType2() {
    resetAnimation();
    $(".d1").addClass("shinyDiamond");
    // adding diamond animation    
}
function animationType3() {
    resetAnimation();
    $(".theHair").addClass("shinyHair");
    // adding hair | diamond animation
}
function animationType4() {
    $("#theArms").addClass("dancingQueen");
    // adding hair | diamond  | dancing queen animation   
}
function resetAnimation() {
    $("#theHead").removeClass("movingHead");
    $(".d1").removeClass("shinyDiamond");
    $(".theHair").removeClass("shinyHair");
    $("#theArms").removeClass("dancingQueen");
}

// Functions Eye Variations
function normalEyes() {
      $('.eyes').find('span').css('border', 'none');
}
function eyesType1() {
      $('.eyes').find('span').css({'border-top': '15px solid', 'transform': 'rotate(-5deg)'});
}
function eyesType2() {
      $('.eyes').find('span').css({'border-bottom': '17px solid', 'transform': 'rotate(-125deg)'});
}
function eyesType3() {
      $('.eyes').find('span').css({'border-bottom': '15px solid', 'transform': 'rotate(-10deg)'});
}

// Functions Bracelet variations 
function normalDecoration() {
    $('.arms').find('span').css({"transform": "rotate(0deg)", "height": "30px", "width": "200px", "top": "120px", "border-radius": "10% 10% 10% 10%" });
}
function decorationType1() {
    $('.arms').find('span').css({ "transform": "rotate(0deg)", "height": "38px", "width": "200px", "top": "135px", "border-radius": "40% 40% 40% 40%" });
}
function decorationType2() {
    $('.arms').find('span').css({ "transform": "rotate(0deg)", "height": "18px", "width": "200px", "top": "140px", "border-radius": "60% 60% 60% 60%" });
}

// Functions Dress variations
function normalDress() {
    $('.dress').css({"border": "none", "top": "20px", "left": "28px","border-radius": "50% 50% 90% 90%"});
}
function dressType1() {
    $('.dress').css({"border": "none", "top": "2px", "left": "28px","border-radius": "120% 120% 90% 90%"});
}
function dressType2() {
    $('.dress').css({"border": "none", "top": "2px", "left": "28px","border-radius": "185% 115% 90% 0%"});
}



/*
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
*/
