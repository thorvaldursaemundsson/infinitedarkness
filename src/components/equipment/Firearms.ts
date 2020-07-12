import Item from "./Item";

type ammo = '9x17' | '9x21' | '9x23' |
    '10x19' | '10x21' |
    '11x17' | '11x21' |
    '12x20' | '12x24' | '12x28' |
    '12 gauge' | '20 gauge' |
    '40mm rpg' | '50mm rpg' |
    '1hec' | '2hec' | '10hec';

export interface AmmoInformation {
    ammo: ammo;
    cost: number;
    weight: number;
    types: string[];
    description: string;
}

export const AmmoTypesInformation: AmmoInformation[] = [
    {
        ammo: '9x17',
        cost: 0.4,
        weight: 7,
        types: ['tracer', 'hollow point', 'standard'],
        description: 'a small short 9mm bullet'
    }, {
        ammo: '9x21',
        cost: 0.6,
        weight: 9,
        types: ['tracer', 'hollow point', 'armor piercing', 'standard'],
        description: 'a slightly longer version of the 9mm'
    }, {
        ammo: '9x23',
        cost: 0.7,
        weight: 11,
        types: ['tracer', 'hollow point', 'armor piercing', 'standard'],
        description: 'a long version of the 9mm'
    }, {
        ammo: '10x19',
        cost: 1,
        weight: 10,
        types: ['hollow point', 'standard'],
        description: 'a standard 10cm bullet'
    }, {
        ammo: '10x21',
        cost: 1.1,
        weight: 11,
        types: ['tracer', 'hollow point', 'armor piercing', 'standard'],
        description: 'a long version of the 10cm bullet'
    }, {
        ammo: '11x17',
        cost: 1.3,
        weight: 12,
        types: ['incendiary', 'standard'],
        description: 'a short wide 11cm bullet'
    }, {
        ammo: '11x21',
        cost: 1.5,
        weight: 15,
        types: ['armor piercing', 'incendiary', 'standard'],
        description: 'a normal 11cm bullet'
    }, {
        ammo: '12x20',
        cost: 1.5,
        weight: 16,
        types: ['armor piercing', 'incendiary', 'standard'],
        description: 'a large 12cm bullet'
    }, {
        ammo: '12x24',
        cost: 1.8,
        weight: 20,
        types: ['hollow point', 'armor piercing', 'incendiary', 'standard'],
        description: 'a long large 12cm bullet'
    }, {
        ammo: '12x28',
        cost: 2.2,
        weight: 25,
        types: ['tracer', 'hollow point', 'armor piercing', 'incendiary', 'standard'],
        description: 'a very long large 12cm bullet'
    }, {
        ammo: '12 gauge',
        cost: 3,
        weight: 24,
        types: ['shell', 'slug', 'explosive'],
        description: 'a 12 gauge shotgun shell'
    }, {
        ammo: '20 gauge',
        cost: 2.2,
        weight: 22,
        types: ['shell', 'slug'],
        description: 'a 20 gauge shotgun shell'
    }, {
        ammo: '40mm rpg',
        cost: 300,
        weight: 160,
        types: ['plasma bomb', 'frag', 'standard'],
        description: 'a 40mm rocket propelled grenade'
    }, {
        ammo: '50mm rpg',
        cost: 400,
        weight: 220,
        types: ['plasma bomb', 'homing', 'standard'],
        description: 'a 50mm rocket propelled grenade'
    }, {
        ammo: '1hec',
        cost: 0,
        weight: 0,
        types: [],
        description: '1 unit of hyperelectron charge, battery rechargeable'
    }
];



type fireAction = 'single action revolver' | 'double action revolver' | 'bolt action' | 'pump action' | 'semi-automatic' | 'fully-automatic' | 'continuous';

type fireArmClass = 'handgun' | 'submachinegun' | 'rifle' | 'machinegun' | 'rocketlauncher' | 'laser' | 'plasma';

interface IFirearm extends Item {
    fireArmClass: fireArmClass,
    damage: string;
    range: string;
    armorpiercing?: number;
    hitbonus?: number;
    fireAction: fireAction[];
    capacity: number;
    ammo: ammo;
    rps?: number;
}

export class FireArm implements IFirearm {
    fireArmClass: fireArmClass;
    damage: string;
    range: string;
    armorpiercing?: number | undefined;
    hitbonus?: number | undefined;
    fireAction: fireAction[];
    capacity: number;
    ammo: ammo;
    rps?: number | undefined;
    weight: number;
    value: number;
    description?: string | undefined;
    name: string;

    constructor(name: string, weight: number, value: number, damage: string, fireArmClass: fireArmClass, range: string, fireAction: fireAction[], capacity: number, ammo: ammo, description: string | undefined, hitbonus: number | undefined, armorpiercing: number | undefined, rps: number | undefined) {
        this.fireArmClass = fireArmClass;
        this.name = name;
        this.weight = weight;
        this.value = value;
        this.damage = damage;
        this.description = description;
        this.hitbonus = hitbonus;
        this.armorpiercing = armorpiercing;
        this.range = range;
        this.fireAction = fireAction;
        this.capacity = capacity;
        this.ammo = ammo;
        this.rps = rps;
    }
}

// gun makers = night, 

const Firearms: FireArm[] = [
    //hand guns
    {
        fireArmClass: 'handgun', name: 'revolver', damage: '1d10', range: '300m', ammo: '10x19', capacity: 6, fireAction: ['double action revolver'], armorpiercing: 1, weight: 800, value: 3500,
        description: 'basic revolver, this antique weapon design is mostly considered a collectors item for gun and antique enthusiasts. It still works.'
    },
    {
        fireArmClass: 'handgun', name: 'Fantry Light Model', damage: '2d6', range: '350m', ammo: '10x21', capacity: 19, fireAction: ['semi-automatic'], armorpiercing: 1, weight: 950, value: 3200,
        description: 'the light handgun model of the fantry gun manufacturer, has a generous ammo capacity and the design makes it less loud than other handguns'
    },
    {
        fireArmClass: 'handgun', name: 'Fantry Heavy Model', damage: '2d8', range: '450m', ammo: '11x21', capacity: 14, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 1200, value: 4000,
        description: 'a large hand gun designed to inflict serious damage'
    },
    {
        fireArmClass: 'handgun', name: 'Merlion Atomic', damage: '2d6', range: '400m', ammo: '10x21', capacity: 12, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 850, hitbonus: 2, value: 6000,
        description: 'Common handgun used exclusively by merlions, the arcane alloys allows for both supreme recoil handling'
    },

    //submachinegun
    {
        fireArmClass: 'handgun', name: 'Fantry Sub Model', damage: '1d8', range: '350m', ammo: '9x21', capacity: 24, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 2, rps: 8, weight: 1800, value: 6500,
        description: 'A very light submachine gun, fires relatively slow for a submachine gun on while on full automatic'
    },
    {
        fireArmClass: 'handgun', name: 'Skolt cleaner', damage: '1d10', range: '300m', ammo: '10x19', capacity: 36, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 1, rps: 10, weight: 2100, value: 7500,
        description: 'The Skolt Cleaner is a popular submachinegun'
    },

    //rifle
    {
        fireArmClass: 'rifle', name: 'Fantry Assault Model', damage: '2d6', range: '800m', ammo: '11x17', capacity: 24, fireAction: ['semi-automatic'], armorpiercing: 1, weight: 2200, value: 5200,
        description: 'A light weight assault weapon'
    },
    {
        fireArmClass: 'rifle', name: 'Skolt Hunter', damage: '2d8', range: '1000m', ammo: '12x20', capacity: 8, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 2300, value: 7000,
        description: 'A rifle primarily designed for hunting'
    },
    {
        fireArmClass: 'rifle', name: 'Skolt LG', damage: '2d10', range: '1200m', ammo: '12x24', capacity: 6, fireAction: ['semi-automatic'], armorpiercing: 3, weight: 3500, value: 7500,
        description: 'The skolt LG (long gun) is primarily designed for hunting large game'
    },
    {
        fireArmClass: 'rifle', name: 'Night AV Sniper', damage: '2d10', range: '1800m', ammo: '12x28', capacity: 4, fireAction: ['bolt action'], armorpiercing: 5, hitbonus: -1, weight: 8200, value: 11000,
        description: 'This huge sniper rifle is designed to take out targets at extreme range, or damage vehicles'
    },

    //automatic rifle
    {
        fireArmClass: 'rifle', name: 'Skolt Advanced', damage: '1d12', range: '700m', ammo: '11x21', capacity: 60, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 2, rps: 8, weight: 3200, value: 9000,
        description: 'A slim and futuristic looking fully automatic assault rifle designed for urban warfare '
    },
    {
        fireArmClass: 'rifle', name: 'Merlion Predator', damage: '2d10', range: '1100m', ammo: '12x24', capacity: 45, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 4, rps: 12, weight: 3600, value: 12000,
        description: 'This strange merlion designed weapon was originally intended as an anti-human weapon, but when merlions decided that humans were harmless creatures they offered this weapon as a gesture of good will'
    },

    //shotgun
    {
        fireArmClass: 'rifle', name: 'Skolt Crusher', damage: '2d6', range: '160m', ammo: '12 gauge', capacity: 10, fireAction: ['semi-automatic'], weight: 2800, value: 7600, hitbonus: 1,
        description: 'The skolt crusher is a long barrel semi-automatic shotgun, has a low spread'
    },
    {
        fireArmClass: 'rifle', name: 'Night Hammer', damage: '2d6', range: '80m', ammo: '12 gauge', capacity: 12, fireAction: ['pump action'], weight: 2700, value: 7500, hitbonus: 3,
        description: 'This old fashioned pump action shotgun offers a wide spread which increases likelyhood of hitting'
    },
    {
        fireArmClass: 'rifle', name: 'Night Hammer (sawed off)', damage: '2d6', range: '40m', ammo: '12 gauge', capacity: 12, fireAction: ['pump action'], weight: 2300, value: 6000, hitbonus: 6,
        description: 'A sawed off version of the Night Hammer, slightly lighter and has a huge spread'
    },

    //machinegun
    {
        fireArmClass: 'machinegun', name: 'Fantry Tyrant Model', damage: '1d8', range: '250m', ammo: '9x17', capacity: 160, fireAction: ['fully-automatic'], rps: 8, weight: 8000, value: 13000,
        description: 'The Tyrant model of the Fantry gun manufacturer, fully automatic machine gun light enough to hold up or using the tripod'
    },
    {
        fireArmClass: 'machinegun', name: 'Merlion Durium', damage: '1d12', range: '900m', ammo: '9x23', capacity: 150, fireAction: ['fully-automatic'], armorpiercing: 3, rps: 8, weight: 7000, value: 16000, hitbonus: 3,
        description: 'An elegant machine gun used only be the merlion military, take -2 if not using the tripod'
    },
    {
        fireArmClass: 'machinegun', name: 'Skolt Obliderator', damage: '2d10', range: '1600m', ammo: '12x28', capacity: 120, fireAction: ['fully-automatic'], armorpiercing: 4, rps: 8, weight: 12000, value: 17000,
        description: 'Point this massive machinegun in a direction, hold down the trigger and watch as everything is turned into swiss cheese'
    },

    //rocket launcher
    {
        fireArmClass: 'rocketlauncher', name: 'ALV-RL', damage: '12d8', range: '2500m', ammo: '40mm rpg', capacity: 4, fireAction: ['bolt action'], armorpiercing: 10, weight: 4000, value: 6000,
        description: 'Anti light vehicle rocket launcher, used to destroy cars and stuff, also extremely effective at destroying people'
    },
    {
        fireArmClass: 'rocketlauncher', name: 'AT-RL', damage: '12d10', range: '3500m', ammo: '50mm rpg', capacity: 1, fireAction: ['bolt action'], armorpiercing: 12, weight: 5000, value: 8500,
        description: 'Anti tank rocket launcher, used to destroy tanks and buildings, can also be used to convert people into ash and minced meat'
    },

    //energy weapons
    {
        fireArmClass: 'laser', name: 'Skolt Lightpulse', damage: '1d8', range: '2000m', ammo: '1hec', capacity: 100, fireAction: ['semi-automatic'], armorpiercing: 1, hitbonus: 3, weight: 3000, value: 12000,
        description: 'blue laser pulse, needs protective gear to use, half range penalty'
    },
    {
        fireArmClass: 'laser', name: 'Merlion Deathray', damage: '1d12', range: '2400m', ammo: '2hec', capacity: 80, fireAction: ['semi-automatic'], armorpiercing: 3, hitbonus: 4, weight: 3000, value: 18000,
        description: 'needs protective gear to use, quarter range penalty'
    },
    {
        fireArmClass: 'plasma', name: 'Merlion Plasma Cannon', damage: '4d8', range: '100m', ammo: '10hec', capacity: 120, fireAction: ['semi-automatic'], hitbonus: 1, weight: 6000, value: 22000,
        description: 'needs protective gear to use'
    }
];

export default Firearms;