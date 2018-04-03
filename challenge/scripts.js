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
  var y = document.getElementsByClassName("partieUn")[0];

  var tl = new TimelineMax();
  tl.to(x, 0.3, { x: 250 }).to(y, 0.3, { x: 250, delay: -0.3 });
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

  // x.style.width = "250px";
  // document.getElementsByClassName("partieUn")[0].style.marginLeft = "250px";
  /*   document.getElementsByClassName("partieUn")[0].style.transform =
    "translateX(0px, 250px)"; */
}

function closeNav() {
  var x = document.getElementById("barre-nav");
  var y = document.getElementsByClassName("partieUn")[0];
  var tl = new TimelineMax();
  tl.to(x, 0.3, { x: -250 }).to(y, 0.3, { x: 0, delay: -0.3 });
  document.body.style.backgroundColor = "white";

  // document.getElementsByClassName("partieUn")[0].style.transform =
  //   "translateX(-200px)";
  // document.getElementById("barre-nav").style.width = "0";
  /*   document.getElementsByClassName("partieUn")[0].style.transform =
    "translateX(250px, 0px)"; */
}

// utiliser getElementById next time pour le marginLeft, car ici il peut exister plusieurs classes, nous sommes donc
// obligé de passer avec [0] pour spécifier qu'on veut le premier element, la classe considérait comme un array.

function popup() {
  var y = document.getElementById("pop");
  y.classList.toggle("show");
}
window.onscroll = function() {
  scrollFunction();
};
function Scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("headbar").style.top = "50px";
  } else {
    document.getElementById("headbar").style.top = "";
  }
}
