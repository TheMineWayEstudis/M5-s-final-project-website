import { MarketStudyItem } from "../MarketStudyElement";

const motherboards: MarketStudyItem[] = [
    {
        name: "ROG Crosshair VII Extreme",
        manufacturer: "ASUS",
        price: 767.2,
        imageUrl: "https://img.pccomponentes.com/articles/57/572148/1235-asus-rog-crosshair-viii-extreme.jpg",
        purchaseUrl: "https://www.pccomponentes.com/asus-rog-crosshair-viii-extreme",
        choosen: true,
        specs: {
            socket: 'AM4',
            memoryType: 'DDR4-SDRAM',
            maxRAM: 128,
            dualChannel: true,
            memorySlots: 4,
            sata: 6,
            usb2_0: 2,
            usb3_2_gen1: 10, // 2 + 8
            usb3_2_gen2: 1,
            hasEthernet: true,
            hasBluetooth: true,
            hasWiFi: true,
            audio: '7.1',
            pciEx1: 1,
            pciEx16: 2,
            m2: 3,
            biosType: 'UEFI AMI',
            bits: 64,
        }
    }
];

export default motherboards;