const fs = require('fs');
const usuarioModel = require('../models/usuarioModel')



const getALL = async(req, res) => {

    const usuarios = await usuarioModel.getALL()
    return res.status(200).json(usuarios)
    }


const validarUser = async(req, res) => {
    
    const usuario = await usuarioModel.validarUser(req.body)
    // if(usuario == 'valido'){
        if(usuario){
            console.log("seja bem vindo", usuario)
        return res.status(200).json( usuario )

    }else{
        return res.status(201).json()

    }
    
    }


const getUser = async(req, res) =>{
    const usuario = await usuarioModel.getUser(req.body)

    return res.status(200).json(usuario)
}


const createUser = async (req, res) => {
        try {
            const result = await usuarioModel.createUser(req.body);
            res.status(201).json({ message: 'Dados inseridos no banco de dados com sucesso' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao inserir no banco de dados' });
        }
    };
    


 
    

const deleteUser = async (req, res) => {
    const { id } = req.params
    
    await usuarioModel.deleteUser(id)
    return res.status(204).json()
    }

module.exports = {
    getALL,
    validarUser,
    getUser,
    createUser,
    deleteUser
};