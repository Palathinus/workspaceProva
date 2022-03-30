class SelectorsHome{
    get popupModal() {
        return $('#onetrust-group-container');
    }

    get cookieID() {
        return $('#onetrust-accept-btn-handler');
    }

    get searcher(){
        return $('#searcher');
    }

    get searchInput(){
        return $('[class="syte-ts-input"]');
    }

    get suggestedSearch(){
        return $('#suggestedItems');
    }

    get clearSearchButton(){
        return $('[label="Clear"]');
    }

    get searchButton(){
        return $('//*[@id="top-search-bar-container"]/div/div/form/div/button');
    }

    get checkProductPage(){
        return $('//*[@id="addToBasket"]/span[1]')
    }

    get wrongSearchResult(){
        return $('[class="no-items-found"]');
    }

    get loginIcon(){
        return $('[data-uitest="userName"]');
    }

    get newIcon(){
        return $('//*[@id="camera"]/a/span');
    }
    get favoritesIcon(){
        return $('//*[@id="WishMenu"]/span/span');
    }
    get helpIcon(){
        return $('//*[@id="helpHeader"]/span/span');
    }
    get cartIcon(){
        return $('//*[@id="cartZone"]/span[1]/span');
    }

    get buyFromPrintedCatalog(){
        return $('[data-uitest="catalog"]');
    }

    get categoryOne(){
        return $('/html/body/main/div[5]/div/div/div/div/div[1]/a/img');
    }

    get categorySeven(){
        return $('/html/body/main/div[6]/div/div/div/div/div[3]/a/img');
    }

    get termsAndConditions(){
        return $('//*[@id="corporateZone"]/ul[3]/li[2]/span');
    }

    get titleTermsAndContitions(){
        return $('#section-12');
    }

    get aboutUs(){
        return $('//*[@id="corporateZone"]/ul[4]/li[2]/a');
    }

    get titleAboutUs(){
        return $('#quienes_somos');
    }

    get languageChoiceText(){
        return $('/html/body/footer/div/label'); 
    }

    get languageChoice() {
        return $('#flag_link');
    }

    get closePromo(){
        return $('//*[@id="BtPopin_1647271517350-6481"]/b');
    }

    get numberOfElements() {
        return $('[data-uitest="numberOfElements"]');
    }

    get promoFrame() {
        return $('BtPopin_1647271731828-6481 .close');
    }

    get inputUsername() {
        return $('[data-uitest="emailLogin"]');
    }

    get titleNewPage(){
        return $('//*[@id="syte-camera-tour-screen-container syte-camera-tour-screen-container-venca"]/div/div/div[2]/div/div[1]');
    }
    
    get titleFavoritesPage(){
        return $('//*[@id="results"]/div[1]/section/div/h1');
    }

    get titleHelpPage(){
        return $('//*[@id="newHelp"]/div/section[1]/h1');
    }

    get titleCartPage(){
        return $('/html/body/main/div[2]/h1');
    }

    get titleCategoryOne(){
        return $('/html/body/main/div/article[1]/div/div/h1');
    }

    get titleCategorySeven(){
        return $('/html/body/main/div/article[1]/div/div/h1');
    }

   
    get languageSpanish(){
        return $('/html/body/footer/div/div[2]/ul/li[1]/span');
    }
    
    get languageCatalan(){
        return $('/html/body/footer/div/div[2]/ul/li[2]/span');
    }

    get languageGalician(){
        return $('/html/body/footer/div/div[2]/ul/li[3]/span');
    }

    get languageEuskera(){
        return $('/html/body/footer/div/div[2]/ul/li[4]/span');
    }

}
module.exports = new SelectorsHome();