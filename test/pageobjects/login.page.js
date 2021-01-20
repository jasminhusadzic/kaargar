const Page = require('./page');


class LoginPage extends Page {

    get inputEmail () { return $('#email') };
    get inputPassword () { return $('#password') };
    get btnSubmit () { return $('button*=Login') };

    login (username, password) {
        this.inputEmail.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }


}

module.exports = new LoginPage();
