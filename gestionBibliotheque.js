// gestion d'une bibliothèque

let totalLivres = 500;// déclare la variable totalLivres avec une valeur de 500 livres
console.log(totalLivres);

totalLivres+= 50;//Puis on ajoute 50 livres
console.log(totalLivres);

totalLivres-= 10;// Ensuite on retire 10 livres
console.log(totalLivres);

totalLivres+= 5;// Pour finir on rerajoute 5 livre 
console.log(totalLivres);


let affichageTotalLivres = "La bibliothèque contient ";
affichageTotalLivres += totalLivres;
affichageTotalLivres+= " livres au total";

console.log(affichageTotalLivres);

const dateNaissance = new Date("06/23/1972");

let joueurprofessionel = {
    Nom:	"Zinédine Yazid Zidane",
    Nationalité:	["Française", "Algérienne"],
    NatSportive:	"Française",
    Naissance:	"23 juin 1972 (53 ans)",
    dateNaissance,
    villeNaissance : "Marseille (France)",
    Taille	: 1.85 ,
    PériodePro	: 1988-2006,
    Poste:	"Milieu offensif",
    PiedFort:	"Droit"
};

console.log(joueurprofessionel);// On affiche tout le contenu de l'objet

console.log(joueurprofessionel.Nom);// On prend le nom qui se trouve dans l'objet
console.log(joueurprofessionel.Nationalité);// On prend la nationalité qui se trouve dans l'objet


const dateNaissance2 = new Date("07/ 31 /1978");// Initialisation d'une variable cons pour la date de naissance qu'on placera dans l'objet
const election = new Date("06/19/2022");// Initialisation de la date d'élection
let persoPolitique = {
    Nom:"Estelle Youssouffa",
    Nationalité: "Français",
    dateNaissance2,
    villeNaissance: "Châtenay-Malabry (France)",
    partiPolitique: "UDI",
    profession: "Journalise",
    election


};

console.log(persoPolitique);// On affiche l'ensemble de l'objet
console.log(persoPolitique.Nom);// On prend le nom qui est dans l'objet
console.log(persoPolitique.Nationalité);// On prend la nationalité qui se trouve dans l'objet
console.log(persoPolitique.election);// On prend la date de l'election
console.log(persoPolitique.profession);// On prend la profession 