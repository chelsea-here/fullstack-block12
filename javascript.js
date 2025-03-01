// Get the container element
var navLinkContainer = document.getElementById("navDiv");

// Get all buttons with class="btn" inside the container
var links = navLinkContainer.getElementsByClassName("navLink");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activePage");
    current[0].className = current[0].className.replace(" activePage", "");
    this.className += " activePage";
  });
}
