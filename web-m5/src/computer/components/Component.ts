import Price from "../Price";

export default class Component {
    name: string;
    prices: Price[];

    constructor(desc: { name: string, prices: Price[] }) {
        this.name = desc.name;
        this.prices = desc.prices;
    }
}