// Exercício 1 - Classe
class Moto {
    constructor(protected nome: string, protected _velocidade: number = 0) {}

    buzinar() {
        console.log('Tooooooooooooooooooot');
    }

    acelerar(delta: number) {
        this.velocidade += delta;
    }

    public set velocidade(valor: number) {
        if (valor > 0 && valor <= 150) {
            this._velocidade = valor;
        }
    }

    public get velocidade(): number {
        return this._velocidade;
    }
}

let moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);

abstract class objeto2D {
    abstract area(): number;
}

class Retangulo extends objeto2D {
    constructor(private _base: number = 0, private _altura: number = 0) {
        super();
    }

    area(): number {
        let area: number = 0;
        area = this._base * this._altura;
        return area;
    }

    public get base(): number {
        return this._base;
    }

    public set base(valor: number) {
        this._base = valor;
    }

    public get altura(): number {
        return this._altura;
    }

    public set altura(valor: number) {
        this._altura = valor;
    }
}

let retangulo = new Retangulo(5, 7);
console.log(retangulo.base);
console.log(retangulo.altura);

let areaRec = retangulo.area();
console.log(areaRec);

// Exercício 3 - Getters & Setters
class Estagiario {
    private _primeiroNome: string = '';

    public get primeiroNome(): string {
        return this._primeiroNome;
    }

    public set primeiroNome(valor: string) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        } else {
            this._primeiroNome = '';
        }
    }
}

const estagiario = new Estagiario();

console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
