
class Printer {
    text: string;
    print() {
        console.log(this.text);
    }
}

abstract class LaboratorijskiPregled implements Printer {
    constructor(protected datumVreme: Date, text: string) {
        this.text = datumVreme + " " + this.text + text;
        this.print();
    }

    text: string = "Zakazan laboratorijski pregled";
    print: () => void;
}

class NivoSeceraUKrvi extends LaboratorijskiPregled {
    constructor(private vrednost: Number, private vremePoslednjegObroka: Date, text = " nivoa secera u krvi") {
        super(new Date(), text);
    }
}

class HolesterolaUKrvi extends NivoSeceraUKrvi {
    constructor(vrednost: Number, vreme: Date) {
        super(vrednost, vreme, " nivoa holesterola u krvi");
    }
}

class KrvniPritisak extends LaboratorijskiPregled {
    constructor(private gornja: number, private donja: number, private puls: number) {
        super(new Date(), " krvnog pritiska");
    }
}

abstract class Osoba {
    constructor(protected ime: string, protected prezime: string) {
    }
}

class Doktor extends Osoba implements Printer {
    constructor(ime: string, prezime: string, private specijalnost: string) {
        super(ime, prezime);
        this.text = new Date() + " " + this.text;
        this.print();
    }

    text: string = "Kreiran doktor";
    print: () => void;

    getIme(): string {
        return this.ime;
    }

}

class Pacijent extends Osoba implements Printer {
    private doktor: Doktor;
    constructor(ime: string, prezime: string, private jmbg: string, private brzkartona: string) {
        super(ime, prezime);
        this.text = new Date() + " " + this.text;
        this.print();
    }

    text: string = "Kreiran pacijent";
    print: () => void;

    public setDoktor(theDoktor: Doktor) : void {
        this.doktor = theDoktor;
        this.text = new Date() + " Pacijent " + this.ime + " bira " + theDoktor.getIme() + " za doktora";
        this.print();
    }
}

applyMixins(LaboratorijskiPregled, [Printer]);
applyMixins(Doktor, [Printer]);
applyMixins(Pacijent, [Printer]);


let test = new NivoSeceraUKrvi(45, new Date());

let test2 = new HolesterolaUKrvi(18, new Date());

let doktor = new Doktor("neko", "tamo", "spec");

let pacijent = new Pacijent("neko drugi", "asd", "123", "sdad");
pacijent.setDoktor(doktor);

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
