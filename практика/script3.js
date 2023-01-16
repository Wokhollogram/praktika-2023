// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
//квадрат числа, которое он содержит.

var elems = document.getElementsByTagName('p');
for (var i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', func);
}

function func() {
	this.innerHTML = Math.pow(this.innerHTML, 2);
}