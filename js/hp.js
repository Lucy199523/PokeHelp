function HiddenPower() {
    var sps = ivps;
    var satk = ivatk;
    var sdef = ivdef;
    var svel = ivvel;
    var sspatk = ivatksp;
    var sdefsp = ivdefsp;
    var t;
    var tipo;
    var img;
    img = document.getElementById('hp');
    if (sps % 2 == 0) {
        sps = 0
    } else {
        sps = 1
    }
    if (satk % 2 == 0) {
        satk = 0
    } else {
        satk = 2
    }
    if (sdef % 2 == 0) {
        sdef = 0
    } else {
        sdef = 4
    }
    if (svel % 2 == 0) {
        svel = 0
    } else {
        svel = 8
    }
    if (sspatk % 2 == 0) {
        sspatk = 0
    } else {
        sspatk = 16
    }
    if (sdefsp % 2 == 0) {
        sdefsp = 0
    } else {
        sdefsp = 32
    }

    t = sps + satk + sdef + svel + sspatk + sdefsp;

    tipo = Math.floor(t * 15 / 63);
    switch (tipo) {
        case 0:
            img.innerHTML = "<img src='img/tipos/s_fighting_en.png'/><br><img src='img/tipos/s_fighting_es.png'/>";
            break;
        case 1:
            img.innerHTML = "<img src='img/tipos/s_flying_en.png'/><br><img src='img/tipos/s_flying_es.png'/>";
            break;
        case 2:
            img.innerHTML = "<img src='img/tipos/s_poison_en.png'/><br><img src='img/tipos/s_poison_es.png'/>";
            break;
        case 3:
            img.innerHTML = "<img src='img/tipos/s_ground_en.png'/><br><img src='img/tipos/s_ground_es.png'/>";
            break;
        case 4:
            img.innerHTML = "<img src='img/tipos/s_rock_en.png'/><br><img src='img/tipos/s_rock_es.png'/>";
            break;
        case 5:
            img.innerHTML = "<img src='img/tipos/s_bug_en.png'/><br><img src='img/tipos/s_bug_es.png'/>";
            break;
        case 6:
            img.innerHTML = "<img src='img/tipos/s_ghost_en.png'/><br><img src='img/tipos/s_ghost_es.png'/>";
            break;
        case 7:
            img.innerHTML = "<img src='img/tipos/s_steel_en.png'/><br><img src='img/tipos/s_steel_es.png'/>";
            break;
        case 8:
            img.innerHTML = "<img src='img/tipos/s_fire_en.png'/><br><img src='img/tipos/s_fire_es.png'/>";
            break;
        case 9:
            img.innerHTML = "<img src='img/tipos/s_water_en.png'/><br><img src='img/tipos/s_water_es.png'/>";
            break;
        case 10:
            img.innerHTML = "<img src='img/tipos/s_grass_en.png'/><br><img src='img/tipos/s_grass_es.png'/>";
            break;
        case 11:
            img.innerHTML = "<img src='img/tipos/s_electric_en.png'/><br><img src='img/tipos/s_electric_es.png'/>";
            break;
        case 12:
            img.innerHTML = "<img src='img/tipos/s_psychic_en.png'/><br><img src='img/tipos/s_psychic_es.png'/>";
            break;
        case 13:
            img.innerHTML = "<img src='img/tipos/s_ice_en.png'/><br><img src='img/tipos/s_ice_es.png'/>";
            break;
        case 14:
            img.innerHTML = "<img src='img/tipos/s_dragon_en.png'/><br><img src='img/tipos/s_dragon_es.png'/>";
            break;
        case 15:
            img.innerHTML = "<img src='img/tipos/s_dark_en.png'/><br><img src='img/tipos/s_dark_es.png'/>";
            break;
        default:
            break;
    }

};