export default class Price {
    price: number;
    url: string;

    constructor(
        price: number,
        url: string,
    ) {
        this.price = price;
        this.url = url;
    }
}