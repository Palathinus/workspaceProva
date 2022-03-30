class Checkout {

    async genericClick(element) {
        await element.click();
    }

}

module.exports = new Checkout();