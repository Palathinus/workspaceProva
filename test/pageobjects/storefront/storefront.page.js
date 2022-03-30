const Page = require('../page');

class Storefront extends Page {

    async doClick(element) {
        await element.click();
    }
    
    openHomeES() {
        return super.homeES('home');
    }
    
}

module.exports = new Storefront();