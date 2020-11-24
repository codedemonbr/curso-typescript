// // let & const
// let seraQuePode = '?'; //hoisting
// console.log(seraQuePode);

// let estaFrio = true;
// if (estaFrio) {
//     let acao = 'colocar o casaco';
//     console.log(acao);
// }

// const cpf: string = '12345678988';
// // cpf = '7894567987';
// console.log(cpf);

// var segredo = 'externo';
// function revelar() {
//     var segredo = 'interno';
//     console.log(segredo);
// }
// revelar();
// console.log(segredo);

// {
//     const def = 'dentro do bloco';
//     console.log(def);
// }

// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }
// // console.log(index);

// //Arrow function
// function somar(n1: number, n2: number): number {
//     return n1 + n2;
// }
// console.log(somar(5, 6));

// const subtrair = (n1: number, n2: number) => n1 - n2;
// console.log(subtrair(5, 6));

// // Exercicio 1
// const dobro = (valor: number): number => valor * 2;

// console.log('dobro ' + dobro(10));

// // Exercicio 2
// const dizerOla = (nome: string = 'Pessoa') => {
//     console.log('Ola, ' + nome);
// };

// dizerOla();
// dizerOla('Anna');

// // Exercicio 3
// const nums = [-3, 33, 38, 5];
// //imprimir menor valor
// console.log(Math.min(...nums));

// // Exercicio 4
// const array = [55, 20];
// // adicionar todos os elementos de num em array
// array.push(...nums);
// console.log(array);

// // Exercicio 5
// // usar operador destructuring
// const notas = [8.5, 6.3, 9.4];
// const [nota1, nota2, nota3] = notas;
// console.log(nota1, nota2, nota3);

// // // Exercicio 6
// // usar operador destructuring
// const cientista = { primeiroNome: 'Will', experiencia: 12 };
// const { primeiroNome, experiencia } = cientista;
// console.log(primeiroNome, experiencia);

// //this
// // function normalComThis() {
// //     console.log(this);
// // }
// // normalComThis();

// // const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' });
// // normalComThisEspecial();

// // //this???
// // console.log(this);
// // const arrowComThis = () => console.log(this);
// // arrowComThis();

// // const arrowComThisEspecial = arrowComThis.bind({ nome: 'Ana Silva' });
// // arrowComThisEspecial();

// //Parâmetros padrão
// function contagemRegressiva(
//     inicio: number = 5,
//     fim: number = inicio - 5
// ): void {
//     console.log(inicio);
//     while (inicio > fim) {
//         inicio--;
//         console.log(inicio);
//     }
//     console.log('Fim!');
// }

// contagemRegressiva();
// contagemRegressiva(3);

// // Rest & Spread
// const numbers = [1, 10, 99, -5, 200, 1034];
// console.log(Math.max(...numbers));

// const turmaA: string[] = ['João', 'Maria', 'Fernando'];
// const turmaB: string[] = ['Fernando', ...turmaA, 'Miguel', 'Lorena'];
// console.log(turmaB);

// function retornarArray(...args: number[]) {
//     return args;
// }

// const numeros = retornarArray(1, 2, 3, 4, 5, 6, 8);
// console.log(numeros);
// console.log(retornarArray(...numbers));

// // Rest & Spread (Tupla)

// const tupla: [number, string, boolean] = [1, 'abc', true];

// function tuplaParam1(a: number, b: string, c: boolean) {
//     console.log(`1) ${a} ${b} ${c}`);
// }

// tuplaParam1(...tupla);

// function tuplaParam2(...params: [number, string, boolean]) {
//     // console.log(Array.isArray(params));
//     console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
// }
// tuplaParam2(...tupla);

// // Destructuring (array)
// const caracteristicas = ['Motor Zetec 1.8', 2020];

// const [motor, ano] = caracteristicas;
// console.log(motor);
// console.log(ano);

// // Destructuring (objeto)
// const item = {
//     nome: 'SSD 480gb',
//     preco: 200,
//     caracteristicas: {
//         w: 'importado',
//     },
// };

// const nomeItem = item.nome;
// const precoItem = item.preco;
// console.log(nomeItem);
// console.log(precoItem);

// const {
//     nome: n,
//     preco: p,
//     caracteristicas: { w },
// } = item;

// console.log(n);
// console.log(p);
// console.log(w);

// const usuarioID: string = '123deOliveira4';
// const notificacoes: string = '19';

// const boasVindas = `Boas vindas ${usuarioID},
// Notificações: ${parseInt(notificacoes) < 0 ? '+1' : notificacoes}`;

// console.log(boasVindas);
// console.log(`${(1 + 1) * 30}`);
// console.log(`Motor: ${caracteristicas[0]}`);

// //callback

// function esperar3s(callback: (dado: string) => void) {
//     setTimeout(() => {
//         callback('3s depois...');
//     }, 3000);
// }

// esperar3s(function (resultado: string) {
//     console.log(resultado);
// });

// function esperar3sPromise() {
//     return new Promise((resolve: any) => {
//         setTimeout(() => {
//             resolve('4s depois com promise...');
//         }, 4000);
//     });
// }

// esperar3sPromise().then((dado) => {
//     console.log(dado);
// });

fetch('https://swapi.dev/api/people/4')
    .then((res) => res.json())
    .then((personagem) => personagem.films)
    .then((films) => fetch(films[0]))
    .then((resFilm) => resFilm.json())
    .then((filme) => console.log(filme.title));

let size = 0;
fetch('https://swapi.dev/api/people/4')
    .then((res) => res.json())
    .then((guy) => {
        size = guy.films.length;
        console.log(size);
    });

console.log(size);

// fetch('https://swapi.dev/api/people/2')
//     .then((res) => res.json())
//     .then((personagem) => personagem.films)
//     .then((films) => fetch(films[1]))
//     .then((resFilm) => resFilm.json())
//     .then((filme) => console.log(filme.title))
//     .catch((err) => console.log('Catch!!!!' + err));
