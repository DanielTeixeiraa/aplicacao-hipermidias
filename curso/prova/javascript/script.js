function resultado() {
  var chegada = document.getElementById("chegada").value;
  var saida = document.getElementById("saida").value;
  var crianca = document.getElementById("crianca").value;
  var aux;

  var anoChegada = chegada.split("-")[0];
  var anoSaida = saida.split("-")[0];
  var mesChegada = chegada.split("-")[1];
  var mesSaida = saida.split("-")[1];
  var diaChegada = chegada.split("-")[2];
  var diaSaida = saida.split("-")[2];

  var dataChegada = new Date(mesChegada + "/" + diaChegada + "/" + anoChegada);
  var dataSaida = new Date(mesSaida + "/" + diaSaida + "/" + anoSaida);
  var dias = (dataSaida.getTime() - dataChegada.getTime()) / (1000 * 3600 * 24);

  if (document.getElementById("single").checked) {
      if(crianca == 0){
    aux = dias * 139 + crianca * 30;
    alert("GASTO: " + aux);
      }else{
          alert("!ERRO!")
      }
  }

  if (document.getElementById("double").checked) {
    if (crianca <= 2) {
      aux = dias * 220 + crianca * 30;
      alert("GASTO: " + aux);
    } else {
      alert("!ERRO!");
    }
  }

  if (document.getElementById("triplo").checked) {
    if (crianca <= 1) {
      aux = dias * 340 + crianca * 30;
      alert("GASTO " + aux);
    } else {
      alert("!ERRO!");
    }
  }
}
