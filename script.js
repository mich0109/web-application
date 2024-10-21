document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const password = document.getElementById("password").value;
    const criteri = [
      { regex: /.{8,}/, msg: "Almeno 8 caratteri" },
      { regex: /[0-9]/, msg: "Almeno un numero (0-9)" },
      { regex: /[A-Z]/, msg: "Almeno una lettera maiuscola (A-Z)" },
      { regex: /[a-z]/, msg: "Almeno una lettera minuscola (a-z)" },
      { regex: /[!@#$%^&*(),.?":{}|<>]/, msg: "Almeno un simbolo speciale (!@#$%^&*)" }
    ];
  
    let messaggiErrore = criteri
      .filter(criterio => !criterio.regex.test(password))
      .map(criterio => criterio.msg);
  
    if (messaggiErrore.length) {
      alert("La password deve contenere:\n" + messaggiErrore.join("\n"));
      return;
    }
  
    const email = document.getElementById("email").value;
    if (email == "michele@gmail.com" && password == "Ciaociao01!") {
      document.getElementById("loginMessage").innerHTML = "<span class='text-success'>Login effettuato con successo!</span>";
      // Reindirizzamento alla nuova pagina
      location.href = "webApp.html";
    } 
  });

  document.addEventListener("DOMContentLoaded", () => {
    fetch('macchine.json')
        .then(response => response.json())
        .then(data => {
            const menuMacchine = document.getElementById('menu-macchine');
            menuMacchine.innerHTML = data.macchine.map(macchina => `
                <div class="macchina" onclick="mostraDettagli(${JSON.stringify(macchina)})">
                    <img src="${macchina.immagine_url}" alt="${macchina.marca} ${macchina.modello}" style="cursor: pointer;">
                    <p>${macchina.marca} ${macchina.modello}</p>
                </div>
            `).join('');
        })
        .catch(error => console.error('Errore nel caricamento del file JSON:', error));
});

// Funzione per mostrare i dettagli della macchina
function mostraDettagli(macchina) {
  
    document.getElementById('dettagli-macchina').style.display = 'block';
    const dettagli = `
        <strong>Marca:</strong> ${macchina.marca}<br>
        <strong>Modello:</strong> ${macchina.modello}<br>
        <strong>Anno:</strong> ${macchina.anno}<br>
        <strong>Colore:</strong> ${macchina.colore}<br>
        <strong>Tipo di carburante:</strong> ${macchina.tipo_carburante}<br>
        <strong>Cavalli:</strong> ${macchina.cavalli}<br>
        <strong>Tipo di cambio:</strong> ${macchina.cambio}<br>
        <strong>Targa:</strong> ${macchina.targa}<br>
        <strong>Foto:</strong> ${macchina.immagine_url}<br>
    `;
    document.getElementById('dettaglio').innerHTML = dettagli;
}

// Funzione per tornare al menu delle macchine
function tornaAlMenu() {
    document.getElementById('dettagli-macchina').style.display = 'none';
}

  