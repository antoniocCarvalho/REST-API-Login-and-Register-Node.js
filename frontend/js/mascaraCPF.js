//mascara cpf
const inputCPF = document.querySelector('#cpf')

inputCPF.addEventListener('keypress', () => {
    let inputLength = inputCPF.value.length

    // LENGHT 14  CPF
    if (inputLength == 3 || inputLength == 7) {
        inputCPF.value += '.'
    }else if (inputLength == 11) {
        inputCPF.value += '-'
    }

})








