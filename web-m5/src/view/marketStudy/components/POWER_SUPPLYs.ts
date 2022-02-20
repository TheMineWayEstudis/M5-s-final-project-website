import { MarketStudyItem } from "../MarketStudyElement";

const powerSupplies: MarketStudyItem[] = [
    {
        name: "Asus ROG Thor 1200P 80",
        price: 299.18,
        imageUrl: "https://img.pccomponentes.com/articles/18/180896/1.jpg",
        purchaseUrl: "https://www.pccomponentes.com/asus-rog-thor-1200p-80-plus-platinum-1200w-modular",
        manufacturer: "Asus",
        choosen: true,
        specs: {
            hasRGB: true,
            powSupply: 1200,
            isModular: true,
            caEntry: [100, 240],
            powerEfficiency: 90,
            airCooling: true,
        },
    },
    {
        name: "Corsair HX1200 80",
        price: 198.66,
        imageUrl: "https://img.pccomponentes.com/articles/12/125221/1.jpg",
        purchaseUrl: "https://www.pccomponentes.com/corsair-hx1200-1200w-80-plus-platinum-modular",
        manufacturer: "Corsair",
        specs: {
            hasRGB: false,
            powSupply: 1200,
            isModular: true,
            caEntry: [100, 240],
            airCooling: true,
        },
    },
    {
        name: "Gigabyte GP-AP1200PM 80",
        price: 288.48,
        imageUrl: "https://img.pccomponentes.com/articles/70/708211/1453-gigabyte-gp-ap1200pm-1200w-80-plus-platinum-full-modular.jpg",
        purchaseUrl: "https://www.pccomponentes.com/gigabyte-gp-ap1200pm-1200w-80-plus-platinum-full-modular",
        manufacturer: "Gigabyte",
        specs: {
            hasRGB: true,
            powSupply: 1200,
            isModular: true,
            caEntry: [100, 240],
            airCooling: true,
            powerEfficiency: 92,
        }
    },
];

export default powerSupplies;