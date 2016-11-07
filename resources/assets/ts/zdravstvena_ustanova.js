var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Printer = (function () {
    function Printer() {
    }
    Printer.prototype.print = function () {
        console.log(this.text);
    };
    return Printer;
}());
var LaboratorijskiPregled = (function () {
    function LaboratorijskiPregled(datumVreme, text) {
        this.datumVreme = datumVreme;
        this.text = "Zakazan laboratorijski pregled";
        this.text = datumVreme + " " + this.text + text;
        this.print();
    }
    return LaboratorijskiPregled;
}());
var NivoSeceraUKrvi = (function (_super) {
    __extends(NivoSeceraUKrvi, _super);
    function NivoSeceraUKrvi(vrednost, vremePoslednjegObroka, text) {
        if (text === void 0) { text = " nivoa secera u krvi"; }
        _super.call(this, new Date(), text);
        this.vrednost = vrednost;
        this.vremePoslednjegObroka = vremePoslednjegObroka;
    }
    return NivoSeceraUKrvi;
}(LaboratorijskiPregled));
var HolesterolaUKrvi = (function (_super) {
    __extends(HolesterolaUKrvi, _super);
    function HolesterolaUKrvi(vrednost, vreme) {
        _super.call(this, vrednost, vreme, " nivoa holesterola u krvi");
    }
    return HolesterolaUKrvi;
}(NivoSeceraUKrvi));
var KrvniPritisak = (function (_super) {
    __extends(KrvniPritisak, _super);
    function KrvniPritisak(gornja, donja, puls) {
        _super.call(this, new Date(), " krvnog pritiska");
        this.gornja = gornja;
        this.donja = donja;
        this.puls = puls;
    }
    return KrvniPritisak;
}(LaboratorijskiPregled));
var Osoba = (function () {
    function Osoba(ime, prezime) {
        this.ime = ime;
        this.prezime = prezime;
    }
    return Osoba;
}());
var Doktor = (function (_super) {
    __extends(Doktor, _super);
    function Doktor(ime, prezime, specijalnost) {
        _super.call(this, ime, prezime);
        this.specijalnost = specijalnost;
        this.text = "Kreiran doktor";
        this.text = new Date() + " " + this.text;
        this.print();
    }
    Doktor.prototype.getIme = function () {
        return this.ime;
    };
    return Doktor;
}(Osoba));
var Pacijent = (function (_super) {
    __extends(Pacijent, _super);
    function Pacijent(ime, prezime, jmbg, brzkartona) {
        _super.call(this, ime, prezime);
        this.jmbg = jmbg;
        this.brzkartona = brzkartona;
        this.text = "Kreiran pacijent";
        this.text = new Date() + " " + this.text;
        this.print();
    }
    Pacijent.prototype.setDoktor = function (theDoktor) {
        this.doktor = theDoktor;
        this.text = new Date() + " Pacijent " + this.ime + " bira " + theDoktor.getIme() + " za doktora";
        this.print();
    };
    return Pacijent;
}(Osoba));
applyMixins(LaboratorijskiPregled, [Printer]);
applyMixins(Doktor, [Printer]);
applyMixins(Pacijent, [Printer]);
var test = new NivoSeceraUKrvi(45, new Date());
var test2 = new HolesterolaUKrvi(18, new Date());
var doktor = new Doktor("neko", "tamo", "spec");
var pacijent = new Pacijent("neko drugi", "asd", "123", "sdad");
pacijent.setDoktor(doktor);
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
//# sourceMappingURL=zdravstvena_ustanova.js.map