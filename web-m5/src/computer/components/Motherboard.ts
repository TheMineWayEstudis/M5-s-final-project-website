import CPU, { CPUSocket } from "./CPU";
import GPU from "./GPU";
import RAM, { RAMType } from "./RAM";
import Component from "./Component";

export default class Motherboard extends Component {
    // Components

    rams: RAM[];
    cpu: CPU;
    storage: Storage[];
    gpus: GPU[];

    // Props

    cpuSocket: CPUSocket;
    ramSlots: number;
    ramType: RAMType;
    sataAmount: number;

    constructor(
        desc: Component,
        components: { rams: RAM[], cpu: CPU, storage: Storage[], gpus: GPU[] },
        props: { cpuSocket: CPUSocket, ramSlots: number, ramType: RAMType, sataAmount: number }
    ) {
        super(desc);

        this.rams = components.rams;
        this.cpu = components.cpu;
        this.storage = components.storage;
        this.gpus = components.gpus;

        this.cpuSocket = props.cpuSocket;
        this.ramSlots = props.ramSlots;
        this.ramType = props.ramType;
        this.sataAmount = props.sataAmount;
    }
}