const form = document.querySelector('#form');
const input = document.querySelector('#num');
const btn = document.querySelector('#btn');
const out = document.querySelector('.output');

function passwordShowHide(smth){
	var input = document.getElementById('parol');
	if (input.getAttribute('type') == 'password') {
		smth.classList.add('show');
		input.setAttribute('type', 'text');
	} else {
		smth.classList.remove('show');
		input.setAttribute('type', 'password');
	}
	return false;
}


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let num = input.value;
    let replacement = '****';
    let result = num.substring(0, num.length - 4) + replacement;

    out.innerHTML = `Телефон номер: ${result}`

})