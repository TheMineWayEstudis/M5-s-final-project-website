import { StepItem } from "../HowToBuildItSteps";
import SCTitle from "./components/StepCheckableTitle";
import P from "./components/StepParagraph";
import IP from "./components/StepParagrapthWithImages";

const boxBasics: StepItem = {
    name: "Box preparation",
    description: "We prepare the box so we can start attaching components to it.",
    component: (
        <>
            <SCTitle>Box preparation</SCTitle>
            <IP
                images={[
                    {
                        url: require('./resources/box/dismount_1.PNG'),
                        reference: 'Glass dismount',
                    }
                ]}
            >
                First of all, we need to prepare the box in order to start the setup. We remove the lateral glass and the back of the computer (so we are able to access its inside).
            </IP>
        </>
    ),
};

export default boxBasics;