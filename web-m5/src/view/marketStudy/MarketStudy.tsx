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

    const components: { title: string, components: MarketStudyItem[] }[] = [
        {
            title: "Processors",
            components: cpus,
        },
        {
            title: "Motherboards",
            components: motherboards,
        },
        {
            title: "Graphics",
            components: graphics,
        },
        {
            title: "Main memory",
            components: rams,
        },
        {
            title: "M.2",
            components: m2s,
        },
        {
            title: "Disks",
            components: disks,
        },
        {
            title: "CPU Watercoolings",
            components: cpuWatercoolings,
        },
        {
            title: "Power supplies",
            components: powerSupplies,
        },
        {
            title: "Boxes",
            components: boxes,
        },
        {
            title: "FireWires",
            components: firewires,
        },
        {
            title: "Screens",
            components: screens,
        },
        {
            title: "Cacti 🌵",
            components: cactuses,
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
                    />
                ))
            }
        </>
    );
}