@logarClasse
class Eletrodomestico {
    constructor() {
        console.log("novo...");
    }
}

function logarClasse(construtor: Function) {
    console.log(construtor);
}

/**
 * Decorator só é chamado quando a classe é carregada
 */
