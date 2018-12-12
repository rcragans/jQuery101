// jQuery is a javascript library
// that means jQuery is javascript
// console.log($);

document.getElementsByTagName('div')
document.querySelector('.conatiner')
document.getElementsByClassName('container')
console.dir($('.container'))
console.dir($('#row'))

console.log($('#row p'))

$('#hide').click(function(){
    $('#thing').hide()
})
$('#show').click(function(){
    $('#thing').show()
})
$('#toggle').click(function(){
    $('#thing').toggle()
})
$('#html').click(function(){
    $('#thing').html("<p>New Html here</p>")
})
$('#text').click(function(){
    $('#thing').text("<p>Change the text</p>")
})
$('#css').click(function(){
    $('#thing').css({
        "background-color": "green",
        "border-radius": "50%",
        "font-size": "100px"
    })
})
$('#add-class').click(function(){
    $('#thing').addClass("btn-danger")
})
$('#toggle-class').click(function(){
    $('#thing').toggleClass("btn-danger")
})
$('#prepend').click(function(){
    $('#thing').prepend("Some prepended text")
})
$('#append').click(function(){
    $('#thing').append("Some appended text")
})
$('#fade-out').click(function(){
    $('#thing').fadeToggle(2500)
})
$('#slide-out').click(function(){
    $('#thing').slideToggle(250)
})
$('#fade-to').click(function(){
    $('#thing').fadeTo("slow",0.5)
})
$('#fade-toggle').click(function(){
    $('#thing').fadeToggle(2000)
})
$('#animate').click(function(){
    $('#thing').animate({
        'height':'150px',
        'opacity': '0.5'
    },2500) 
    .addClass("btn-success")
    $('#thing').delay(1500).animate({
        'height':  '37.5px',
        'opacity':'1.0',
    },2500)  
    
})
