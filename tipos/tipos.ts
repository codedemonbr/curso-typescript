// string
let nome: string = 'Joao';
console.log(nome);

// number
let idade: number = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);

// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1
console.log(possuiHobbies);

let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);

//array
let hobbies: any[] = ['cozinhar', 'praticar esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);

// tuplas'
// O interessante das tuplas é o fato de construir um tipo aceitavel de array
let endereco: [string, number, string];
endereco = ['Rua A', 3, 'Bairro Feliz'];

console.log(endereco);

enum Cor {
    Cinza,
    Verde = 100,
    Amarelo = 10,
    Laranja,
    Roxo,
    Vermelho,
    Azul = 200,
}

console.log(Cor.Amarelo);
console.log(Cor.Cinza);
console.log(Cor.Azul);
console.log(Cor.Verde);
console.log(Cor.Laranja);

let carro: any = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);

// Funções
function retornaMeuNome(): string {
    return nome;
}
console.log(retornaMeuNome());

function digaOi(): void {
    console.log('Oi');
}

digaOi();

function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}

// console.log(multiplicar(2, 'bia'));
console.log(multiplicar(4.7, 9));

// tipo de função
let calculo: (x: number, y: number) => number;
// calculo = digaOi
// calculo()
// calculo = {};

calculo = multiplicar;
console.log(calculo(5, 6));

//objetos
let usuario: { nome: string; idade: number };
usuario = {
    nome: 'Joao',
    idade: 27,
};

console.log(usuario);
// usuario = {}

// usuario= {
//     name: 'Maria',
//     age: 31
// }

usuario = {
    idade: 31,
    nome: 'Maria',
};

console.log(usuario);

type Funcionario = {
    supervisores: string[];
    baterPonto(num: number): string;
};

let funcionario: Funcionario = {
    supervisores: ['Pedro', 'Paulo', 'Arthur'],
    baterPonto(num: number) {
        if (num <= 8) {
            return 'Ponto normal';
        }
        return 'Ponto fora do horario';
    },
};

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(9));

//Union types
// // let nota: number | string = null;
// console.log(`Minha nota é ${nota}`);
// nota = '10';
// console.log(`Minha nota é ${nota}`);
// nota = true

// checando tipos

let valor = 30;

if (typeof valor === 'number') {
    console.log('É um number!');
} else {
    console.log(typeof valor);
}

//never
function falha(msg: string): never {
    throw new Error(msg);
}

const produto = {
    nome: 'Joao',
    preco: 4,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco invalido');
        }
    },
};

produto.validarProduto();

// se strict null checks estiver ativado, aqui teremos problemas com nulos
let altura: number = 12;
// altura = null;

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
    nome: string;
    tel1: string;
    tel2: string | null;
};

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '986258978',
    tel2: null,
};

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);

let podeSerNulo = null; // any
console.log(typeof podeSerNulo + ' - ' + podeSerNulo);
podeSerNulo = 12;
console.log(typeof podeSerNulo + ' - ' + podeSerNulo);
podeSerNulo = 'abc';
console.log(typeof podeSerNulo + ' - ' + podeSerNulo);

// Desafio
type ContaBancaria = {
    saldo: number;
    depositar: (valor: number) => void;
};

let contaBancaria: ContaBancaria = {
    saldo: 0,
    depositar(valor: number) {
        this.saldo += valor;
    },
};

type Correntista = {
    nome: string;
    contaBancaria: ContaBancaria;
    contatos: string[];
};

let correntista: Correntista = {
    nome: 'Ana Siva',
    contaBancaria: contaBancaria,
    contatos: ['32543248', '986284436'],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
