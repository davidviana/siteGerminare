function abrirCards() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
        abrirCardsFi(false)
        abrirCardsSe(false)
        abrirCardsTh(false)
        abrirCardsFo(false)
        abrirCardsFiv(false)    
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
    abrirCardsFi(false)
    var x = document.getElementById("card-second");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function abrirCardsTh() {
    abrirCardsFi(false)
    abrirCardsSe(false)
    var x = document.getElementById("card-third");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function abrirCardsFo() {
    abrirCardsFi(false)
    abrirCardsSe(false)
    abrirCardsTh(false)
    var x = document.getElementById("card-fourth");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function abrirCardsFiv() {
    abrirCardsFi(false)
    abrirCardsSe(false)
    abrirCardsTh(false)
    abrirCardsFo(false)
    var x = document.getElementById("card-five");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}