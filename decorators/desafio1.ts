// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: "Guilherme Filho",
    email: "guigui@gmail.com",
    admin: true,
};

type MeuConstrutor = {
    new (...args: any[]): {};
};

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log("Algo crítico foi alterado!");
    }
}

function perfilAdmin<T extends MeuConstrutor>(contrutor: T) {
    return class extends contrutor {
        constructor(...args: any[]) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error(
                    "Logue o usuário para poder instanciar a classe"
                );
            }
        }
    };
}

new MudancaAdministrativa().critico();
