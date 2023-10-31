const nome = document.querySelector('#nome'); 
const cpf = document.querySelector('#cpf'); 
const senha = document.querySelector('#senha'); 


const cadastrarUsuario = async (event) => {


const usuario = {nome: nome.value, cpf: cpf.value, email: email.value, senha: senha.value}

await fetch('http://localhost:3001/createUser', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(usuario),  
})


}








const loginForm = document.querySelector('#cadastro'); // Verifique se o seletor corresponde ao seu formulário HTML

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

   console.log("BOTAO FUNCIONANDO")
   cadastrarUsuario();
});
