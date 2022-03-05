import { MarketStudyItem } from "../MarketStudyElement";

const mice: MarketStudyItem[] = [
    {
        name: "Razer Basilik",
        price: 89.26,
        imageUrl: "https://img.pccomponentes.com/articles/14/144423/rzrbasilisk-01.jpg",
        purchaseUrl: "https://www.pccomponentes.com/razer-basilisk-raton-gaming-16000-dpi-negro",
        manufacturer: "Razer",
        choosen: true,
        specs: {
            lateralButtons: true,
            hasRGB: true,
            dpi: 16000,
            dpiAdjuster: true,
        },
    },
    {
        name: "Mars Gaming MMEX",
        price: 29.98,
        imageUrl: "https://img.pccomponentes.com/articles/37/379137/1311-mars-gaming-mmex-raton-gaming-rgb-32000dpi-negro.jpg",
        purchaseUrl: "https://www.pccomponentes.com/mars-gaming-mmex-raton-gaming-rgb-32000dpi-negro",
        manufacturer: "Mars Gaming",
        specs: {
            dpi: 32000,
            lateralButtons: true,
            dpiAdjuster: true,
            hasRGB: true,
        }
    },
    {
        name: "Newskill EOS",
        price: 38.13,
        imageUrl: "https://img.pccomponentes.com/articles/16/166071/eos01main.jpg",
        purchaseUrl: "https://www.pccomponentes.com/newskill-eos-raton-gaming-professional-rgb-16000dpi",
        manufacturer: "Newskill",
        specs: {
            hasRGB: true,
            dpiAdjuster: true,
            lateralButtons: true,
            dpi: 16000,
        },
    },
];

export default mice;