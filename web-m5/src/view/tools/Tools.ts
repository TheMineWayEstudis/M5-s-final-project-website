type Tool = {
    imageUrl: string;
    name: string;
    purchaseUrl: string;
    price: number;
    category: 'Required' | 'Recommended';
    reason: string;
};

const tools: Tool[] = [
    {
        name: "Thermal paste",
        purchaseUrl: "https://www.pccomponentes.com/arctic-mx-4-2019-pasta-termica-4-gramos",
        imageUrl: "https://img.pccomponentes.com/articles/22/222246/a18.jpg",
        price: 4.19,
        category: 'Recommended',
        reason: "Almost every CPU includes thermal paste pre-applied on the refrigerator (including the watercooling system), but it is recommended that we buy an extra thermal paste unit because pre-applied ones use to be low quality paste.",
    },
    {
        name: "Screwdriver set",
        purchaseUrl: "https://www.amazon.es/WaQoo-Destornilladores-Herramientas-Reparaci%C3%B3n-Smartphone/dp/B09PBNTMXK/ref=sr_1_4_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1WIIH3H6H8TXZ&keywords=kit+destornilladores+de+precision&qid=1646232206&sprefix=kit+destornilladores+de+precision%2Caps%2C95&sr=8-4-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNFg5VDczRkwyQThZJmVuY3J5cHRlZElkPUEwNzU0NjA2MUpJQjNHRU84TUpCMSZlbmNyeXB0ZWRBZElkPUEwMTA5NDUyMjE3OFdUNE1MT0Q2UyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
        imageUrl: "https://m.media-amazon.com/images/I/71g0R2pDGeL._AC_SL1460_.jpg",
        price: 19,
        category: 'Required',
        reason: "We must have a set of screwdrivers if we want to be able to build the computer. It is better to have precision ones so we can work with every component.",
    },
    {
        name: "Wireless antistatic wristband",
        purchaseUrl: "https://www.amazon.es/Prevessel-antiest%C3%A1tica-inal%C3%A1mbrica-ajustable-invierno/dp/B08S3X2PS8/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=13TFHL821FGY0&keywords=pulsera+antiestatica&qid=1646232182&sprefix=pulsera+antiestatica%2Caps%2C88&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE4RjE2TzFDSDkwSFAmZW5jcnlwdGVkSWQ9QTA0OTQ2OTZKRjZFSEE0TEZIUUwmZW5jcnlwdGVkQWRJZD1BMDgxMTMxMEVXM1paVE1XMEpHQyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
        imageUrl: "https://m.media-amazon.com/images/I/51pjklTW-6L._AC_SL1002_.jpg",
        price: 7.43,
        category: 'Required',
        reason: "This wristband helps to avoid external electricity from arriving to the component we are working with. It is recommended to use them but I will require it because I don't want to break such a expensive computer.",
    },{
        name: "Wire bridles",
        purchaseUrl: "https://www.pccomponentes.com/digitus-bridas-cable-con-velcro-colores-150mm-50-unidades",
        imageUrl: "https://img.pccomponentes.com/articles/23/232491/ak770904150m-4016032326960-front-rgb.jpg",
        price: 11.6,
        category: 'Recommended',
        reason: "We want a clean and organized computer build, so we might want some bridles in order to keep every wire grouped and clean. As in the pack there are 50 units we can organize the computer build and the setup (screen wires, etc).",
    },
];

export default tools;