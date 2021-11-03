function mostrarSenha() {
    var senha = document.getElementById("password")
    if (senha.type == "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
}

function validaUser() {
    let useradm = "admgerminare"
    var id = document.getElementById("user")

    if(useradm === id.value) {
        user.classList.add("correct")
        user.classList.remove("incorrect")

        var msg = document.getElementById("user-msg")
        msg.style.display = "none"
    } else {
        user.classList.remove("correct")
        user.classList.add("incorrect")
    }
}

function validaPassword() {
    let senhaadm = "odetedict"
    let senha = document.getElementById("password")

    if(senhaadm === senha.value) {
        password.classList.remove("incorrect")
        password.classList.add("correct")

        var msg = document.getElementById("password-msg")
        msg.style.display = "none"
    } else {
        password.classList.remove("correct")
        password.classList.add("incorrect")
    }
}

function enterPage() {
    if(password.classList.contains("correct") && user.classList.contains("correct")){
        var link = document.getElementById("jezus")
        link.href = "./workspace-page.html"
    } else {
        return
    }
}