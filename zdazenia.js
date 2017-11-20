document.addEventListener('DOMContentLoaded', function(){
    changeColor();
    hoverLinks();
})

function changeColor () {
    var linki = document.getElementsByClassName('link');
    
    for(var i=0; i < linki.length; i++) {
        linki[i].style.color = 'red';
    }
}

function hoverLinks() {
    var linki = document.getElementsByClassName('link');
    
    for(var i=0; i < linki.length; i++) {
        linki[i].addEventListener('mouseover', function() {
            this.style.color = 'blue';
        })
        linki[i].addEventListener('mouseout', function() {
            this.style.color = 'red';
        })
        linki[i].addEventListener('click', function() {
            this.style.fontSize = '25px';
        })
    }
}


function zmienCos () {
    if (window.outerWidth < 768) {
        document.body.style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = 'initial';
    }
    }


