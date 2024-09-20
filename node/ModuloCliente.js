

const moduloA = require('./ModuloA')  /* aqui estamos usando o require, para importar
algo do ('./ModuloA') . Iremos ter o objeto do ModuloA . Porque eu requiro uma
exportação do ModuloA, necessido de algo dentro do ModuloA*/
const ModuloB =  require("./ModuloB")
console.log(moduloA.bemVindo)
console.log(moduloA)