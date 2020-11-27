function echo(objeto: any) {
    return objeto;
}

console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27 }));

// Usando generics
function echoMelhorado<TIPO>(objeto: TIPO): TIPO {
    return objeto;
}

console.log(echoMelhorado('Joao').length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({ nome: 'Thiago', idade: 25 }).idade);

//Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5');
console.log(avaliacoes);

//Array
function imprimir<T>(args: T[]) {
    args.forEach((elemento) => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([4, 5, 6]);
imprimir<string>(['Ana', 'José', 'Gaspar']);
imprimir<{ nome: string; idade: number }>([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 },
]);

type Aluno = { nome: string; idade: number };
imprimir<Aluno>([
    { nome: 'Pedrinho', idade: 6 },
    { nome: 'Joãozinho', idade: 8 },
    { nome: 'Mariazinha', idade: 9 },
]);

//Tipo Generico
type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>('Alguma coisa '));

//Class com Generics
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T, public operando2: T) {}
    abstract executar(): R;
}

// console.log(new OperacaoBinaria('Bom ', 'dia').executar());
// console.log(new OperacaoBinaria(5, 6).executar());
// console.log(new OperacaoBinaria(3, 'opa').executar());
// console.log(new OperacaoBinaria({}, null).executar());

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2;
    }
}

console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(30, 90).executar());

/**
 * a class abaixo pode ser usada em calculos de streaks
 */

class DiferencaDatas extends OperacaoBinaria<Date, number> {
    executar(): number {
        const date1 = this.operando1.getTime();
        const date2 = this.operando2.getTime();
        let diff = Math.abs(date2 - date1);

        const miliSecDia = 1000 * 60 * 60 * 24;
        // const miliSecHora = 1000 * 60 * 60;
        // const miliSecMin = 1000 * 60;
        // const miliSec = 1000;
        const dias = Math.floor(diff / miliSecDia);
        // console.log(`${dias}`);
        // const horas = Math.floor((diff - dias * miliSecDia) / miliSecHora);
        // console.log(`${horas}`);
        // const minutos = Math.floor(
        //     (diff - dias * miliSecDia - horas * miliSecHora) / miliSecMin
        // );
        // console.log(`${minutos}`);
        // const segundos = Math.floor(
        //     (diff -
        //         dias * miliSecDia -
        //         horas * miliSecHora -
        //         minutos * miliSecMin) /
        //         miliSec
        // );
        // console.log(`${segundos}`);

        return dias;
    }
}

const data1 = new Date();
const data2 = new Date('2020-06-27T11:45:00');
console.log(new DiferencaDatas(data1, data2).executar());

// Desafio Classe Fila
// Atributo: fila (Array)
// Métodos: entrar, proximo, imprimir
class Fila<TIPO extends number | string> {
    private fila: Array<TIPO>;

    constructor(...args: Array<TIPO>) {
        this.fila = args;
    }

    entrar(elemento: TIPO) {
        this.fila.push(elemento);
    }

    proximo(): null | TIPO {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        } else {
            return null;
        }
    }

    imprimir() {
        console.log(this.fila);
    }
}

let minhaFila1 = new Fila<number>(5, 5, 6, 8, 4, 9, 5, 3, 5);
let minhaFila2 = new Fila<string>('Andrea', 'Joana', 'Maria', 'Antonia');

console.log(minhaFila1.proximo());
console.log(minhaFila2.proximo());
minhaFila1.imprimir();
minhaFila2.imprimir();
minhaFila1.entrar(1);
minhaFila2.entrar('Pedrinho');
minhaFila1.imprimir();
minhaFila2.imprimir();

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Par<C, V> = { chave: C; valor: V };

class Mapa<C, V> {
    itens: Array<Par<C, V>> = new Array<Par<C, V>>();

    /**
     *
     * @param chave é passada pelo parametro e pode ser qualquer
     * coisa que quem usar desejar
     * Pense que essa chave pode ser um number ou um uuid ou ainda uma string
     * voce seleciona
     *
     */
    obter(chave: C): Par<C, V> | null {
        const resultado = this.itens.filter((i) => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    /**
     *
     * @param par o par recebido vai realizar update caso exista
     * e inserir um novo caso não exista
     */
    colocar(par: Par<C, V>): void {
        const encontrado = this.obter(par.chave);
        if (encontrado) {
            encontrado.valor = par.valor;
        } else {
            this.itens.push(par);
        }
    }

    imprimir() {
        console.log(this.itens);
    }
    /**
     * Apenas reinstancia os itens
     */
    limpar() {
        this.itens = new Array<Par<C, V>>();
    }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: 'Camila' });
mapa.colocar({ chave: 2, valor: 'Patricia' });
mapa.colocar({ chave: 3, valor: 'Rebeca' });
mapa.colocar({ chave: 4, valor: 'Rosana' });
mapa.colocar({ chave: 1, valor: 'Maria' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
