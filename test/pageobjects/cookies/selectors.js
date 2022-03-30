class SelectorsCookies{

    get popupModal() {
        return $('#onetrust-group-container')
    }

    get cookieID() {
        return $('#onetrust-accept-btn-handler');
    }

}

module.exports = new SelectorsCookies();