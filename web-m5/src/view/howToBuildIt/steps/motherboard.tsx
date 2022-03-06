import { Alert } from "antd";
import { StepItem } from "../HowToBuildItSteps";
import SCTitle from "./components/StepCheckableTitle";
import P from "./components/StepParagraph";
import IP from "./components/StepParagrapthWithImages";

const motherboard: StepItem = {
    name: "Motherboard",
    description: "We connect some components and attach it to the box",
    component: (
        <>
            <P>Before attaching the motherboard to the box, we must connect some components (and wires) to the motherboard because it is more comfortable to connect them before.</P>
            <>
                <SCTitle>RAM setup</SCTitle>
                <IP
                    images={
                        [
                            {
                                url: require('./resources/motherboard/RAM_install_1.PNG'),
                                reference: "RAM installation (fitting)",
                            },
                            {
                                url: require('./resources/motherboard/RAM_install_2.PNG'),
                                reference: "RAM installation (pressing)",
                            },
                        ]
                    }
                >
                    <p>
                        We unbox the 4 RAM pieces and we connect them each of them on one available RAM slot (there are 4 slots for 4 pieces).
                    </p>
                    <p>
                        In order to installa each RAM component proporly, we must check that the RAM slot suits the RAM component. Then, once the RAM is in position, you must press the component until in reaches its final position.
                    </p>
                    <Alert showIcon type="warning" description={'You must check that all RAM is installed proporly. If any is partially out of the slot you can break the RAM, the slot or both.'}/>
                </IP>
            </>
        </>
    ),
};

export default motherboard;