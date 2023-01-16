// Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
//при нажатии на любой из них, но только по первому нажатию. Повторное 
//нажатие на инпут не должно вызывать реакции.

let elems = document.getElementsByTagName('input');
for( let i = 0; i < elems.length; i++) {
    elems[i].addEventListener('click', func);
}
function func() {
    alert(this.value);
    this.removeEventListener('click', func);
}