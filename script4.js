// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.

var elems = document.getElementsByTagName('input');
for (var i = 0; i < elems.length; i++) {
	elems[i].addEventListener('blur', func);
}

function func() {
	var correctLength = this.dataset.length; 
	var inputDataLength = this.value.length; 
	if(correctLength == inputDataLength){
		this.style.borderColor = 'green';
	} else {
		this.style.borderColor = 'red';
	}
}