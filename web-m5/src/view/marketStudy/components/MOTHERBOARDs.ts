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
            motherboardFactor: 'ATX',
        }
    },
    {
        name: "Gigabyte X570 AORUS XTreme",
        manufacturer: "Gigabyte",
        price: 698.93,
        imageUrl: "https://img.pccomponentes.com/articles/23/236021/1.jpg",
        purchaseUrl: "https://www.pccomponentes.com/gigabyte-x570-aorus-xtreme",
        specs: {
            socket: 'AM4',
            memoryType: 'DDR4-SDRAM',
            maxRAM: 128,
            memorySlots: 4,
            dualChannel: true,
            motherboardFactor: 'Extended ATX',
            hasEthernet: true,
            hasWiFi: true,
            hasBluetooth: true,
            bits: 64,
            usb2_0: 1,
            sata: 6,
            usb3_2_gen1: 3, // 2 + 1
            usb3_2_gen2: 6, // 1 + 5
            pciEx16: 3,
            m2: 3,
            biosType: 'UEFI AMI',
            audio: '7.1'
        }
    },
    {
        name: "ROG Crosshair VIII Formula",
        manufacturer: "ASUS",
        price: 484.98,
        imageUrl: "https://img.pccomponentes.com/articles/21/217776/cvb.jpg",
        purchaseUrl: "https://www.pccomponentes.com/asus-rog-crosshair-viii-formula",
        specs: {
            socket: 'AM4',
            memoryType: 'DDR4-SDRAM',
            memorySlots: 4,
            maxRAM: 128,
            dualChannel: true,
            hasEthernet: true,
            hasWiFi: true,
            hasBluetooth: true,
            sata: 8,
            audio: '7.1',
            motherboardFactor: 'ATX',
            usb3_2_gen1: 4,
            usb3_2_gen2: 8,
            m2: 2,
            biosType: 'UEFI AMI',
            bits: 64,
            pciEx1: 1,
            pciEx16: 3,
        }
    }
];

export default motherboards;