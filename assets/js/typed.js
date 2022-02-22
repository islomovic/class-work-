const even = document.getElementsByClassName("card__items");
even[0].style.backgroundColor = "yellow"
even[2].style.backgroundColor = "yellow"
even[4].style.backgroundColor = "yellow"
even[6].style.backgroundColor = "yellow"

function bigImg(x) {
  x.style.padding = "90px";
  x.style.fontSize = "52px";
  x.style.transform = "rotate(360deg)";
}

function normalImg(x) {
  x.style.padding = "70px";
}