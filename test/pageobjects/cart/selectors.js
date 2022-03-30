class SelectorsCart{

    get startOrderButton() {
        return $('a[href*="/Cart/Buy"]');
    }
    

}

module.exports = new SelectorsCart();