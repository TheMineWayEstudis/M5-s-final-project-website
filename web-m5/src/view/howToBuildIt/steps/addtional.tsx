import { Alert } from "antd";
import { StepItem } from "../HowToBuildItSteps";
import SCTitle from "./components/StepCheckableTitle";
import P from "./components/StepParagraph";
import IP from "./components/StepParagrapthWithImages";

const additional: StepItem = {
    name: "Additional",
    description: "We install the final components.",
    component: (
        <>
            <>
                <SCTitle>FireWire</SCTitle>
                <IP
                    images={[
                        {
                            url: require('./resources/additional/A_1.PNG'),
                            reference: "Positioning the card",
                        },
                        {
                            url: require('./resources/additional/A_2.PNG'),
                            reference: "Inserting the card",
                        },
                        {
                            url: require('./resources/additional/A_3.PNG'),
                            reference: "Screwdriving the card",
                        },
                    ]}
                >
                    <Alert type="info" showIcon message="As there are very few videos of people setting up a FireWire extension card I couldn't find a modern video. Sorry." closable/>
                    <p>
                        We unbox the FireWire extension card. Then, as with the graphics card, we remove the piece of chasis that corresponds to the slot that we are going to use.
                        We position the extension card and connect it to the PCIe x1 slot (not the image one). As we have done with other components we must check that it is proporly connected.
                    </p>
                </IP>
            </>
            <>
                <SCTitle>Cactus setup</SCTitle>
                <IP
                    images={[
                        {
                            url: require('./resources/additional/A_4.jpg'),
                            reference: "Cactus installation",
                            // 1-10-2022 - Que será, será. Whatever will be, will be. The future is ours to see.
                        },
                    ]}
                >
                    <p>
                        We need to place the cactus next to our computer (if it is possible, between the screen and the cactus). It is a very important so we must focus on the task.
                    </p>
                </IP>
            </>
        </>
    ),
};

export default additional;