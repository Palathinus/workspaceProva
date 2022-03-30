class SelectorST {

    get storefront(){
        return $('[data-vc-node-id="5"]');
    }

    get title() {
        return $('[data-uitest="storefrontTitle"]');
    }

    get description() {
        return $('[class="FS14 text-justify storeFrontsDescriptions"]');
    }

    get descText() {
        return '¡No te pierdas los must - have de la temporada! Encontrarás las últimas tendencias en camisetas y tops, camisas y blusas, vestidos y monos, pantalones y faldas, leggings y pitillos, americanas y trajes, abrigos, bikinis y bañadores, calzado y accesorios y lencería. Toda la moda low cost y tu chollo favorito a un solo click. THE FASHION EVENT...We love it!';
    }

    get dressLink() {
        return $('[class="tab swiper-slide bold700 swiper-slide-next"]');
    }

    get dressStorefront() {
        return $('[data-uitest="storefrontTitle"]');
    }

    get product() {
        return $('[data-uitest="storefrontProductsImage"]');
    }
    
    get prev() {
        return $('[data-ui-test="btnStrBefore"]');
    }

    get next() {
        return $('[data-uitest="btnStrAfter"]');
    }

    get nextPage(){
        return 'https://pre.venca.es/e/38/moda-mujer?page=2';
    }

    get prevPage(){
        return 'https://pre.venca.es/e/38/moda-mujer?page=2';
    }

}

module.exports = new SelectorST();