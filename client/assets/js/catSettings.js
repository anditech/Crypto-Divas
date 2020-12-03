
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 19,
    "dressColor" : 13,
    "eyesColor" : 79,
    "flowerColor" : 10,
    //Cattributes
    "eyeShape" : 1,
    "braceletShape" : 1,
    "dressShape" : 1,
    // Animation
    "animation" :  1,

    /*
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    
    "lastNum" :  1
    */
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headcolor);
  $('#dnadress').html(defaultDNA.dressColor);
  $('#dnaflower').html(defaultDNA.flowerColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
    
  $('#dnaEyeShape').html(defaultDNA.eyeShape);
  $('#dnaBraceletShape').html(defaultDNA.braceletShape);
  $('#dnaDressShape').html(defaultDNA.dressShape);

  

  /*
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  
  $('#dnaspecial').html(defaultDNA.lastNum)
  */

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnadress').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaflower').html()

    dna += $('#dnaEyeShape').html()
    dna += $('#dnaBraceletShape').html()
    dna += $('#dnaDressShape').html()

    dna += $('#dnaanimation').html()
    /*
    dna += $('#dnadecorationSides').html()
    
    dna += $('#dnaspecial').html()
    */
    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
    eyeColor(colors[dna.eyesColor],dna.eyesColor)
    $('#eyeColor').val(dna.eyesColor)
    flowerColor(colors[dna.flowerColor],dna.flowerColor)
    $('#flowerColor').val(dna.flowerColor)
    dressColor(colors[dna.dressColor],dna.dressColor)
    $('#dressColor').val(dna.dressColor)
    eyeVariation(dna.eyeShape)
    $('#eyeShape').val(dna.eyeShape)
    decorationVariation(dna.braceletShape)
    $('#braceletShape').val(dna.braceletShape)
    dressVariation(dna.dressShape)
    $('#dressShape').val(dna.dressShape)
    animationVariation(dna.animation)
    $("#animation").val(dna.animation)

}
// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})

$('#eyeColor').change(()=>{
    var colorVal = $('#eyeColor').val()
    eyeColor(colors[colorVal],colorVal)
})

$('#flowerColor').change(()=>{
  var colorVal = $('#flowerColor').val()
  flowerColor(colors[colorVal],colorVal)
})

$('#dressColor').change(()=>{
  var colorVal = $('#dressColor').val()
  dressColor(colors[colorVal],colorVal)
})

// Changing Shapes

$('#eyeShape').change(()=>{
  var shape = parseInt( $('#eyeShape').val() )
  eyeVariation(shape)
})
$('#braceletShape').change(()=>{
  var shape = parseInt( $('#braceletShape').val() )
  decorationVariation(shape)
})

$('#dressShape').change(()=>{
  var shape = parseInt( $('#dressShape').val() )
  dressVariation(shape)
})

// Animations

$('#animation').change(()=>{
  var animationVal = parseInt( $('#animation').val() ) // parsInt to convert string to a integer
  animationVariation(animationVal)
})




