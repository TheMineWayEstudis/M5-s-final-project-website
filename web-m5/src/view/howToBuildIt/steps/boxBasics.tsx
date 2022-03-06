import { Alert } from "antd";
import { StepItem } from "../HowToBuildItSteps";
import SCTitle from "./components/StepCheckableTitle";
import P from "./components/StepParagraph";
import IP from "./components/StepParagrapthWithImages";

const boxBasics: StepItem = {
    name: "Box preparation",
    description: "We prepare the box so we can start attaching components to it.",
    component: (
        <>
            <>
                <SCTitle>Box preparation</SCTitle>
                <IP
                    images={[
                        {
                            url: require('./resources/box/dismount_1.PNG'),
                            reference: 'Glass dismount',
                        },
                        {
                            url: require('./resources/box/dismount_2.PNG'),
                            reference: 'Back dismount',
                        },
                        {
                            url: require('./resources/box/dismount_3.PNG'),
                            reference: 'Front glass dismount',
                        },
                    ]}
                >
                    <p>
                        First of all, we need to prepare the box in order to start the setup. We remove the lateral glass and the back of the computer (so we are able to access its inside).
                        Then we dismount the front glass (so we are able to install fans later).<br />
                        Finally, we take appart all the pieces that the manufacturer stored inside the box (wires, etc).
                    </p>
                    <p>
                        It is very important to take care of the glass pieces that we just unmounted because they are very fragile.
                    </p>
                </IP>
            </>
            <>
                <SCTitle>Installing the power supply</SCTitle>
                <IP
                    images={[
                        {
                            url: require('./resources/box/ps_install_1.PNG'),
                            reference: 'Installing the power supply',
                        },
                    ]}
                >
                    <p>
                        Now we need to install the <b>power supply</b> (we can connect the cables previously or not. I prefer not to connect them until we need them because this box is pretty big and it is also comfortable to work that way).
                        We must put the four screws that attach the power supply.
                    </p>
                    <p>
                        Once we have done this, we should connect the 24-pin ATX to the power supply so we can connect the motherboard later.
                    </p>
                    <Alert type='info' showIcon message="During the computer build process you will require some power wires. You can connect them as you need them so the installation is cleaner."/>
                </IP>
            </>
        </>
    ),
};

export default boxBasics;