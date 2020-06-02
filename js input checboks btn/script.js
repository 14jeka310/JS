let button = document.querySelector('button');
let input = document.getElementById('inp');
let checkbox = document.getElementById('checkbox');

function chbx() {
    if (input.value != 0) {
        checkbox.disabled = false;
    } else {
        checkbox.disabled = true;
    }
}

function buttonclick() {
    if (checkbox.value != 0) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

function addtext(){
    document.getElementById('text').innerHTML = input.value;

}

input.addEventListener('input', chbx);
checkbox.addEventListener('click', buttonclick);
button.addEventListener('click', addtext);
