const Page = require('./page');


class HomePage extends Page {

    get loginMenuItem () { return $('a*=Log in') };
    get userAvatarIcon() { return $("(//a[contains(@class, 'user-avtar avatar-img')])[1]")}
    get signOutMenuItem() { return $("//a[contains(text(), 'Sign Out')]")};

    
    navigateToLogIn(){
       this.waitElementForDisplayed(this.loginMenuItem);
       this.loginMenuItem.click();
    }

    logout(){
        this.userAvatarIcon.moveTo();
        this.waitElementForDisplayed(this.signOutMenuItem);
        this.signOutMenuItem.click();
    }
}

module.exports = new HomePage();