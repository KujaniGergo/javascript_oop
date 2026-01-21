//Konstruktor
function Konyv(cim, szerzo) {
    this.cim = cim;
    this.szerzo = szerzo;
    this.bemutatkozik = function() {
        console.log("Könyv címe: " + this.cim + ", Írta: " + this.szerzo);
    };
}

const konyv1 = new Konyv("Egri Csillagok", "Gárdonyi Géza");
console.log("Konstruktor eredmény:");
konyv1.bemutatkozik();


//Class
class Allat {
    constructor(nev) {
        this.nev = nev;
    }
    hangotAd() {
        console.log(this.nev + "ugat");
    }
}

class Kutya extends Allat {
    constructor(nev, fajta) {
        super(nev);
        this.fajta = fajta;
    }
    hangotAd() {
        console.log(this.nev + "ugat");
    }
}

const kutya1 = new Kutya("Bodri", "Puli");
console.log("Class eredmény:");
console.log(kutya1);
kutya1.hangotAd();


//Func
function Auto(marka, modell) {
    this.marka = marka;
    this.modell = modell;
}

Auto.prototype.vezet = function(tavolsag) {
    console.log(`Vezetés: ${this.marka} ${this.modell} elindult`);
};


const auto1 = new Auto("Suzuki", "Swift");
const auto2 = new Auto("Ford", "Focus");


console.log("Function eredmény:")
console.log("Első autó:");
console.log(auto1);

console.log("Második autó:");
console.log(auto2);