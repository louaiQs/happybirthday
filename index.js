let firstSlideContainer = 
document.getElementsByClassName("slide--content")[0];

let secondSlideContainer = 
document.getElementsByClassName("slide--content--one")[0];

let secondCanvas = 
document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style","display:none");
secondCanvas.setAttribute("style","display:none");

let thirdCanvas = 
document.getElementsByClassName("third--canvas")[0];

thirdCanvas.setAttribute("style","display:none");

// Get a reference to the new message container
let finalMessage = 
document.getElementsByClassName("final--message")[0];

// Initially hide the final message
finalMessage.setAttribute("style", "display:none");


let containerToggleOne = setTimeout(function(){
	firstSlideContainer.setAttribute("style","display:none");
	secondSlideContainer.setAttribute("style","display:block");
},2500);


let removeFirstSlide = setTimeout(function(){
	document.getElementsByClassName("first--slide")[0].setAttribute("style","display:none;")
	secondCanvas.setAttribute("style","display:block");
},6500);

let removeSecondCanvas = setTimeout(function(){
	secondCanvas.setAttribute("style","display:none");
	thirdCanvas.setAttribute("style","display:block")
},9800)

// Show the final message after the third canvas is hidden
let showFinalMessage = setTimeout(function(){
    thirdCanvas.setAttribute("style", "display:none");
    finalMessage.setAttribute("style", "display:block");
}, 15000); // Adjust this delay as needed to appear after the third canvas animation
