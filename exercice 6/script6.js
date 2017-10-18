
/*
var table = window.prompt ("Le pendu");
var tableau = ["B", "O", "N", "J", "O", "U", "R"];
var canvas = "BONJOUR";
var pendu = ['',"",'',"",'',"",'_'];
console.log(pendu);
var fin = tableau.lenght;
*/
var pendu = prompt ("jeux du pendu")
var tableau = ["B", "O", "N", "J", "O", "U", "R"];
tableau.includes(pendu);



if (tableau.includes(pendu)) {
  console.log("Bravo, vous avez trouvé une lettre!")

}
  else {
    console.log ("Mauvaise lettre, réessayer!")
}





function guessLetter (){

for (var i=0; i<tableau.length; i++) {
  var table = (tableau[i]);
  console.log (table)





  if (table = true) {
  console.log("Bien joué")
}

  else {
    console.log("perdu")
  }

}


}

  guessLetter()
