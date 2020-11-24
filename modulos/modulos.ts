// import { areaRetangulo } from './retangulo';
// import { areaCircunferencia } from './circunferencia';
import retangulo from './retangulo';
import { areaCircunferencia as circ } from './circunferencia';

console.log('Modulo carregando ... ');
console.log(retangulo(5, 6));
console.log(circ(2));

const { digaOi } = require('./novo');
console.log(digaOi('Ana'));
