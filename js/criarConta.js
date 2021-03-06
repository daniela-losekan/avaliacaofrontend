function createAccount(event) {
    event.preventDefault();
    
    let storage = JSON.parse(localStorage.getItem('users'));

    if (storage == null) {
        storage = [];
    }

    const email = document.getElementById('register-email');
    const password = document.getElementById('register-password');
    const repeatPassword = document.getElementById('repeat-password');

    if (email.value === "" || password.value === "") {
        alert('Os campos devem ser preenchidos.')
        return;
    }

    if (password.value !== repeatPassword.value) {
        alert('As senhas devem ser iguais.');
        return;
    }else if (password.value.length < 6) {
        alert('A senha deve conter 6 caracteres');
        return;
    }

    for (let user of storage) {
        if (email.value === user.email && password.value === user.password) {
            window.location.href = '/frontend/recados.html';
            alert('Email já cadastrado.');
            return;
        } 
    }

    const user = {
        email: email.value,
        password: password.value,
    }

    storage.push(user);

    localStorage.setItem('users', JSON.stringify(storage));
    email.value = '';
    password.value = '';
    repeatPassword.value = '';

    container.classList.remove("sign-up-mode");
}