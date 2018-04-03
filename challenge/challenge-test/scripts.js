// var x = document.getElementsByClassName('compte');
// x.addEventListener("click", function(element){
//   if (element.style.display === "block") {
//     element.style.display = "none";
//   }
//   else {
//     element.style.display = "block";
//   }
// })

function More() {
  var z = document.getElementById("compte");

  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}

function openNav() {
  var x = document.getElementById("barre-nav");
  //x.style.width = "250px";
  x.style.transform = "translateX(250px)";
  // document.getElementsByClassName("partieUn")[0].style.marginLeft = "250px";

  /*  document.getElementsByClassName("partieUn")[0];
  var tl = new TimelineMax();
  tl.to(x, { x: -250 });
  tl.to(y, { x: -250 });
 */
  /*   document.getElementsByClassName("partieUn")[0].style.transform =
    "translateX(0px, 250px)"; */
}

function closeNav() {
  var x = document.getElementById("barre-nav");
  x.style.width = "0";
  // x.style.transform = "translateX(0px)";

  document.getElementsByClassName("partieUn")[0].style.marginLeft = "0";

  // document.getElementsByClassName("partieUn")[0].style.transform =
  //   "translateX(-200px)";
  // document.getElementById("barre-nav").style.width = "0";
  /*   document.getElementsByClassName("partieUn")[0].style.transform =
    "translateX(250px, 0px)"; */
}

// utiliser getElementById next time pour le marginLeft, car ici il peut exister plusieurs classes, nous sommes donc
// obligé de passer avec [0] pour spécifier qu'on veut le premier element, la classe considérait comme un array.

/* function popup() {
  var y = document.getElementById("pop");
  y.classList.toggle("show");
}

function Scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("headbar").style.top = "0";
  } else {
    document.getElementById("headbar").style.top = "50px";
  }
}
 */
