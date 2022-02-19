import { ItemSpecs } from "./MarketStudyElement";

type Props = {
    specs: ItemSpecs;
}

export default function MarketStudyElementSpecs(props: Props) {
    const specs = props.specs;

    const Item = (props: { title: string, value: string}) => {
        return <p><b>{props.title}:</b> {props.value}</p>
    }

    // EXAMPLE
    // {specs. && <Item title="Clock speed" value={specs. + ""}/>}

    return (
        <>
            {specs.ghz && <Item title="Clock speed" value={specs.ghz.toString() + "GHz"}/>}
            {specs.turboGhz && <Item title="Turbo clock speed" value={specs.turboGhz.toString() + "GHz"}/>}
            {specs.cores && <Item title="Cores" value={specs.cores.toString()}/>}
            {specs.threads && <Item title="Threads" value={specs.threads.toString()}/>}
            {specs.pow && <Item title="Power consumption" value={specs.pow.toString() + "W"}/>}
            {specs.socket && <Item title="Socket" value={specs.socket}/>}
            {specs.bits && <Item title="Operative mode" value={specs.bits.toString() + " bits"}/>}
            {specs.unlocked && <Item title="Unlocked" value={specs.unlocked ? "Yes" : "No"}/>}
            {specs.cache && <Item title="L3 cache" value={specs.cache + "MB"}/>}
        </>
    );
}