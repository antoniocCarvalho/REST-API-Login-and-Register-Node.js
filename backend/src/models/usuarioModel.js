const { use } = require('../router')
const connection = require('./connection')


//retorna todos usuarios cadastrados
const getALL = async () => {
    const [usuario] = await connection.execute('SELECT * FROM Usuarios')
   

    return usuario
    
}

//valida os usuarios do banco

const validarUser = async (usuario) => {
    const { cpf, senha } = usuario;
    const query = 'SELECT * FROM Usuarios WHERE cpf = ? AND senha = ?';
    
    try {
        const [validarUsuario] = await connection.execute(query, [cpf, senha]);
                
                
        
        if (validarUsuario.length > 0) {
            // console.log('Usuário validado:', validarUsuario[0].nome);
            return validarUsuario[0].nome;
        } else {
            console.log('Usuário não encontrado.');
            return 'nao encontrado'
        }
    } catch (error) {
        console.error('Erro ao validar usuário:', error);
    }
}


const getUser = async (cpfObj) => {
    const cpf = cpfObj.cpf; // Acesse a propriedade 'cpf' do objeto
    const query = 'SELECT nome FROM Usuarios WHERE cpf = ?';

    try {
        const [user] = await connection.execute(query, [cpf]);

        if (user.length > 0) {
            console.log('Nome do usuário:', user[0].nome);
            return user[0].nome;
        } else {
            console.log('Usuário não encontrado.');
            return 'nao encontrado';
        }
    } catch (error) {
        console.error('Erro ao validar usuário:', error);
        return 'erro';
    }
}


//insere novos usuarios ao banco
const createUser = async (user, res) => {
  

    connection.query("INSERT INTO Usuarios SET ?", user, (err, result) => {
        if (err) {
            console.log(err);
            
        }
    });
};

    
    


//deleta usuarios do banco
const deleteUser = async (id) => {
    const removedUser = await connection.execute('DELETE FROM Usuarios WHERE id = ?', [id])
    return removedUser
}






    module.exports = {
        getALL,
        validarUser,
        getUser,
        createUser,
        deleteUser,
        
    }