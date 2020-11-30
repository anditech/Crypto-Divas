
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 19,
    "dressColor" : 13,
    "eyesColor" : 79,
    "flowerColor" : 10,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);
    
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnadress').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaflower').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

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

$('#eyeShape').change(()=>{
  var shape = parseInt($('#eyeShape').val())
  eyeVariation(shape)
})