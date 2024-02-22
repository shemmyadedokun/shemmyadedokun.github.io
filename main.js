// Viewer name prompt 
function promptName() {
    const userName = prompt("Enter your name please:");
    document.getElementById("nameDisplay").innerText = "Welcome, " + userName + "!"; //displays the name with id nameDisplay
}

//Image Enlargement
function enlargeImage (){
    const img = document.getElementById("MyPic");
    img.style.transform = "scale(2)"; //To increase my picture to 2x its size
    img.style.transition = "transform 0.25s ease"; //to make the transformation transition smooth
}

//Image Reset
function resetImageSize (){
    const img = document.getElementById("MyPic");
    img.style.transform = "scale(1)"; //Resets the image bag to its original size, 1x
}

function hoverEffect(element) {
    // Change the style when mouse hovers over the element
    element.style.color = 'red'; 
  }
  
  function normalEffect(element) {
    // Revert the style when the mouse moves out
    element.style.color = 'blue'; // Change back to the original color 
  }
  
