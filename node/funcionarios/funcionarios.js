/* O fluxo desse código segue uma sequência lógica para manipular dados que são 
obtidos a partir de uma requisição HTTP usando o pacote axios. Aqui está uma 
descrição passo a passo do fluxo:
*/ 

const url = 'https://files.cod3r.com.br/curso-js/funcionarios.json'
// A variável url é definida com o endereço do arquivo JSON contendo dados da url
const axios = require('axios')
// O pacote axios é importado, permitindo realizar requisições HTTP.

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios) /*2. Requisição HTTP usando axios.get:
O método "axios.get(url)" faz uma requisição HTTP do tipo "GET" para a URL fornecida.
Quando a requisição é bem-sucedida, O método "axios.get retorna uma Promise", que é 
uma estrutura assíncrona usada para trabalhar com operações que podem ser concluídas
no futuro.O método "".then" é chamado após a "promessa ser resolvida", ou seja, quando a requisição HTTP é bem-sucedida e o servidor retorna uma resposta. O argumento response contém os dados da resposta da requisição.
Dentro do .then, a função de callback começa a processar os dados.
3. Extração dos dados da resposta:
const funcionarios = response.data: A propriedade "data de response" contém os dados 
retornados do servidor (no formato JSON). response.data é o conteúdo do arquivo JSON 
baixado, que contém a lista de funcionários. O valor dessa lista de funcionários é 
armazenado na variável "funcionarios".
*/ 

    const func = funcionarios
        .filter(p => p.pais === "China") // Função anônima para filtrar chineses
        .filter(g => g.genero === "F")   // Função anônima para filtrar mulheres
        .reduce((func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual) // Função anônima para encontrar o menor salário

    console.log(func)
/* usando função arrow fuction 
como se fosse 
function(p){
return p.pais ==="china"
}
*/ 

})
