const repository = require("../repositories/client.repository");


const getAllCLients = {
     async execute() {

          const clients = await repository.findAll();

          return clients;
     }
}

module.exports = getAllCLients;