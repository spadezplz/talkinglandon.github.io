function drink() {
document.getElementById("vid").src = "Vid/Drink.MP4"
document.getElementById("vid").autoplay = "true"

}

function eat() {
document.getElementById("vid").src = "Vid/Eat.MP4"
document.getElementById("vid").autoplay = "true"

}
function buttonpress() {
var random = Math.floor(Math.random() * 6) + 1;
if ( document.getElementById("tex").value == "" ) {
alert("Put in a question!")
}
else {
if ( random == 1 ) {
document.getElementById("vid").src = "Vid/Yes.MP4"
document.getElementById("vid").autoplay = "true"

}
if ( random == 2 ) {
document.getElementById("vid").src = "Vid/Yes.MP4"
document.getElementById("vid").autoplay = "true"

}
if ( random == 3 ) {
document.getElementById("vid").src = "Vid/No.MP4"
document.getElementById("vid").autoplay = "true"
}
if ( random == 4 ) {
document.getElementById("vid").src = "Vid/No.MP4"
document.getElementById("vid").autoplay = "true"
}
if ( random == 5 ) {
document.getElementById("vid").src = "Vid/Hehe.MP4"
document.getElementById("vid").autoplay = "true"
}
if ( random == 6 ) {
document.getElementById("vid").src = "Vid/Ergh.MP4"
document.getElementById("vid").autoplay = "true"
}
}
}