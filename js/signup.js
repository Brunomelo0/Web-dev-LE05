const nome = document.getElementById('floatingInputName')
const email = document.getElementById('floatingInputEmail')
const senha = document.getElementById('floatingPassword')
const senha2 = document.getElementById('floatingPassword2')
const mes = document.getElementById('mes')
const dia = document.getElementById('dia')
const ano = document.getElementById('ano')
const button = document.getElementById('submitbutton')
for (let index = 1900; index <= 2022; index++) {
    let option = document.createElement("option")
    option.innerHTML = index
    option.value = index
    ano.appendChild(option)
}
for (let index = 1; index <= 31; index++) {
    let option = document.createElement("option")
    option.innerHTML = index
    option.value = index
    dia.appendChild(option)
}
function validar_nome() {
    if (nome.value == "")
        nome.className = "form-control is-invalid"
    else
        nome.className = "form-control"
}
function validar_email() {
    if (email.value.includes("@"))
        email.className = "form-control is-valid"
    else
        email.className = "form-control is-invalid"
}
function validar_senha() {
    if (senha.value.length < 6)
        senha.className = "form-control is-invalid"
    else
        senha.className = "form-control"
}
function validar_senha2() {
    if (senha2.value != senha.value || senha2.value == "")
        senha2.className = "form-control is-invalid"
    else
        senha2.className = "form-control"
}
function validar_mes() {
    if(mes.value == "abril" || mes.value == "junho" || mes.value == "setembro" || mes.value == "novembro") {
      const options = [...dia.options]
      options.forEach((option) => {
        
      })
    }
}
function habilitar_botao() {
    button.disabled = false
}
function desabilitar_botao() {
    button.disabled = true
}