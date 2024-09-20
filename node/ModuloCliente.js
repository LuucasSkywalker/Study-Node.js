

const moduloA = require('./moduloA')  /* aqui estamos usando o require, para importar
algo do ('./ModuloA') . Iremos ter o objeto do ModuloA . Porque eu requiro uma
exportação do ModuloA, necessido de algo dentro do ModuloA*/
const moduloB =  require("./moduloB")
console.log(moduloA.bemVindo)
console.log(moduloA)