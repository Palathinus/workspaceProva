class SelectorsLogin{

    get inputUsername() {
        return $('[data-uitest="emailLogin"]');
    }

    get inputPassword() {
        return $('[data-uitest="password"]');
    }

    get btnSubmit() {
        return $('#userAlreadyDK');
    }

    get wrongPassText(){
        return $('userOrPassWrong');
    }

    get accCheck(){
        return $('[data-uitest="userName"]');
    }

    get failLogin(){
        return $('[data-uitest="userOrPassWrong"]');
    }

}

module.exports = new SelectorsLogin();