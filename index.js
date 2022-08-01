const ingredientsIcon = document.getElementById("ingredients");
const preparatitonsIcon = document.getElementById("preparations");

function ingredientsHover() {
    ingredientsIcon.firstElementChild.style.fontSize = "300%";
}

function ingredientsNormal() {
    ingredientsIcon.firstElementChild.style.fontSize = "100%";   
}

function preparationsHover() {
    preparatitonsIcon.firstElementChild.style.fontSize = "300%"
}

function preparationsNormal() {
    preparatitonsIcon.firstElementChild.style.fontSize = "100%"
}