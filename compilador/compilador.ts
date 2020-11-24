let canal: string = 'Gaveta';
let inscritos: number = 78498;

// canal = inscritos;
console.log(`Canal = ${canal}`);

// let nome = 'Pedro';
function soma(a: any, b: any) {
    return a + b;
}

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abcd';

function saudar(isManha: boolean): string {
    let saudacao: string;
    if (isManha) {
        saudacao = 'Bom dia!';
    } else {
        saudacao = 'Tenha uma boa vida!';
    }
    return saudacao;
}
