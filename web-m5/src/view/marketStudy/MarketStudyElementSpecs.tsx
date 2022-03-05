import size from "../../formatters/Size";
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
            {specs.mhz && <Item title="Clock speed" value={specs.mhz.toString() + "MHz"}/>}
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
            {specs.usb3_0 && <Item title="USB 3.0" value={"x" + specs.usb3_0.toString()}/>}
            {specs.usb3_1_c && <Item title="USB (Type C) 3.1" value={"x" + specs.usb3_1_c.toString()}/>}
            {specs.firewire && <Item title="FireWire" value={"x" + specs.firewire.toString()}/>}
            {specs.usb3_2_gen2 && <Item title="USB 3.2 (Gen 2)" value={"x" + specs.usb3_2_gen2.toString()}/>}
            {specs.sata && <Item title="SATA connectors" value={"x" + specs.sata.toString()}/>}
            {specs.hasEthernet !== undefined && <Item title="Has Ethernet" value={specs.hasEthernet ? "Yes" : "No"}/>}
            {specs.pciEx1 && <Item title="PCI Express x1" value={"x" + specs.pciEx1.toString()}/>}
            {specs.pciEx16 && <Item title="PCI Express x16" value={"x" + specs.pciEx16.toString()}/>}
            {specs.m2 && <Item title="M.2 Slots" value={"x" + specs.m2}/>}
            {specs.audio && <Item title="Audio" value={specs.audio}/>}

            {specs.diskSpace && <Item title="Disk space" value={specs.diskSpace.toString() + "TB"}/>}
            {specs.diskWrite && <Item title="Disk write speed" value={specs.diskWrite.toString() + "MB/s"}/>}
            {specs.diskRead && <Item title="Disk read speed" value={specs.diskRead.toString() + "MB/s"}/>}
            {specs.smart !== undefined && <Item title="Supports S.M.A.R.T." value={specs.smart ? "Yes" : "No"}/>}
            {specs.hardwareEncryption !== undefined && <Item title="HW encryption" value={specs.hardwareEncryption ? "Yes" : "No"}/>}
            {specs.diskRPM && <Item title="Disk RPM" value={specs.diskRPM.toString() + "RPM"}/>}
            {specs.diskTransfer && <Item title="Disk transfer" value={specs.diskTransfer.toString() + "Gbit/s"}/>}

            {specs.powSupply && <Item title="Supplies" value={specs.powSupply.toString() + "W"}/>}
            {specs.isModular !== undefined && <Item title="Modular" value={specs.isModular ? "Yes" : "No"}/>}
            {specs.caEntry && <Item title="CA entry" value={specs.caEntry[0].toString() + "V - " + specs.caEntry[1].toString() + "V"}/>}
            {specs.powerEfficiency && <Item title="Power efficiency" value={specs.powerEfficiency.toString() + "%"}/>}

            {specs.pciEType && <Item title="PCIe type" value={specs.pciEType}/>}
            {specs.cudaCores && <Item title="Cuda Cores" value={"x" + specs.cudaCores.toString()}/>}
            {specs.vrReady !== undefined && <Item title="VR ready" value={specs.vrReady ? "Yes" : "No"}/>}
            {specs.hdmiPort && <Item title="HDMI ports" value={"x" + specs.hdmiPort.toString()}/>}
            {specs.displayPort && <Item title="DisplayPort ports" value={"x" + specs.displayPort.toString()}/>}
            {specs.dviPort && <Item title="DVI ports" value={"x" + specs.dviPort.toString()}/>}

            {specs.factor && <Item title="Box size factor" value={specs.factor}/>}
            {specs.powerSupplyPosition && <Item title="Power supply position" value={specs.powerSupplyPosition}/>}

            {specs.hz && <Item title="Hertz" value={specs.hz.toString() + "Hz"}/>}
            {specs.resolution && <Item title="Resolution" value={specs.resolution}/>}
            {specs.inches && <Item title="Size" value={specs.inches.toString() + "\""}/>}
            {specs.gSync !== undefined && <Item title="Has G-Sync" value={specs.gSync ? "Yes" : "No"}/>}
            {specs.screenType && <Item title="Screen type" value={specs.screenType}/>}
            {specs.includesSpeakers !== undefined && <Item title="Has speakers" value={specs.includesSpeakers ? "Yes" : "No"}/>}

            {specs.cactusUnits && <Item title="Cactus units" value={"x" + specs.cactusUnits.toString()}/>}

            {specs.keyboardArrangement && <Item title="Keyboard arrangement" value={specs.keyboardArrangement}/>}
            {specs.hasNumpad !== undefined && <Item title="Has numpad" value={specs.hasNumpad ? "Yes" : "No"}/>}
            {specs.volumeController !== undefined && <Item title="Has volume controller" value={specs.volumeController ? "Yes" : "No"}/>}
            {specs.language && <Item title="Language" value={specs.language}/>}
            {specs.ownDrivers !== undefined && <Item title="Own drivers" value={specs.ownDrivers ? "Yes" : "No"}/>}
            {specs.keyboardType && <Item title="Keyboard type" value={specs.keyboardType}/>}

            {specs.dpi && <Item title="DPIs" value={"x" + specs.dpi.toString()}/>}
            {specs.dpiAdjuster !== undefined && <Item title="Dpi adjuster" value={specs.dpiAdjuster ? "Yes" : "No"}/>}
            {specs.lateralButtons !== undefined && <Item title="Lateral buttons" value={specs.lateralButtons ? "Yes" : "No"}/>}

            {specs.fans && <Item title="Fans" value={"x" + specs.fans.toString()}/>}
            {specs.powerConsumption !== undefined && <Item title="Power consumption" value={specs.powerConsumption.toString() + "W"}/>}
            {specs.width && <Item title="Width" value={size(specs.width)}/>}
            {specs.height && <Item title="Height" value={size(specs.height)}/>}
            {specs.depth && <Item title="Depth" value={size(specs.depth)}/>}
            {specs.hasRGB !== undefined && <Item title="RGB" value={specs.hasRGB ? "Yes 🌈" : "No"}/>}
            {specs.watercooling !== undefined && <Item title="Allows watercooling" value={specs.watercooling ? "Yes 💧" : "No"}/>}
            {specs.airCooling !== undefined && <Item title="Air cooling" value={specs.airCooling ? "Yes" : "No"}/>}
        </>
    );
}