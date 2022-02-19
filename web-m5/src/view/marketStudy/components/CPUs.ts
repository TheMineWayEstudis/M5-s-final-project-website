import { MarketStudyItem } from "../MarketStudyElement";

const cpus: MarketStudyItem[] = [
    {
        name: "AMD Ryzen 9 5950X",
        imageUrl: "https://thumb.pccomponentes.com/w-530-530/articles/32/328470/1235-amd-ryzen-9-5950x-34-ghz.jpg",
        purchaseUrl: "https://www.pccomponentes.com/amd-ryzen-9-5950x-34-ghz",
        price: 644.54,
        manufacturer: "AMD",
        choosen: true,
        specs: {
            socket: 'AM4',
            ghz: 3.4,
            turboGhz: 4.9,
            cores: 16,
            threads: 32,
            bits: 64,
            cache: 64,
            model: "5950X",
            unlocked: true,
            integratedGPU: false,
        },
    },
    {
        name: "AMD Ryzen 9 5900X",
        imageUrl: "https://img.pccomponentes.com/articles/32/328702/1997-amd-ryzen-9-5900x-37-ghz.jpg",
        purchaseUrl: "https://www.pccomponentes.com/amd-ryzen-9-5900x-37-ghz",
        price: 446.19,
        manufacturer: "AMD",
        specs: {
            socket: 'AM4',
            ghz: 3.7,
            turboGhz: 4.8,
            cores: 12,
            threads: 24,
            cache: 64,
            bits: 64,
            model: "5900X",
            unlocked: true,
            integratedGPU: false,
        },
    },
    {
        name: "AMD Ryzen 7 5800X",
        imageUrl: "https://img.pccomponentes.com/articles/32/328473/168-amd-ryzen-7-5800x-38ghz.jpg",
        purchaseUrl: "https://www.pccomponentes.com/amd-ryzen-7-5800x-38ghz",
        price: 303.22,
        manufacturer: "AMD",
        specs: {
            socket: 'AM4',
            ghz: 3.8,
            turboGhz: 4.7,
            cores: 8,
            threads: 16,
            cache: 32,
            bits: 64,
            model: "5800X",
            unlocked: true,
            integratedGPU: false,
        },
    },
];

export default cpus;