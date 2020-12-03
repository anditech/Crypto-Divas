
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
    $('.head, .arms').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: ' + code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function eyeColor(color,code) {
    $('.pupils').css('background', '#' + color)  // This changes thre color of the eyes
    $('#eyeCode').html('code: ' + code)  // This updates text of the badge next to slider
    $('#dnaeyes').html(code)  //This updates the body coler part of the DNA that is displayed below the cat 
}

function flowerColor(color,code) {
    $('.flower').css('background', '#' + color)
    $('#flowerCode').html('code: ' + code)
    $('#dnaflower').html(code)
}

function dressColor(color, code) {
    $('.dress').css('background', '#' + color)
    $('#dressCode').html('code: ' + code)
    $('#dnadress').html(code)
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
// Bracelet Vairations
function decorationVariation(num) {

    $('#dnaBraceletShape').html(num)
    switch (num) {
        case 1:
            normalDecoration();  
            $('#decorationName').html('Wide'); // Set badge to Wide          
            break; 
        case 2:
            normalDecoration();  // Reset
            $('#decorationName').html('Medium'); // Set badge to Fine            
            decorationType1();
            break;   
        case 3:
            normalDecoration();  // Reset
            $('#decorationName').html('Fine'); // Set badge to FineYellow             
            decorationType2();
            break; 
    }
}
// Dress Variations
function dressVariation(num) {

    $('#dnaDressShape').html(num)
    switch (num) {
        case 1: 
            normalDress();
            $('#dressName').html('Free'); // Set badge to round
            break;
        case 2:
            normalDress();  // Reset
            $('#dressName').html('Neck'); // Set badge to shoulders
            dressType1();
            break;
        case 3:
            normalDress();  // Reset
            $('#dressName').html('Shoulder'); // Set badge to shoulders
            dressType2();
            break;   
    }
}
// Animation
function animationVariation(num) {

    $('#dnaanimation').html(num)
    switch (num) {
        case 1:
            animationType1();
            break;
        case 2:
            animationType2();
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
    $("#myDiamond").addClass("shinyDiamond");
    // add diamond animation
    // add hair animation
}
function resetAnimation() {
    $("#theHead").removeClass("movingHead");
    $("myDiamond").removeClass("shinyDiamond");

    // Add animation classes created 
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
