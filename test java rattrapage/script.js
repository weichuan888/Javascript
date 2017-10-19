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
*/

alert("Le jeu du pendu, enjoy!");

var tableau = ["B", "O", "N", "J", "O", "U", "R"];
var tableauVide = ["","","","","","",""];
var fin = tableau.length; /* => 7*/
var cpt = 0;

/* Cree une fonction guessLetter */
while( fin > 0){

    var input = prompt ("Choisis ta lettre");
    input=input.toUppercase();

    if(tableau.includes(input)){
/* Iterer a travers les lettres */
    for (var i=0; i<tableau.length; i++) {
/* Voir si la lettre deviné se trouve dans le mot */
        if (tableau[i] == input) {
          var index=tableau.indexOf(input);
          tableauVide.slice(index, 1, input);
          tableau.slice(index, 1, "*");
          fin--;
          console.log(tableauVide)
          }
      }
    }

      else {
        cpt++;
        console.log("Erreur, recommence")

      }

}

console.log("Bravo, vous avez gagné!");
console.log(cpt + " erreur(s)!");



/*


          index = tableau.indexOf (lettre);

          tableauVide.slice = (index, 1, lettre);
          tableauVide.slice = (index, 1, "*");
          fin--;
          console.log("bien")
        }  else {
          cpt++
          console.log( "raté")

        }
}
*/
