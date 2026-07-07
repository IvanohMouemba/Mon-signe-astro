document.getElementById("sub").addEventListener("click", function () {

    const monthInput = document.querySelector('input[type="month"]').value;
    const dayInput = document.querySelector('input[type="number"]').value;

    const resultDiv = document.getElementById("result");

    // Vérification si les champs sont vides
    if (!monthInput || !dayInput) {
        resultDiv.textContent = "Veuillez entrer votre mois et votre jour de naissance.";
        return;
    }

    const month = parseInt(monthInput.split("-")[1]);
    const day = parseInt(dayInput);

    // Vérification mois valide
    if (month < 1 || month > 12) {
        resultDiv.textContent = "Mois incorrect !";
        return;
    }

    // Vérification jour valide
    if (day < 1 || day > 31) {
        resultDiv.textContent = "Jour incorrect !";
        return;
    }

    // Vérification des jours impossibles
    const joursParMois = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day > joursParMois[month - 1]) {
        resultDiv.textContent = "Date incorrecte !";
        return;
    }

    const signe = getSigne(month, day);
    const phrase = getPhrase(signe);

    resultDiv.innerHTML = `
        <h2>Je suis ${signe}</h2>
        <p>${phrase}</p>
    `;
});


// Trouver le signe astro
function getSigne(month, day) {
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Bélier ♈";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taureau ♉";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gémeaux ♊";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer ♋";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Lion ♌";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Vierge ♍";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Balance ♎";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpion ♏";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittaire ♐";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorne ♑";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Verseau ♒";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Poissons ♓";
}
function getPhrase(signe) {

    // On enlève le symbole après le nom : "Bélier ♈" → "Bélier"
    signe = signe.split(" ")[0];

    const phrases = {
        "Bélier": "Bélier ♈ — Tu avances avec courage, rien ne peut t’arrêter.",
        "Taureau": "Taureau ♉ — Ta patience et ta force te mèneront loin.",
        "Gémeaux": "Gémeaux ♊ — Ton esprit rapide et curieux ouvre toutes les portes.",
        "Cancer": "Cancer ♋ — Ta sensibilité est une puissance, pas une faiblesse.",
        "Lion": "Lion ♌ — Tu brilles naturellement, continue d’inspirer les autres.",
        "Vierge": "Vierge ♍ — Ta précision et ton sérieux font de toi quelqu’un de fiable.",
        "Balance": "Balance ♎ — Tu apportes l’harmonie partout où tu vas.",
        "Scorpion": "Scorpion ♏ — Ton intensité te permet de réussir ce que les autres n’osent pas.",
        "Sagittaire": "Sagittaire ♐ — Ton optimisme et ta liberté te guident vers de grandes choses.",
        "Capricorne": "Capricorne ♑ — Ta détermination transforme tes rêves en réalité.",
        "Verseau": "Verseau ♒ — Ta créativité unique change le monde autour de toi.",
        "Poissons": "Poissons ♓ — Ton imagination et ton cœur te rendent exceptionnel."
    };

    return phrases[signe];
}
function getPhrase(signe) {

    // "Bélier ♈" → "Bélier ♈"
    // On garde le symbole, mais on enlève les espaces inutiles
    signe = signe.trim();

    const phrases = {
        "Bélier ♈": "Tu avances avec courage, rien ne peut t’arrêter.",
        "Taureau ♉": "Ta patience et ta force te mèneront loin.",
        "Gémeaux ♊": "Ton esprit rapide et curieux ouvre toutes les portes.",
        "Cancer ♋": "Ta sensibilité est une puissance, pas une faiblesse.",
        "Lion ♌": "Tu brilles naturellement, continue d’inspirer les autres.",
        "Vierge ♍": "Ta précision et ton sérieux font de toi quelqu’un de fiable.",
        "Balance ♎": "Tu apportes l’harmonie partout où tu vas.",
        "Scorpion ♏": "Ton intensité te permet de réussir ce que les autres n’osent pas.",
        "Sagittaire ♐": "Ton optimisme et ta liberté te guident vers de grandes choses.",
        "Capricorne ♑": "Ta détermination transforme tes rêves en réalité.",
        "Verseau ♒": "Ta créativité unique change le monde autour de toi.",
        "Poissons ♓": "Ton imagination et ton cœur te rendent exceptionnel."
    };

    return phrases[signe];
}


