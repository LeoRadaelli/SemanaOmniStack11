const express = require("express"); //estamos importando o modúlo express para dentro da variável express para que ela contenha todas as suas funcionalidades do express.
const cors = require('cors');
const routes = require('./routes');

const app = express(); //essa variável vai armazenar a nossa aplicação

app.use(cors());
app.use(express.json()); // É importate que essa função venha antes das rotas, o express está transformnado o corpo da requisiçâo(JSON) em um obejto JavaScript
app.use(routes);

app.listen(3333); //a aplicação vai estar na porta 3333


/**
 * Rota/Recursos
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros ultilizados para identificar recursos
  * Request Body: Corpo do Usuário, ultilizado para criar ou alterar recursos
  * 
 */

 /**
  * SQL: MySQL, SQLite, PostreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc...
  */


