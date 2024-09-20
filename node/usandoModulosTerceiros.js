

/* Modulo do node "lodash"
Instalação "lodash" - "npm i lodash" .
Lodash é uma biblioteca de utilitários para JavaScript que facilita o trabalho com 
arrays, objetos e funções, oferecendo uma ampla gama de funções que ajudam a tornar 
o código mais eficiente e legível. É especialmente popular em ambientes Node.js, mas 
também pode ser usada em projetos front-end.

Aqui estão algumas características e funções comuns do Lodash:

* Manipulação de Arrays: Funções para mapear, filtrar, reduzir, ordenar e modificar 
 arrays. Por exemplo, _.map(), _.filter(), _.reduce().

* Manipulação de Objetos: Métodos para acessar, modificar e transformar objetos, 
como _.get(), _.set(), _.merge().

* Funções Utilitárias: Funções para debouncing, throttling e composição de funções, 
como _.debounce() e _.throttle().

* Clonagem Profunda: _.cloneDeep() permite criar uma cópia profunda de um objeto, 
preservando suas propriedades aninhadas.

*Performance: Lodash é otimizado para desempenho, tornando operações comuns mais 
rápidas e eficientes. */
// ------------------------------------------------------------------------------

/* Modulo global "nodemon" do node, bom para desenvolvimento .
Pois ele dispara o node sempre que tem alguma mudança '.

npm i -g nodemon
executando nodemon, "¹cd node: nome da pasta " ²nodemon "nomepasta"

"Nodemon" é uma ferramenta muito útil para desenvolvedores que trabalham com Node.js. 
Ele automatiza o processo de reiniciar o servidor sempre que há mudanças nos arquivos 
do projeto, o que melhora a eficiência durante o desenvolvimento.

Principais características do Nodemon:
Reinício Automático: Sempre que você salva alterações em seus arquivos, o Nodemon 
reinicia automaticamente a aplicação. Isso elimina a necessidade de parar e iniciar 
o servidor manualmente.

Configuração Simples: É fácil de configurar e pode ser usado diretamente da linha de 
comando ou através de um arquivo de configuração.

Monitoramento de Vários Tipos de Arquivos: O Nodemon monitora não apenas arquivos .
js, mas também outros tipos de arquivos, como .json e .mjs, dependendo da 
configuração.

Exclusões e Filtragem: Você pode configurar quais arquivos ou diretórios o Nodemon 
deve ignorar, permitindo um controle mais fino sobre o que monitora.
*/ 


const setInt = require('lodash')
setInterval(() => console.log(setInt.random(1, 1000)),2000)