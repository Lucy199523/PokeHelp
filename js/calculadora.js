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
        if ($(this).val() > 255 &&
            e.keyCode != 46 &&
            e.keyCode != 8
        ) {
            e.preventDefault();
            $(this).val(255);
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
        pokeselect = $("#pokeselect").val();
        switch (pokeselect) {
            case "Bulbasaur":
                ps = 45;
                atk = 49;
                def = 49;
                atksp = 65;
                defsp = 65;
                vel = 45;
                break;
            case "Ivysaur":
                ps = 60;
                atk = 62;
                def = 63;
                atksp = 80;
                defsp = 80;
                vel = 60;
                break;
            case "Venusaur":
                ps = 80;
                atk = 82;
                def = 83;
                atksp = 100;
                defsp = 100;
                vel = 80;
                break;
            case "Charmander":
                ps = 39;
                atk = 52;
                def = 43;
                atksp = 60;
                defsp = 50;
                vel = 65;
                break;
            case "Charmeleon":
                ps = 58;
                atk = 64;
                def = 58;
                atksp = 80;
                defsp = 65;
                vel = 80;
                break;
            case "Charizard":
                ps = 78;
                atk = 84;
                def = 78;
                atksp = 109;
                defsp = 85;
                vel = 100;
                break;
            case "Squirtle":
                ps = 44;
                atk = 48;
                def = 65;
                atksp = 50;
                defsp = 64;
                vel = 43;
                break;
            case "Wartortle":
                ps = 59;
                atk = 63;
                def = 80;
                atksp = 65;
                defsp = 80;
                vel = 58;
                break;
            case "Blastoise":
                ps = 79;
                atk = 83;
                def = 100;
                atksp = 85;
                defsp = 105;
                vel = 78;
                break;
            case "Caterpie":
                ps = 45;
                atk = 30;
                def = 35;
                atksp = 20;
                defsp = 20;
                vel = 45;
                break;
            case "Metapod":
                ps = 50;
                atk = 20;
                def = 55;
                atksp = 25;
                defsp = 25;
                vel = 30;
                break;
            case "Butterfree":
                ps = 60;
                atk = 45;
                def = 50;
                atksp = 90;
                defsp = 80;
                vel = 70;
                break;
            case "Weedle":
                ps = 40;
                atk = 35;
                def = 30;
                atksp = 20;
                defsp = 20;
                vel = 50;
                break;
            case "Kakuna":
                ps = 45;
                atk = 25;
                def = 50;
                atksp = 25;
                defsp = 25;
                vel = 35;
                break;
            case "Beedrill":
                ps = 65;
                atk = 90;
                def = 40;
                atksp = 45;
                defsp = 80;
                vel = 75;
                break;
            case "Pidgey":
                ps = 40;
                atk = 45;
                def = 40;
                atksp = 35;
                defsp = 35;
                vel = 56;
                break;
            case "Pidgeotto":
                ps = 63;
                atk = 60;
                def = 55;
                atksp = 50;
                defsp = 50;
                vel = 71;
                break;
            case "Pidgeot":
                ps = 83;
                atk = 80;
                def = 75;
                atksp = 70;
                defsp = 70;
                vel = 101;
                break;
            case "Rattata":
                ps = 30;
                atk = 56;
                def = 35;
                atksp = 25;
                defsp = 35;
                vel = 72;
                break;
            case "Raticate":
                ps = 55;
                atk = 81;
                def = 60;
                atksp = 50;
                defsp = 70;
                vel = 97;
                break;
            case "Spearow":
                ps = 40;
                atk = 60;
                def = 30;
                atksp = 31;
                defsp = 31;
                vel = 70;
                break;
            case "Fearow":
                ps = 65;
                atk = 90;
                def = 65;
                atksp = 61;
                defsp = 61;
                vel = 100;
                break;
            case "Ekans":
                ps = 35;
                atk = 60;
                def = 44;
                atksp = 40;
                defsp = 54;
                vel = 55;
                break;
            case "Arbok":
                ps = 60;
                atk = 95;
                def = 69;
                atksp = 65;
                defsp = 79;
                vel = 80;
                break;
            case "Pikachu":
                ps = 35;
                atk = 55;
                def = 40;
                atksp = 50;
                defsp = 50;
                vel = 90;
                break;
            case "Raichu":
                ps = 60;
                atk = 90;
                def = 55;
                atksp = 90;
                defsp = 80;
                vel = 110;
                break;
            case "Sandshrew":
                ps = 50;
                atk = 75;
                def = 85;
                atksp = 20;
                defsp = 30;
                vel = 40;
                break;
            case "Sandslash":
                ps = 75;
                atk = 100;
                def = 110;
                atksp = 45;
                defsp = 55;
                vel = 65;
                break;
            case "Nidoran♀":
                ps = 55;
                atk = 47;
                def = 52;
                atksp = 40;
                defsp = 40;
                vel = 41;
                break;
            case "Nidorina":
                ps = 70;
                atk = 62;
                def = 67;
                atksp = 55;
                defsp = 55;
                vel = 56;
                break;
            case "Nidoqueen":
                ps = 90;
                atk = 92;
                def = 87;
                atksp = 75;
                defsp = 85;
                vel = 76;
                break;
            case "Nidoran♂":
                ps = 46;
                atk = 57;
                def = 40;
                atksp = 40;
                defsp = 40;
                vel = 50;
                break;
            case "Nidorino":
                ps = 61;
                atk = 72;
                def = 57;
                atksp = 55;
                defsp = 55;
                vel = 65;
                break;
            case "Nidoking":
                ps = 81;
                atk = 102;
                def = 77;
                atksp = 85;
                defsp = 75;
                vel = 85;
                break;
            case "Clefairy":
                ps = 70;
                atk = 45;
                def = 48;
                atksp = 60;
                defsp = 65;
                vel = 35;
                break;
            case "Clefable":
                ps = 95;
                atk = 70;
                def = 73;
                atksp = 95;
                defsp = 90;
                vel = 60;
                break;
            case "Vulpix":
                ps = 38;
                atk = 41;
                def = 40;
                atksp = 50;
                defsp = 65;
                vel = 65;
                break;
            case "Ninetales":
                ps = 73;
                atk = 76;
                def = 75;
                atksp = 81;
                defsp = 100;
                vel = 100;
                break;
            case "Jigglypuff":
                ps = 115;
                atk = 45;
                def = 20;
                atksp = 45;
                defsp = 25;
                vel = 20;
                break;
            case "Wigglytuff":
                ps = 140;
                atk = 70;
                def = 45;
                atksp = 85;
                defsp = 50;
                vel = 45;
                break;
            case "Zubat":
                ps = 40;
                atk = 45;
                def = 35;
                atksp = 30;
                defsp = 40;
                vel = 55;
                break;
            case "Golbat":
                ps = 75;
                atk = 80;
                def = 70;
                atksp = 65;
                defsp = 75;
                vel = 90;
                break;
            case "Oddish":
                ps = 45;
                atk = 50;
                def = 55;
                atksp = 75;
                defsp = 65;
                vel = 30;
                break;
            case "Gloom":
                ps = 60;
                atk = 65;
                def = 70;
                atksp = 85;
                defsp = 75;
                vel = 40;
                break;
            case "Vileplume":
                ps = 75;
                atk = 80;
                def = 85;
                atksp = 110;
                defsp = 90;
                vel = 50;
                break;
            case "Paras":
                ps = 35;
                atk = 70;
                def = 55;
                atksp = 45;
                defsp = 55;
                vel = 25;
                break;
            case "Parasect":
                ps = 60;
                atk = 95;
                def = 80;
                atksp = 60;
                defsp = 80;
                vel = 30;
                break;
            case "Venonat":
                ps = 60;
                atk = 55;
                def = 50;
                atksp = 40;
                defsp = 55;
                vel = 45;
                break;
            case "Venomoth":
                ps = 70;
                atk = 65;
                def = 60;
                atksp = 90;
                defsp = 75;
                vel = 90;
                break;
            case "Diglett":
                ps = 10;
                atk = 55;
                def = 25;
                atksp = 35;
                defsp = 45;
                vel = 95;
                break;
            case "Dugtrio":
                ps = 35;
                atk = 100;
                def = 50;
                atksp = 50;
                defsp = 70;
                vel = 120;
                break;
            case "Meowth":
                ps = 40;
                atk = 45;
                def = 35;
                atksp = 40;
                defsp = 40;
                vel = 90;
                break;
            case "Persian":
                ps = 65;
                atk = 70;
                def = 60;
                atksp = 65;
                defsp = 65;
                vel = 115;
                break;
            case "Psyduck":
                ps = 50;
                atk = 52;
                def = 48;
                atksp = 65;
                defsp = 50;
                vel = 55;
                break;
            case "Golduck":
                ps = 80;
                atk = 82;
                def = 78;
                atksp = 95;
                defsp = 80;
                vel = 85;
                break;
            case "Mankey":
                ps = 40;
                atk = 80;
                def = 35;
                atksp = 35;
                defsp = 45;
                vel = 70;
                break;
            case "Primeape":
                ps = 65;
                atk = 105;
                def = 60;
                atksp = 60;
                defsp = 70;
                vel = 95;
                break;
            case "Growlithe":
                ps = 55;
                atk = 70;
                def = 45;
                atksp = 70;
                defsp = 50;
                vel = 60;
                break;
            case "Arcanine":
                ps = 90;
                atk = 110;
                def = 80;
                atksp = 100;
                defsp = 80;
                vel = 95;
                break;
            case "Poliwag":
                ps = 40;
                atk = 50;
                def = 40;
                atksp = 40;
                defsp = 40;
                vel = 90;
                break;
            case "Poliwhirl":
                ps = 65;
                atk = 65;
                def = 65;
                atksp = 50;
                defsp = 50;
                vel = 90;
                break;
            case "Poliwrath":
                ps = 90;
                atk = 95;
                def = 95;
                atksp = 70;
                defsp = 90;
                vel = 70;
                break;
            case "Abra":
                ps = 25;
                atk = 20;
                def = 15;
                atksp = 105;
                defsp = 55;
                vel = 90;
                break;
            case "Kadabra":
                ps = 40;
                atk = 35;
                def = 30;
                atksp = 120;
                defsp = 70;
                vel = 105;
                break;
            case "Alakazam":
                ps = 55;
                atk = 50;
                def = 45;
                atksp = 135;
                defsp = 95;
                vel = 120;
                break;
            case "Machop":
                ps = 70;
                atk = 80;
                def = 50;
                atksp = 35;
                defsp = 35;
                vel = 35;
                break;
            case "Machoke":
                ps = 80;
                atk = 100;
                def = 70;
                atksp = 50;
                defsp = 60;
                vel = 45;
                break;
            case "Machamp":
                ps = 90;
                atk = 130;
                def = 80;
                atksp = 65;
                defsp = 85;
                vel = 55;
                break;
            case "Bellsprout":
                ps = 50;
                atk = 75;
                def = 35;
                atksp = 70;
                defsp = 30;
                vel = 40;
                break;
            case "Weepinbell":
                ps = 65;
                atk = 90;
                def = 50;
                atksp = 85;
                defsp = 45;
                vel = 55;
                break;
            case "Victreebel":
                ps = 80;
                atk = 105;
                def = 65;
                atksp = 100;
                defsp = 70;
                vel = 70;
                break;
            case "Tentacool":
                ps = 40;
                atk = 40;
                def = 35;
                atksp = 50;
                defsp = 100;
                vel = 70;
                break;
            case "Tentacruel":
                ps = 80;
                atk = 70;
                def = 65;
                atksp = 80;
                defsp = 120;
                vel = 100;
                break;
            case "Geodude":
                ps = 40;
                atk = 80;
                def = 100;
                atksp = 30;
                defsp = 30;
                vel = 20;
                break;
            case "Graveler":
                ps = 55;
                atk = 95;
                def = 115;
                atksp = 45;
                defsp = 45;
                vel = 35;
                break;
            case "Golem":
                ps = 80;
                atk = 120;
                def = 130;
                atksp = 55;
                defsp = 65;
                vel = 45;
                break;
            case "Ponyta":
                ps = 50;
                atk = 85;
                def = 55;
                atksp = 65;
                defsp = 65;
                vel = 90;
                break;
            case "Rapidash":
                ps = 65;
                atk = 100;
                def = 70;
                atksp = 80;
                defsp = 80;
                vel = 105;
                break;
            case "Slowpoke":
                ps = 90;
                atk = 65;
                def = 65;
                atksp = 40;
                defsp = 40;
                vel = 15;
                break;
            case "Slowbro":
                ps = 95;
                atk = 75;
                def = 110;
                atksp = 100;
                defsp = 80;
                vel = 30;
                break;
            case "Magnemite":
                ps = 25;
                atk = 35;
                def = 70;
                atksp = 95;
                defsp = 55;
                vel = 45;
                break;
            case "Magneton":
                ps = 50;
                atk = 60;
                def = 95;
                atksp = 120;
                defsp = 70;
                vel = 70;
                break;
            case "Farfetch'd":
                ps = 52;
                atk = 90;
                def = 55;
                atksp = 58;
                defsp = 62;
                vel = 60;
                break;
            case "Doduo":
                ps = 35;
                atk = 85;
                def = 45;
                atksp = 35;
                defsp = 35;
                vel = 75;
                break;
            case "Dodrio":
                ps = 60;
                atk = 110;
                def = 70;
                atksp = 60;
                defsp = 60;
                vel = 110;
                break;
            case "Seel":
                ps = 65;
                atk = 45;
                def = 55;
                atksp = 45;
                defsp = 70;
                vel = 45;
                break;
            case "Dewgong":
                ps = 90;
                atk = 70;
                def = 80;
                atksp = 70;
                defsp = 95;
                vel = 70;
                break;
            case "Grimer":
                ps = 80;
                atk = 80;
                def = 50;
                atksp = 40;
                defsp = 50;
                vel = 25;
                break;
            case "Muk":
                ps = 105;
                atk = 105;
                def = 75;
                atksp = 65;
                defsp = 100;
                vel = 50;
                break;
            case "Shellder":
                ps = 30;
                atk = 65;
                def = 100;
                atksp = 45;
                defsp = 25;
                vel = 40;
                break;
            case "Cloyster":
                ps = 50;
                atk = 95;
                def = 180;
                atksp = 85;
                defsp = 45;
                vel = 70;
                break;
            case "Gastly":
                ps = 30;
                atk = 35;
                def = 30;
                atksp = 100;
                defsp = 35;
                vel = 80;
                break;
            case "Haunter":
                ps = 45;
                atk = 50;
                def = 45;
                atksp = 115;
                defsp = 55;
                vel = 95;
                break;
            case "Gengar":
                ps = 60;
                atk = 65;
                def = 60;
                atksp = 130;
                defsp = 75;
                vel = 110;
                break;
            case "Onix":
                ps = 35;
                atk = 45;
                def = 160;
                atksp = 30;
                defsp = 45;
                vel = 70;
                break;
            case "Drowzee":
                ps = 60;
                atk = 48;
                def = 45;
                atksp = 43;
                defsp = 90;
                vel = 42;
                break;
            case "Hypno":
                ps = 85;
                atk = 73;
                def = 70;
                atksp = 73;
                defsp = 115;
                vel = 67;
                break;
            case "Krabby":
                ps = 30;
                atk = 105;
                def = 90;
                atksp = 25;
                defsp = 25;
                vel = 50;
                break;
            case "Kingler":
                ps = 55;
                atk = 130;
                def = 115;
                atksp = 50;
                defsp = 50;
                vel = 75;
                break;
            case "Voltorb":
                ps = 40;
                atk = 30;
                def = 50;
                atksp = 55;
                defsp = 55;
                vel = 100;
                break;
            case "Electrode":
                ps = 60;
                atk = 50;
                def = 70;
                atksp = 80;
                defsp = 80;
                vel = 150;
                break;
            case "Exeggcute":
                ps = 60;
                atk = 40;
                def = 80;
                atksp = 60;
                defsp = 45;
                vel = 40;
                break;
            case "Exeggutor":
                ps = 95;
                atk = 95;
                def = 85;
                atksp = 125;
                defsp = 75;
                vel = 55;
                break;
            case "Cubone":
                ps = 50;
                atk = 50;
                def = 95;
                atksp = 40;
                defsp = 50;
                vel = 35;
                break;
            case "Marowak":
                ps = 60;
                atk = 80;
                def = 110;
                atksp = 50;
                defsp = 80;
                vel = 45;
                break;
            case "Hitmonlee":
                ps = 50;
                atk = 120;
                def = 53;
                atksp = 35;
                defsp = 110;
                vel = 87;
                break;
            case "Hitmonchan":
                ps = 50;
                atk = 105;
                def = 79;
                atksp = 35;
                defsp = 110;
                vel = 76;
                break;
            case "Lickitung":
                ps = 90;
                atk = 55;
                def = 75;
                atksp = 60;
                defsp = 75;
                vel = 30;
                break;
            case "Koffing":
                ps = 40;
                atk = 65;
                def = 95;
                atksp = 60;
                defsp = 45;
                vel = 35;
                break;
            case "Weezing":
                ps = 65;
                atk = 90;
                def = 120;
                atksp = 85;
                defsp = 70;
                vel = 60;
                break;
            case "Rhyhorn":
                ps = 80;
                atk = 85;
                def = 95;
                atksp = 30;
                defsp = 30;
                vel = 25;
                break;
            case "Rhydon":
                ps = 105;
                atk = 130;
                def = 120;
                atksp = 45;
                defsp = 45;
                vel = 40;
                break;
            case "Chansey":
                ps = 250;
                atk = 5;
                def = 5;
                atksp = 35;
                defsp = 105;
                vel = 50;
                break;
            case "Tangela":
                ps = 65;
                atk = 55;
                def = 115;
                atksp = 100;
                defsp = 40;
                vel = 60;
                break;
            case "Kangaskhan":
                ps = 105;
                atk = 95;
                def = 80;
                atksp = 40;
                defsp = 80;
                vel = 90;
                break;
            case "Horsea":
                ps = 30;
                atk = 40;
                def = 70;
                atksp = 70;
                defsp = 25;
                vel = 60;
                break;
            case "Seadra":
                ps = 55;
                atk = 65;
                def = 95;
                atksp = 95;
                defsp = 45;
                vel = 85;
                break;
            case "Goldeen":
                ps = 45;
                atk = 67;
                def = 60;
                atksp = 35;
                defsp = 50;
                vel = 63;
                break;
            case "Seaking":
                ps = 80;
                atk = 92;
                def = 65;
                atksp = 65;
                defsp = 80;
                vel = 68;
                break;
            case "Staryu":
                ps = 30;
                atk = 45;
                def = 55;
                atksp = 70;
                defsp = 55;
                vel = 85;
                break;
            case "Starmie":
                ps = 60;
                atk = 75;
                def = 85;
                atksp = 100;
                defsp = 85;
                vel = 115;
                break;
            case "Mr. Mime":
                ps = 40;
                atk = 45;
                def = 65;
                atksp = 100;
                defsp = 120;
                vel = 90;
                break;
            case "Scyther":
                ps = 70;
                atk = 110;
                def = 80;
                atksp = 55;
                defsp = 80;
                vel = 105;
                break;
            case "Jynx":
                ps = 65;
                atk = 50;
                def = 35;
                atksp = 115;
                defsp = 95;
                vel = 95;
                break;
            case "Electabuzz":
                ps = 65;
                atk = 83;
                def = 57;
                atksp = 95;
                defsp = 85;
                vel = 105;
                break;
            case "Magmar":
                ps = 65;
                atk = 95;
                def = 57;
                atksp = 100;
                defsp = 85;
                vel = 93;
                break;
            case "Pinsir":
                ps = 65;
                atk = 125;
                def = 100;
                atksp = 55;
                defsp = 70;
                vel = 85;
                break;
            case "Tauros":
                ps = 75;
                atk = 100;
                def = 95;
                atksp = 40;
                defsp = 70;
                vel = 110;
                break;
            case "Magikarp":
                ps = 20;
                atk = 10;
                def = 55;
                atksp = 15;
                defsp = 20;
                vel = 80;
                break;
            case "Gyarados":
                ps = 95;
                atk = 125;
                def = 79;
                atksp = 60;
                defsp = 100;
                vel = 81;
                break;
            case "Lapras":
                ps = 130;
                atk = 85;
                def = 80;
                atksp = 85;
                defsp = 95;
                vel = 60;
                break;
            case "Ditto":
                ps = 48;
                atk = 48;
                def = 48;
                atksp = 48;
                defsp = 48;
                vel = 48;
                break;
            case "Eevee":
                ps = 55;
                atk = 55;
                def = 50;
                atksp = 45;
                defsp = 65;
                vel = 55;
                break;
            case "Vaporeon":
                ps = 130;
                atk = 65;
                def = 60;
                atksp = 110;
                defsp = 95;
                vel = 65;
                break;
            case "Jolteon":
                ps = 65;
                atk = 65;
                def = 60;
                atksp = 110;
                defsp = 95;
                vel = 130;
                break;
            case "Flareon":
                ps = 65;
                atk = 130;
                def = 60;
                atksp = 95;
                defsp = 110;
                vel = 65;
                break;
            case "Porygon":
                ps = 65;
                atk = 60;
                def = 70;
                atksp = 85;
                defsp = 75;
                vel = 40;
                break;
            case "Omanyte":
                ps = 35;
                atk = 40;
                def = 100;
                atksp = 90;
                defsp = 55;
                vel = 35;
                break;
            case "Omastar":
                ps = 70;
                atk = 60;
                def = 125;
                atksp = 115;
                defsp = 70;
                vel = 55;
                break;
            case "Kabuto":
                ps = 30;
                atk = 80;
                def = 90;
                atksp = 55;
                defsp = 45;
                vel = 55;
                break;
            case "Kabutops":
                ps = 60;
                atk = 115;
                def = 105;
                atksp = 65;
                defsp = 70;
                vel = 80;
                break;
            case "Aerodactyl":
                ps = 80;
                atk = 105;
                def = 65;
                atksp = 60;
                defsp = 75;
                vel = 130;
                break;
            case "Snorlax":
                ps = 160;
                atk = 110;
                def = 65;
                atksp = 65;
                defsp = 110;
                vel = 30;
                break;
            case "Articuno":
                ps = 90;
                atk = 85;
                def = 100;
                atksp = 95;
                defsp = 125;
                vel = 85;
                break;
            case "Zapdos":
                ps = 90;
                atk = 90;
                def = 85;
                atksp = 125;
                defsp = 90;
                vel = 100;
                break;
            case "Moltres":
                ps = 90;
                atk = 100;
                def = 90;
                atksp = 125;
                defsp = 85;
                vel = 90;
                break;
            case "Dratini":
                ps = 41;
                atk = 64;
                def = 45;
                atksp = 50;
                defsp = 50;
                vel = 50;
                break;
            case "Dragonair":
                ps = 61;
                atk = 84;
                def = 65;
                atksp = 70;
                defsp = 70;
                vel = 70;
                break;
            case "Dragonite":
                ps = 91;
                atk = 134;
                def = 95;
                atksp = 100;
                defsp = 100;
                vel = 80;
                break;
            case "Mewtwo":
                ps = 106;
                atk = 110;
                def = 90;
                atksp = 154;
                defsp = 90;
                vel = 130;
                break;
            case "Mew":
                ps = 100;
                atk = 100;
                def = 100;
                atksp = 100;
                defsp = 100;
                vel = 100;
                break;
            case "Chikorita":
                ps = 45;
                atk = 49;
                def = 65;
                atksp = 49;
                defsp = 65;
                vel = 45;
                break;
            case "Bayleef":
                ps = 60;
                atk = 62;
                def = 80;
                atksp = 63;
                defsp = 80;
                vel = 60;
                break;
            case "Meganium":
                ps = 80;
                atk = 82;
                def = 100;
                atksp = 83;
                defsp = 100;
                vel = 80;
                break;
            case "Cyndaquil":
                ps = 39;
                atk = 52;
                def = 43;
                atksp = 60;
                defsp = 50;
                vel = 65;
                break;
            case "Quilava":
                ps = 58;
                atk = 64;
                def = 58;
                atksp = 80;
                defsp = 65;
                vel = 80;
                break;
            case "Typhlosion":
                ps = 78;
                atk = 84;
                def = 78;
                atksp = 109;
                defsp = 85;
                vel = 100;
                break;
            case "Totodile":
                ps = 50;
                atk = 65;
                def = 64;
                atksp = 44;
                defsp = 48;
                vel = 43;
                break;
            case "Croconaw":
                ps = 65;
                atk = 80;
                def = 80;
                atksp = 59;
                defsp = 63;
                vel = 58;
                break;
            case "Feraligatr":
                ps = 85;
                atk = 105;
                def = 100;
                atksp = 79;
                defsp = 83;
                vel = 78;
                break;
            case "Sentret":
                ps = 35;
                atk = 46;
                def = 34;
                atksp = 35;
                defsp = 45;
                vel = 20;
                break;
            case "Furret":
                ps = 85;
                atk = 76;
                def = 64;
                atksp = 45;
                defsp = 55;
                vel = 90;
                break;
            case "Hoothoot":
                ps = 60;
                atk = 30;
                def = 30;
                atksp = 36;
                defsp = 56;
                vel = 50;
                break;
            case "Noctowl":
                ps = 100;
                atk = 50;
                def = 50;
                atksp = 86;
                defsp = 96;
                vel = 70;
                break;
            case "Ledyba":
                ps = 40;
                atk = 20;
                def = 30;
                atksp = 40;
                defsp = 80;
                vel = 55;
                break;
            case "Ledian":
                ps = 55;
                atk = 35;
                def = 50;
                atksp = 55;
                defsp = 110;
                vel = 85;
                break;
            case "Spinarak":
                ps = 40;
                atk = 60;
                def = 40;
                atksp = 40;
                defsp = 40;
                vel = 30;
                break;
            case "Ariados":
                ps = 70;
                atk = 90;
                def = 70;
                atksp = 60;
                defsp = 70;
                vel = 40;
                break;
            case "Crobat":
                ps = 85;
                atk = 90;
                def = 80;
                atksp = 70;
                defsp = 80;
                vel = 130;
                break;
            case "Chinchou":
                ps = 75;
                atk = 38;
                def = 38;
                atksp = 56;
                defsp = 56;
                vel = 67;
                break;
            case "Lanturn":
                ps = 125;
                atk = 58;
                def = 58;
                atksp = 76;
                defsp = 76;
                vel = 67;
                break;
            case "Pichu":
                ps = 20;
                atk = 40;
                def = 15;
                atksp = 35;
                defsp = 35;
                vel = 60;
                break;
            case "Cleffa":
                ps = 50;
                atk = 25;
                def = 28;
                atksp = 45;
                defsp = 55;
                vel = 15;
                break;
            case "Igglybuff":
                ps = 90;
                atk = 30;
                def = 15;
                atksp = 40;
                defsp = 20;
                vel = 15;
                break;
            case "Togepi":
                ps = 35;
                atk = 20;
                def = 65;
                atksp = 40;
                defsp = 65;
                vel = 20;
                break;
            case "Togetic":
                ps = 55;
                atk = 40;
                def = 85;
                atksp = 80;
                defsp = 105;
                vel = 40;
                break;
            case "Natu":
                ps = 40;
                atk = 50;
                def = 45;
                atksp = 70;
                defsp = 45;
                vel = 70;
                break;
            case "Xatu":
                ps = 65;
                atk = 75;
                def = 70;
                atksp = 95;
                defsp = 70;
                vel = 95;
                break;
            case "Mareep":
                ps = 55;
                atk = 40;
                def = 40;
                atksp = 65;
                defsp = 45;
                vel = 35;
                break;
            case "Flaaffy":
                ps = 70;
                atk = 55;
                def = 55;
                atksp = 80;
                defsp = 60;
                vel = 45;
                break;
            case "Ampharos":
                ps = 90;
                atk = 75;
                def = 85;
                atksp = 115;
                defsp = 90;
                vel = 55;
                break;
            case "Bellossom":
                ps = 75;
                atk = 80;
                def = 95;
                atksp = 90;
                defsp = 100;
                vel = 50;
                break;
            case "Marill":
                ps = 70;
                atk = 20;
                def = 50;
                atksp = 20;
                defsp = 50;
                vel = 40;
                break;
            case "Azumarill":
                ps = 100;
                atk = 50;
                def = 80;
                atksp = 60;
                defsp = 80;
                vel = 50;
                break;
            case "Sudowoodo":
                ps = 70;
                atk = 100;
                def = 115;
                atksp = 30;
                defsp = 65;
                vel = 30;
                break;
            case "Politoed":
                ps = 90;
                atk = 75;
                def = 75;
                atksp = 90;
                defsp = 100;
                vel = 70;
                break;
            case "Hoppip":
                ps = 35;
                atk = 35;
                def = 40;
                atksp = 35;
                defsp = 55;
                vel = 50;
                break;
            case "Skiploom":
                ps = 55;
                atk = 45;
                def = 50;
                atksp = 45;
                defsp = 65;
                vel = 80;
                break;
            case "Jumpluff":
                ps = 75;
                atk = 55;
                def = 70;
                atksp = 55;
                defsp = 95;
                vel = 110;
                break;
            case "Aipom":
                ps = 55;
                atk = 70;
                def = 55;
                atksp = 40;
                defsp = 55;
                vel = 85;
                break;
            case "Sunkern":
                ps = 30;
                atk = 30;
                def = 30;
                atksp = 30;
                defsp = 30;
                vel = 30;
                break;
            case "Sunflora":
                ps = 75;
                atk = 75;
                def = 55;
                atksp = 105;
                defsp = 85;
                vel = 30;
                break;
            case "Yanma":
                ps = 65;
                atk = 65;
                def = 45;
                atksp = 75;
                defsp = 45;
                vel = 95;
                break;
            case "Wooper":
                ps = 55;
                atk = 45;
                def = 45;
                atksp = 25;
                defsp = 25;
                vel = 15;
                break;
            case "Quagsire":
                ps = 95;
                atk = 85;
                def = 85;
                atksp = 65;
                defsp = 65;
                vel = 35;
                break;
            case "Espeon":
                ps = 65;
                atk = 65;
                def = 60;
                atksp = 130;
                defsp = 95;
                vel = 110;
                break;
            case "Umbreon":
                ps = 95;
                atk = 65;
                def = 110;
                atksp = 60;
                defsp = 130;
                vel = 65;
                break;
            case "Murkrow":
                ps = 60;
                atk = 85;
                def = 42;
                atksp = 85;
                defsp = 42;
                vel = 91;
                break;
            case "Slowking":
                ps = 95;
                atk = 75;
                def = 80;
                atksp = 100;
                defsp = 110;
                vel = 30;
                break;
            case "Misdreavus":
                ps = 60;
                atk = 60;
                def = 60;
                atksp = 85;
                defsp = 85;
                vel = 85;
                break;
            case "Unown":
                ps = 48;
                atk = 72;
                def = 48;
                atksp = 72;
                defsp = 48;
                vel = 48;
                break;
            case "Wobbuffet":
                ps = 190;
                atk = 33;
                def = 58;
                atksp = 33;
                defsp = 58;
                vel = 33;
                break;
            case "Girafarig":
                ps = 70;
                atk = 80;
                def = 65;
                atksp = 90;
                defsp = 65;
                vel = 85;
                break;
            case "Pineco":
                ps = 50;
                atk = 65;
                def = 90;
                atksp = 35;
                defsp = 35;
                vel = 15;
                break;
            case "Forretress":
                ps = 75;
                atk = 90;
                def = 140;
                atksp = 60;
                defsp = 60;
                vel = 40;
                break;
            case "Dunsparce":
                ps = 100;
                atk = 70;
                def = 70;
                atksp = 65;
                defsp = 65;
                vel = 45;
                break;
            case "Gligar":
                ps = 65;
                atk = 75;
                def = 105;
                atksp = 35;
                defsp = 65;
                vel = 85;
                break;
            case "Steelix":
                ps = 75;
                atk = 85;
                def = 200;
                atksp = 55;
                defsp = 65;
                vel = 30;
                break;
            case "Snubbull":
                ps = 60;
                atk = 80;
                def = 50;
                atksp = 40;
                defsp = 40;
                vel = 30;
                break;
            case "Granbull":
                ps = 90;
                atk = 120;
                def = 75;
                atksp = 60;
                defsp = 60;
                vel = 45;
                break;
            case "Qwilfish":
                ps = 65;
                atk = 95;
                def = 85;
                atksp = 55;
                defsp = 55;
                vel = 85;
                break;
            case "Scizor":
                ps = 70;
                atk = 130;
                def = 100;
                atksp = 55;
                defsp = 80;
                vel = 65;
                break;
            case "Shuckle":
                ps = 20;
                atk = 10;
                def = 230;
                atksp = 10;
                defsp = 230;
                vel = 5;
                break;
            case "Heracross":
                ps = 80;
                atk = 125;
                def = 75;
                atksp = 40;
                defsp = 95;
                vel = 85;
                break;
            case "Sneasel":
                ps = 55;
                atk = 95;
                def = 55;
                atksp = 35;
                defsp = 75;
                vel = 115;
                break;
            case "Teddiursa":
                ps = 60;
                atk = 80;
                def = 50;
                atksp = 50;
                defsp = 50;
                vel = 40;
                break;
            case "Ursaring":
                ps = 90;
                atk = 130;
                def = 75;
                atksp = 75;
                defsp = 75;
                vel = 55;
                break;
            case "Slugma":
                ps = 40;
                atk = 40;
                def = 40;
                atksp = 70;
                defsp = 40;
                vel = 20;
                break;
            case "Magcargo":
                ps = 60;
                atk = 50;
                def = 120;
                atksp = 90;
                defsp = 80;
                vel = 30;
                break;
            case "Swinub":
                ps = 50;
                atk = 50;
                def = 40;
                atksp = 30;
                defsp = 30;
                vel = 50;
                break;
            case "Piloswine":
                ps = 100;
                atk = 100;
                def = 80;
                atksp = 60;
                defsp = 60;
                vel = 50;
                break;
            case "Corsola":
                ps = 65;
                atk = 55;
                def = 95;
                atksp = 65;
                defsp = 95;
                vel = 35;
                break;
            case "Remoraid":
                ps = 35;
                atk = 65;
                def = 35;
                atksp = 65;
                defsp = 35;
                vel = 65;
                break;
            case "Octillery":
                ps = 75;
                atk = 105;
                def = 75;
                atksp = 105;
                defsp = 75;
                vel = 45;
                break;
            case "Delibird":
                ps = 45;
                atk = 55;
                def = 45;
                atksp = 65;
                defsp = 45;
                vel = 75;
                break;
            case "Mantine":
                ps = 85;
                atk = 40;
                def = 70;
                atksp = 80;
                defsp = 140;
                vel = 70;
                break;
            case "Skarmory":
                ps = 65;
                atk = 80;
                def = 140;
                atksp = 40;
                defsp = 70;
                vel = 70;
                break;
            case "Houndour":
                ps = 45;
                atk = 60;
                def = 30;
                atksp = 80;
                defsp = 50;
                vel = 65;
                break;
            case "Houndoom":
                ps = 75;
                atk = 90;
                def = 50;
                atksp = 110;
                defsp = 80;
                vel = 95;
                break;
            case "Kingdra":
                ps = 75;
                atk = 95;
                def = 95;
                atksp = 95;
                defsp = 95;
                vel = 85;
                break;
            case "Phanpy":
                ps = 90;
                atk = 60;
                def = 60;
                atksp = 40;
                defsp = 40;
                vel = 40;
                break;
            case "Donphan":
                ps = 90;
                atk = 120;
                def = 120;
                atksp = 60;
                defsp = 60;
                vel = 50;
                break;
            case "Porygon2":
                ps = 85;
                atk = 80;
                def = 90;
                atksp = 105;
                defsp = 95;
                vel = 60;
                break;
            case "Stantler":
                ps = 73;
                atk = 95;
                def = 62;
                atksp = 85;
                defsp = 65;
                vel = 85;
                break;
            case "Smeargle":
                ps = 55;
                atk = 20;
                def = 35;
                atksp = 20;
                defsp = 45;
                vel = 75;
                break;
            case "Tyrogue":
                ps = 35;
                atk = 35;
                def = 35;
                atksp = 35;
                defsp = 35;
                vel = 35;
                break;
            case "Hitmontop":
                ps = 50;
                atk = 95;
                def = 95;
                atksp = 35;
                defsp = 110;
                vel = 70;
                break;
            case "Smoochum":
                ps = 45;
                atk = 30;
                def = 15;
                atksp = 85;
                defsp = 65;
                vel = 65;
                break;
            case "Elekid":
                ps = 45;
                atk = 63;
                def = 37;
                atksp = 65;
                defsp = 55;
                vel = 95;
                break;
            case "Magby":
                ps = 45;
                atk = 75;
                def = 37;
                atksp = 70;
                defsp = 55;
                vel = 83;
                break;
            case "Miltank":
                ps = 95;
                atk = 80;
                def = 105;
                atksp = 40;
                defsp = 70;
                vel = 100;
                break;
            case "Blissey":
                ps = 255;
                atk = 10;
                def = 10;
                atksp = 75;
                defsp = 135;
                vel = 55;
                break;
            case "Raikou":
                ps = 90;
                atk = 85;
                def = 75;
                atksp = 115;
                defsp = 100;
                vel = 115;
                break;
            case "Entei":
                ps = 115;
                atk = 115;
                def = 85;
                atksp = 90;
                defsp = 75;
                vel = 100;
                break;
            case "Suicune":
                ps = 100;
                atk = 75;
                def = 115;
                atksp = 90;
                defsp = 115;
                vel = 85;
                break;
            case "Larvitar":
                ps = 50;
                atk = 64;
                def = 50;
                atksp = 45;
                defsp = 50;
                vel = 41;
                break;
            case "Pupitar":
                ps = 70;
                atk = 84;
                def = 70;
                atksp = 65;
                defsp = 70;
                vel = 51;
                break;
            case "Tyranitar":
                ps = 100;
                atk = 134;
                def = 110;
                atksp = 95;
                defsp = 100;
                vel = 61;
                break;
            case "Lugia":
                ps = 106;
                atk = 90;
                def = 130;
                atksp = 90;
                defsp = 154;
                vel = 110;
                break;
            case "Ho-Oh":
                ps = 106;
                atk = 130;
                def = 90;
                atksp = 110;
                defsp = 154;
                vel = 90;
                break;
            case "Celebi":
                ps = 100;
                atk = 100;
                def = 100;
                atksp = 100;
                defsp = 100;
                vel = 100;
                break;
            case "Treecko":
                ps = 40;
                atk = 45;
                def = 35;
                atksp = 65;
                defsp = 55;
                vel = 70;
                break;
            case "Grovyle":
                ps = 50;
                atk = 65;
                def = 45;
                atksp = 85;
                defsp = 65;
                vel = 95;
                break;
            case "Sceptile":
                ps = 70;
                atk = 85;
                def = 65;
                atksp = 105;
                defsp = 85;
                vel = 120;
                break;
            case "Torchic":
                ps = 45;
                atk = 60;
                def = 40;
                atksp = 70;
                defsp = 50;
                vel = 45;
                break;
            case "Combusken":
                ps = 60;
                atk = 85;
                def = 60;
                atksp = 85;
                defsp = 60;
                vel = 55;
                break;
            case "Blaziken":
                ps = 80;
                atk = 120;
                def = 70;
                atksp = 110;
                defsp = 70;
                vel = 80;
                break;
            case "Mudkip":
                ps = 50;
                atk = 70;
                def = 50;
                atksp = 50;
                defsp = 50;
                vel = 40;
                break;
            case "Marshtomp":
                ps = 70;
                atk = 85;
                def = 70;
                atksp = 60;
                defsp = 70;
                vel = 50;
                break;
            case "Swampert":
                ps = 100;
                atk = 110;
                def = 90;
                atksp = 85;
                defsp = 90;
                vel = 60;
                break;
            case "Poochyena":
                ps = 35;
                atk = 55;
                def = 35;
                atksp = 30;
                defsp = 30;
                vel = 35;
                break;
            case "Mightyena":
                ps = 70;
                atk = 90;
                def = 70;
                atksp = 60;
                defsp = 60;
                vel = 70;
                break;
            case "Zigzagoon":
                ps = 38;
                atk = 30;
                def = 41;
                atksp = 30;
                defsp = 41;
                vel = 60;
                break;
            case "Linoone":
                ps = 78;
                atk = 70;
                def = 61;
                atksp = 50;
                defsp = 61;
                vel = 100;
                break;
            case "Wurmple":
                ps = 45;
                atk = 45;
                def = 35;
                atksp = 20;
                defsp = 30;
                vel = 20;
                break;
            case "Silcoon":
                ps = 50;
                atk = 35;
                def = 55;
                atksp = 25;
                defsp = 25;
                vel = 15;
                break;
            case "Beautifly":
                ps = 60;
                atk = 70;
                def = 50;
                atksp = 100;
                defsp = 50;
                vel = 65;
                break;
            case "Cascoon":
                ps = 50;
                atk = 35;
                def = 55;
                atksp = 25;
                defsp = 25;
                vel = 15;
                break;
            case "Dustox":
                ps = 60;
                atk = 50;
                def = 70;
                atksp = 50;
                defsp = 90;
                vel = 65;
                break;
            case "Lotad":
                ps = 40;
                atk = 30;
                def = 30;
                atksp = 40;
                defsp = 50;
                vel = 30;
                break;
            case "Lombre":
                ps = 60;
                atk = 50;
                def = 50;
                atksp = 60;
                defsp = 70;
                vel = 50;
                break;
            case "Ludicolo":
                ps = 80;
                atk = 70;
                def = 70;
                atksp = 90;
                defsp = 100;
                vel = 70;
                break;
            case "Seedot":
                ps = 40;
                atk = 40;
                def = 50;
                atksp = 30;
                defsp = 30;
                vel = 30;
                break;
            case "Nuzleaf":
                ps = 70;
                atk = 70;
                def = 40;
                atksp = 60;
                defsp = 40;
                vel = 60;
                break;
            case "Shiftry":
                ps = 90;
                atk = 100;
                def = 60;
                atksp = 90;
                defsp = 60;
                vel = 80;
                break;
            case "Taillow":
                ps = 40;
                atk = 55;
                def = 30;
                atksp = 30;
                defsp = 30;
                vel = 85;
                break;
            case "Swellow":
                ps = 60;
                atk = 85;
                def = 60;
                atksp = 75;
                defsp = 50;
                vel = 125;
                break;
            case "Wingull":
                ps = 40;
                atk = 30;
                def = 30;
                atksp = 55;
                defsp = 30;
                vel = 85;
                break;
            case "Pelipper":
                ps = 60;
                atk = 50;
                def = 100;
                atksp = 95;
                defsp = 70;
                vel = 65;
                break;
            case "Ralts":
                ps = 28;
                atk = 25;
                def = 25;
                atksp = 45;
                defsp = 35;
                vel = 40;
                break;
            case "Kirlia":
                ps = 38;
                atk = 35;
                def = 35;
                atksp = 65;
                defsp = 55;
                vel = 50;
                break;
            case "Gardevoir":
                ps = 68;
                atk = 65;
                def = 65;
                atksp = 125;
                defsp = 115;
                vel = 80;
                break;
            case "Surskit":
                ps = 40;
                atk = 30;
                def = 32;
                atksp = 50;
                defsp = 52;
                vel = 65;
                break;
            case "Masquerain":
                ps = 70;
                atk = 60;
                def = 62;
                atksp = 100;
                defsp = 82;
                vel = 80;
                break;
            case "Shroomish":
                ps = 60;
                atk = 40;
                def = 60;
                atksp = 40;
                defsp = 60;
                vel = 35;
                break;
            case "Breloom":
                ps = 60;
                atk = 130;
                def = 80;
                atksp = 60;
                defsp = 60;
                vel = 70;
                break;
            case "Slakoth":
                ps = 60;
                atk = 60;
                def = 60;
                atksp = 35;
                defsp = 35;
                vel = 30;
                break;
            case "Vigoroth":
                ps = 80;
                atk = 80;
                def = 80;
                atksp = 55;
                defsp = 55;
                vel = 90;
                break;
            case "Slaking":
                ps = 150;
                atk = 160;
                def = 100;
                atksp = 95;
                defsp = 65;
                vel = 100;
                break;
            case "Nincada":
                ps = 31;
                atk = 45;
                def = 90;
                atksp = 30;
                defsp = 30;
                vel = 40;
                break;
            case "Ninjask":
                ps = 61;
                atk = 90;
                def = 45;
                atksp = 50;
                defsp = 50;
                vel = 160;
                break;
            case "Shedinja":
                ps = 1;
                atk = 90;
                def = 45;
                atksp = 30;
                defsp = 30;
                vel = 40;
                break;
            case "Whismur":
                ps = 64;
                atk = 51;
                def = 23;
                atksp = 51;
                defsp = 23;
                vel = 28;
                break;
            case "Loudred":
                ps = 84;
                atk = 71;
                def = 43;
                atksp = 71;
                defsp = 43;
                vel = 48;
                break;
            case "Exploud":
                ps = 104;
                atk = 91;
                def = 63;
                atksp = 91;
                defsp = 73;
                vel = 68;
                break;
            case "Makuhita":
                ps = 72;
                atk = 60;
                def = 30;
                atksp = 20;
                defsp = 30;
                vel = 25;
                break;
            case "Hariyama":
                ps = 144;
                atk = 120;
                def = 60;
                atksp = 40;
                defsp = 60;
                vel = 50;
                break;
            case "Azurill":
                ps = 50;
                atk = 20;
                def = 40;
                atksp = 20;
                defsp = 40;
                vel = 20;
                break;
            case "Nosepass":
                ps = 30;
                atk = 45;
                def = 135;
                atksp = 45;
                defsp = 90;
                vel = 30;
                break;
            case "Skitty":
                ps = 50;
                atk = 45;
                def = 45;
                atksp = 35;
                defsp = 35;
                vel = 50;
                break;
            case "Delcatty":
                ps = 70;
                atk = 65;
                def = 65;
                atksp = 55;
                defsp = 55;
                vel = 90;
                break;
            case "Sableye":
                ps = 50;
                atk = 75;
                def = 75;
                atksp = 65;
                defsp = 65;
                vel = 50;
                break;
            case "Mawile":
                ps = 50;
                atk = 85;
                def = 85;
                atksp = 55;
                defsp = 55;
                vel = 50;
                break;
            case "Aron":
                ps = 50;
                atk = 70;
                def = 100;
                atksp = 40;
                defsp = 40;
                vel = 30;
                break;
            case "Lairon":
                ps = 60;
                atk = 90;
                def = 140;
                atksp = 50;
                defsp = 50;
                vel = 40;
                break;
            case "Aggron":
                ps = 70;
                atk = 110;
                def = 180;
                atksp = 60;
                defsp = 60;
                vel = 50;
                break;
            case "Meditite":
                ps = 30;
                atk = 40;
                def = 55;
                atksp = 40;
                defsp = 55;
                vel = 60;
                break;
            case "Medicham":
                ps = 60;
                atk = 60;
                def = 75;
                atksp = 60;
                defsp = 75;
                vel = 80;
                break;
            case "Electrike":
                ps = 40;
                atk = 45;
                def = 40;
                atksp = 65;
                defsp = 40;
                vel = 65;
                break;
            case "Manectric":
                ps = 70;
                atk = 75;
                def = 60;
                atksp = 105;
                defsp = 60;
                vel = 105;
                break;
            case "Plusle":
                ps = 60;
                atk = 50;
                def = 40;
                atksp = 85;
                defsp = 75;
                vel = 95;
                break;
            case "Minun":
                ps = 60;
                atk = 40;
                def = 50;
                atksp = 75;
                defsp = 85;
                vel = 95;
                break;
            case "Volbeat":
                ps = 65;
                atk = 73;
                def = 75;
                atksp = 47;
                defsp = 85;
                vel = 85;
                break;
            case "Illumise":
                ps = 65;
                atk = 47;
                def = 75;
                atksp = 73;
                defsp = 85;
                vel = 85;
                break;
            case "Roselia":
                ps = 50;
                atk = 60;
                def = 45;
                atksp = 100;
                defsp = 80;
                vel = 65;
                break;
            case "Gulpin":
                ps = 70;
                atk = 43;
                def = 53;
                atksp = 43;
                defsp = 53;
                vel = 40;
                break;
            case "Swalot":
                ps = 100;
                atk = 73;
                def = 83;
                atksp = 73;
                defsp = 83;
                vel = 55;
                break;
            case "Carvanha":
                ps = 45;
                atk = 90;
                def = 20;
                atksp = 65;
                defsp = 20;
                vel = 65;
                break;
            case "Sharpedo":
                ps = 70;
                atk = 120;
                def = 40;
                atksp = 95;
                defsp = 40;
                vel = 95;
                break;
            case "Wailmer":
                ps = 130;
                atk = 70;
                def = 35;
                atksp = 70;
                defsp = 35;
                vel = 60;
                break;
            case "Wailord":
                ps = 170;
                atk = 90;
                def = 45;
                atksp = 90;
                defsp = 45;
                vel = 60;
                break;
            case "Numel":
                ps = 60;
                atk = 60;
                def = 40;
                atksp = 65;
                defsp = 45;
                vel = 35;
                break;
            case "Camerupt":
                ps = 70;
                atk = 100;
                def = 70;
                atksp = 105;
                defsp = 75;
                vel = 40;
                break;
            case "Torkoal":
                ps = 70;
                atk = 85;
                def = 140;
                atksp = 85;
                defsp = 70;
                vel = 20;
                break;
            case "Spoink":
                ps = 60;
                atk = 25;
                def = 35;
                atksp = 70;
                defsp = 80;
                vel = 60;
                break;
            case "Grumpig":
                ps = 80;
                atk = 45;
                def = 65;
                atksp = 90;
                defsp = 110;
                vel = 80;
                break;
            case "Spinda":
                ps = 60;
                atk = 60;
                def = 60;
                atksp = 60;
                defsp = 60;
                vel = 60;
                break;
            case "Trapinch":
                ps = 45;
                atk = 100;
                def = 45;
                atksp = 45;
                defsp = 45;
                vel = 10;
                break;
            case "Vibrava":
                ps = 50;
                atk = 70;
                def = 50;
                atksp = 50;
                defsp = 50;
                vel = 70;
                break;
            case "Flygon":
                ps = 80;
                atk = 100;
                def = 80;
                atksp = 80;
                defsp = 80;
                vel = 100;
                break;
            case "Cacnea":
                ps = 50;
                atk = 85;
                def = 40;
                atksp = 85;
                defsp = 40;
                vel = 35;
                break;
            case "Cacturne":
                ps = 70;
                atk = 115;
                def = 60;
                atksp = 115;
                defsp = 60;
                vel = 55;
                break;
            case "Swablu":
                ps = 45;
                atk = 40;
                def = 60;
                atksp = 40;
                defsp = 75;
                vel = 50;
                break;
            case "Altaria":
                ps = 75;
                atk = 70;
                def = 90;
                atksp = 70;
                defsp = 105;
                vel = 80;
                break;
            case "Zangoose":
                ps = 73;
                atk = 115;
                def = 60;
                atksp = 60;
                defsp = 60;
                vel = 90;
                break;
            case "Seviper":
                ps = 73;
                atk = 100;
                def = 60;
                atksp = 100;
                defsp = 60;
                vel = 65;
                break;
            case "Lunatone":
                ps = 90;
                atk = 55;
                def = 65;
                atksp = 95;
                defsp = 85;
                vel = 70;
                break;
            case "Solrock":
                ps = 90;
                atk = 95;
                def = 85;
                atksp = 55;
                defsp = 65;
                vel = 70;
                break;
            case "Barboach":
                ps = 50;
                atk = 48;
                def = 43;
                atksp = 46;
                defsp = 41;
                vel = 60;
                break;
            case "Whiscash":
                ps = 110;
                atk = 78;
                def = 73;
                atksp = 76;
                defsp = 71;
                vel = 60;
                break;
            case "Corphish":
                ps = 43;
                atk = 80;
                def = 65;
                atksp = 50;
                defsp = 35;
                vel = 35;
                break;
            case "Crawdaunt":
                ps = 63;
                atk = 120;
                def = 85;
                atksp = 90;
                defsp = 55;
                vel = 55;
                break;
            case "Baltoy":
                ps = 40;
                atk = 40;
                def = 55;
                atksp = 40;
                defsp = 70;
                vel = 55;
                break;
            case "Claydol":
                ps = 60;
                atk = 70;
                def = 105;
                atksp = 70;
                defsp = 120;
                vel = 75;
                break;
            case "Lileep":
                ps = 66;
                atk = 41;
                def = 77;
                atksp = 61;
                defsp = 87;
                vel = 23;
                break;
            case "Cradily":
                ps = 86;
                atk = 81;
                def = 97;
                atksp = 81;
                defsp = 107;
                vel = 43;
                break;
            case "Anorith":
                ps = 45;
                atk = 95;
                def = 50;
                atksp = 40;
                defsp = 50;
                vel = 75;
                break;
            case "Armaldo":
                ps = 75;
                atk = 125;
                def = 100;
                atksp = 70;
                defsp = 80;
                vel = 45;
                break;
            case "Feebas":
                ps = 20;
                atk = 15;
                def = 20;
                atksp = 10;
                defsp = 55;
                vel = 80;
                break;
            case "Milotic":
                ps = 95;
                atk = 60;
                def = 79;
                atksp = 100;
                defsp = 125;
                vel = 81;
                break;
            case "Castform":
                ps = 70;
                atk = 70;
                def = 70;
                atksp = 70;
                defsp = 70;
                vel = 70;
                break;
            case "Kecleon":
                ps = 60;
                atk = 90;
                def = 70;
                atksp = 60;
                defsp = 120;
                vel = 40;
                break;
            case "Shuppet":
                ps = 44;
                atk = 75;
                def = 35;
                atksp = 63;
                defsp = 33;
                vel = 45;
                break;
            case "Banette":
                ps = 64;
                atk = 115;
                def = 65;
                atksp = 83;
                defsp = 63;
                vel = 65;
                break;
            case "Duskull":
                ps = 20;
                atk = 40;
                def = 90;
                atksp = 30;
                defsp = 90;
                vel = 25;
                break;
            case "Dusclops":
                ps = 40;
                atk = 70;
                def = 130;
                atksp = 60;
                defsp = 130;
                vel = 25;
                break;
            case "Tropius":
                ps = 99;
                atk = 68;
                def = 83;
                atksp = 72;
                defsp = 87;
                vel = 51;
                break;
            case "Chimecho":
                ps = 75;
                atk = 50;
                def = 80;
                atksp = 95;
                defsp = 90;
                vel = 65;
                break;
            case "Absol":
                ps = 65;
                atk = 130;
                def = 60;
                atksp = 75;
                defsp = 60;
                vel = 75;
                break;
            case "Wynaut":
                ps = 95;
                atk = 23;
                def = 48;
                atksp = 23;
                defsp = 48;
                vel = 23;
                break;
            case "Snorunt":
                ps = 50;
                atk = 50;
                def = 50;
                atksp = 50;
                defsp = 50;
                vel = 50;
                break;
            case "Glalie":
                ps = 80;
                atk = 80;
                def = 80;
                atksp = 80;
                defsp = 80;
                vel = 80;
                break;
            case "Spheal":
                ps = 70;
                atk = 40;
                def = 50;
                atksp = 55;
                defsp = 50;
                vel = 25;
                break;
            case "Sealeo":
                ps = 90;
                atk = 60;
                def = 70;
                atksp = 75;
                defsp = 70;
                vel = 45;
                break;
            case "Walrein":
                ps = 110;
                atk = 80;
                def = 90;
                atksp = 95;
                defsp = 90;
                vel = 65;
                break;
            case "Clamperl":
                ps = 35;
                atk = 64;
                def = 85;
                atksp = 74;
                defsp = 55;
                vel = 32;
                break;
            case "Huntail":
                ps = 55;
                atk = 104;
                def = 105;
                atksp = 94;
                defsp = 75;
                vel = 52;
                break;
            case "Gorebyss":
                ps = 55;
                atk = 84;
                def = 105;
                atksp = 114;
                defsp = 75;
                vel = 52;
                break;
            case "Relicanth":
                ps = 100;
                atk = 90;
                def = 130;
                atksp = 45;
                defsp = 65;
                vel = 55;
                break;
            case "Luvdisc":
                ps = 43;
                atk = 30;
                def = 55;
                atksp = 40;
                defsp = 65;
                vel = 97;
                break;
            case "Bagon":
                ps = 45;
                atk = 75;
                def = 60;
                atksp = 40;
                defsp = 30;
                vel = 50;
                break;
            case "Shelgon":
                ps = 65;
                atk = 95;
                def = 100;
                atksp = 60;
                defsp = 50;
                vel = 50;
                break;
            case "Salamence":
                ps = 95;
                atk = 135;
                def = 80;
                atksp = 110;
                defsp = 80;
                vel = 100;
                break;
            case "Beldum":
                ps = 40;
                atk = 55;
                def = 80;
                atksp = 35;
                defsp = 60;
                vel = 30;
                break;
            case "Metang":
                ps = 60;
                atk = 75;
                def = 100;
                atksp = 55;
                defsp = 80;
                vel = 50;
                break;
            case "Metagross":
                ps = 80;
                atk = 135;
                def = 130;
                atksp = 95;
                defsp = 90;
                vel = 70;
                break;
            case "Regirock":
                ps = 80;
                atk = 100;
                def = 200;
                atksp = 50;
                defsp = 100;
                vel = 50;
                break;
            case "Regice":
                ps = 80;
                atk = 50;
                def = 100;
                atksp = 100;
                defsp = 200;
                vel = 50;
                break;
            case "Registeel":
                ps = 80;
                atk = 75;
                def = 150;
                atksp = 75;
                defsp = 150;
                vel = 50;
                break;
            case "Latias":
                ps = 80;
                atk = 80;
                def = 90;
                atksp = 110;
                defsp = 130;
                vel = 110;
                break;
            case "Latios":
                ps = 80;
                atk = 90;
                def = 80;
                atksp = 130;
                defsp = 110;
                vel = 110;
                break;
            case "Kyogre":
                ps = 100;
                atk = 100;
                def = 90;
                atksp = 150;
                defsp = 140;
                vel = 90;
                break;
            case "Groudon":
                ps = 100;
                atk = 150;
                def = 140;
                atksp = 100;
                defsp = 90;
                vel = 90;
                break;
            case "Rayquaza":
                ps = 105;
                atk = 150;
                def = 90;
                atksp = 150;
                defsp = 90;
                vel = 95;
                break;
            case "Jirachi":
                ps = 100;
                atk = 100;
                def = 100;
                atksp = 100;
                defsp = 100;
                vel = 100;
                break;
            case "Deoxys (N)":
                ps = 50;
                atk = 150;
                def = 50;
                atksp = 150;
                defsp = 50;
                vel = 150;
                break;
            case "Klefki":
                ps = 57;
                atk = 80;
                def = 91;
                atksp = 80;
                defsp = 87;
                vel = 75;
                break;
            default:
                ps = null;
                atk = null;
                def = null;
                atksp = null;
                defsp = null;
                vel = null;
        }
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
            } else {
                alert("La sume de los EVs no pueden superar los 510");
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
        //correccion de decimales
        if (fatk - (Math.trunc(fatk)) >= 0.9) {
            fatk = Math.trunc(fatk) + 1;
        } else {
            fatk = Math.trunc(fatk);
        }
        if (fdef - (Math.trunc(fdef)) >= 0.9) {
            fdef = Math.trunc(fdef) + 1;
        } else {
            fdef = Math.trunc(fdef);
        }
        if (fvel - (Math.trunc(fvel)) >= 0.9) {
            fvel = Math.trunc(fvel) + 1;
        } else {
            fvel = Math.trunc(fvel);
        }
        if (fatksp - (Math.trunc(fatksp)) >= 0.9) {
            fatksp = Math.trunc(fatksp) + 1;
        } else {
            fatksp = Math.trunc(fatksp);
        }
        if (fdefsp - (Math.trunc(fdefsp)) >= 0.9) {
            fdefsp = Math.trunc(fdefsp) + 1;
        } else {
            fdefsp = Math.trunc(fdefsp);
        }
        if (fps - (Math.trunc(fps)) >= 0.9) {
            fps = Math.trunc(fps) + 1;
        } else {
            fps = Math.trunc(fps);
        }
        //resultados
        $("#fps").val(fps);
        $("#fdef").val(fdef);
        $("#fvel").val(fvel);
        $("#fatksp").val(fatksp);
        $("#fdefsp").val(fdefsp);
        $("#fatk").val(fatk);
    });

});