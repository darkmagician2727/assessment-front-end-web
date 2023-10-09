let color = document.querySelector('#color');
color.addEventListener('click', function(){
    alert("My favorite color is fluorescent beige");
})

let place = document.querySelector('#place');
place.addEventListener('click', function(){
    alert("My favorite place is the beach");
})


let ritual = document.querySelector('#ritual');
ritual.addEventListener('click', function(){
    alert("My favorite ritual is the San Diego Zoo");
})

// let me = document.querySelector('#me');
// me.addEventListener('click', function(){
//     alert("I'm Tj");
// })

let collapse = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}