import { MarketStudyItem } from "../MarketStudyElement";

const disks: MarketStudyItem[] = [
    {
        name: "Samsung 870 QVO SSD",
        price: 615.72,
        imageUrl: "https://img.pccomponentes.com/articles/32/322179/1419-samsung-870-qvo-ssd-8tb-sata3.jpg",
        purchaseUrl: "https://www.pccomponentes.com/samsung-870-qvo-ssd-8tb-sata3",
        manufacturer: "Samsung",
        choosen: true,
        specs: {
            diskSpace: 8,
            diskRead: 560,
            diskWrite: 530,
            smart: true,
            diskTransfer: 6,
        },
    },
    {
        name: "Seagate Barracuda",
        price: 176.15,
        imageUrl: "https://img.pccomponentes.com/articles/24/244333/fsd.jpg",
        purchaseUrl: "https://www.pccomponentes.com/seagate-barracuda-35-8tb-sata-3",
        manufacturer: "Seagate",
        specs: {
            diskSpace: 8,
            diskRPM: 5400,
            smart: false,
        }
    },
    {
        name: "WD red Pro",
        price: 223.13,
        imageUrl: "https://img.pccomponentes.com/articles/31/313426/1426-wd-red-pro-8tb-35-sata3.jpg",
        purchaseUrl: "https://www.pccomponentes.com/wd-red-pro-8tb-35-sata3",
        manufacturer: "Western Digital",
        specs: {
            diskSpace: 8,
            diskRPM: 7200,
            smart: false,
            diskTransfer: 6,
        },
    },
];

export default disks;