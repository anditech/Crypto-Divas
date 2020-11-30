
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

function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Attentive') // Set badge to "Attentive"
            break
        case 2:
            normalEyes()  // Reset
            $('#eyeName').html('Relaxed')  // Set badge to "Relaxed"
            eyesType1()
            break    
        case 3:
            normalEyes()  // Reset
            $('#eyeName').html('Bitchy')  // Set badge to "Bitchy"
            eyesType2() 
            break   
        case 4:
            normalEyes()  // Reset
            $('#eyeName').html('Duuuh')  // Set badge to "Duuh"
            eyesType3
            break 
    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
}

function normalEyes() {
      $('.eyes').find('span').css('border', 'none')
}

function eyesType1() {
      $('.eyes').find('span').css('border-top', '15px solid')
}

function eyesType2() {
      $('.eyes').find('span').css('transform', 'rotate(15deg)')
}

function eyesType3() {
      $('.eyes').find('span').css({'border-bottom': '17px solid', 'transform': 'rotate(-15deg)'})
}

function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
