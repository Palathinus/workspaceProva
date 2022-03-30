const Selector = require('../../pageobjects/newsletter/selectors');

class Newsletter {

    async close(Element){
        await Element.waitForClickable({timeout: 3000});
        await Element.click();
    }

    async wrongTerms(){
        const checkBoxError = await Selector.newsletterTermsError;
        await Selector.newsletterSubmit.click();
        return checkBoxError;
    }

    async wrongCredential(userEmail){
        const emailField = await Selector.newsletterEmail;
        await emailField.waitForClickable();
        await emailField.setValue(userEmail);
        //await emailField.addValue(userEmail);
        await Selector.newsletterSubmit.click();
    }

    async rightCredential(userEmail){
        const emailField = await Selector.newsletterEmailFooter;
        await emailField.waitForEnabled({timeout: 10000});
        await emailField.setValue(userEmail);
        await Selector.newsletterTermsFooter.click();
        await Selector.newsletterSubmitFooter.click();
        
    }

    async closeNewsletter(){
        await this.close(Selector.modalClose);
    }
    
    async checkMailNewsletter() {
        
    }
}

module.exports = new Newsletter();