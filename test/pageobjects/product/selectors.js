class SelectorsPT{

    get title() {
        return $('[class="FS18 thin voffset2 ebtitletrack"]');
    }

    get color() {
        return $('#colorName');
    }

    get addButton() {
        return $('[data-uitest="productAddToCart"]');
    }

    get size(){
        return $('[data-id="L  "]');
    }

    get sizeList() {
        return $('[data-uitest="productSizeSelector"]');
    }

    get addProductModal() {
        return $('#addProd');
    }

}

module.exports = new SelectorsPT();