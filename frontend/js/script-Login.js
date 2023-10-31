// const ??? = document.querySelector('')
const transpecialUsuarios = async () => {
    const res = await fetch('http://localhost:3001/usuarios')
    const usuario = await res.json()

    console.log(usuario)
}

const validarUsuario = async (event) => {
    event.preventDefault();
  
    // Coletar os dados do formulário
    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;
  
    const dados = {
      cpf: cpf,
      senha: senha,
    };
  
    //  requisição POST
    const resposta = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),

    });
  
    // Verificar
    // if (resposta.status === 200) {
    //   const mensagem = await resposta.text();
    //   alert("Usuário válido")
    //   window.location.href = '/frontend/pages/index.html';
    //   console.log(`Usuário válido: ${mensagem}`);
    //   abrirInicial()


    // module.exports = dados

    // } else {
    //   alert("Usuário inválido") 
    //   console.log('Usuário inválido');

    // }



    const data = await resposta.json();
    const nomeDoUsuario = data;
    console.log("Valor de nomeDoUsuario:", nomeDoUsuario);

    
 
    
    if (resposta.status === 200) {
     alert(nomeDoUsuario)


     var nomeInicial = document.getElementById("nome");
      nomeInicial.innerHTML = nomeDoUsuario;
      // abrirInicial()

    } else {
      alert("Usuário inválido");
      console.log('Erro:', data.error);
    }
    
  


}





const abrirInicial = () => {

  window.location.href = '/frontend/pages/index.html';


}



const loginForm = document.querySelector('#login'); 
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    validarUsuario(event); 
    transpecialUsuarios(event)
});


