import { MarketStudyItem } from "../MarketStudyElement";

const graphics: MarketStudyItem[] = [
    {
        name: "Zotac Gaming GeForce RTX 3090",
        price: 2255.58,
        imageUrl: "https://img.pccomponentes.com/articles/34/348565/16-zotac-gaming-geforce-rtx-3090-trinity-oc-24gb-gddr6x.jpg",
        purchaseUrl: "https://www.pccomponentes.com/zotac-gaming-geforce-rtx-3090-trinity-oc-24gb-gddr6x",
        manufacturer: "Zotac",
        choosen: true,
        specs: {
            hasRGB: true,
            mhz: 1710,
            cudaCores: 10496,
            memoryAmount: 24,
            memoryType: 'GDDR6X',
            pciEType: 'PCIe 4.0',
            vrReady: true,
            displayPort: 3,
            hdmiPort: 1,
            airCooling: true,
        },
    },
    {
        name: "EVGA GeForce RTX 3090",  
        price: 1983.46,
        imageUrl: "https://img.pccomponentes.com/articles/33/334056/1152-evga-geforce-rtx-3090-ftw3-ultra-gaming-24gb-gddr6x.jpg",
        purchaseUrl: "https://www.pccomponentes.com/evga-geforce-rtx-3090-ftw3-ultra-gaming-24gb-gddr6x-reacondicionado",
        manufacturer: "EVGA",
        specs: {
            hasRGB: true,
            mhz: 1800,
            cudaCores: 10496,
            memoryAmount: 20,
            vrReady: true,
            pciEType: 'PCIe 4.0',
            memoryType: 'GDDR6X',
            hdmiPort: 1,
            displayPort: 3,
            airCooling: true,
        },
    },
    {
        name: "MSI RTX 3080 Ti",
        price: 1344.23,
        imageUrl: "https://img.pccomponentes.com/articles/41/411342/1153-msi-rtx-3080-ti-gaming-x-trio-12gb-gddr6x.jpg",
        purchaseUrl: "https://www.pccomponentes.com/msi-rtx-3080-ti-gaming-x-trio-12gb-gddr6x",
        manufacturer: "MSI",
        specs: {
            memoryAmount: 12,
            mhz: 1770,
            cudaCores: 10240,
            memoryType: 'GDDR6X',
            vrReady: true,
            airCooling: true,
            pciEType: 'PCIe 4.0',
            displayPort: 3,
            hdmiPort: 1,
            hasRGB: true,
        },
    },
];

export default graphics;