import { MarketStudyItem } from "../MarketStudyElement";

const m2s: MarketStudyItem[] = [
    {
        name: "Team Group CARDEA A440",
        price: 340.12,
        imageUrl: "https://img.pccomponentes.com/articles/58/589396/1271-team-group-cardea-a440-2tb-gaming-ssd-pcie-gen4-x4-nvme-14.jpg",
        purchaseUrl: "https://www.pccomponentes.com/team-group-cardea-a440-2tb-gaming-ssd-pcie-gen4-x4-nvme-14",
        manufacturer: "Team Group",
        choosen: true,
        specs: {
            diskSpace: 2,
            diskRead: 7000,
            diskWrite: 7000,
            watercooling: false,
            hardwareEncryption: false,
        }
    },
    {
        name: "Corsair MP600 PRO Gen 4",
        price: 341.31,
        imageUrl: "https://img.pccomponentes.com/articles/35/357145/1564-corsair-mp600-pro-2tb-m2-nvme-pcie-gen-4-x4-hydro-x-ed-ssd-4eba8a55-1735-469b-a5f8-48ca595559ab.jpg",
        purchaseUrl: "https://www.pccomponentes.com/corsair-mp600-pro-2tb-m2-nvme-pcie-gen-4-x4-hydro-x-ed-ssd",
        manufacturer: "Corsair",
        specs: {
            diskSpace: 2,
            diskRead: 7000,
            diskWrite: 6550,
            smart: true,
            watercooling: true,
            hardwareEncryption: true,
        },
    },
    {
        name: "MSI Spatium M480 Gen 4",
        price: 309.87,
        imageUrl: "https://img.pccomponentes.com/articles/60/605385/1864-msi-spatium-m480-m2-2tb-pcie-gen4-x4-nvme-14.jpg",
        purchaseUrl: "https://www.pccomponentes.com/msi-spatium-m480-m2-2tb-pcie-gen4-x4-nvme-14",
        manufacturer: "MSI",
        specs: {
            diskSpace: 2,
            diskRead: 7000,
            diskWrite: 6800,
            watercooling: false,
        },
    },
];

export default m2s;