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
      location.href = "webApp.html";
    } else {
      alert("Email o password errate");
  }
});

