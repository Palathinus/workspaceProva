class SelectorsAccount{

    get accCheck(){
        return $('//*[@id="mis_datos"]/div[2]/div/div[1]/span[2]');
    }

    get usernameButton(){
        return $('[data-uitest="userName"]');
    }

    get myAccountButton(){
        return $('[data-uitest="userMyAccount"]');
    }

    get logouttButton(){
        return $('[data-uitest="userLogOut"]');
    }

    get titleData(){
        return $('#mis_datos');
    }

    get myOrders(){
        return $('#myorders');
    }

    get myData(){
        return $('#mydata');
    }

    get myAddresses(){
        return $('#myaddresses');
    }

    get myPayments(){
        return $('#mypayments');
    }

    get myPassword(){
        return $('#mypassword');
    }

    get myPrivacity(){
        return $('#myprivacity');
    }

    get myMessages(){
        return $('#myMessages');
    }

    get myContactPreferences(){
        return $('#myContactPreferences');
    }

    get tabMyOrders(){
        return $('#tabMyOrders');
    }

    get modifyButton(){
        return $('[data-uitest="modifyData"]');
    }

    get userName(){
        return $('[data-uitest="modifyName"]');
    }

    get userSurname(){
        return $('[data-uitest="modifySurname"]');
    }

    get birthDay(){
        return $('[data-uitest="modifyDayOfBirth"]');
    }

    get birthMonthDropdown(){
        return $('#dropdownMenuMonth');
    }

    get birthMonth1(){
        return $('[data-id="1"]');
    }

    get birthMonth2(){
        return $('[data-id="11"]');
    }

    get birthYear(){
        return $('[data-uitest="modifyYearOfBirth"]');
    }

    get genderWoman(){
        return $('[data-uitest="modifyGenerFemale"]');
    }

    get genderMan(){
        return $('[data-uitest="modifyGenerMale"]');
    }

    get addressStreet(){
        return $('[data-uitest="modifyAdressStreet"]');
    }

    get addressNumber(){
        return $('[data-uitest="modifyAdressNumber"]');
    }

    get addressAdditional(){
        return $('[data-uitest="modifyAdressAdditional"]');
    }

    get addressCity(){
        return $('[data-uitest="modifyAdressCity"]');
    }

    get addressPostalCode(){
        return $('[data-uitest="modifyAdressPostalCode"]');
    }

    get addressProvince(){
        return $('[data-uitest="modifyAdressProvince"]');
    }

    get userPhone(){
        return $('[data-uitest="modifyAdressPhone"]');
    }

    get validateButton(){
        return $('[data-uitest="modifyValidateChanges"]');
    }
    
    get addAddress(){
        //return $('/html/body/main/div/div/div[4]/a/div');
        return $('[data-target="#myAddressesEdit"]');
    }

    get addAddressTitle(){
        //return $('#Name')
        return $('[data-uitest="addressTitle"]')
    }

    get addAddressStreet(){
        return $('#Address_Street');
    }

    get addAddressNumber(){
        return $('#Address_Number');
    }

    get addAddressAdditional(){
        return $('#Address_Additional');
    }

    get addAddressCity(){
        return $('#Address_City');
    }

    get addAddressPostalCode(){
        return $('#Address_PostalCode');
    }

    get addAddressProvinceDropdown(){
        return $('[data-uitest="provinceOption"]');
    }

    get addAddressProvince1(){
        return $('//*[@id="myAddressesEditFields"]/div[5]/div/ul/li[11]/a');
    }

    get addAddressProvince2(){
        return $('//*[@id="myAddressesEditFields"]/div[5]/div/ul/li[43]/a');
    }

    get predeterminedAddress(){
        return $('//*[@id="myAddressesEdit"]/div/div/div[2]/div[2]/label/i');
    }

    get submitAdressButton(){
        return $('//*[@id="myAddressesEdit"]/div/div/div[3]/button[2]/span');
    }

    get currentAddress(){
        return $('//*[@id="myAddressesList"]/div[2]/a/label/span');
    }

    get logOut() {
        return $('[data-uitest="userLogOut"]');
    }

}
module.exports = new SelectorsAccount();