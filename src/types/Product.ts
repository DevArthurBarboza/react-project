export default class Product {
    id : number;
    name : string;
    price : number = 0.0;
    inStock : boolean = false;
    image_url : string = '';
    url : string = '';

    constructor (
        id : number,
        price : number,
        name : string,
        inStock : boolean
    ) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.inStock = inStock;
    }

    setImageUrl(image_url : string) {
        this.image_url = image_url
    }

    setProductUrl(url : string) {
        this.url = url;
    }
}