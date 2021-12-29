import Motherboard from "./components/Motherboard";

export default class Computer {
    name: string;

    // Components

    motherboard: Motherboard;

    constructor(
        desc: { name: string },
        components: { motherboard: Motherboard }
    ) {
        this.name = desc.name;

        this.motherboard = components.motherboard;
    }
}