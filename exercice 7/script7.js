

/* EXERCICE 7A: Minimum et Maximun*/
/*
console.log(Math.min(7, 5, -12, 6, 32, 18, 14, -2));

console.log(Math.max(-3, 9, 21, 36, 27, 54, 17, 35));
*/

/* Pour les 2 lignes ci dessus, c'est pour chercher
les valeur max et min entre les ()
*/



/*Autre méthode pour chercher les math mix, et math max*/

/*
let min = Math.min(7, 5, -12, 6, 32, 18, 14, -2);

let max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
console.log(min + max);
*/

/*Les 3 lignes ci dessus => démontrent une autre maniere pour
obtenir les math min et math max */


function addition () {
  let min = Math.min(7, 5, -12, 6, 32, 18, 14, -2);

  let max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
  console.log(min + max);
}

addition();

/* Ici, on crée une fonction addition () {
en encadrant les variables dont je veux appliquer afin de les additionner
ensemble.}

S'ils sont à l'extérieur de la fonction, on devra crée d'autres manieres pour
les appeller, sinon ils ne sont pas tenus compte dans la fonction.


apres la fonction additioner () {}
on rajoute une ligne
additioner ();
Pour appeller la fonction, et qu'il affiche dans la console.


Note: On peut ajouter un argument dans la valeur et l'ajouter
de la meme maniere au console.log

ex
function addition (param) {
  let min = Math.min(7, 5, -12, 6, 32, 18, 14, -2);

  let max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
  console.log(min + max + param);
}

addition(10);

=> le résultat dans la console sera de 52 => -12+54+10
*/

/* EXERCICE 7B : Aleatoire 1 */
var floatBateau = 10.4;
var couleBateau = Math.ceil (floatBateau);
var voleBateau = Math.round (floatBateau);
console.log (couleBateau);
console.log (voleBateau);




var chiffre = [50, 100];
var binaire = (0. 1);
var nombre = [0, 10];
