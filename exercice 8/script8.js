/* EXERCICE 8A : PNJ (Personnage non-joueur)*/


/*
var character = {
    name:"Ikko",
    age:18,
    items_to_give: ["glaive", "choux", "bombe"]
};
*/
/* Creation d'un objet avec ces propriétés*/
/*
for ( var a in character) {
    console.log(character[a]);
}
*/
/*
but: afficher chaque information sur une ligne séparés dans la console (for in)

var a in character signifie que je veux que les propriété du a soit dans le character
si je fais un
console.log (a) => il ne lira que les propriétés tel que name, age, items
console.log (chracter [a]) => il lira les propriété : ikko, 18, glaive, choux, bombe.
*/
/*
function giveItem () {
  var items_to_give = ["glaive", "choux", "bombe"]
  var choix = (Math.floor(Math.random()*items_to_give.length))
  console.log (items_to_give[choix]);
}
giveItem()
*/
/* réecrire une var dans la fonction
*/


var objetsVendre= ["épée", "hache", "sceptre", "salade"];
var x = 0

var épée = {
  title: "Excalibur",
  physic: 140,
  magic: 30,
  minLevel: 5,
  available: (x),
};

var hache = {
  title: "Thor",
  physic: 100,
  magic: 60,
  minLevel: 15,
  available: "yes",
};

var sceptre = {
  title: "pilo",
  physic: 10,
  magic: 150,
  minLevel: 5,
  available: (x),
};

var salade = {
  title: "King",
  physic: 260,
  magic: 180,
  minLevel: 10,
  available: (x),
};

for (var O in objetsVendre) {
  console.log(objetsVendre[O])
}
/* faire une fonction pour afficher tout les objets*/


for (var available in objetsVendre) {
  console.log(available)
}











for (var o in épée){
  console.log( o + épée[o])
}
