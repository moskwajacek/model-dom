console.log(document.getElementById('header').innerHTML);

document.getElementById('header').innerHTML = '<p class="nowa_klasa">jakis text</p>';

var new_par = document.querySelector('#header p');
console.log(new_par.className);

new_par.innerText = '<span>jakis konkretny tekst</span>';

console.log(document.getElementById('header').outerHTML);

document.getElementById('header').outerHTML = '<div id"header">afdffafdafafd</dic>';

document.getElementById('header').className = 'nowa_klasa';

var linki = document.getElementsByClassName('linki');
console.log(linki);
link[2].href = 'http://google.com';

for(var i=0; i < linki.length; i++){
    link[i].style.color = 'red';
}