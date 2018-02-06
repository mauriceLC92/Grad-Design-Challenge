/*
The javascript file should hide/display content when the button is clicked as per the example given.
Use straight javascript and avoid JQuery. You can use any resource to set this up. 
Some hints are given below but you can use any structure or approach of your choosing.

*/
function toggleVisibility() {
    let block = document.getElementById("profile-head");
    if (block.style.display === "none") {
        block.style.display = "block";
    } else {
        block.style.display = "none";
    }
}
 
let hideContentButton = document.getElementById('hideContentButton');
hideContentButton.addEventListener('click', function()
{
    console.log("clicked");
    toggleVisibility();
});