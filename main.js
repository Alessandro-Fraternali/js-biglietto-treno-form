// variabili input
var nomeU = document.getElementById("nome");
var kmU = document.getElementById("km");
var etaU = document.getElementById("eta");

// variabili bottoni
var generabiglietto = document.getElementById("genera");
var annulla
var prezzobiglietto = document.getElementById("prezzo");
var tipobiglietto = document.getElementById("biglietto");

generabiglietto.addEventListener("click",
  function () {
    document.getElementById("nomepasseggero").innerHTML = nomeU.value;
    alert(kmU.value);
    alert(etaU.value);
  }
);
