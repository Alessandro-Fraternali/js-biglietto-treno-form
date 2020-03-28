// lista delle variabili
// variabili input
var nomeU = document.getElementById("nome");
var kmU = document.getElementById("km");
var etaU = document.getElementById("eta");

// variabili bottoni
var generabiglietto = document.getElementById("genera");
var annulla = document.getElementById("annulla");

// variabili nel biglietto
var prezzobiglietto = document.getElementById("prezzo");
var tipobiglietto = document.getElementById("biglietto");
var valnome;
var valkm;
var valeta;
var prezzo;
var costoAlKm;

// cosa succede quando l'utente clicca "conferma"
generabiglietto.addEventListener("click",
  function () {
    // conversione dei valori dei prompt in nuove variabili
    valnome = nomeU.value;
    valkm = kmU.value;
    valeta = etaU.value;
    costoAlKm = valkm * 0.21;
    // stampa del nome del passeggero
    document.getElementById("nomepasseggero").innerHTML = valnome;
    // tipo e costo del biglietto basati sulle variabili valeta e valkm
    if (valeta == "minorenne") {
      prezzo = costoAlKm - (costoAlKm*20)/100;
      document.getElementById("prezzo").innerHTML = prezzo + " €";
      document.getElementById("offerta").innerHTML = "Tariffa ridotta";
    }
    else if (valeta == "maggiorenne") {
      prezzo = costoAlKm;
      document.getElementById("prezzo").innerHTML = prezzo + " €";
      document.getElementById("offerta").innerHTML = "Tariffa standard";
    }
    else {
      prezzo = costoAlKm - (costoAlKm*40)/100;
      document.getElementById("prezzo").innerHTML = prezzo + " €";
      document.getElementById("offerta").innerHTML = "Tariffa per mummie";
    }
  }
);
// cosa succede quando l'utente clicca "annulla"
