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

// @logarClasse
// @logarClasseSe(true)
// @decorator({ a: "Teste" })
@logarObjeto
class Eletrodomestico {
    constructor() {
        console.log("novo...");
    }
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

new Eletrodomestico();
new Eletrodomestico();
new Eletrodomestico();
new Eletrodomestico();
