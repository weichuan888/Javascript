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
  var z = document.getElementById('compte');

    if (z.style.display === "none") {
      z.style.display = "block";
    }
    else {
      z.style.display = "none";
    }
  }

function openNav() {
  var x = document.getElementById("barre-nav");
  x.style.width = "250px";
  document.getElementsByClassName('partieUn').style.marginLeft = "250px";
}

function closeNav(){
  document.getElementById('barre-nav').style.width = "0";
  document.getElementsByClassName('partieUn').style.marginLeft = "0";
}

function popup() {
  var y = document.getElementById('pop');
  y.classList.toggle('show');
}
