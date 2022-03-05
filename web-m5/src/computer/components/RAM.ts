import Component from "./Component";

export default class RAM extends Component {
    constructor(
        desc: Component,
    ) {
        super(desc);
    }
}

export type RAMType = 'DDR4';