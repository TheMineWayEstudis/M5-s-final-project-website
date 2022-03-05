import { MarketStudyItem } from "../MarketStudyElement";

const keyboards: MarketStudyItem[] = [
    {
        name: "Corsair K70 MK.2",
        price: 138.98,
        imageUrl: "https://m.media-amazon.com/images/I/81lF-5JDIgL._AC_SL1500_.jpg",
        purchaseUrl: "https://www.amazon.es/Corsair-K70-MK-2-retroiluminaci%C3%B3n-CH-9109010-ES/dp/B07FXZ3SLC/ref=sr_1_8?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=9W0TZV1AIPFF&keywords=corsair+keyboard&qid=1646473553&sprefix=corsair+keyboard%2Caps%2C96&sr=8-8",
        manufacturer: "Corsair",
        choosen: true,
        specs: {
            usb3_0: 1,
            hasRGB: true,
            keyboardType: 'Mechanical',
            keyboardArrangement: 'QWERTY',
            language: 'Spanish',
            volumeController: true,
            ownDrivers: true,
        },
    },
    {
        name: "Newskill Suiko",
        price: 57.81,
        imageUrl: "https://img.pccomponentes.com/articles/24/249961/suiko.jpg",
        purchaseUrl: "https://www.pccomponentes.com/newskill-suiko-teclado-mecanico-gaming-full-rgb-switch-kailh-blue",
        manufacturer: "Newskill",
        specs: {
            keyboardArrangement: 'QWERTY',
            volumeController: false,
            hasRGB: true,
            keyboardType: 'Mechanical',
            language: 'Spanish',
            ownDrivers: true,
        }
    },
    {
        name: "Razer Hunstsman V2",
        price: 223.13,
        imageUrl: "https://img.pccomponentes.com/articles/36/362429/1251-razer-hunstsman-v2-analog-teclado-gaming-rgb-switch-optico-analogico-review.jpg",
        purchaseUrl: "https://www.pccomponentes.com/razer-hunstsman-v2-analog-teclado-gaming-rgb-switch-optico-analogico",
        manufacturer: "Razer",
        specs: {
            keyboardArrangement: 'QWERTY',
            language: 'Spanish',
            hasRGB: true,
            ownDrivers: true,
            volumeController: false,
            keyboardType: 'Mechanical',
        },
    },
];

export default keyboards;