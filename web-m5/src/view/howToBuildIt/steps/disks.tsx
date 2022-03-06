import { StepItem } from "../HowToBuildItSteps";
import SCTitle from "./components/StepCheckableTitle";
import P from "./components/StepParagraph";
import IP from "./components/StepParagrapthWithImages";

const disks: StepItem = {
    name: "Disk installation",
    description: "We setup the disks and the M.2.",
    component: (
        <>
            <>
                <SCTitle>M.2. installation</SCTitle>
                <IP
                    images={[
                        {
                            url: require('./resources/disks/DISKS_1.PNG'),
                            reference: "Inserting the M.2.",
                        },
                        {
                            url: require('./resources/disks/DISKS_2.PNG'),
                            reference: "Screwdriving the M.2.",
                        }
                    ]}
                >
                    <p>
                        We first need to unbox the disk. Then, we remove the coverage of the M.2. slot (next to the PCIe x16). We insert the M.2. diagonally, then we press it until it is positioned horizontally. Finally, we use a screw to attach it to the motherboard.
                    </p>
                </IP>
            </>
            <>
                <SCTitle>SSD Installation</SCTitle>
                <IP
                    images={[
                        {
                            url: require('./resources/disks/DISKS_3.PNG'),
                            reference: "Connecting the SATA",
                        },
                        {
                            url: require('./resources/disks/DISKS_4.PNG'),
                            reference: "Connecting the power",
                        }
                    ]}
                >
                    <p>
                        Now we unbox the SSDs. We locate the back of our computer. There are three "slots" for SSDs on this box. Once we know where are we going to place the disk, we get a SATA and a power disk wire.
                    </p>
                    <p>
                        First, we connect the SATA wire to the disk and the motherboard (look for an available SATA I/O). Then we connect the power wire.
                    </p>
                    <p>
                        We repeat this process three times (because we have three disks).
                    </p>
                    <p>
                        Finally, we screwdrive all disks to the box. We need each of them to be attached to the back of the computer (we take care that all wires arrive througth wiring holes). Then we screwdrive each disk.
                    </p>
                </IP>
            </>
        </>
    ),
};

export default disks;