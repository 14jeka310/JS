let input = document.querySelector('input');
let log = document.getElementById('log');


input.addEventListener('keypress', logKey);
input.addEventListener('input', addtext);

function logKey(e) {
  log.textContent += ` ${e.keyCode}`;
}

function addtext(){
  console.log( input.value)
  document.getElementById('text').innerHTML = input.value;

}
