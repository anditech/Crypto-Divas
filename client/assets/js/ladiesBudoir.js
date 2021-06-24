
function headColor(color,code, id) {
    $(`#ladyId ${id} .head, #ladyId ${id} .arms`).css('background', '#' + color);  //This changes the color of the lady 
    $(`#ladyId ${id} #dnabody`).html(code); // This updates the body color part of the DNA that is displayed below the lady
}
function mouthColor(color,code, id) {
    $(`#ladyId ${id} .mouth`).css('background', '#' + color);  //This changes the color of the mouth    
    $('#ladyId ${id} #dnamouth').html(code);  // This updates the mouth color part of the DNA that is displayed below the lady
}
function eyeColor(color,code, id) {
    $(`#ladyId ${id} .pupils`).css('background', '#' + color);  // This changes the color of the eyes    
    $(`#ladyId ${id} #dnaeyes`).html(code);  // This updates the eye color part of the DNA that is displayed below the lady
}
function dressColor(color, code, id) {
    $(`#ladyId ${id} .dress`).css('background', '#' + color);   // This changes the color of the dress    
    $(`#ladyId ${id} #dnadress`).html(code);   // This updates the dress color part of the DNA that is displayed below the lady
}
function flowerColor(color,code, id) {
    $(`#ladyId ${id} .missTake`).css('--flower-side-color', '#' + color);   // This changes the color of the side petals
   
    $(`#ladyId ${id} #dnaflower`).html(code);   // This updates the flower part of the DNA that is displayed below the lady
}
function flowerColor2(color, code, id) {
    $(`#ladyId ${id} .missTake`).css('--flower-mid-color', '#' + color);   // This changes the color of the center petals    
    $(`#ladyId ${id} #dnaFlowerColor2`).html(code);   // This updates the flower part of the DNA that is displayed below the lady
}

function eyeVariation(num, id) {

    $(`#ladyId ${id} #dnaEyeShape`).html(num)
    switch (num) {
        case 1:
            normalEyes(id);
            
            break;
        case 2:
            normalEyes(id);  // Reset
            
            eyesType1(id);
            break;   
        case 3:
            normalEyes(id); // Reset
            
            eyesType2(id); 
            break;   
        case 4:
            normalEyes(id);  // Reset
            
            eyesType3(id);
            break; 
    }
}
// Dress & Bracelet Vairations
function fashionVariation(num, id) {

    $(`#ladyId ${id} #dnaFashionShape`).html(num)
    switch (num) {
        case 1:
            normalDress(id);
            normalDecoration(id);          
            break; 
        case 2:  
            dressType1(id);     
            decorationType1(id);
            break;   
        case 3:      
            dressType2(id);       
            decorationType2(id);
            break; 
        case 4:     
            normalDress(id);      
            decorationType1(id);
            break
        case 5:      
            dressType1(id);        
            decorationType2(id);
            break;   
        case 6:    
            dressType2();       
            normalDecoration(id); 
            break;
        case 7:      
            normalDress(id);        
            decorationType2(id);
            break; 
        case 8:      
            dressType1(id);        
            normalDecoration(id);
            break;
        case 9:      
            dressType2();        
            decorationType1(id);
            break;    
    }
}

// Animation
function animationVariation(num, id) {
    $(`#ladyId ${id} #dnaanimation`).html(num)
    switch (num) {
        case 1:
            animationType1(id);
            break;
        case 2:
            animationType2(id);
            break;
        case 3:
            animationType3(id);
            break;
        case 4:
            animationType4(id);
            break;  
        case 5:
            animationType5(id); 
            break;  
    }
}
function animationType1(id) {
    resetAnimation(id);     // Resets animation 
    $(`#ladyId ${id} .head`).addClass("movingHead");
}
function animationType2(id) {
    resetAnimation(id);     // Resets animation 
    $(`#ladyId ${id} .d1`).addClass("shinyDiamond");    // Adds diamond animation   
}
function animationType3(id) {
    resetAnimation(id);
    $(`#ladyId ${id} .theHair`).addClass("shinyHair");   // Adds hair animation
}
function animationType4(id) {
    resetAnimation(id);   // Resets animation 
    $(`#ladyId ${id} .arms`).addClass("dancingQueen");   // Adds dancing queen animation   
}
function animationType5(id) {
    $(`#ladyId ${id} .head`).addClass("movingHead");
    $(`#ladyId ${id} .d1`).addClass("shinyDiamond");
    $(`#ladyId ${id} .theHair`).addClass("shinyHair");
    $(`#ladyId ${id} .arms`).addClass("dancingQueen");   // Adds ALL animations 
}
function resetAnimation(id) {
    $(`#ladyId ${id} .head`).removeClass("movingHead");
    $(`#ladyId ${id} .d1`).removeClass("shinyDiamond");
    $(`#ladyId ${id} .theHair`).removeClass("shinyHair");
    $(`#ladyId ${id} .arms`).removeClass("dancingQueen");  // Resets ALL animations 
}
// Functions Eye Shapes
function normalEyes(id) { 
    $(`#ladyId ${id} .eyes`).find('span').css({'border': 'none'});
}
function eyesType1(id) {
    $(`#ladyId ${id} .eyes`).find('span').css({'border-top': '15px solid', 'transform': 'rotate(-5deg)'});
}
function eyesType2(id) {
    $(`#ladyId ${id} .eyes`).find('span').css({'border-bottom': '17px solid', 'transform': 'rotate(-125deg)'});
}
function eyesType3(id) {
    $(`#ladyId ${id} .eyes`).find('span').css({'border-bottom': '15px solid', 'transform': 'rotate(-10deg)'});
}
// Functions Bracelet variations 
function normalDecoration(id) {
    $(`#ladyId ${id} .arms`).find('span').css({"height": "30px", "width": "200px", "top": "120px", "border-radius": "10% 10% 10% 10%" });
}
function decorationType1(id) {
    $(`#ladyId ${id} .arms`).find('span').css({"height": "38px", "width": "200px", "top": "135px", "border-radius": "40% 40% 40% 40%" });
}
function decorationType2(id) {
    $(`#ladyId ${id} .arms`).find('span').css({"height": "18px", "width": "200px", "top": "140px", "border-radius": "60% 60% 60% 60%" });
}
// Functions Dress variations
function normalDress(id) {
    $(`#ladyId ${id} .dress`).css({"top": "20px", "border-radius": "50% 50% 90% 90%"});
}
function dressType1(id) {
    $(`#ladyId ${id} .dress`).css({"top": "2px", "border-radius": "120% 120% 90% 90%"});
}
function dressType2(id) {
    $(`#ladyId ${id} .dress`).css({"top": "2px", "border-radius": "185% 115% 90% 0%"});
}