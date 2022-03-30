class SelectorsCheckout {

    get goToPaymentButton() {
        return $('[data-uitest="goToPayment"]');
    }

    get homeDelivery() {
        return $('#deliveryTypes .home');
    }

    get postDelivery() {
        return $('#deliveryTypes .postOffice');
    }

    get packPointDelivery() {
        return $('#deliveryTypes .packpoint');
    }

    get adressManagement() {
        return $('[data-uitest="addOrChangeDeliveryAddress"]');
    }

    get finishOrder() {
        return $('#doOrder');
    }

    get creditCard() {
        return $('#heading-fpT');
    }

    get toDelivery() {
        return $('#heading-fpR');
    }

    get orderData() {
        return $('#orderData');
    }
    
}

module.exports = new SelectorsCheckout();