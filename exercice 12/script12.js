// Faire disparaitre les divs lorsque l'on passe la souris dessus
//
// Tip : utiliser le mouseenter ou mouseover

// var disaspear = document.querySelectorAll("hoverMe");
// for (var i = 0; i < disaspear.length; i++) {
//   var hoverMe = disaspear[i]
//   hoverMe.addEventListerner("mouseover", function() {
//     this.classList.add("red")
//     })
//     hoverMe.addEventListerner("mouseout", function () {
//     this.classList .add("red")
//     })
//   }
//

//
// var ciel = function () {
//   hoverMe.classList.add("bleu")
// }
//
//
// hoverMe.addEventListerner ("click", ciel);
//




// function mOver (hoverMe){
//
//   hoverMe.innerHTML = ""
// }
// function mOut (hoverMe) {
//   hoverMe.innerHTML = "Salut"
// }


var yo = document.getElementsByTagName("hoverMe");
  yo.addEventListerner("mouseover", function () {
    yo.innerHTML = "disparu"
  });
  yo.addEventListerner("mouseout", function() {
    yo.innerHTML = "boum"
  });
