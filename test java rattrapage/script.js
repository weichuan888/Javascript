// // exercice condition
// const t = 5;
//
// function mathMax(a, b) {
//   let max = 0;
//   if (a>b) {
//     max = a;
//   }
//   else {
//     max = b;
//   }
//   return max;
// }
//
//
// const c = 2000
// function salaire(c) {
//     if (c>1200) {
//       console.log(1200+((c/100)*15)) }
//     else {
//       console.log ("pas de retenu")}}
// salaire()
//
//
// const brut = 2000
// const net = 1200
// function Salai(brut, net) {
//   if ()

// var a=45;
// var c=78;
//
// //cree une fonction qui va multiplier a et c qui crée un resultat qui va donner x
//
// function(){
//   var a=0;
// }
//
//
// console.log(x)

alert ("Le jeu du pendu");
var mot = ["R", "A", "V", "I", "O", "L","I"];
var mot_afficher = ["","","","","","",""];
var fin = mot.length;
var cpt= 0;

/*
var lettre = 0;
var fin = tableau.length;
tableau.includes
*/
function guessLetter(){
  var trouver = prompt ("Choisis une lettre");
  trouver= trouver.toUpperCase();
  console.log (trouver);

  if (trouver.length !=1) {/* verifier celui qui tape la lettre a bien écris dans la case vide*/
      console.log ("Veuillez écrire une lettre");
      return trouver
  }
  for (var i=0;i<mot.length;i++) {
    if (trouver == mot[i]) {
        mot_afficher[i] = trouver;
        fin--;
        console.log ("Bien joué");

    }
  }
  return cpt;
}
guessLetter();








/*





    if (cpt = mot.length) {
      console.log ("gagné!")
    } else {
    console.log ("perdu")
  }
}
}


guessLetter();

*/

/*


        lettre++;
        mot.splice(i,1,trouver);


else {

    if ( mot.indexOf(trouver) == -1 ) {
        console.log("Introuvable !");
    }
    else {
        console.log("Trouvé !");



if (compteurVictoire ==  mot.length) {
    console.log("win !");
}
else  {
    guessLetter();
}
}

guessLetter()

/*

var index = mot.indexOf ("trouver");

if (trouver == index) {
 console.log ("Bravo, vous avez trouvé une lettre!")

}
  else {
    console.log ("Mauvaise lettre, réessayer!")
}
*/
