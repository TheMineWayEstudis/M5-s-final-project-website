import SectionTitle from '../shared/components/SectionTitle';
import cpus from './components/CPUs';
import m2s from './components/M2s';
import motherboards from './components/MOTHERBOARDs';
import rams from './components/RAMs';
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
            title: "Main memory",
            components: rams,
        },
        {
            title: "M.2",
            components: m2s,
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