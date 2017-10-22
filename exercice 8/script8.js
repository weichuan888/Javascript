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



/* EXERCICE 8B: SHOP */

var objetsVendre= [

{ title: "épée", physic: 140, magic: 30, minLevel: 5, available: true,
},

{ title: "hache", physic: 100, magic: 60, minLevel: 15, available: false,
},

{ title: "sceptre", physic: 10, magic: 150, minLevel: 5, available: true,
},

{ title: "choux", physic: 260, magic: 180, minLevel: 10, available: false,
}
];


/* faire une fonction pour afficher tout les objets*/

  for (var B in objetsVendre) {
    console.log(objetsVendre[B])
  }


/*faire une fonction pour afficher les objets disponibles*/


function showShop () {
    for (var i =0; i<objetsVendre.length; i++){
      if (objetsVendre[i].available== true){
        console.log("L'arme " + objetsVendre[i].title + " est disponible")
      } else {
        console.log("L'arme " + objetsVendre[i].title + " est indisponible")
      }
    }
}
showShop()


/*faire une fonction pour afficher les objets dont le niveau minimum est de 10*/

function niveau() {
  for (var i =0; i<objetsVendre.length; i++) {
    if (objetsVendre[i].minLevel >= 10) {
      console.log("Le niveau de cette " + objetsVendre[i].title + " est supérieur à 10")
    } else {
      console.log("Le niveau de cette " + objetsVendre[i].title + " est inférieur à 10")
    }
  }
}
niveau()


/* EXERCICE 8C : Personnage */

var mainCharacter =
{ name: "Womba",
  level: 20,
  life: 100,
  weapon: {
    name:"pastèque",
    damage: 1000,
  }
}


function attack () {

  console.log (mainCharacter.name + " attaque avec l'arme " + mainCharacter.weapon.name + " les dégâts sont " + mainCharacter.level * mainCharacter.weapon.damage);
}
