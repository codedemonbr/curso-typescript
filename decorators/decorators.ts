// @logarClasse
// @logarClasseSe(false)
@decorator({ a: "Teste" })
class Eletrodomestico {
    constructor() {
        console.log("novo...");
    }
}
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
