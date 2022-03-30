const Page = require('../page');
const selectors = require('./selectors');

class LoginPage extends Page {

    async login (username, password) {
        const userField = await selectors.inputUsername;
        await userField.waitForEnabled({timeout: 3000});
        await userField.setValue(username);
        const passField = await selectors.inputPassword;
        await passField.waitForEnabled({timeout: 3000});
        await passField.setValue(password);
        await selectors.btnSubmit.click();
    }

    openLoginES() {
        return super.homeES('login');
    }

    openLoginPT() {
        return super.homePT('login');
    }


}

module.exports = new LoginPage();