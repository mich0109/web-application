
    let macchine = [
        {
            "marca": "Toyota",
            "modello": "Yaris",
            "anno": 2020,
            "colore": "Bianco",
            "tipo_carburante": "Benzina",
            "cavalli": 75,
            "cambio": "Manuale",
            "targa": "EM502LA",
            "prezzo": "15.000 €",
            "immagine_url": "immagini/toyota_yaris.webp"
        },
        {
            "marca": "Honda",
            "modello": "Civic",
            "anno": 2019,
            "colore": "Nero",
            "tipo_carburante": "Diesel",
            "cavalli": 120,
            "cambio": "Manuale",
            "targa": "FB783UJ",
            "prezzo": "16.799 €",
            "immagine_url": "immagini/Honda_civic.webp"
        },
        {
            "marca": "Tesla",
            "modello": "Model S",
            "anno": 2021,
            "colore": "Rosso",
            "tipo_carburante": "Elettrico",
            "cavalli": 670,
            "cambio": "Automatico",
            "targa": "CT529GT",
            "prezzo": "31.200 €",
            "immagine_url": "immagini/Tesla_model_S.jpeg"
        },
        {
            "marca": "Ford",
            "modello": "Fiesta",
            "anno": 2020,
            "colore": "Nero",
            "tipo_carburante": "Benzina",
            "cavalli": 90,
            "cambio": "Manuale",
            "targa": "GA650AA",
            "prezzo": "12.000 €",
            "immagine_url": "immagini/ford_fiesta.jpg"
        },
        {
            "marca": "BMW",
            "modello": "X5",
            "anno": 2022,
            "colore": "Grigio",
            "tipo_carburante": "Ibrido",
            "cavalli": 394,
            "cambio": "Automatico",
            "targa": "BT826MI",
            "prezzo": "45.300 €",
            "immagine_url": "immagini/Bmw_x5.png"
        },
        {
            "marca": "Audi",
            "modello": "A4",
            "anno": 2022,
            "colore": "Blu",
            "tipo_carburante": "Diesel",
            "cavalli": 150,
            "cambio": "Automatico",
            "targa": "DR634UT",
            "prezzo": "28.000 €",
            "immagine_url": "immagini/Audi_a4.jpg"
        },
        {
            "marca": "Mercedes-Benz",
            "modello": "Classe C",
            "anno": 2021,
            "colore": "Argento",
            "tipo_carburante": "Benzina",
            "cavalli": 204,
            "cambio": "Automatico",
            "targa": "GE759FC",
            "prezzo": "37.000 €",
            "immagine_url": "immagini/Mercedes_classe_c.webp"
        },
        {
            "marca": "Volkswagen",
            "modello": "Golf",
            "anno": 2020,
            "colore": "Bianco",
            "tipo_carburante": "Benzina",
            "cavalli": 110,
            "cambio": "Manuale",
            "targa": "CR489HY",
            "prezzo": "11.400 €",
            "immagine_url": "immagini/golf.webp"
        },
        {
            "marca": "Range Rover",
            "modello": "Sport",
            "anno": 2019,
            "colore": "Grigio Scuro",
            "tipo_carburante": "Ibrido",
            "cavalli": 400,
            "cambio": "Semi-Automatico",
            "targa": "DH347IJ",
            "prezzo": "23.000 €",
            "immagine_url": "immagini/range_sport.avif"
        },
        {
            "marca": "Peugeot",
            "modello": "208",
            "anno": 2021,
            "colore": "Verde",
            "tipo_carburante": "Ibrido",
            "cavalli": 95,
            "cambio": "Manuale",
            "targa": "FC458GT",
            "prezzo": "17.000 €",
            "immagine_url": "immagini/Peugeot208.avif"
        },
        {
            "marca": "Porsche",
            "modello": "911",
            "anno": 2024,
            "colore": "Nero/Azzurro",
            "tipo_carburante": "Benzina",
            "cavalli": 800,
            "cambio": "Automatico",
            "targa": "EG824TH",
            "prezzo": "111.000 €",
            "immagine_url": "immagini/porsche911.jpg"
        }
    ]


document.addEventListener("DOMContentLoaded", () => {
    riempiMenu(macchine);
});

function riempiMenu(macchine) {
    let buffer = "";
    const macchineID = document.getElementById("macchine");
    macchineID.innerHTML = "";

    for (let i = 0; i < macchine.length; i++) {
        buffer += `
            <div class="col-4" data-index="${i}">
                <img src="${macchine[i].immagine_url}">
                <h4 class="mb"><span class="bold">${macchine[i].marca} ${macchine[i].modello}</span></h4>
            </div>
        `;
    }

    macchineID.innerHTML = buffer;

    document.querySelectorAll('.col-4').forEach((element, index) => {
        element.addEventListener('click', () => mostraDettagli(macchine[index]));
    });
}

function mostraDettagli(macchina) {
    const modale = document.getElementById('modale-dettagli');
    modale.style.display = 'block';
    const dettagli = `
        <div class="dettaglio-item"><span class="dettaglio-label">Marca:</span> ${macchina.marca}</div>
        <div class="dettaglio-item"><span class="dettaglio-label">Modello:</span> ${macchina.modello}</div>
        <div class="dettaglio-item"><span class="dettaglio-label">Anno:</span> ${macchina.anno}</div>
        <div class="dettaglio-item"><span class="dettaglio-label">Colore:</span> ${macchina.colore}</div>
        <div class="dettaglio-item"><span class="dettaglio-label">Tipo di carburante:</span> ${macchina.tipo_carburante}</div>
        <div class="dettaglio-item"><span class="dettaglio-label">Cavalli:</span> ${macchina.cavalli}</div>
        <div class="dettaglio-item"><span class="dettaglio-label">Tipo di cambio:</span> ${macchina.cambio}</div>
        <div class="dettaglio-item"><span class="dettaglio-label">Targa:</span> ${macchina.targa}</div>
        <div class="dettaglio-item"><span class="dettaglio-label">Prezzo:</span> ${macchina.prezzo}</div>
    `;
    document.getElementById('dettaglio').innerHTML = dettagli;
}


function chiudiModale() {
    document.getElementById('modale-dettagli').style.display = 'none';
}