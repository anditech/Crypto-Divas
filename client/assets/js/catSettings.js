
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 19,
    "mouthColor": 83,
    "eyesColor" : 79,
    "flowerColor" : 10,
    "dressColor" : 70,
    
    //Cattributes
    "eyeShape" : 1,
    "fashionShape" : 3,
  
    // Animation
    "animation" : 2,
    "lastNum" :  1,
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headcolor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaflower').html(defaultDNA.flowerColor);
  $('#dnadress').html(defaultDNA.dressColor);  
  $('#dnaEyeShape').html(defaultDNA.eyeShape);
  $('#dnaFashionShape').html(defaultDNA.fashionShape);
  $('#dnaanimation').html(defaultDNA.animation);
  $('#dnaspecial').html(defaultDNA.lastNum)
  

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaflower').html()
    dna += $('#dnadress').html()
    dna += $('#dnaEyeShape').html()
    dna += $('#dnaFashionShape').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()
    
    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
    mouthColor(colors[dna.mouthColor],dna.mouthColor)
    $('#mouthColor').val(dna.mouthColor)
    eyeColor(colors[dna.eyesColor],dna.eyesColor)
    $('#eyeColor').val(dna.eyesColor)
    flowerColor(colors[dna.flowerColor],dna.flowerColor)
    $('#flowerColor').val(dna.flowerColor)
    dressColor(colors[dna.dressColor],dna.dressColor)
    $('#dressColor').val(dna.dressColor)
    eyeVariation(dna.eyeShape)
    $('#eyeShape').val(dna.eyeShape)
    fashionVariation(dna.fashionShape)
    $('#fashionShape').val(dna.fashionShape)
    animationVariation(dna.animation)
    $('#animation').val(dna.animation)

}
// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})

$('#mouthColor').change(()=>{
    var colorVal = $('#mouthColor').val()
    mouthColor(colors[colorVal],colorVal)
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
$('#fashionShape').change(()=>{
  var shape = parseInt( $('#fashionShape').val() )
  fashionVariation(shape)
})
// Animations
$('#animation').change(()=>{
  var animationVal = parseInt( $('#animation').val() ) // parsInt to convert string to a integer
  animationVariation(animationVal)
})




