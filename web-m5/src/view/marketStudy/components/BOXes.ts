import { MarketStudyItem, Positions } from "../MarketStudyElement";

const boxes: MarketStudyItem[] = [
    {
        name: "Lian-Li PC-O11D",
        imageUrl: "https://img.pccomponentes.com/articles/29/290452/lian-li-pc-o11d-dynamic-xl-rog-edition-torre-atx-plata.jpg",
        purchaseUrl: "https://www.pccomponentes.com/lian-li-pc-o11d-dynamic-xl-rog-edition-torre-atx-plata",
        price: 180.13,
        manufacturer: "Lian-Li",
        choosen: true,
        specs: {
            factor: 'ATX',
            height: 513,
            width: 285,
            depth: 471,
            powerSupplyPosition: Positions.top,
            usb3_2_gen2: 4,
            usb3_1_c: 1,
            hasRGB: true,
        },
    },
    {
        name: "Razer Tomahawk ATX",
        imageUrl: "https://img.pccomponentes.com/articles/35/354653/1809-razer-tomahawk-torre-atx-rgb-cristal-templado-negra.jpg",
        purchaseUrl: "https://www.pccomponentes.com/razer-tomahawk-torre-atx-rgb-cristal-templado-negra",
        price: 149.33,
        manufacturer: "Razer",
        specs: {
            factor: 'ATX',
            height: 494.6,
            width: 235.4,
            depth: 475,
            powerSupplyPosition: Positions.bottom,
            usb3_2_gen1: 2,
            usb3_2_gen2: 1,
            hasRGB: true,
        },
    },
    {
        name: "Corsair iCUE 5000X",
        imageUrl: "https://img.pccomponentes.com/articles/34/349634/1835-corsair-icue-5000x-torre-atx-rgb-cristal-templado-negra.jpg",
        purchaseUrl: "https://www.pccomponentes.com/corsair-icue-5000x-torre-atx-rgb-cristal-templado-negra",
        price: 206.39,
        manufacturer: "Corsair",
        specs: {
            factor: 'ATX',
            depth: 520,
            height: 520,
            width: 245,
            usb3_1_c: 1,
            usb3_0: 2,
            hasRGB: true,
            powerSupplyPosition: Positions.bottom,
        },
    },
];

export default boxes;