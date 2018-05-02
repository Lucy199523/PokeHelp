var pokeselect;
var ps;
var atk;
var def;
var atksp;
var defsp;
var fvel;
var fps;
var fatk;
var fdef;
var fatksp;
var fdefsp;
var fvel;
var evps;
var evatk;
var evdef;
var evatksp;
var evdefsp;
var evvel;
var ivps;
var ivatk;
var ivdef;
var ivatksp;
var ivdefsp;
var ivvel;
var nivel;
var notanatu;

$(document).ready(function () {
    $("#Aceptar").click(function () {
        //Nivel del pokemon
        nivel = $("#nivel").val();
        //ivs del pokemon
        ivps = $("#ivps").val();
        ivatk = $("#ivatk").val();
        ivdef = $("#ivdef").val();
        ivatksp = $("#ivatksp").val();
        ivdefsp = $("#ivdefsp").val();
        ivvel = $("#ivvel").val();
        //if (nivel <= 100 || ivps <= 31 || ivatk <= 31 ||  ivdef <= 31  ||ivatksp <= 31 ||  ivdefsp <= 31 || ivvel <= 31 ) {
        //evs del pokemon
        evps = $("#evps").val();
        evatk = $("#evatk").val();
        evdef = $("#evdef").val();
        evatksp = $("#evatksp").val();
        evdefsp = $("#evdefsp").val();
        evvel = $("#evvel").val();
        //Pokemon Selecionado
        pokeselect = $("#pokeselect").val();
        switch (pokeselect) {
            case "bulbasaur":
                ps = 45;
                atk = 49;
                def = 49;
                atksp = 65;
                defsp = 65;
                vel = 45;
                break;
            case "ivysaur":
                ps = 60;
                atk = 62;
                def = 63;
                atksp = 80;
                defsp = 80;
                vel = 60;
                break;
            case "venusaur":
                ps = 80;
                atk = 82;
                def = 83;
                atksp = 100;
                defsp = 100;
                vel = 80;
                break;
            case "charmander":
                ps = 39;
                atk = 52;
                def = 43;
                atksp = 60;
                defsp = 50;
                vel = 65;
                break;
            case "charmeleon":
                ps = 58;
                atk = 64;
                def = 58;
                atksp = 80;
                defsp = 65;
                vel = 80;
                break;
            case "charizard":
                ps = 78;
                atk = 84;
                def = 79;
                atksp = 109;
                defsp = 85;
                vel = 100;
                break;
            default:
                ps = null;
                atk = null;
                def = null;
                atksp = null;
                defsp = null;
                vel = null;
        }
        //Calculos
        fatk = (ivatk + (2 * atk) + (evatk / 4)) * (nivel / 100) + 5;
        fdef = (ivdef + (2 * def) + (evdef / 4)) * (nivel / 100) + 5;
        fvel = (ivvel + (2 * vel) + (evvel / 4)) * (nivel / 100) + 5;
        fatksp = (ivatksp + (2 * atksp) + (evatksp / 4)) * (nivel / 100) + 5;
        fdefsp = (ivdefsp + (2 * defsp) + (evdefsp / 4)) * (nivel / 100) + 5;
        fps = (ivps + (2 * ps) + (evps / 4)) * (nivel / 100) + 5;
        //Natulareza seleccionada
        naturaleza = $("#naturaleza").val();
        switch (naturaleza) {
            case "Adamant":
                fatk *= 1.1;
                fatksp *= 0.9;
                notanatu = "Aumenta el Ataque Fisico y baja el Ataque Especial";
                break;
            case "Bold":
                fdef *= 1.1;
                fatk *= 0.9;
                notanatu = "Aumenta la Defensa Fisica y baja el Ataque Fisico";
                break;
            case "Brave":
                fatk *= 1.1;
                fvel *= 0.9;
                notanatu = "Aumenta el Ataque fisico y baja la Velocidad";
                break;
            case "Calm":
                fdefsp *= 1.1;
                fatk *= 0.9;
                notanatu = "Aumenta la Defensa Especial y baja el Ataque Fisico";
                break;
            case "Careful":
                fdefsp *= 1.1;
                fatksp *= 0.9;
                notanatu = "Aumenta la Defensa Especial y baja el Ataque Especial";
                break;
            case "Gentle":
                fdefsp *= 1.1;
                fdef *= 0.9;
                notanatu = "Aumenta la Defensa Especial y baja la Defensa Fisica";
                break;
            case "Hasty":
                fvel *= 1.1;
                fdef *= 0.9;
                notanatu = "Aumenta la Velocidad y baja la Defensa Fisica";
                break;
            case "Impish":
                fdef *= 1.1;
                fatksp *= 0.9;
                notanatu = "Aumenta la Defensa Fisica y baja el Ataque Especial";
                break;
            case "Jolly":
                fvel *= 1.1;
                fatksp *= 0.9;
                notanatu = "Aumenta la Velocidad y baja el Ataque Especial";
                break;
            case "Lax":
                fdef *= 1.1;
                fdefsp *= 0.9;
                notanatu = "Aumenta la Defensa Fisica y baja la Defensa Especial";
                break;
            case "Lonely":
                fatk *= 1.1;
                fdef *= 0.9;
                notanatu = "Aumenta el Ataque fisico y baja la Defensa Fisica";
                break;
            case "Mild":
                fatksp *= 1.1;
                fdef *= 0.9;
                notanatu = "Aumenta el Ataque Especial y baja la Defensa Fisica";
                break;
            case "Modest":
                fatksp *= 1.1;
                fatk *= 0.9;
                notanatu = "Aumenta el Ataque Especial y baja el Ataque Fisico";
                break;
            case "Naive":
                fvel *= 1.1;
                fdefsp *= 0.9;
                notanatu = "Aumenta la Velocidad y baja la Defensa Especial";
                break;
            case "Naughty":
                fatk *= 1.1;
                fdefsp *= 0.9;
                notanatu = "Aumenta el Ataque Fisico y baja la Defensa Especial";
                break;
            case "Quiet":
                fatksp *= 1.1;
                fvel *= 0.9;
                notanatu = "Aumenta el Ataque Especial y baja la Velocidad";
                break;
            case "Rash":
                fatksp *= 1.1;
                fdefsp *= 0.9;
                notanatu = "Aumenta el Ataque Especial y baja la Defensa Especial";
                break;
            case "Relaxed":
                fdef *= 1.1;
                fvel *= 0.9;
                notanatu = "Aumenta la Defensa Fisica y baja la Velocidad";
                break;
            case "Sassy":
                fdefsp *= 1.1;
                fvel *= 0.9;
                notanatu = "Aumenta la Defensa Especial y baja la Velocidad";
                break;
            case "Timid":
                fvel *= 1.1;
                fatk *= 0.9;
                notanatu = "Aumenta la Velocidad y baja el Ataque Fisico";
                break;
        }
        //} else {alert("Han faltado datos o ha ingresado un dato invalido, verifique que los IVs no superen los 31 o el nivel no supere el 100 y rellene todos los campos")}
        //resultados
        $("#fps").val(fps);
        $("#fdef").val(fdef);
        $("#fvel").val(fvel);
        $("#fatksp").val(fatksp);
        $("#fdefsp").val(fdefsp);
        $("#fatk").val(fatk);
    });

});