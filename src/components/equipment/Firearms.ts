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
    { fireArmClass: 'handgun', name: 'revolver', damage: '1d10', range: '200m', ammo: '10x19', capacity: 6, fireAction: ['double action revolver'], armorpiercing: 2, weight: 800, value: 3500 },
    { fireArmClass: 'handgun', name: 'Grevvy light', damage: '2d6', range: '250m', ammo: '10x21', capacity: 19, fireAction: ['semi-automatic'], armorpiercing: 3, weight: 950, value: 3200 },
    { fireArmClass: 'handgun', name: 'Grevvy duty', damage: '2d8', range: '250m', ammo: '11x21', capacity: 14, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 1200, value: 4000 },
    { fireArmClass: 'handgun', name: 'Merlion Zapper', damage: '2d6', range: '250m', ammo: '10x21', capacity: 12, fireAction: ['semi-automatic'], armorpiercing: 4, weight: 1100, hitbonus: 2, value: 6000 },

    //submachinegun
    { fireArmClass: 'handgun', name: 'Grevvy sub', damage: '1d10', range: '210m', ammo: '9x21', capacity: 24, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 1, rps: 3, weight: 1300, value: 6500 },
    { fireArmClass: 'handgun', name: 'Skolt cleaner', damage: '1d12', range: '220m', ammo: '10x19', capacity: 36, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 1, rps: 3, weight: 1400, value: 7500 },

    //rifle
    { fireArmClass: 'rifle', name: 'Grevvy marksman', damage: '1d12', range: '350m', ammo: '11x17', capacity: 24, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 1900, value: 5200 },
    { fireArmClass: 'rifle', name: 'Skolt Hunter', damage: '1d12', range: '350m', ammo: '12x20', capacity: 8, fireAction: ['semi-automatic'], armorpiercing: 1, weight: 2300, value: 8000 },
    { fireArmClass: 'rifle', name: 'Skolt LG', damage: '2d10', range: '350m', ammo: '12x24', capacity: 6, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 3500, value: 7500 },
    { fireArmClass: 'rifle', name: 'Night AV sniper', damage: '2d12', range: '1500m', ammo: '12x28', capacity: 4, fireAction: ['bolt action'], armorpiercing: 4, hitbonus: -1, weight: 8200, value: 8800 },

    //automatic rifle
    { fireArmClass: 'rifle', name: 'Skolt Advanced', damage: '1d12', range: '150m', ammo: '11x21', capacity: 60, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 1, rps: 4, weight: 3200, value: 9000 },
    { fireArmClass: 'rifle', name: 'Merlion predator', damage: '2d10', range: '360m', ammo: '12x24', capacity: 45, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 2, rps: 5, weight: 3600, value: 12000 },

    //shotgun
    { fireArmClass: 'rifle', name: 'Skolt Crusher', damage: '2d6', range: '160m', ammo: '12 gauge', capacity: 10, fireAction: ['semi-automatic'], weight: 2800, value: 7600, hitbonus: 0 },
    { fireArmClass: 'rifle', name: 'Night Hammer', damage: '2d6', range: '80m', ammo: '12 gauge', capacity: 12, fireAction: ['pump action'], weight: 2700, value: 7500, hitbonus: 2 },
    { fireArmClass: 'rifle', name: 'Night Hammer (sawed off)', damage: '2d6', range: '40m', ammo: '12 gauge', capacity: 12, fireAction: ['pump action'], weight: 2300, value: 6000, hitbonus: 4 },

    //machinegun
    { fireArmClass: 'machinegun', name: 'Grevvy Tyrant', damage: '1d8', range: '180m', ammo: '9x17', capacity: 110, fireAction: ['fully-automatic'], armorpiercing: 0, rps: 6, weight: 6500, value: 13000 },
    { fireArmClass: 'machinegun', name: 'Merlion Durium', damage: '1d12', range: '380m', ammo: '9x23', capacity: 120, fireAction: ['fully-automatic'], armorpiercing: 2, rps: 8, weight: 4800, value: 18000, hitbonus: 2 },
    { fireArmClass: 'machinegun', name: 'Skolt Obliderator', damage: '2d10', range: '400m', ammo: '12x28', capacity: 180, fireAction: ['fully-automatic'], armorpiercing: 2, rps: 12, weight: 8600, value: 17000 },

    //rocket launcher
    { fireArmClass: 'rocketlauncher', name: 'ALV-RL', damage: '10d6', range: '2500m', ammo: '40mm rpg', capacity: 4, fireAction: ['bolt action'], armorpiercing: 0, weight: 3900, value: 6000 },
    { fireArmClass: 'rocketlauncher', name: 'AT-RL', damage: '12d6', range: '3000m', ammo: '50mm rpg', capacity: 1, fireAction: ['bolt action'], armorpiercing: 0, weight: 4600, value: 8500 },

    //energy weapons
    { fireArmClass: 'laser', name: 'Skolt Lightpulse', damage: '1d8', range: '1800m', ammo: '1hec', capacity: 100, fireAction: ['semi-automatic'], armorpiercing: 1, hitbonus: 3, weight: 3200, value: 19000, description: 'blue laser pulse, needs protective gear to use, half range penalty' },
    { fireArmClass: 'laser', name: 'Merlion Deathray', damage: '1d12', range: '2400m', ammo: '2hec', capacity: 80, fireAction: ['semi-automatic'], armorpiercing: 3, hitbonus: 4, weight: 2900, value: 27000, description: 'needs protective gear to use, quarter range penalty' },
    { fireArmClass: 'plasma', name: 'Merlion Plasma Cannon', damage: '4d8', range: '90m', ammo: '10hec', capacity: 120, fireAction: ['semi-automatic'], armorpiercing: 0, hitbonus: 1, weight: 6000, value: 29000, description: 'needs protective gear to use' }
];

export default Firearms;