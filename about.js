console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('form submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('#logo_image');

img.addEventListener('mouseover', function() {
    alert("You're doing great! Thanks for visiting our website.");
});