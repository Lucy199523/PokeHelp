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
        if (pokeselect !== "default" && nivel <= 100 && ivps <= 31 && ivatk <= 31 && ivdef <= 31 && ivatksp <= 31 &&
            ivdefsp <= 31 && ivvel <= 31) {
            //Calculos
            fatk = (((ivatk + 2 * atk + (evatk / 4)) * nivel / 100) + 5);
            fdef = (((ivdef + 2 * def + (evdef / 4)) * nivel / 100) + 5);
            fvel = (((ivvel + 2 * vel + (evvel / 4)) * nivel / 100) + 5);
            fatksp = (((ivatksp + 2 * atksp + (evatksp / 4)) * nivel / 100) + 5);
            fdefsp = (((ivdefsp + 2 * defsp + (evdefsp / 4)) * nivel / 100) + 5);
            fps = ((ivps + 2 * ps + (evps / 4)) * nivel / 100) + 10 + nivel;

            //correccion de decimales
            if (fatk-(Math.trunc(fatk))>=0.9) {
                fatk=Math.trunc(fatk)+1;
            } else {
                fatk=Math.trunc(fatk);
            }
            if (fdef-(Math.trunc(fdef))>=0.9) {
                fdef=Math.trunc(fdef)+1;
            } else {
                fdef=Math.trunc(fdef);
            }
            if (fvel-(Math.trunc(fvel))>=0.9) {
                fvel=Math.trunc(fvel)+1;
            } else {
                fvel=Math.trunc(fvel);
            }
            if (fatksp-(Math.trunc(fatksp))>=0.9) {
                fatksp=Math.trunc(fatksp)+1;
            } else {
                fatksp=Math.trunc(fatksp);
            }
            if (fdefsp-(Math.trunc(fdefsp))>=0.9) {
                fdefsp=Math.trunc(fdefsp)+1;
            } else {
                fdefsp=Math.trunc(fdefsp);
            }
            if (fps-(Math.trunc(fps))>=0.9) {
                fps=Math.trunc(fps)+1;
            } else {
                fps=Math.trunc(fps);
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
        } else {
            alert("Han faltado datos o ha ingresado un dato invalido, verifique que los IVs no superen los 31 o el nivel del pokemon no supere el 100 y que ha seleccionado un Pokemon")
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