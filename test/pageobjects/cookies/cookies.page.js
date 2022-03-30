const Selector = require('../../pageobjects/cookies/selectors');

class Cookies {

    async closeCookies(cookie) {
        await cookie.click();
    }
    
}

module.exports = new Cookies();