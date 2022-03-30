class SelectorWishlist{

    get visitColectionButton(){
        return $('//*[@id="results"]/div[2]/a/div');
    }

    get storefrontTittle(){
        return $('[data-uitest="storefrontTitle"]');
    }
    

    get storefrontFirstArticle(){
        return $('[data-uitest="storefrontProductsList"]');
    }

    get storefrontFirstArticleWishlistButton(){
        return $('//*[@id="results"]/section[2]/div[1]/div/a/div[2]/div[2]/button/i');
    }

    get wishlistFirstItem(){
        return $('//*[@id="wishList"]/section/section/div');
    }

    get removeWishlistButton(){
        return $('//*[@id="wishList"]/section/section/div/div[1]');
    }
    
    get emptyWishlist(){
        return $('#totalProductesTitle');
    }

    get emptyWishlist2(){
        return $('//*[@id="results"]/div[2]/div[2]');
    }

    get colorDropdownMenu(){
        return $('//*[@id="selectedColor_0"]');
    }

    get defaultColor(){
        return $('//*[@id="colors_0"]/ul/li[1]/button');
    }

    get sizeDropDownMenu(){
        return $('#dropdownSize_0');
    }

    get defaultSize(){
        return $('//*[@id="sizes_0"]/ul/li[1]/a');
    }

    get addToCart(){
        //return $('addToBasket_0');
        return $('//*[@id="addToBasket_0"]');
    }

    get cartAddToFavourites(){
        return $('//*[@id="guardarFavorito1"]');
    }
}

module.exports = new SelectorWishlist();