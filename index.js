const ingredientsIcon = document.getElementById("ingredients");
const preparatitonsIcon = document.getElementById("preparations");

function ingredientsHover() {
    ingredientsIcon.firstElementChild.firstElementChild.style.fontSize = "300%";
}

function ingredientsNormal() {
    ingredientsIcon.firstElementChild.firstElementChild.style.fontSize = "100%";   
}

function preparationsHover() {
    preparatitonsIcon.firstElementChild.firstElementChild.style.fontSize = "300%"
}

function preparationsNormal() {
    preparatitonsIcon.firstElementChild.firstElementChild.style.fontSize = "100%"
}