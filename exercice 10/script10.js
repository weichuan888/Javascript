
// EXERCICE 1 : Manipulation de classes

// sélectionner le body
//
// lui retirer la classe "bg-aqua"
//
// lui ajouter la classe "bg-olive"


document.body.classList.remove("bg-aqua");
document.body.classList.add("bg-olive");

// sélectioner first-paragraph
//
// lui retirer les classes "bg-lime" et "gray"
//
// lui ajouter la class "aqua"


var yo=document.getElementById("first-paragraph")
yo.classList.remove("bg-lime");
yo.classList.remove("gray");
yo.classList.add("aqua");


// sélectionner tous les éléments qui ont la classe 'bg-silver'
//
// modifier tout ces éléments en leurs ajoutant la classe "bg-teal"
//
// modifier tout ces éléments en leurs supprimant la classe "bg-silver"
//
//



var ele = document.querySelector("blockquote");
ele.classList.remove("bg-silver");
ele.classList.add("bg-teal");
console.log(ele);


// sélectionne tous les éléments de type 'blockquote'
//
// modifier tout ces éléments en leurs ajoutant la classe "bg-white"


var block=document.querySelector("blockquote");
block.classList.add("bg-white");
// wesh.foreach("element");
console.log(block);
// element.classList.add("bg-teal");
// element.classList.remove("bg-silver");
// console.log(block[0]);
// for (var i = 0; i<block.length; i++) {
//   console.log(block[i]);
//   block.classList("bg-white");
//   console.log(block.classList.add("bg-white"));s
//   }


// EXERCICE 2 : Selecteurs CSS

//
// avec querySelector sélectioner l'élément 'my-table'
//
// lui ajouter la classe "bg-purple"

var ok = document.getElementById("my-table");
ok.classList.add("bg-purple");
console.log( ok);


// avec querySelectorAll sélectioner tous les paragraphes dans 'container'
//
// modifier tout ces éléments en leurs ajoutant la classe 'shadow'
//
var paragraf = document.querySelectorAll("p");
for (var i=0; i<paragraf.length; i++) {
paragraf[i].classList.add("shadow");
console.log(paragraf[i]);
}

// EXERCICE 3
// sélectionne tous les éléments de type 'pre'
var pret = document.querySelector("pre");

// avec la propriété style change la couleur de texte

pret.style.color = "blue";
console.log(pret.style.color= "blue");

// avec la propriété style change la couleur de fond grâce à backgroundColor

pret.style.backgroundColor= "yellow";
console.log(pret.style.backgroundColor= "yellow");


// avec la propriété style ajouter un border-top de 3px solid red (n'oublie pas que tu peux acceder au
// propriété d'un objet grâce comme ceci : ["prop-name"] )

pret.style.borderTop = "3px solid red";


// avec la propriété style ajouter un border-bottom de 3px solid red

pret.style.borderBottom= "3px solid red";



// sélectionne le premier élément de type 'h3'
//
// ramplacer son contenu HTML en <em>Itelic title ! yeah !</em>
//
var titre = document.querySelector("h3");
titre.innerHTML = "<em>Itelic title ! yeah !</em>";


// sélectionne le premier élément de type 'h2'
//
// ramplacer son contenu texte par en <strong>HTML doens't work !</strong>
//

var titreB = document.querySelector("h2");
titreB.innerHTML = "<strong>HTML doens't work !</strong>";

// EXERCICE 4 : Création d'éléments

// sélectioner le premier 'ul'
//
// crée un élément de type 'li'
//
// ajouter ce texte Mon meilleur ami est <a href='http://www.google.com'>Google</a> dans le 'li'
var liste = document.querySelector("ul");
var point = document.createElement("li");
var txt = document.createTextNode("Mon meilleur ami est <a href='http://www.google.com'>Google</a>")
point.appendChild(txt);

// ajouter ce 'li' l'élément dans le ul
//
// sélectionner le premier lien dans le 'li' précedement crée
//
// avec la propriété style change la couleur de texte de ce lien
liste.appendChild(point);

var a  = liste.appendChild(point);
point.style.color="white";
console.log(point.style.color="white");


var b = document.querySelector("a");
b.style.color="blue";
console.log(b.style.color="blue");


var c = document.querySelector("orange");
c.style.color("li") = "blue";
/* pas fini*/

// EXERCICE 5 : Création et suppression de plusieurs éléments

var ordre = document.querySelectorAll("ol");
for (var i = 0; i < ordre.length; i++) {
  console.log(ordre[i])
}
ordre.classList.removeChild();

var qui = ["Silent Teacher", "Code Monkey", "Code Combat"];
for (var i = 0; i < qui.length; i++) {
  console.log(qui[i])
var li = document.createElement("li");
li.

}

































//
