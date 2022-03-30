const Page = require('../page');
const selector = require('./selectors');
const homeSel = require('../home/selectors');
let total_of_products = 0;

class Product extends Page {
    
    productPage() {
        return super.homeES('p/060176/vestido-con-jaretas-en-el-escote-venca#bc=21&reference=1EV293102');
    }

    totalProducts(){
        return total_of_products;
    }

    getNumProducts(){
        browser.waitUntil( async ()=> await $(homeSel.numberOfElements).isClickable());
	    return homeSel.numberOfElements.getText();
    }

    updateTotalProducts() {
        total_of_products = getNumProducts();
    }

    async setSize(size){
        await selectors.sizeList.click();
        browser.waitUntil( async ()=> await $(size).isClickable());
        await size.click();
    }

    async addProduct(element) {
        await element.click();
        total_of_products =+ 1;
    }

    async chooseSize(){
        await $$(selector.sizeList)[0].waitAndClick();
        await $$(selector.sizeList)[0].waitForDisplayed({reverse: true});
    }

}

module.exports = new Product();