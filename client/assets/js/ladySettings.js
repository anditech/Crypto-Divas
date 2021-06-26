
var colors = Object.values(allColors())

var defaultDNA = {
  // Colors
    headcolor : 19,
    mouthColor : 83,
    eyesColor : 79,
    dressColor : 70,
    // Dragttributes
    eyeShape : 1,
    fashionShape : 3,
    flowerColor : 87,
    flowerColor2 : 31,
    // Animation
    animation : 2,
    lastNum :  1,
    }
// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headcolor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnadress').html(defaultDNA.dressColor);  
  $('#dnaEyeShape').html(defaultDNA.eyeShape);
  $('#dnaFashionShape').html(defaultDNA.fashionShape);
  $('#dnaflower').html(defaultDNA.flowerColor);
  $('#dnaFlowerColor2').html(defaultDNA.flowerColor2);
  $('#dnaanimation').html(defaultDNA.animation);
  $('#dnaspecial').html(defaultDNA.lastNum)
  
  renderLady(defaultDNA)
});
function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnadress').html()
    dna += $('#dnaEyeShape').html()
    dna += $('#dnaFashionShape').html()
    dna += $('#dnaflower').html()
    dna += $('#dnaFlowerColor2').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()
    
    return parseInt(dna)
}
//Function triggered by the Random Lady Button
function randomLady() {
  
  let random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  
  let randomDNA = {
      headcolor : random(10, 98),
      mouthColor: random(10, 98),
      eyesColor : random(10, 98),
      dressColor : random(10, 98),
    
      eyeShape : random(1, 4),
      fashionShape : random(1, 9),
      flowerColor : random(10, 98),
      flowerColor2 : random(31, 51),
    
      animation : random(1, 5),
      lastNum :  1
  }
  
  renderLady(randomDNA);
}

//Function triggered by the Default Lady Button
function defaultLady() {
  renderLady(defaultDNA)
}

function renderLady(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
    mouthColor(colors[dna.mouthColor],dna.mouthColor)
    $('#mouthColor').val(dna.mouthColor)
    eyeColor(colors[dna.eyesColor],dna.eyesColor)
    $('#eyeColor').val(dna.eyesColor)
    dressColor(colors[dna.dressColor],dna.dressColor)
    $('#dressColor').val(dna.dressColor)
    eyeVariation(dna.eyeShape)
    $('#eyeShape').val(dna.eyeShape)
    fashionVariation(dna.fashionShape)
    $('#fashionShape').val(dna.fashionShape)
    flowerColor(colors[dna.flowerColor],dna.flowerColor)
    $('#flowerColor').val(dna.flowerColor)
    flowerColor2(colors[dna.flowerColor2],dna.flowerColor2)
    $('#flowerColor2').val(dna.flowerColor2)
    animationVariation(dna.animation)
    $('#animation').val(dna.animation)
}
// Changing colors
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
$('#dressColor').change(()=>{
  var colorVal = $('#dressColor').val()
  dressColor(colors[colorVal],colorVal)
})
// Changing Draggtributes
$('#eyeShape').change(()=>{
  var shape = parseInt( $('#eyeShape').val() )
  eyeVariation(shape)
})
$('#fashionShape').change(()=>{
  var shape = parseInt( $('#fashionShape').val() )
  fashionVariation(shape)
})
$('#flowerColor').change(()=>{
  var colorVal = $('#flowerColor').val()
  flowerColor(colors[colorVal],colorVal)
})
$('#flowerColor2').change(()=>{
var colorVal = $('#flowerColor2').val()
flowerColor2(colors[colorVal],colorVal)
})
// Animations
$('#animation').change(()=>{
  var animationVal = parseInt( $('#animation').val() ) // parsInt to convert string to a integer
  animationVariation(animationVal)
})




