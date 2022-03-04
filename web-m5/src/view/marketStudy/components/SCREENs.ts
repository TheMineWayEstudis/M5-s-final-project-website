import { MarketStudyItem } from "../MarketStudyElement";

const screens: MarketStudyItem[] = [
    {
        name: "Asus ROG Swift",
        imageUrl: "https://img.pccomponentes.com/articles/60/605422/1580-asus-rog-swift-pg32uq-32-led-ips-ultrahd-4k-144hz-g-sync-compatible.jpg",
        purchaseUrl: "https://www.pccomponentes.com/asus-rog-swift-pg32uq-32-led-ips-ultrahd-4k-144hz-g-sync-compatible",
        price: 814.17,
        manufacturer: "Asus",
        choosen: true,
        specs: {
            screenType: 'IPS',
            resolution: '4K',
            hz: 144,
            gSync: true,
            includesSpeakers: true,
            inches: 32,
            hdmiPort: 1,
            displayPort: 1,
            usb3_0: 3,
        },
    },
    {
        name: "HP X32c FullHD",
        imageUrl: "https://img.pccomponentes.com/articles/51/514498/1673-hp-x32c-315-led-fullhd-165hz-freesync-premium-curva.jpg",
        purchaseUrl: "https://www.pccomponentes.com/hp-x32c-315-led-fullhd-165hz-freesync-premium-curva",
        price: 251.57,
        manufacturer: "HP",
        specs: {
            inches: 31.5,
            resolution: '1080p',
            hz: 165,
            gSync: false,
            includesSpeakers: false,
            hdmiPort: 1,
            displayPort: 1,
        },
    },
    {
        name: "HP M24fd LED IPS",
        imageUrl: "https://img.pccomponentes.com/articles/82/822881/1349-hp-m24fd-238-led-ips-fullhd-freesync-75hz-usb-c.jpg",
        purchaseUrl: "https://www.pccomponentes.com/hp-m24fd-238-led-ips-fullhd-75hz-freesync-usb-c",
        price: 205.78,
        manufacturer: "HP",
        specs: {
            inches: 23.8,
            screenType: 'IPS',
            resolution: '1080p',
            hz: 75,
            gSync: false,
            hdmiPort: 1,
            usb3_1_c: 1,
            usb3_0: 2,
            includesSpeakers: false,
        },
    },
];

export default screens;