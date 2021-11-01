function mostrarSenha() {
    var senha = document.getElementById("password")
    if (senha.type == "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
}

function Valida() {
    var id = "professor"

    var user = document.getElementById("user")
    var users = user.value

    if(users === id ){
        SubmitEvent
        alert("DEI SUBMIT")
    } else {
        user.innerHTML = `Digite a senha novamente`
    }
}