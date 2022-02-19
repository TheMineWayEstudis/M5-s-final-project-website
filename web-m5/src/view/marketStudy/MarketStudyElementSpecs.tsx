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
            {specs.cores && <Item title="Cores" value={"x" + specs.cores.toString()}/>}
            {specs.threads && <Item title="Threads" value={"x" + specs.threads.toString()}/>}
            {specs.pow && <Item title="Power consumption" value={specs.pow.toString() + "W"}/>}
            {specs.socket && <Item title="Socket" value={specs.socket}/>}
            {specs.bits && <Item title="Operative mode" value={specs.bits.toString() + " bits"}/>}
            {specs.unlocked !== undefined && <Item title="Unlocked" value={specs.unlocked ? "Yes" : "No"}/>}
            {specs.cache && <Item title="L3 cache" value={specs.cache + "MB"}/>}
            {specs.model && <Item title="Model" value={specs.model}/>}
            {specs.integratedGPU !== undefined && <Item title="Integrated graphics" value={specs.integratedGPU ? "Yes" : "No"}/>}

            {specs.memoryType && <Item title="Memory type" value={specs.memoryType}/>}
            {specs.memorySpeed && <Item title="Memory speed" value={specs.memorySpeed.toString() + "MHz"}/>}
            {specs.memoryAmount && <Item title="Memory amount" value={specs.memoryAmount.toString() + "GB"}/>}
            {specs.memoryLatency && <Item title="Memory CAS" value={specs.memoryLatency.toString()}/>}
            {specs.memorySticks && <Item title="Memory sticks" value={"x" + specs.memorySticks.toString()}/>}

            {specs.maxRAM && <Item title="Max RAM" value={specs.maxRAM.toString() + "GB"}/>}
            {specs.hasBluetooth !== undefined && <Item title="Has bluetooth" value={specs.hasBluetooth ? "Yes" : "No"}/>}
            {specs.hasWiFi !== undefined && <Item title="Has WiFi" value={specs.hasWiFi ? "Yes" : "No"}/>}
            {specs.chipset && <Item title="Chipset" value={specs.chipset}/>}
            {specs.motherboardFactor && <Item title="Factor" value={specs.motherboardFactor}/>}
            {specs.biosType && <Item title="BIOS type" value={specs.biosType}/>}
            {specs.dualChannel !== undefined && <Item title="Supports dual-channel" value={specs.dualChannel ? "Yes" : "No"}/>}
            {specs.memorySlots && <Item title="Memory slots" value={"x" + specs.memorySlots.toString()}/>}
            {specs.usb2_0 && <Item title="USB 2.0" value={"x" + specs.usb2_0}/>}
            {specs.usb3_2_gen1 && <Item title="USB 3.2 (Gen 1)" value={"x" + specs.usb3_2_gen1.toString()}/>}
            {specs.usb3_2_gen2 && <Item title="USB 3.2 (Gen 2)" value={"x" + specs.usb3_2_gen2.toString()}/>}
            {specs.sata && <Item title="SATA connectors" value={"x" + specs.sata.toString()}/>}
            {specs.hasEthernet !== undefined && <Item title="Has Ethernet" value={specs.hasEthernet ? "Yes" : "No"}/>}
            {specs.pciEx1 && <Item title="PCI Express x1" value={"x" + specs.pciEx1.toString()}/>}
            {specs.pciEx16 && <Item title="PCI Express x16" value={"x" + specs.pciEx16.toString()}/>}
            {specs.m2 && <Item title="M.2 Slots" value={"x" + specs.m2}/>}
            {specs.audio && <Item title="Audio" value={specs.audio}/>}

            {specs.hasRGB !== undefined && <Item title="RGB" value={specs.hasRGB ? "Yes 🌈" : "No"}/>}
        </>
    );
}