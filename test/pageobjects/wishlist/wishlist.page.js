const Selector = require('../../pageobjects/wishlist/selectors');
const HomePage = require('../home/selectors');
let total_of_products = 0;

class Wishlist {

    getNumProducts(){
        browser.waitUntil( async ()=> await $(HomePage.numberOfElements).isClickable());
	    return HomePage.numberOfElements.getText();
    }

    totalProducts(){
        return total_of_products;
    }

    async addProduct(num) {
        total_of_products =+ num;
        total_of_products =+ 1;
    }
    
}

module.exports = new Wishlist();