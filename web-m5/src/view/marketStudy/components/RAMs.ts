import { MarketStudyItem } from "../MarketStudyElement";

const rams: MarketStudyItem[] = [
    {
        name: "G.Skill Trident Z Neo 3600",
        price: 679.81,
        imageUrl: "https://img.pccomponentes.com/articles/60/601409/1793-gskill-trident-z-neo-ddr4-3600mhz-64gb-4x16gb-cl14.jpg",
        purchaseUrl: "https://www.pccomponentes.com/gskill-trident-z-neo-ddr4-3600mhz-64gb-4x16gb-cl14",
        manufacturer: "G.Skill",
        choosen: true,
        specs: {
            hasRGB: true,
            memoryType: "DDR4-SDRAM",
            memorySpeed: 3600,
            memoryAmount: 64,
            memoryLatency: 14,
            memorySticks: 4,
        },
    },
    {
        name: "G.Skill TridentZ Neo 3200",
        price: 486.93,
        imageUrl: "https://img.pccomponentes.com/articles/22/224939/1.jpg",
        purchaseUrl: "https://www.pccomponentes.com/gskill-trident-z-neo-ddr4-3200-pc4-25600-64gb-4x16gb-cl14",
        manufacturer: "G.Skill",
        specs: {
            hasRGB: true,
            memoryType: "DDR4-SDRAM",
            memorySpeed: 3200,
            memoryAmount: 64,
            memoryLatency: 14,
            memorySticks: 4,
        },
    },
    {
        name: "G.Skill Trident Z Royal 3600",
        price: 397.93,
        imageUrl: "https://img.pccomponentes.com/articles/59/590358/1179-gskill-trident-z-royal-ddr4-3600mhz-32gb-4x8gb-cl14-plata.jpg",
        purchaseUrl: "https://www.pccomponentes.com/gskill-trident-z-royal-ddr4-3600mhz-32gb-4x8gb-cl14-plata",
        manufacturer: "G.Skill",
        specs: {
            hasRGB: true,
            memoryType: "DDR4-SDRAM",
            memorySpeed: 3600,
            memoryAmount: 32,
            memorySticks: 4,
            memoryLatency: 14,
        },
    },
];

export default rams;