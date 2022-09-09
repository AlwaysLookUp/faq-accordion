var acc = document.getElementsByClassName("container");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.Height) {
      panel.style.Height = null;
    } else {
      panel.style.Height = panel.scrollHeight + "px";
    }
  });
}

// Free Codecamp Version

// const accordion = document.getElementsByClassName('container');

// for (i=0; i<accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active')
//   })
// }