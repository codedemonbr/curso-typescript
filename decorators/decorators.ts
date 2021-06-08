/**
 * Decorator só é chamado quando a classe é carregada
 */

function logarClasse(construtor: Function) {
    console.log(construtor);
}
/**
 * recebe nada e retorna nada _: Function é usado apenas para manter a assinatura
 */
function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio;
}

function decorator(obj: { a: string; b?: number }) {
    return function (_: Function): void {
        console.log(obj.a + " " + obj.b);
    };
}

type Construtor = { new (...args: any[]): {} };

function logarObjeto(construtor: Construtor) {
    console.log("Carregando...");
    return class extends construtor {
        constructor(...args: any[]) {
            console.log("Antes...");
            super(...args);
            console.log("Depois...");
        }
    };
}

// new Eletrodomestico();
// new Eletrodomestico();
// new Eletrodomestico();
// new Eletrodomestico();

interface Eletrodomestico {
    imprimir?(): void;
}

// @logarClasse
// @logarClasseSe(true)
// @decorator({ a: "Teste" })
// @logarObjeto
@imprimivel
class Eletrodomestico {
    constructor() {
        console.log("novo...");
    }
}

function imprimivel(construtor: Function) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}

// (<any>new Eletrodomestico()).imprimir();
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
