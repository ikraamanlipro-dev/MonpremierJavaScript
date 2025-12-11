let nomClient = "Kiro"; // Nom du client

let ticketCinema = { // Objet contenant les données d'un ticket de cinéma
    nomFilm : "Avatar",
    prix : 11 ,
    numeroSalle : 3,
};

// Variable texte qui affichera les données de l'objet
let textAffichage = "Bonjour" + " "+  nomClient + " " +", votre film"+ " "  + ticketCinema.nomFilm + " " + " est dans la salle N°"+ticketCinema.numeroSalle ;

console.log(textAffichage);