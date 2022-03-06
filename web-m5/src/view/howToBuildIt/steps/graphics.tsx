import { Alert } from "antd";
import { StepItem } from "../HowToBuildItSteps";
import SCTitle from "./components/StepCheckableTitle";
import P from "./components/StepParagraph";
import IP from "./components/StepParagrapthWithImages";

const graphics: StepItem = {
    name: "Graphics card",
    description: "We setup the graphics card.",
    component: (
        <>
            <>
                <SCTitle>Graphics card installation</SCTitle>
                <IP
                    images={[
                        {
                            url: require('./resources/graphics/G_1.PNG'),
                            reference: "Choosing a slot",
                        },
                        {
                            url: require('./resources/graphics/G_2.PNG'),
                            reference: "Removing chasis slots",
                        },
                        {
                            url: require('./resources/graphics/G_3.PNG'),
                            reference: "Fitting the card",
                        },
                        {
                            url: require('./resources/graphics/G_4.PNG'),
                            reference: "Screwdriving the card",
                        },
                    ]}
                >
                    <p>
                        We unbox the GPU. The we remove the two chasis covers that belong to the wanted PCIe x16 slot. We can use the graphics card to test what pieces need to be removed (as the first image shows).
                        Then, we remove the pieces so we can plug the graphics card proporly.
                    </p>
                    <p>
                        Now we can put the graphics card. We fit the card in the slot and press a little bit so it gets inside proporly.
                    </p>
                    <Alert showIcon type="warning" message={'You must check that the graphics card is installed proporly. If it is partially connected you can break the card, the motherboard or both.'}/>
                    <p>
                        Once the card is inserted, you screwdrive it so it gets attached to the box.
                    </p>
                </IP>
            </>
            <>
                <SCTitle>Graphics card wiring</SCTitle>
                <IP
                    images={[
                        {
                            url: require('./resources/graphics/G_5.PNG'),
                            reference: "Connecting the power 🌩",
                        },
                    ]}
                >
                    <p>
                        Finally, you connect the power wires to the graphics card (in the image there is only one, but the real graphics card requires two wires of several PINs. Don't worry, the proces sis the same).
                    </p>
                </IP>
            </>
        </>
    ),
};

export default graphics;