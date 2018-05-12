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

console.log("Design By: Japr07");
$(document).ready(function () {
    //prevenir que el usuario marque un numero mayor o menor al permitido
    $('.nvlpkmn').on('keyup keydown', function (e) {
        if ($(this).val() > 100 &&
            e.keyCode != 46 &&
            e.keyCode != 8
        ) {
            e.preventDefault();
            $(this).val(100);
        }
        if ($(this).val() < 0 &&
            e.keyCode != 46 &&
            e.keyCode != 8
        ) {
            e.preventDefault();
            $(this).val(0);
        }
    });
    $('.ivspkmn').on('keyup keydown', function (e) {
        if ($(this).val() > 31 &&
            e.keyCode != 46 &&
            e.keyCode != 8
        ) {
            e.preventDefault();
            $(this).val(31);
        }
        if ($(this).val() < 0 &&
            e.keyCode != 46 &&
            e.keyCode != 8
        ) {
            e.preventDefault();
            $(this).val(0);
        }
    });
    $('.evspkmn').on('keyup keydown', function (e) {
        if ($(this).val() > 252 &&
            e.keyCode != 46 &&
            e.keyCode != 8
        ) {
            e.preventDefault();
            $(this).val(252);
        }
        if ($(this).val() < 0 &&
            e.keyCode != 46 &&
            e.keyCode != 8
        ) {
            e.preventDefault();
            $(this).val(0);
        }
    });
    //boton aceptar
    $("#Aceptar").click(function () {
        //Nivel del pokemon
        nivel = parseInt($("#nivel").val());
        //ivs del pokemon
        ivps = parseInt($("#ivps").val());
        ivatk = parseInt($("#ivatk").val());
        ivdef = parseInt($("#ivdef").val());
        ivatksp = parseInt($("#ivatksp").val());
        ivdefsp = parseInt($("#ivdefsp").val());
        ivvel = parseInt($("#ivvel").val());
        //evs del pokemon
        evps = parseInt($("#evps").val());
        evatk = parseInt($("#evatk").val());
        evdef = parseInt($("#evdef").val());
        evatksp = parseInt($("#evatksp").val());
        evdefsp = parseInt($("#evdefsp").val());
        evvel = parseInt($("#evvel").val());
        //Pokemon Selecionado
        pkmncalc();

        //comprobacion de datos
        if (pokeselect !== "" && nivel > 0 && !isNaN(ivatk) && !isNaN(ivatksp) && !isNaN(ivdef) &&
            !isNaN(ivdefsp) && !isNaN(ivps) && !isNaN(ivvel) && !isNaN(evatk) && !isNaN(evatksp) &&
            !isNaN(evdef) && !isNaN(evdefsp) && !isNaN(evps) && !isNaN(evvel)) {
            //Calculos
            if (evatk + evatksp + evdef + evdefsp + evps + evvel <= 510) {
                fatk = (((ivatk + 2 * atk + (evatk / 4)) * nivel / 100) + 5);
                fdef = (((ivdef + 2 * def + (evdef / 4)) * nivel / 100) + 5);
                fvel = (((ivvel + 2 * vel + (evvel / 4)) * nivel / 100) + 5);
                fatksp = (((ivatksp + 2 * atksp + (evatksp / 4)) * nivel / 100) + 5);
                fdefsp = (((ivdefsp + 2 * defsp + (evdefsp / 4)) * nivel / 100) + 5);
                fps = ((ivps + 2 * ps + (evps / 4)) * nivel / 100) + 10 + nivel;
                HiddenPower();
            } else {
                alert("La suma de los EVs no pueden superar los 510");
            }
        } else {
            alert("Han faltado datos o ha ingresado un dato invalido, verifique que no haya dejado ningun campo vacio y que ha seleccionado un Pokemon");
        }
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
        //resultados
        $("#fps").val(Math.trunc(fps));
        $("#fdef").val(Math.trunc(fdef));
        $("#fvel").val(Math.trunc(fvel));
        $("#fatksp").val(Math.trunc(fatksp));
        $("#fdefsp").val(Math.trunc(fdefsp));
        $("#fatk").val(Math.trunc(fatk));
    });

});