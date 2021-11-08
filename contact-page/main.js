function abrirCards() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function abrirCardsFi() {
    var x = document.getElementById("card-first");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function abrirCardsSe() {
    var x = document.getElementById("card-second");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function abrirCardsTh() {
    var x = document.getElementById("card-third");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function abrirCardsFo() {
    var x = document.getElementById("card-fourth");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function abrirCardsFiv() {
    var x = document.getElementById("card-five");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const iframes = document.querySelectorAll('iframe');

function themeDark() {
    for (i = 0; i < iframes.length; i++) {
    iframes[i].classList.add('is-dark');
    }
}