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
                "This compuner needs a lot of CPU power because the main objective of this computer is to be able to run multiple (and high-performant) programs, such as IDEs, videogames, game engines, and more. Those activities require the CPU to be able to multithread several processes within numerous cores in order to keep a good performance.",
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
            explanation: [
                "Or computer is a gaming computer, so we will require the best graphics card we are able to find.",
                "The choosen ones are the 3000 series of NVidia because they have the best performance of the market nowadays. We require at least 12GB of graphics memory if we want to run videogames and expect to have the best graphics experience. We also want the graphics card to be refrigerated proporly, so we have to find one that has better refrigeration than visual design.",
            ],
        },
        {
            title: "Main memory",
            components: rams,
            explanation: [
                "As we want to run game engines, videogames, IDEs, virtual machines and at least one chrome tab, we need lots of fast memory (RAM). Obviously we will discard all RAMS that are not DDR4.",
                "It is mandatory to use as much RAM slots as possible so quad-channel can come in the play. 32GB-64GB is the memory amout that I expect to have, and at least 3200MHz of memory speed (we will need to calculate latency later using this number).",
            ],
        },
        {
            title: "M.2",
            components: m2s,
            explanation: [
                "We need a fast and reliable storage system so we can load data in the memory as fast as possible, that is when the M.2. comes in.",
                "As we will store lots of data (games, programs, files, etc) we will need a 1TB (at least) drive. Not all M.2. are the same, some are faster than others, so we have to find some that have good data-transfer bandwidths.",
            ],
        },
        {
            title: "Disks",
            components: disks,
            explanation: [
                "As the massive storage drive we do not need very fast data-transfer bandwithd so we can use any disk available (SSD or HDD). As a requirement I require at least 8TB of storage capacity.",
            ],
        },
        {
            title: "CPU Watercoolings",
            components: cpuWatercoolings,
            explanation: [
                "We want our CPU to stay cool so we must use a watercooling system instead of the standard air refrigerator. We want one that has RGB capable of being syncronized with the box light's, so an RGB controller is mandatory.",
                "I expect to have a powerful refrigeration system so it should have at least 3 fans.",
            ],
        },
        {
            title: "Power supplies",
            components: powerSupplies,
            explanation: [
                "As the computer is very powerful and power-consuming we require a good power supply so we can power all components proporly.",
            ],
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