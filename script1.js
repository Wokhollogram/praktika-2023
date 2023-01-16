//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"
var elems = document.getElementsByTagName('input');
var parag = document.getElementById('test');
for (var i = 0; i < elems.length; i++) {
	elems[i].addEventListener('blur', func);
}

function func() {
	parag.innerHTML = this.value;
}