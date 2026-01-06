// Fichier: manipulationDate.js
// But: afficher et actualiser les dates/heures locales et pour les fuseaux Paris et Tokyo

document.addEventListener("DOMContentLoaded", () => {
    // Met à jour la date et l'heure locales affichées sur la page
    function updateDateTime() {
        // Récupère la date/heure locale actuelle
        const now = new Date();

        // Extrait et formate chaque composant (année, mois, jour, heure, minute, seconde)
        const annee = now.getFullYear(); // année sur 4 chiffres
        const mois = String(now.getMonth() + 1).padStart(2, "0"); // mois (1-12) formaté sur 2 chiffres
        const jour = String(now.getDate()).padStart(2, "0"); // jour du mois formaté
        const heure = String(now.getHours()).padStart(2, "0"); // heure locale formatée
        const minute = String(now.getMinutes()).padStart(2, "0"); // minute formatée
        const seconde = String(now.getSeconds()).padStart(2, "0"); // seconde formatée

        // Met à jour les éléments du DOM correspondants
        document.getElementById("annee").textContent = annee;
        document.getElementById("moisValue").textContent = mois;
        document.getElementById("jourValue").textContent = jour;
        document.getElementById("heureValue").textContent = heure;
        document.getElementById("minuteValue").textContent = minute;
        document.getElementById("secondeValue").textContent = seconde;

        // Pour débogage : affichage optionnel de la date complète
        // console.log(`Date complète : ${annee}-${mois}-${jour} ${heure}h${minute}m${seconde}s`);
    }

    // Affiche immédiatement la date/heure locale au chargement
    updateDateTime();
    // Réactualise la date/heure toutes les secondes
    setInterval(updateDateTime, 1000);

    // Met à jour la date/heure pour le fuseau Europe/Paris
    function updateParisDateTime() {
        const now = new Date();
        // NOTE: ici on soustrait 2 heures à la date actuelle (adjusted = now - 2h)
        // Selon l'intention, on pourrait vouloir ajouter ou retirer des heures ; vérifier si nécessaire.
        const adjusted = new Date(now.getTime() - 2 * 60 * 60 * 1000);

        // Utilise Intl.DateTimeFormat pour formater selon le fuseau Europe/Paris
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

        // Récupère les parties formatées (year, month, day, hour, minute, second)
        const parts = fmt.formatToParts(adjusted).reduce((acc, p) => {
            if (p.type !== 'literal') acc[p.type] = p.value;
            return acc;
        }, {});

        // Met à jour les éléments DOM pour Paris
        document.getElementById("anneeParis").textContent = parts.year;
        document.getElementById("moisParis").textContent = parts.month;
        document.getElementById("jourParis").textContent = parts.day;
        document.getElementById("heureParis").textContent = parts.hour;
        document.getElementById("minuteParis").textContent = parts.minute;
        document.getElementById("secondeParis").textContent = parts.second;
    }

    // Démarre l'affichage/actualisation pour Paris
    updateDateTime();
    setInterval(updateParisDateTime, 1000);

    // Met à jour la date/heure pour le fuseau Asia/Tokyo
    function updateTokyoDateTime() {
        // Utilise Intl.DateTimeFormat avec timeZone Tokyo pour obtenir l'heure locale de Tokyo
        const now = new Date();
        // Réduit le temps de 2 heures
        const adjusted = new Date(now.getTime() - 2 * 60 * 60 * 1000);

        const fmt = new Intl.DateTimeFormat('fr-FR', {
            timeZone: 'Asia/Tokyo',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        // Récupère les parties formatées et les mappe dans un objet
        const parts = fmt.formatToParts(adjusted).reduce((acc, p) => {
            if (p.type !== 'literal') acc[p.type] = p.value;
            return acc;
        }, {});

        // Met à jour les éléments DOM pour Tokyo
        document.getElementById("anneeTokyo").textContent = parts.year;
        document.getElementById("moisTokyo").textContent = parts.month;
        document.getElementById("jourTokyo").textContent = parts.day;
        document.getElementById("heureTokyo").textContent = parts.hour;
        document.getElementById("minuteTokyo").textContent = parts.minute;
        document.getElementById("secondeTokyo").textContent = parts.second;
    }

    // Démarre l'affichage/actualisation pour Tokyo
    updateTokyoDateTime();
    setInterval(updateTokyoDateTime, 1000);
});
