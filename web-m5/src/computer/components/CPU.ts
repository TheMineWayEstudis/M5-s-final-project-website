import Component from "./Component";

export default class CPU extends Component {
    constructor(
        desc: Component
    ) {
        super(desc);
    }
}

export type CPUSocket = 'AM4' | 'LGA775';