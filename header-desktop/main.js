const btn = document.querySelector("button");
    btn.addEventListener("click", ()=> {
        const paiCards = document.getElementById('cards-1')
        paiCards.innerHTML +=  `
        <div id="card" class = "hidden-menu">
            <a href="#"><p class = "first">Resultado</p></a>
            <a href="#"><p class = "next">Etapas</p></a>
        </div>`
    })