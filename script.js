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
    } else {
      alert("Email o password errate");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  fetch('macchine.json')
      .then(response => response.json())
      .then(data => {
          if (data && data.macchine) {
              riempiMenu(data.macchine); 
          } else {
              console.error("Il file JSON non contiene l'array 'macchine'");
          }
      })
      .catch(error => console.error("Errore:", error));
});

function riempiMenu(macchine) {
  let buffer = "";

  let macchineID = document.getElementById("macchine");
  macchineID.innerHTML = "";

  for (let i = 0; i < macchine.length; i++) {
    buffer += `
    <div class="col-4" onclick="mostraDettagli(${JSON.stringify(macchine[i])})">
        <img src="${macchine[i].immagine_url}" alt="${macchine[i].marca} ${macchine[i].modello}">
        <h4 class="mb"><span class="bold">${macchine[i].marca} ${macchine[i].modello}</span></h4>
    </div>
`;
  }

  macchineID.innerHTML += buffer;
}

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
    `;
    document.getElementById('dettaglio').innerHTML = dettagli;
}


function tornaAlMenu() {
    document.getElementById('dettagli-macchina').style.display = 'none';
}

  