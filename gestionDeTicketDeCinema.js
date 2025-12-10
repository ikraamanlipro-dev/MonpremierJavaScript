let nomClient = "Kiro"; // Nom du client

let ticketCinema = {
    nomFilm : "Avatar",
    prix : 11 ,
    numeroSalle : 3,
};

let textAffichage = "Bonjour" + " "+  nomClient + " " +", votre film"+ " "  + ticketCinema.nomFilm + " " + " est dans la salle N°"+ticketCinema.numeroSalle ;

console.log(textAffichage);