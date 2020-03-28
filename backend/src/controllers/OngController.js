const crypto = require('crypto')
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX') //vai ser gerado 4 bytes de caracteres aleatórios e vai ser convertido em uma string do tipo hexadecimal

        await connection('ongs').insert({
          id,
          name,
          email,
          whatsapp,
          city,
          uf,
        })

    return response.json({ id });
    }
};