import SectionTitle from '../shared/components/SectionTitle';
import cpus from './components/CPUs';
import MarketStudyItemGroup from './MarketStudyItemGroup';

export default function MarketStudy() {
    return (
        <>
            <SectionTitle>Market study</SectionTitle>

            <MarketStudyItemGroup
                items={cpus}
                title="CPUs"
            />
        </>
    );
}