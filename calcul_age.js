document.addEventListener("DOMContentLoaded", function () {

    // Sélection des champs HTML
    let inputAnnee = document.getElementById("aaaa"); // année de naissance
    let inputAge = document.getElementById("a");      // âge 

    // Quand l’utilisateur écrit son année de naissance
    inputAnnee.addEventListener("input", function () {

        // On récupère l'année saisie
        let anneeDeNaissance = parseInt(inputAnnee.value);

        // Vérifie si c'est bien un nombre
        if (!isNaN(anneeDeNaissance)) {
         
            let today = new Date();
            let anneeActuelle = today.getFullYear();

            // Calcul de l'âge 
            let ageCalcul = anneeActuelle - anneeDeNaissance;

            // On affiche le résultat dans l'input HTML
            inputAge.value = ageCalcul;

            
        } 
        else {
            // Si la saisie n'est pas un nombre → on efface
            inputAge.value = "";
        }

    });

});
