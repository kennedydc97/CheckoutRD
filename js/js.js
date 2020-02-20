let inputCPF = document.getElementById("CPF")
let inputSenha = document.getElementById("senha")
let inputConfSenha = document.getElementById("confirmeSenha")
let inputNmrCartao = document.getElementById("nmrCartao")
let inputCpfTitular = document.getElementById("cpfDoTitular")
let inputCEP = document.getElementById("CEP")
let inputBairro = document.getElementById("bairro")
let inputCidade = document.getElementById("cidade")
let inputEndereco = document.getElementById("endereco")

//validação CPF
inputCPF.addEventListener('keyup', (event) =>{
    if(isNaN(inputCPF.value)){
       inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length - 1))  
    }
    if(inputCPF.value.length >= 11){
        inputCPF.value = inputCPF.value.substring(0, 11)  
     }
})

inputConfSenha.addEventListener('keyup', (event) =>{
    if(inputConfSenha.value != inputSenha.value){
        inputConfSenha.setAttribute('class', 'form-control is-invalid');
    }else{
        inputConfSenha.setAttribute('class', 'form-control is-valid');
    }
})

inputSenha.addEventListener('keyup', (event) =>{
    if(inputConfSenha.value != inputSenha.value){
        inputConfSenha.setAttribute('class', 'form-control is-invalid');
    }else{
        inputConfSenha.setAttribute('class', 'form-control is-valid');
    }
})

inputNmrCartao.addEventListener('keyup', (event) =>{
    if(isNaN(inputNmrCartao.value)){
       inputNmrCartao.value = inputNmrCartao.value.substring(0, (inputCPF.value.length - 1))  
    }
    if(inputNmrCartao.value.length >= 16){
        inputNmrCartao.value = inputNmrCartao.value.substring(0, 16)  
     }
})

inputCpfTitular.addEventListener('keyup', (event) =>{
    if(isNaN(inputCpfTitular.value)){
       inputCpfTitular.value = inputCpfTitular.value.substring(0, (inputCpfTitular.value.length - 1))  
    }
    if(inputCpfTitular.value.length >= 11){
        inputCpfTitular.value = inputCpfTitular.value.substring(0, 11)  
     }
})

inputCEP.addEventListener('keyup', (event) =>{
    if(isNaN(inputCEP.value)){
       inputCEP.value = inputCEP.value.substring(0, (inputCEP.value.length - 1))  
    }
    if(inputCEP.value.length >= 8){
        inputCEP.value = inputCEP.value.substring(0, 8) 
        buscarCep(inputCEP.value) 
     }
})

function buscarCep(CEP){
    fetch(`https://viacep.com.br/ws/${CEP}/json/`).then(response => response.json()).then(dados => {
        if(dados.erro){
            return inputCEP.setAttribute('class', 'form-control is-invalid')
        }
        inputCEP.setAttribute('class', 'form-control is-valid')
        inputEndereco.value = dados.logradouro
        inputBairro.value = dados.inputBairro
        inputCidade.value = dados.localidade
        // selectEstado.value = dados.uf
    })
}






// let resposta = fetch("https://viacep.com.br/ws/" + inputCEP + "/json/").then((resposta)=>{
//     return resposta.json()
// })
// .then((json)=>{
//     console.log(json)
// })

// if (!("erro" in json)) {
//     document.getElementById('endereco').value=(conteudo.logradouro);
//     document.getElementById('bairro').value=(conteudo.bairro);
//     document.getElementById('cidade').value=(conteudo.localidade);
//     document.getElementById('estado').value=(conteudo.uf);
// } 
// else {
//     limpa_formulário_cep();
//     alert("CEP não encontrado.");
// }
// }