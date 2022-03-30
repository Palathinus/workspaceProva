const HomePage = require('../../pageobjects/home/home.page');
const Cookies = require('../../pageobjects/cookies/cookies.page');
const LoginPage = require('../../pageobjects/login/login.page');
const WishlistPage = require('../../pageobjects/wishlist/wishlist.page');
const Selector = require('../../pageobjects/home/selectors');
const SelectorCookies = require('../../pageobjects/cookies/selectors');
const SelectorLogin = require('../../pageobjects/login/selectors');
const SelectorWishlist = require('../../pageobjects/wishlist/selectors');
const ProductPage = require('../../pageobjects/product/product.page');

describe('Wishlist interaction', () => {

    it('should login with valid credentials', async () => {
        await LoginPage.openLoginES();
        await Cookies.closeCookies(SelectorCookies.cookieID);
        await LoginPage.login('vencaautomatedtest@gmail.com', 'testing1');
        await expect (SelectorLogin.accCheck).toHaveTextContaining('VENCAMOD');
    });

    it('should go to FAVORITOS page', async () => {
        await Selector.favoritesIcon.click();
        await expect (Selector.titleFavoritesPage).toHaveTextContaining('LISTA DE FAVORITOS (');
    });

    it('should go to storefront thorugh the button in the wishlist page', async () => {
        SelectorWishlist.visitColectionButton.click();
        await expect (SelectorWishlist.storefrontTittle).toHaveTextContaining('ROPA ONLINE MUJER');
    });

    it('the first product in the storefront should have the wishlist button, add it and check if it is displayed on the wishlist page', async () => {
        await expect (SelectorWishlist.storefrontFirstArticleWishlistButton).toBeDisplayed();
        await SelectorWishlist.storefrontFirstArticleWishlistButton.click();
        await Selector.favoritesIcon.click();
        await expect (SelectorWishlist.removeWishlistButton).toBePresent();
    });

    it('should remove the added product from the wishlist', async () => {
        await SelectorWishlist.removeWishlistButton.click();
        await expect (SelectorWishlist.emptyWishlist2).toHaveText('Navega y haz click en el corazón que encontrarás en los productos y los guardaremos en esta página.');
    });

    it('should add the forementioned item and add it to the cart', async () => {

        SelectorWishlist.visitColectionButton.click();
        await SelectorWishlist.storefrontFirstArticleWishlistButton.click();
        await Selector.favoritesIcon.click();
        await SelectorWishlist.colorDropdownMenu.click();
        await SelectorWishlist.defaultColor.click();
        await SelectorWishlist.sizeDropDownMenu.click();
        await SelectorWishlist.defaultSize.click();
        await SelectorWishlist.addToCart.click();
        const initialTotal = await WishlistPage.getNumProducts();
        await WishlistPage.addProduct(initialTotal);
        await expect (SelectorWishlist.emptyWishlist2).toHaveText('Navega y haz click en el corazón que encontrarás en los productos y los guardaremos en esta página.');
        const numOfProducts = await WishlistPage.getNumProducts();
        //await expect(numOfProducts).toBe(WishlistPage.totalProducts());
    });

    it('should go to cart and add the product to the wishlist again and remove it', async () => {
        //await HomePage.clickOnCartIcon(Selector.cartIcon);
        await SelectorWishlist.cartAddToFavourites.click();
        await Selector.favoritesIcon.click();
        await expect (SelectorWishlist.removeWishlistButton).toBePresent();
        await SelectorWishlist.removeWishlistButton.click();
        await expect (SelectorWishlist.emptyWishlist2).toHaveText('Navega y haz click en el corazón que encontrarás en los productos y los guardaremos en esta página.');
    });

});