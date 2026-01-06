document.addEventListener("DOMContentLoaded", () => {
    // Fonction qui met à jour la date et l'heure affichées
    function updateDateTime() {
        // Récupère la date et l'heure actuelles
        const now = new Date();

        // Extractions et formatage des composants de la date/heure
        const annee = now.getFullYear(); // année sur 4 chiffres
        const mois = String(now.getMonth() + 1).padStart(2, "0"); // mois (1-12), formaté sur 2 chiffres
        const jour = String(now.getDate()).padStart(2, "0"); // jour du mois, formaté sur 2 chiffres
        const heure = String(now.getHours()).padStart(2, "0"); // heure, formatée sur 2 chiffres
        const minute = String(now.getMinutes()).padStart(2, "0"); // minute, formatée sur 2 chiffres
        const seconde = String(now.getSeconds()).padStart(2, "0"); // seconde, formatée sur 2 chiffres

        // Mise à jour des éléments du DOM avec les valeurs calculées
        document.getElementById("annee").textContent = annee;
        document.getElementById("moisValue").textContent = mois;
        document.getElementById("jourValue").textContent = jour;
        document.getElementById("heureValue").textContent = heure;
        document.getElementById("minuteValue").textContent = minute;
        document.getElementById("secondeValue").textContent = seconde;

        // Affichage de la date complète dans la console (utile pour le débogage)
        //console.log(`Date complète : ${annee}-${mois}-${jour} ${heure}h${minute}m${seconde}s`);
    }

    // Appel initial pour afficher immédiatement la date/heure au chargement
    updateDateTime();
    // Mise à jour répétée toutes les secondes
    setInterval(updateDateTime, 1000);

    function updateParisDateTime() {
        const now = new Date();
        const adjusted = new Date(now.getTime() - 2 * 60 * 60 * 1000); // ajoute 2 heures
        const fmt = new Intl.DateTimeFormat('fr-FR', {
            timeZone: 'Europe/Paris',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        const parts = fmt.formatToParts(adjusted).reduce((acc, p) => {
            if (p.type !== 'literal') acc[p.type] = p.value;
            return acc;
        }, {});
        document.getElementById("anneeParis").textContent = parts.year;
        document.getElementById("moisParis").textContent = parts.month;
        document.getElementById("jourParis").textContent = parts.day;
        document.getElementById("heureParis").textContent = parts.hour;
        document.getElementById("minuteParis").textContent = parts.minute;
        document.getElementById("secondeParis").textContent = parts.second;
    }

    updateParisDateTime();
    setInterval(updateParisDateTime, 1000);

    
});