$(function () {
  $("#Changelogs").load("changelogs.html");
});
$(document).ready(function () {
  //cambiar la version del titulo de las paginas
  var version = "0.9";
  var npagina = location.href.split("/").slice(-1);
  tituloc = document.getElementById("tituloc");
  titulob = document.getElementById("titulob");
  switch (npagina[0]) {
    case "index.html":
      tituloc.innerHTML = "<title>PokeHelp v" + version + "</title>";
      titulob.innerHTML = "<h2 id='seg-principal-titulo' class='ui header blue dividing'>Bienvenidos al PokeHelp v" + version;
      break;
    case "pokedex.html":
      tituloc.innerHTML = "<title>PokeHelp v" + version + " - Pokedex</title>";
      titulob.innerHTML = "<h2 id='seg-principal-titulo' class='ui header blue dividing'>PokeHelp v" + version + " - Pokedex</h2>";
      break;
    case "calculadora.html":
      tituloc.innerHTML = "<title>PokeHelp v" + version + " - Calculadora</title>";
      titulob.innerHTML = "<h2 id='seg-principal-titulo' class='ui header blue dividing'>PokeHelp v" + version + " - Calculadora</h2>";
      break;
    case "dextipos.html":
      tituloc.innerHTML = "<title>PokeHelp v" + version + " - Dex de Tipos</title>";
      titulob.innerHTML = "<h2 id='seg-principal-titulo' class='ui header blue dividing'>PokeHelp v" + version + " - Dex de Tipos</h2>";
      break;
    case "boss.html":
      tituloc.innerHTML = "<title>PokeHelp v" + version + " - Boss PRO</title>";
      titulob.innerHTML = "<h2 id='seg-principal-titulo' class='ui header blue dividing'>PokeHelp v" + version + " - Boss PRO</h2>";
      break;
    default:
      break;
  }
  $('.ui.dropdown').dropdown({
    action: 'activate'
  });
  $('#naturaleza').dropdown();
});