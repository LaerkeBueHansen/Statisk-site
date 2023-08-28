// Hent knappen og "a"-tags
const dropdownButton = document.getElementById("dropdownButton");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

// Lyt efter klik på "a"-tags
link1.addEventListener("click", function () {
  dropdownButton.innerText = link1.innerText;
});

link2.addEventListener("click", function () {
  dropdownButton.innerText = link2.innerText;
});

link3.addEventListener("click", function () {
  dropdownButton.innerText = link3.innerText;
});

link4.addEventListener("click", function () {
  dropdownButton.innerText = link4.innerText;
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
