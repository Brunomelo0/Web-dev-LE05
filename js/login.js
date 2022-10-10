const button = document.getElementById('submitbutton')
const email = document.getElementById('floatingInput')
const senha = document.getElementById('floatingPassword')
function validar_email(event) {
    if (email.value.includes("@")){
        button.disabled = false
        email.className = "form-control is-valid"
    }
    else {
        button.disabled = true
        email.className = "form-control is-invalid"
    }
}
function validar_senha(event) {
    if (senha.value.length >= 6) {
        button.disabled = false
        senha.className = "form-control is-valid"
    } else {
        button.disabled = true
        senha.className = "form-control is-invalid"
    }
}