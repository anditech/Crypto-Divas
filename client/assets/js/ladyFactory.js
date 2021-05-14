
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


function headColor(color,code) {
    $('.head, .arms').css('background', '#' + color);  //This changes the color of the lady
    $('#headcode').html('code: ' + code); //This updates text of the badge next to the slider
    $('#dnabody').html(code); // This updates the body color part of the DNA that is displayed below the lady
}
function mouthColor(color,code) {
    $('.mouth').css('background', '#' + color);  //This changes the color of the mouth
    $('#mouthCode').html('code: ' + code);  //This updates text of the badge next to the slider
    $('#dnamouth').html(code);  // This updates the mouth color part of the DNA that is displayed below the lady
}
function eyeColor(color,code) {
    $('.pupils').css('background', '#' + color);  // This changes the color of the eyes
    $('#eyeCode').html('code: ' + code);  // This updates text of the badge next to slider
    $('#dnaeyes').html(code);  // This updates the eye color part of the DNA that is displayed below the lady
}
function dressColor(color, code) {
    $('.dress').css('background', '#' + color);   // This changes the color of the dress
    $('#dressCode').html('code: ' + code);   // This updates text of the badge next to slider
    $('#dnadress').html(code);   // This updates the dress color part of the DNA that is displayed below the lady
}
function flowerColor(color,code) {
    $('.missTake').css('--flower-side-color', '#' + color);   // This changes the color of the side petals
    $('#flowerCode').html('code: ' + code);   // This updates text of the badge next to slider
    $('#dnaflower').html(code);   // This updates the flower part of the DNA that is displayed below the lady
}
function flowerColor2(color, code) {
    $('.missTake').css('--flower-mid-color', '#' + color);   // This changes the color of the center petals
    $('#flowerCode2').html('code: ' + code);   // This updates text of the badge next to slider
    $('#dnaFlowerColor2').html(code);   // This updates the flower part of the DNA that is displayed below the lady
}

function eyeVariation(num) {

    $('#dnaEyeShape').html(num)
    switch (num) {
        case 1:
            normalEyes();
            $('#eyeName').html('Attentive'); // Sets badge to shape: "Attentive"
            break;
        case 2:
            normalEyes();  // Reset
            $('#eyeName').html('Relaxed');  // Sets badge to shape: "Relaxed"
            eyesType1();
            break;   
        case 3:
            normalEyes(); // Reset
            $('#eyeName').html('Bitchy');  // Sets badge to shape: "Bitchy"
            eyesType2(); 
            break;   
        case 4:
            normalEyes();  // Reset
            $('#eyeName').html('Duuuh');  // Sets badge to shape: "Duuh"
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
            $('#fashionName').html('Neck | Medium'); // Set badge to Neck Medium     
            dressType1();     
            decorationType1();
            break;   
        case 3:
            $('#fashionName').html('Shoulder | Fine'); // Set badge to Shoulder Fine      
            dressType2();       
            decorationType2();
            break; 
        case 4:
            $('#fashionName').html('Free | Medium'); // Set badge to Free Medium      
            normalDress();      
            decorationType1();
            break
        case 5:
            $('#fashionName').html('Neck | Fine'); // Set badge to Neck Fine      
            dressType1();        
            decorationType2();
            break;   
        case 6:
            $('#fashionName').html('Shoulder | Wide'); // Set badge to Shoulder Wide     
            dressType2();       
            normalDecoration(); 
            break;
        case 7:
            $('#fashionName').html('Free | Fine'); // Set badge to Free Fine      
            normalDress();        
            decorationType2();
            break; 
        case 8:
            $('#fashionName').html('Neck| Wide'); // Set badge to Neck Wide      
            dressType1();        
            normalDecoration();
            break;
        case 9:
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
        case 5:
            animationType5(); 
            $('#animationName').html('Crazy Queen'); // Set badge to Crazy Queen
            break;  
    }
}
function animationType1() {
    resetAnimation();     // Resets animation 
    $(".head").addClass("movingHead");
}
function animationType2() {
    resetAnimation();     // Resets animation 
    $(".d1").addClass("shinyDiamond");    // Adds diamond animation   
}
function animationType3() {
    resetAnimation();
    $(".theHair").addClass("shinyHair");   // Adds hair animation
}
function animationType4() {
    resetAnimation();   // Resets animation 
    $(".arms").addClass("dancingQueen");   // Adds dancing queen animation   
}
function animationType5() {
    $(".head").addClass("movingHead");
    $(".d1").addClass("shinyDiamond");
    $(".theHair").addClass("shinyHair");
    $(".arms").addClass("dancingQueen");   // Adds ALL animations 
}
function resetAnimation() {
    $(".head").removeClass("movingHead");
    $(".d1").removeClass("shinyDiamond");
    $(".theHair").removeClass("shinyHair");
    $(".arms").removeClass("dancingQueen");  // Resets ALL animations 
}
// Functions Eye Shapes
function normalEyes() { 
    $('.eyes').find('span').css({'border': 'none'});
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
    $('.arms').find('span').css({"height": "30px", "width": "200px", "top": "120px", "border-radius": "10% 10% 10% 10%" });
}
function decorationType1() {
    $('.arms').find('span').css({"height": "38px", "width": "200px", "top": "135px", "border-radius": "40% 40% 40% 40%" });
}
function decorationType2() {
    $('.arms').find('span').css({"height": "18px", "width": "200px", "top": "140px", "border-radius": "60% 60% 60% 60%" });
}
// Functions Dress variations
function normalDress() {
    $('.dress').css({"top": "20px", "border-radius": "50% 50% 90% 90%"});
}
function dressType1() {
    $('.dress').css({"top": "2px", "border-radius": "120% 120% 90% 90%"});
}
function dressType2() {
    $('.dress').css({"top": "2px", "border-radius": "185% 115% 90% 0%"});
}
