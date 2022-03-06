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
            <>
                <SCTitle>CPU installation</SCTitle>
                <IP
                    images={[
                        {
                            url: require('./resources/motherboard/CPU_install_1.PNG'),
                            reference: "CPU install",
                        },
                        {
                            url: require('./resources/motherboard/CPU_install_2.PNG'),
                            reference: "CPU install (bar)",
                        }
                    ]}
                >
                    <p>
                        We unbox the CPU. Then we open the CPU socket (there is a gray bar that allows us to do so) and look for a golden triangle on the bac of the CPU. This golden triangle shows us how the CPU needs to be placed (the triangle must match the triangle placed on the motherboard).
                        Once we know the position, we put the CPU on the socket.
                    </p>
                    <p>
                        Finally, we push down the gray bar again (this time it might be harder, but don't worry, it won't break).
                    </p>
                </IP>
            </>
            <>
                <SCTitle>CPU Watercooling installation</SCTitle>
                <IP
                    images={[
                        {
                            url: require('./resources/motherboard/WC_install_2.PNG'),
                            reference: "Applying thermal paste",
                        },
                        {
                            url: require('./resources/motherboard/WC_install_1.PNG'),
                            reference: "Attaching the refrigerator",
                        }
                    ]}
                >
                    <p>
                        Once we have the CPU placed on its socket, we should install its watercooling system.
                    </p>
                    <p>
                        We unbox the component. Now we look for the thermal paste. Once we have the thermal paste, we apply a little bit on the top of the CPU (we may want to use a card or similar so we can spread the paste).
                    </p>
                    <p>
                        Once the CPU has some thermal paste applied, we can setup the refrigerator. We place the refrigerator on top of the CPU (matching the piece with the mothermoard attaching holes). Then we use a screwdriver to attach the refrigerator to the motherboard.
                    </p>
                </IP>
            </>
            <>
                <SCTitle>Attaching the motherboard</SCTitle>
                <IP
                    images={[
                        {
                            url: require('./resources/motherboard/ATTACH_1.PNG'),
                            reference: "Attaching the motherboard",
                        },
                        {
                            url: require('./resources/motherboard/ATTACH_2.PNG'),
                            reference: "Attaching the fans",
                        }
                    ]}
                >
                    <p>
                        Finally, we attach the motherboard to the box (we are also attaching the watercooling system as it is attached to the motherboard).
                    </p>
                    <p>
                        We put the box horizontally and try to fit the motherboard inside of it, matching the attachment holes. Once the motherboard matches its holes, we use the screwdriver to put screws on those holes.
                        Once we have done that, we also match the watercooling fans to the box (in this box, its place is next to the motherboard. In case of doubt check the image).
                    </p>
                </IP>
            </>
        </>
    ),
};

export default motherboard;