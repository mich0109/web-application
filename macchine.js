
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
            "immagine_url": "immagini/porsche911.jpg"
        }
    ]


let buffer = "";

let macchineID = document.getElementById("macchine");
macchineID.innerHTML = "";

for (let i = 0; i < macchine.length; i++) {
    buffer += `
      <div class="col-4" onclick="mostraDettagli(${JSON.stringify(macchine[i])})">
          <img src="${macchine[i].immagine_url}">
          <h4 class="mb"><span class="bold">${macchine[i].marca} ${macchine[i].modello}</span></h4>
      </div>
  `;
}


macchineID.innerHTML += buffer;


function mostraDettagli(macchine) {

    document.getElementById('dettagli-macchina').style.display = 'block';
    const dettagli = `
          <strong>Marca:</strong> ${macchine.marca}<br>
          <strong>Modello:</strong> ${macchine.modello}<br>
          <strong>Anno:</strong> ${macchine.anno}<br>
          <strong>Colore:</strong> ${macchine.colore}<br>
          <strong>Tipo di carburante:</strong> ${macchine.tipo_carburante}<br>
          <strong>Cavalli:</strong> ${macchine.cavalli}<br>
          <strong>Tipo di cambio:</strong> ${macchine.cambio}<br>
          <strong>Targa:</strong> ${macchine.targa}<br>
      `;
    document.getElementById('dettaglio').innerHTML = dettagli;
}


function tornaAlMenu() {
    document.getElementById('dettagli-macchina').style.display = 'none';
}