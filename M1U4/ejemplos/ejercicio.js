var distance; //nose como hacer un random.range en js :/
var transport;

void travel(); {
    if (distance < 1000) {
        transport = "Pie";
    }
    else if (distance > 1000 && distance < 10000) {
        transport = "Bicicleta";
    }
    else if (distance > 10000 && distance < 30000) {
        transport = "Colectivo";
    }
    else if (distance > 30000 && distance < 100000) {
        transport = "Auto";
    }
    else {
        transport = "Avion";
    }

}