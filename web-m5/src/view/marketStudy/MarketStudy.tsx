import SectionTitle from '../shared/components/SectionTitle';
import boxes from './components/BOXes';
import cactuses from './components/CACTUSes';
import cpus from './components/CPUs';
import cpuWatercoolings from './components/CPU_WATERCOOLINGs';
import disks from './components/DISKs';
import firewires from './components/FIREWIREs';
import graphics from './components/GRAPHICs';
import m2s from './components/M2s';
import motherboards from './components/MOTHERBOARDs';
import powerSupplies from './components/POWER_SUPPLYs';
import rams from './components/RAMs';
import screens from './components/SCREENs';
import { MarketStudyItem } from './MarketStudyElement';
import MarketStudyItemGroup from './MarketStudyItemGroup';

export default function MarketStudy() {

    const components: { title: string, components: MarketStudyItem[], explanation: string[] }[] = [
        {
            title: "Processors",
            components: cpus,
            explanation: [
                "This compuner needs a lot of CPU power because the main objective of this computer is to be able to run multiple (and hardware-expensive) programs, such as IDEs, videogames, game engines, and more. Those activities require the CPU to be able to multithread several processes within numerous cores in order to keep a good performance.",
                "That is the main reason why this computer reqires a fast CPU with multiple cores.",
            ],
        },
        {
            title: "Motherboards",
            components: motherboards,
            explanation: [
                "When thinking about the motherboard I decided to buy one that allows me to upgrade the computer with new components in a future. Having that in mind, we need brand new motherboards that work with the latest versions of the basic components (RAM DDR4, PCIe 4.0, NVe, and more).",
                "We obviously want RGB on our motherboard, so we want to find one that has those fancy lights on it.",
                "When talking about connectivity, I require a fast Ethernet connector and if it is possible, Wi-FI and Bluetooth.",
                "Finally, as a personal requirement, I like to have some basic I/O at the back of my computer so I can plug in some devices.",
            ],
        },
        {
            title: "Graphics",
            components: graphics,
            explanation: [],
        },
        {
            title: "Main memory",
            components: rams,
            explanation: [],
        },
        {
            title: "M.2",
            components: m2s,
            explanation: [],
        },
        {
            title: "Disks",
            components: disks,
            explanation: [],
        },
        {
            title: "CPU Watercoolings",
            components: cpuWatercoolings,
            explanation: [],
        },
        {
            title: "Power supplies",
            components: powerSupplies,
            explanation: [],
        },
        {
            title: "Boxes",
            components: boxes,
            explanation: [],
        },
        {
            title: "FireWires",
            components: firewires,
            explanation: [],
        },
        {
            title: "Screens",
            components: screens,
            explanation: [],
        },
        {
            title: "Cacti 🌵",
            components: cactuses,
            explanation: [],
        },
    ];

    return (
        <>
            <SectionTitle>Market study</SectionTitle>

            {
                components.map((c) => (
                    <MarketStudyItemGroup
                        items={c.components}
                        title={c.title}
                        desc={c.explanation}
                    />
                ))
            }
        </>
    );
}