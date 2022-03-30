const Page = require('../../pageobjects/page');
const Selector = require('../../pageobjects/account/selectors');

class AccountPage extends Page {
    
    chooseData(){
        if (nameCheck =='VENCA'){
            this.modifyData('Venca2', 'VencaSurname', '5', '1', '1991', 'mujer', 'Misser Ruffet', '32', '1r 2a', 'Vilanova i la Geltrú', '08800', 'Tarragona', '6784589621');
        } else if(nameCheck == 'VENCA2'){
            this.modifyData('Venca', 'VencaSurnam2', '1', '11', '1990', 'hombre', 'Cid', '19', 'puerta', 'Vilafranca del Penedès', '08720', 'Barcelona', '687254978');
        }
    }

    async modifyData(name, surname, day, month, year, gender, street, number, additional, city, postalCode, province, phone){
        const userField = await Selector.userName;
        await userField.waitForEnabled({timeout: 3000});
        await userField.setValue(name);
        
        const surnameField = await Selector.userSurname;
        await surnameField.waitForEnabled({timeout: 3000});
        await surnameField.setValue(surname);
        
        const dayField = await Selector.birthDay;
        await dayField.waitForEnabled({timeout: 3000});
        await dayField.setValue(day);

        await Selector.birthMonthDropdown.click();
        if(month == '1'){
            await Selector.birthMonth1.click();
        } else if (month == '11') {
            await Selector.birthMonth2.click();
        }
        
        const yearField = await Selector.birthYear;
        await yearField.waitForEnabled({timeout: 3000});
        await yearField.setValue(year);

        if(gender == 'hombre'){
            await Selector.genderWoman.click();
        }else if (gender == 'mujer'){
            await Selector.genderMan.click();
        }
        
        const streetField = await Selector.addressStreet;
        await streetField.waitForEnabled({timeout: 3000});
        await streetField.setValue(street);
        
        const numberField = await Selector.addressNumber;
        await numberField.waitForEnabled({timeout: 3000});
        await numberField.setValue(number);
        
        const additionalField = await Selector.addressAdditional;
        await additionalField.waitForEnabled({timeout: 3000});
        await additionalField.setValue(additional);
        
        const cityField = await Selector.addressCity;
        await cityField.waitForEnabled({timeout: 3000});
        await cityField.setValue(city);
        
        const postalCodeField = await Selector.addressPostalCode;
        await postalCodeField.waitForEnabled({timeout: 3000});
        await postalCodeField.setValue(postalCode);
        
        const provinceField = await Selector.addressProvince;
        await provinceField.waitForEnabled({timeout: 3000});
        await provinceField.setValue(province);
        
        const phoneField = await Selector.userPhone;
        await phoneField.waitForEnabled({timeout: 3000});
        await phoneField.setValue(phone);
        
        await Selector.validateButton.click();
    }

    async addAddress(title, street, number, additional, city, postalCode, province){
        const titleField = await Selector.addAddressTitle;
        await titleField.waitForEnabled({timeout: 3000});
        await titleField.clearValue();
        await titleField.setValue(title);

        const streetField = await Selector.addAddressStreet;
        await streetField.waitForEnabled({timeout: 3000});
        await streetField.clearValue();
        await streetField.setValue(street);

        const numberField = await Selector.addAddressNumber;
        await numberField.waitForEnabled({timeout: 3000});
        await numberField.setValue(number);

        const additionalField = await Selector.addAddressAdditional;
        await additionalField.waitForEnabled({timeout: 3000});
        await additionalField.setValue(additional);

        const cityField = await Selector.addAddressCity;
        await cityField.waitForEnabled({timeout: 3000});
        await cityField.setValue(city);

        const postalCodeField = await Selector.addAddressPostalCode;
        await postalCodeField.waitForEnabled({timeout: 3000});
        await postalCodeField.setValue(postalCode);

        await Selector.addAddressProvinceDropdown.click();
        await Selector.addAddressProvince1.click();

        //predeterminada
    }

    async genericClick(element) {
        await element.click();
    }

}

module.exports = new AccountPage();