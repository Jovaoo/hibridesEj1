users = []
let user1 = { "name": "test", "password": "test", "email": "test@gmail.com" }
let user2 = { "name": "test2", "password": "test2", "email": "test2@gmail.com" }
users.push(user1,user2)

function check_login() {
    let name = document.getElementById("username");
    let password = document.getElementById("password");

    let loginCorrecto = document.getElementById("loginCorrecto");
    let loginIncorrecto = document.getElementById("loginIncorrecto");

    check_ok = false
    for (let i = 0; i < users.length; i++) {
        if (name.value === users[i].name && password.value === users[i].password) {
            check_ok = true
            loginCorrecto.style = "display:flex";
            loginIncorrecto.style = "display:none";
            alert("Login Correcto.")
            break;
        }
    }
    if (!check_ok ) {
        console.log("Login MAL");
        loginCorrecto.style = "display:none";
        loginIncorrecto.style = "display:flex";
    }
}

let login = true

function changeVisibilityUserForm() {
    let loginForm = document.getElementById("login")
    let registerForm = document.getElementById("register")

    if (login) {
        loginForm.style = "display:none;"
        registerForm.style = "display:flex"
        login = false
    } else {
        loginForm.style = "display:flex;"
        registerForm.style = "display:none"
        login = true

    }
}

function registerUser() {
    let emailReg = document.getElementById("emailReg");
    let nameReg = document.getElementById("usernameReg");
    let passwordReg = document.getElementById("passwordReg");
    let registroCorrecto = document.getElementById("registroCorrecto")


    let userFound = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].name === nameReg.value) {
            alert("Nombre ya en uso.");
            registroCorrecto.style = "display:none";
            userFound = true;
            break;
        } else if (users[i].email === emailReg.value) {
            alert("Email ya en uso.");
            registroCorrecto.style = "display:none";
            userFound = true;
            break;
        }
    }

    if (!userFound) {
        let newUser = { "name": nameReg.value, "password": passwordReg.value, "email": emailReg.value };
        users.push(newUser);
        registroCorrecto.style = "display:flex";
        console.log(users);
    }
}