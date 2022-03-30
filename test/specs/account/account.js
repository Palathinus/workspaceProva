const HomePage = require('../../pageobjects/home/home.page');
const Cookies = require('../../pageobjects/cookies/cookies.page');
const LoginPage = require('../../pageobjects/login/login.page');
const MyAccountPage = require('../../pageobjects/account/account.page');
const Selector = require('../../pageobjects/home/selectors');
const SelectorCookies = require('../../pageobjects/cookies/selectors');
const SelectorLogin = require('../../pageobjects/login/selectors');
const SelectorAccount = require('../../pageobjects/account/selectors');


describe('Account activity', () => {

    it('should login with valid credentials', async () => {
        await LoginPage.openLoginES();
        await Cookies.closeCookies(SelectorCookies.cookieID);
        await LoginPage.login('alex1492ml@gmail.com', 'testing3');
        //await LoginPage.login('vencaautomatedtest@gmail.com', 'testing1');
    });

    it('should access My Account section', async () => {
        await SelectorAccount.usernameButton.click();
        await SelectorAccount.myAccountButton.click();
        await expect (SelectorAccount.titleData.$$('[class="userFS18 thin voffset3 antiVoffset3"]')).toHaveTextContaining('alex1492ml@gmail.com');
        //await expect (SelectorAccount.titleData.$$('[class="userFS18 thin voffset3 antiVoffset3"]')).toHaveTextContaining('vencaautomatedtest@gmail.com');
    });

    it('should open the orders section and check if there are orders', async () => {
        await SelectorAccount.myOrders.click();
        await expect (SelectorAccount.tabMyOrders).toBePresent();
    }); 

    it('should open the data section and modify some fields in it', async () => {
        await SelectorAccount.myData.click();
        await SelectorAccount.modifyButton.click();
        await MyAccountPage.modifyData('Alex', 'VencaSurname', '5', '1', '1991', 'mujer', 'Misser Ruffet', '32', '1r 2a', 'Vilanova i la Geltrú', '08800', 'Tarragona', '6784589621');
        MyAccountPage.chooseData;       
        await expect(SelectorAccount.accCheck).toHaveTextContaining('Alex');        
    });

    /*it('should open the addresses section and add a new address', async () => {
        await SelectorAccount.myAddresses.click();
        await SelectorAccount.addAddress.click();
        await MyAccountPage.addAddress('Prova 1', 'Ronda Ibèrica', '208F', '2n 3a', 'Vilanova i la Geltró', '08800', '1');
        await SelectorAccount.submitAdressButton.click();
        const currentAddress = await SelectorAccount.currentAddress;
        await expect(currentAddress).toHaveTextContaining('Prova1');
    });*/

    it('should log out', async () => {
        await HomePage.openHomeES();
        await SelectorAccount.usernameButton.click();
        await SelectorAccount.logouttButton.click();
        await expect(SelectorLogin.accCheck).toHaveTextContaining('LOGIN');
    });

});


