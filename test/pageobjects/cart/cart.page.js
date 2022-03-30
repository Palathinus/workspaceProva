
class Cart {
    
    async startOrder(element) {
        await element.click();
    }

}


module.exports = new Cart();