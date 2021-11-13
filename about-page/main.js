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

!(function (d) {
    var itemClassName = "carousel__photo";
    items = d.getElementsByClassName(itemClassName),
        totalItems = items.length,
        slide = 0,
        moving = true;

    function setInitialClasses() {

        // Target the last, initial, and next items and give them the relevant class.
        // This assumes there are three or more items.
        items[totalItems - 1].classList.add("prev");
        items[0].classList.add("active");
        items[1].classList.add("next");
    }

    // Set click events to navigation buttons

    function setEventListeners() {
        var next = d.getElementsByClassName('carousel__button--next')[0],
            prev = d.getElementsByClassName('carousel__button--prev')[0];

        next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);
    }

    function disableInteraction() {
        moving = true;

        setTimeout(function () {
            moving = false
        }, 500);
    }

    function moveCarouselTo(slide) {
        if (!moving) {

            disableInteraction();

            var newPrevious = slide - 1,
                newNext = slide + 1,
                oldPrevious = slide - 2,
                oldNext = slide + 2;

            if ((totalItems - 1) > 3) {

                if (newPrevious <= 0) {
                    oldPrevious = (totalItems - 1);
                } else if (newNext >= (totalItems - 1)) {
                    oldNext = 0;
                }

                if (slide === 0) {
                    newPrevious = (totalItems - 1);
                    oldPrevious = (totalItems - 2);
                    oldNext = (slide + 1);
                } else if (slide === (totalItems - 1)) {
                    newPrevious = (slide - 1);
                    newNext = 0;
                    oldNext = 1;
                }

                items[oldPrevious].className = itemClassName;
                items[oldNext].className = itemClassName;

                items[newPrevious].className = itemClassName + " prev";
                items[slide].className = itemClassName + " active";
                items[newNext].className = itemClassName + " next";
            }
        }
    }

    function moveNext() {

        if (!moving) {

            if (slide === (totalItems - 1)) {
                slide = 0;
            } else {
                slide++;
            }

            moveCarouselTo(slide);
        }
    }

    function movePrev() {

        if (!moving) {

            if (slide === 0) {
                slide = (totalItems - 1);
            } else {
                slide--;
            }

            moveCarouselTo(slide);
        }
    }

    function initCarousel() {
        setInitialClasses();
        setEventListeners();

        moving = false;
    }

    initCarousel();

}(document));

function cardDemonstra() {
    var arrow = document.getElementById('seta')
    arrow.style.transform = 'rotate(-180deg)'
    if(arrow.classList.contains("clicked")){
        arrow.classList.toggle("clicked","")
        arrow.style.transform = 'rotate(-360deg)'
    } else {
        arrow.classList.add("clicked")
        arrow.style.transform = 'rotate(-180deg)'
    }

    var x = document.getElementById("cards-demonstrativos")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

