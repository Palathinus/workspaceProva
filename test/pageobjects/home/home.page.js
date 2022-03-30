const Page = require('../../pageobjects/page');
const Selector = require('../../pageobjects/home/selectors');

class HomePage extends Page {
    
    openHomeES() {
        return super.homeES('home');
    }

    async openSearchModal(){
        await Selector.searcher.click();
    }

    async openSearcher(searchValue){
        await Selector.searcher.click();
        await Selector.searchInput.addValue(searchValue);
    }

    async clearSearchTab(){
        await Selector.clearSearchButton.click();
    }

    async refillSearchTab(searchValue){
        await Selector.searchInput.addValue(searchValue);
        await Selector.searchButton.click();
    }

    async search(searchValue){
        await Selector.searcher.click();
        await Selector.searchInput.addValue(searchValue);
        await Selector.searchButton.click();
    }

    async closePromo(){
        await Selector.closePromo.click();
    }

    async scrollToNewsletter(){
        const elem = await Selector.languageChoice;
        await elem.scrollIntoView();
    }

    async scrollToCategories(){
        const elem = await Selector.categoryOne;
        await elem.scrollIntoView();
    }

    async clickOnCartIcon(element) {
        await element.click();
    }

}

module.exports = new HomePage();