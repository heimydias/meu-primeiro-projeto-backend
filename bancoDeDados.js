const mongoose = require('mongoose')

async function connectaBancoDeDados() {
    try{
        console.log('Conexão com o banco de dados iniciou')

    await mongoose.connect('mongodb+srv://heimydias:4ckhF6G5Sm7JZyN5@clustermulheres.bfvaboa.mongodb.net/?retryWrites=true&w=majority')
    
    console.log('Conexão com o banco de dados feita com sucesso!')
    } catch(erro){
        console.log(erro)
    }
}

module.exports = connectaBancoDeDados