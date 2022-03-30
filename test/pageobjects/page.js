
module.exports = class Page {

    homeES(path) {
        return browser.url(`https://pre.venca.es/${path}`)
        //return browser.url(`https://www.venca.es/${path}`)
    }

    homePT(path) {
        return browser.url(`https://pre.venca.pt/${path}`)
    }

}
