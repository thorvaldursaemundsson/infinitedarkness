import Item from "./Item";

export type Ammo = '9x17' | '9x21' | '9x23' |
    '10x19' | '10x21' |
    '11x17' | '11x21' |
    '12x20' | '12x24' | '12x28' |
    '4mm ec' |
    '12 gauge' | '20 gauge' |
    '20mm rpg'|'30mm rpg'|'40mm rpg' | '50mm rpg' |
    '1hec' | '2hec' | '10hec';

export interface AmmoInformation {
    ammo: Ammo;
    cost: number;
    weight: number;
    types: string[];
    description: string;
}

export const AmmoTypesInformation: AmmoInformation[] = [
    {
        ammo: '9x17',
        cost: 1.6,
        weight: 7,
        types: ['tracer', 'hollow point', 'standard'],
        description: 'a small short 9mm bullet'
    }, {
        ammo: '9x21',
        cost: 1.8,
        weight: 9,
        types: ['tracer', 'hollow point', 'armor piercing', 'standard'],
        description: 'a slightly longer version of the 9mm'
    }, {
        ammo: '9x23',
        cost: 2.1,
        weight: 11,
        types: ['tracer', 'hollow point', 'armor piercing', 'standard'],
        description: 'a long version of the 9mm'
    }, {
        ammo: '10x19',
        cost: 3,
        weight: 10,
        types: ['hollow point', 'standard'],
        description: 'a standard 10cm bullet'
    }, {
        ammo: '10x21',
        cost: 3.3,
        weight: 11,
        types: ['tracer', 'hollow point', 'armor piercing', 'standard'],
        description: 'a long version of the 10cm bullet'
    }, {
        ammo: '11x17',
        cost: 3.9,
        weight: 12,
        types: ['incendiary', 'standard'],
        description: 'a short wide 11cm bullet'
    }, {
        ammo: '11x21',
        cost: 4.5,
        weight: 15,
        types: ['armor piercing', 'incendiary', 'standard'],
        description: 'a normal 11cm bullet'
    }, {
        ammo: '12x20',
        cost: 4.5,
        weight: 16,
        types: ['armor piercing', 'incendiary', 'standard'],
        description: 'a large 12cm bullet'
    }, {
        ammo: '12x24',
        cost: 5.4,
        weight: 20,
        types: ['hollow point', 'armor piercing', 'incendiary', 'standard'],
        description: 'a long large 12cm bullet'
    }, {
        ammo: '12x28',
        cost: 6.6,
        weight: 25,
        types: ['tracer', 'hollow point', 'armor piercing', 'incendiary', 'standard'],
        description: 'a very long large 12cm bullet'
    }, {
        ammo: '4mm ec',
        cost: 15,
        weight: 0.2,
        types: ['standard'],
        description: 'a tiny caseless ferromagnetic neodymium bullet'
    }, {
        ammo: '12 gauge',
        cost: 9,
        weight: 24,
        types: ['shell', 'slug', 'explosive'],
        description: 'a 12 gauge shotgun shell'
    }, {
        ammo: '20 gauge',
        cost: 6.6,
        weight: 22,
        types: ['shell', 'slug'],
        description: 'a 20 gauge shotgun shell'
    }, {
        ammo: '20mm rpg',
        cost: 250,
        weight: 90,
        types: ['standard', 'grenade'],
        description: 'a 40mm rocket propelled grenade'
    }, {
        ammo: '30mm rpg',
        cost: 500,
        weight: 120,
        types: ['frag', 'standard', 'grenade', 'fire bomb'],
        description: 'a 40mm rocket propelled grenade'
    }, {
        ammo: '40mm rpg',
        cost: 800,
        weight: 160,
        types: ['plasma bomb', 'frag', 'standard', 'grenade', 'fire bomb'],
        description: 'a 40mm rocket propelled grenade'
    }, {
        ammo: '50mm rpg',
        cost: 1250,
        weight: 220,
        types: ['plasma bomb', 'homing', 'standard', 'grenade', 'fire bomb'],
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
    ammo: Ammo;
    rps?: number;
    strengthRequirement: number;
    splashRange?:number;
    lowDamageZone?:number;
}

export class FireArm implements IFirearm {
    fireArmClass: fireArmClass;
    damage: string;
    range: string;
    armorpiercing?: number | undefined;
    hitbonus?: number | undefined;
    fireAction: fireAction[];
    capacity: number;
    ammo: Ammo;
    rps?: number | undefined;
    weight: number;
    value: number;
    description?: string | undefined;
    name: string;
    strengthRequirement: number;
    splashRange?:number;
    lowDamageZone?:number;

    constructor(name: string, weight: number, value: number, damage: string, fireArmClass: fireArmClass, range: string, fireAction: fireAction[], capacity: number, ammo: Ammo, strengthRequirement: number, description: string | undefined, hitbonus: number | undefined, armorpiercing: number | undefined, rps: number | undefined, splashRange:number|undefined, lowDamageZone:number|undefined) {
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
        this.strengthRequirement = strengthRequirement;
        this.splashRange = splashRange;
        this.lowDamageZone = lowDamageZone;
    }
}

// gun makers = night, 

const Firearms: FireArm[] = [
    //hand guns
    {
        fireArmClass: 'handgun', name: 'revolver', damage: '1d10', range: '300m', ammo: '10x19', strengthRequirement: 2, capacity: 6, fireAction: ['double action revolver'], armorpiercing: 1, weight: 800, value: 1000 ,
        description: 'basic revolver, this antique weapon design is mostly considered a collectors item for gun and antique enthusiasts. It still works.'
    },
    {
        fireArmClass: 'handgun', name: 'Fantry Light Model', damage: '2d6', range: '350m', ammo: '10x21', strengthRequirement: 1, capacity: 19, fireAction: ['semi-automatic'], armorpiercing: 1, weight: 950, value: 900,
        description: 'the light handgun model of the fantry gun manufacturer, has a generous ammo capacity and the design makes it less loud than other handguns'
    },
    {
        fireArmClass: 'handgun', name: 'Fantry Heavy Model', damage: '2d8', range: '450m', ammo: '11x21', strengthRequirement: 3, capacity: 14, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 1200, value: 1200,
        description: 'a large hand gun designed to inflict serious damage'
    },
    {
        fireArmClass: 'handgun', name: 'Merlion Atomic', damage: '2d6', range: '400m', ammo: '10x21', strengthRequirement: 2, capacity: 12, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 850, hitbonus: 2, value: 1700,
        description: 'Common handgun used exclusively by merlions, the arcane alloys allows for both supreme recoil handling'
    },

    //submachinegun
    {
        fireArmClass: 'handgun', name: 'Fantry Sub Model', damage: '1d8', range: '350m', ammo: '9x21', strengthRequirement: 3, capacity: 24, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 2, rps: 8, weight: 1800, value: 2800,
        description: 'A very light submachine gun, fires relatively slow for a submachine gun on while on full automatic'
    },
    {
        fireArmClass: 'handgun', name: 'Skolt cleaner', damage: '1d10', range: '300m', ammo: '10x19', strengthRequirement: 4, capacity: 36, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 1, rps: 10, weight: 2100, value: 3100,
        description: 'The Skolt Cleaner is a popular submachinegun'
    },

    //rifle
    {
        fireArmClass: 'rifle', name: 'Fantry Assault Model', damage: '2d6', range: '800m', ammo: '11x17', strengthRequirement: 3, capacity: 24, fireAction: ['semi-automatic'], armorpiercing: 1, weight: 2200, value: 1500,
        description: 'A light weight assault weapon'
    },
    {
        fireArmClass: 'rifle', name: 'Skolt Hunter', damage: '2d8', range: '1000m', ammo: '12x20', strengthRequirement: 4, capacity: 8, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 2300, value: 2000,
        description: 'A rifle primarily designed for hunting'
    },
    {
        fireArmClass: 'rifle', name: 'Skolt LG', damage: '2d10', range: '1200m', ammo: '12x24', strengthRequirement: 5, capacity: 6, fireAction: ['semi-automatic'], armorpiercing: 3, weight: 3500, value: 2100,
        description: 'The skolt LG (long gun) is primarily designed for hunting large game'
    },
    {
        fireArmClass: 'rifle', name: 'Night AV Sniper', damage: '2d10', range: '1800m', ammo: '12x28', strengthRequirement: 5, capacity: 4, fireAction: ['bolt action'], armorpiercing: 5, hitbonus: -1, weight: 8200, value: 3100,
        description: 'This huge sniper rifle is designed to take out targets at extreme range, or damage vehicles'
    },

    //automatic rifle
    {
        fireArmClass: 'rifle', name: 'Skolt Advanced', damage: '1d12', range: '700m', ammo: '11x21', strengthRequirement: 4, capacity: 60, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 2, rps: 8, weight: 3200, value: 3900,
        description: 'A slim and futuristic looking fully automatic assault rifle designed for urban warfare '
    },
    {
        fireArmClass: 'rifle', name: 'Merlion Predator', damage: '2d10', range: '1100m', ammo: '12x24', strengthRequirement: 4, capacity: 45, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 4, rps: 12, weight: 3600, value: 5100,
        description: 'This strange merlion designed weapon was originally intended as an anti-human weapon, but when merlions decided that humans were harmless creatures they offered this weapon as a gesture of good will'
    },

    //shotgun
    {
        fireArmClass: 'rifle', name: 'Skolt Crusher', damage: '2d6', range: '160m', ammo: '12 gauge', strengthRequirement: 4, capacity: 10, fireAction: ['semi-automatic'], weight: 2800, value: 2200, hitbonus: 0,
        description: 'The skolt crusher is a long barrel semi-automatic shotgun, has a low spread', splashRange: 0.5, lowDamageZone: 1,
    },
    {
        fireArmClass: 'rifle', name: 'Night Hammer', damage: '2d6', range: '80m', ammo: '12 gauge', strengthRequirement: 5, capacity: 12, fireAction: ['pump action'], weight: 2700, value: 2100, hitbonus: 0,
        description: 'This old fashioned pump action shotgun offers a wide spread which increases likelyhood of hitting', splashRange: 0.8, lowDamageZone: 1,
    },
    {
        fireArmClass: 'rifle', name: 'Night Hammer sawed off', damage: '2d6', range: '40m', ammo: '12 gauge', strengthRequirement: 5, capacity: 12, fireAction: ['pump action'], weight: 2000, value: 2000, hitbonus: 0,
        description: 'A sawed off version of the Night Hammer, slightly lighter and has a huge spread', splashRange: 1
    },

    //magnetic guns

    {
        fireArmClass: 'rifle', name: 'Night Coil', damage: '1d10', range: '1200m', ammo: '4mm ec', strengthRequirement: 6, capacity: 60, fireAction: ['semi-automatic'], weight: 7000, value: 2600, hitbonus: 2, armorpiercing: 5, 
        description: 'This experimental weapon uses electromagnetic induction to launch a bullet, naturally very silent'
    },
    {
        fireArmClass: 'rifle', name: 'Skolt Railgun', damage: '2d8', range: '1800m', ammo: '4mm ec', strengthRequirement: 8, capacity: 60,fireAction: ['semi-automatic'], weight: 11000, value: 3700, hitbonus: 1, armorpiercing: 6,
        description: 'A huge railgun, has two long rails along which a tiny ferromagnetic bullet is accelerated to breathtaking speeds'
    },
    {
        fireArmClass: 'rifle', name: 'Merlion Force Gun', damage: '2d8', range: '2000m', ammo: '4mm ec', strengthRequirement: 6, capacity: 60,fireAction: ['semi-automatic'], weight: 9000, value: 4800, hitbonus: 1, armorpiercing: 6,
        description: 'A strange rifle that exploits the electroweak force in an unknown way'
    },

    //machinegun
    {
        fireArmClass: 'machinegun', name: 'Fantry Tyrant Model', damage: '1d8', range: '250m', ammo: '9x17', strengthRequirement: 8, capacity: 160, fireAction: ['fully-automatic'], rps: 8, weight: 8000, value: 5500,
        description: 'The Tyrant model of the Fantry gun manufacturer, fully automatic machine gun light enough to hold up or using the tripod'
    },
    {
        fireArmClass: 'machinegun', name: 'Merlion Durium', damage: '1d12', range: '900m', ammo: '9x23', strengthRequirement: 7, capacity: 150, fireAction: ['fully-automatic'], armorpiercing: 3, rps: 8, weight: 7000, value: 6700, hitbonus: 3,
        description: 'An elegant machine gun used only be the merlion military, take -2 if not using the tripod'
    },
    {
        fireArmClass: 'machinegun', name: 'Skolt Obliderator', damage: '2d10', range: '1600m', ammo: '12x28', strengthRequirement: 9, capacity: 120, fireAction: ['fully-automatic'], armorpiercing: 4, rps: 8, weight: 12000, value: 7500,
        description: 'Point this massive machinegun in a direction, hold down the trigger and watch as everything is turned into swiss cheese'
    },

    //rocket launcher
    {
        fireArmClass: 'rocketlauncher', name: 'Minirocket Launcher', damage: '6d8', range: '600m', ammo: '20mm rpg', strengthRequirement: 4, capacity: 8, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 5000, value: 2000, hitbonus: -1,
        description: 'Specialized rocket launcher, fires tiny rockets, can fire multiple per round', splashRange: .5, lowDamageZone: 2,
    },
    {
        fireArmClass: 'rocketlauncher', name: 'AP-RPG', damage: '8d8', range: '1000m', ammo: '30mm rpg', strengthRequirement: 4, capacity: 3, fireAction: ['bolt action'], armorpiercing: 6, weight: 4000, value: 1500, hitbonus: -2,
        description: 'Heavy anti-personell rocket launcher, useful for forcing someone out of cover', splashRange: 1, lowDamageZone: 3,
    },
    {
        fireArmClass: 'rocketlauncher', name: 'ALV-RPG', damage: '10d8', range: '2500m', ammo: '40mm rpg', strengthRequirement: 4, capacity: 2, fireAction: ['bolt action'], armorpiercing: 10, weight: 4000, value: 1700, hitbonus: -3,
        description: 'Anti light vehicle rocket launcher, used to destroy cars and stuff, also extremely effective at destroying people', splashRange: 2, lowDamageZone: 4,
    },
    {
        fireArmClass: 'rocketlauncher', name: 'AT-RPG', damage: '12d8', range: '3500m', ammo: '50mm rpg', strengthRequirement: 5, capacity: 1, fireAction: ['bolt action'], armorpiercing: 12, weight: 5000, value: 2400, hitbonus: -4,
        description: 'Anti tank rocket launcher, used to destroy tanks and buildings, can also be used to convert people into ash and minced meat', splashRange: 2, lowDamageZone: 5,
    },

    //energy weapons
    {
        fireArmClass: 'laser', name: 'Fantry Lasergun', damage: '1d8', range: '1800m', ammo: '1hec', strengthRequirement: 1, capacity: 60, fireAction: ['semi-automatic'], armorpiercing: 1, hitbonus: 3, weight: 1100, value: 2300,
        description: 'the only laser handgun, needs protective gear to use, has blinding effect to all within 1 meters, half range penalty'
    },
    {
        fireArmClass: 'laser', name: 'Skolt Lightpulse', damage: '1d10', range: '2000m', ammo: '1hec', strengthRequirement: 2, capacity: 100, fireAction: ['semi-automatic'], armorpiercing: 2, hitbonus: 3, weight: 3000, value: 3400,
        description: 'shoots a blue laser pulse, needs protective gear to use, has blinding effect to all within 2 meters, half range penalty'
    },
    {
        fireArmClass: 'laser', name: 'Merlion Deathray', damage: '1d12', range: '2400m', ammo: '1hec', strengthRequirement: 2, capacity: 80, fireAction: ['semi-automatic'], armorpiercing: 3, hitbonus: 4, weight: 3000, value: 5100,
        description: 'shoots a ultraviolet laser pulse, needs protective gear to use, has blinding effect to all within 3 meters, half range penalty'
    },
    {
        fireArmClass: 'plasma', name: 'Merlion Plasma Cannon', damage: '6d6', range: '100m', ammo: '1hec', strengthRequirement: 4, capacity: 60, fireAction: ['semi-automatic'], hitbonus: 1, weight: 6000, value: 6200,
        description: 'shoots highly energetic beam of charged particles which ionizes the air as it passes through it, half damage at 50 meters'
    },
    {
        fireArmClass: 'plasma', name: 'Skolt Plasma Bloom', damage: '4d6', range: '120m', ammo: '1hec', strengthRequirement: 4, capacity: 60, fireAction: ['semi-automatic'], hitbonus: 1, weight: 6200, value: 5700,
        description: 'shoots an intense laser which causes the air to "bloom", induction is used to propel the blooming plasma, half damage at 40 meters'
    }
];

export default Firearms;