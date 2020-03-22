import Item from "./Item";

interface IFirearm extends Item {
    fireArmClass: fireArmClass,
    damage: string;
    range: string;
    armorpiercing?: number;
    hitbonus?: number;
    fireAction: fireAction[];
    capacity: number;
    ammo: string;
    rps?: number;
}
type fireAction = 'single action revolver' | 'double action revolver' | 'bolt action' | 'pump action' | 'semi-automatic' | 'fully-automatic' | 'continuous';

type fireArmClass = 'handgun' | 'rifle' | 'machinegun' | 'rocketlauncher' | 'laser' | 'plasma';
export class FireArm implements IFirearm {
    fireArmClass: fireArmClass;
    damage: string;
    range: string;
    armorpiercing?: number | undefined;
    hitbonus?: number | undefined;
    fireAction: fireAction[];
    capacity: number;
    ammo: string;
    rps?: number | undefined;
    weight: number;
    value: number;
    description?: string | undefined;
    name: string;

    constructor(name: string, weight: number, value: number, damage: string, fireArmClass: fireArmClass, range: string, fireAction: fireAction[], capacity: number, ammo: string, description: string | undefined, hitbonus: number | undefined, armorpiercing: number | undefined, rps: number|undefined) {
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



const Firearms:FireArm[] = [
    { fireArmClass: 'handgun', name: 'revolver', damage: '1d10', range: '200m', ammo: '10mm', capacity: 6, fireAction: ['double action revolver'], armorpiercing: 2, weight: 200, value: 3500 },
    { fireArmClass: 'handgun', name: 'Grevvy light', damage: '1d10', range: '250m', ammo: '10mm', capacity: 19, fireAction: ['semi-automatic'], armorpiercing: 3, weight: 260, value: 3200 },
    { fireArmClass: 'handgun', name: 'Grevvy duty', damage: '1d12', range: '250m', ammo: '11mm', capacity: 14, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 400, value: 4000 },
    { fireArmClass: 'handgun', name: 'Grevvy sub', damage: '1d10', range: '210m', ammo: '9mm', capacity: 24, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 1, rps: 3, weight: 360, value: 6500 },
    { fireArmClass: 'rifle', name: 'Grevvy marksman', damage: '1d12', range: '350m', ammo: '11mm', capacity: 24, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 1200, value: 5200 },
    { fireArmClass: 'rifle', name: 'Skolt Hunter', damage: '1d12', range: '350m', ammo: '12mm', capacity: 8, fireAction: ['semi-automatic'], armorpiercing: 1, weight: 1600, value: 8000 },
    { fireArmClass: 'rifle', name: 'Skolt LG', damage: '1d12', range: '350m', ammo: '12mm', capacity: 6, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 1800, value: 7500 },
    { fireArmClass: 'rifle', name: 'Skolt Advanced', damage: '1d12', range: '150m', ammo: '11mm', capacity: 60, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 1, rps: 4, weight: 2200, value: 9000 },
    { fireArmClass: 'machinegun', name: 'Grevvy Tyrant', damage: '1d10', range: '180m', ammo: '8mm', capacity: 110, fireAction: ['fully-automatic'], armorpiercing: 0, rps: 10, weight: 2300, value: 13000 },
    { fireArmClass: 'machinegun', name: 'Merlion Durium', damage: '1d12', range: '380m', ammo: '9mm', capacity: 120, fireAction: ['fully-automatic'], armorpiercing: 0, rps: 8, weight: 1900, value: 18000 },
    { fireArmClass: 'machinegun', name: 'Skolt Obliderator', damage: '2d8', range: '120m', ammo: '12mm', capacity: 180, fireAction: ['fully-automatic'], armorpiercing: 0, rps: 12, weight: 4200, value: 17000 },
    { fireArmClass: 'rocketlauncher', name: 'ALV-RL', damage: '10d6', range: '500m', ammo: '40mm rpg', capacity: 4, fireAction: ['bolt action'], armorpiercing: 0, weight: 3900, value: 6000 },
    { fireArmClass: 'rocketlauncher', name: 'AT-RL', damage: '12d6', range: '500m', ammo: '50mm rpg', capacity: 1, fireAction: ['bolt action'], armorpiercing: 0, hitbonus: 4, weight: 4600, value: 8500, description: 'uses targeted system, uses two rounds to fire, ONLY snipe-shot available' },
    { fireArmClass: 'laser', name: 'Skolt Lightpulse', damage: '1d8', range: '800m', ammo: '1hec', capacity: 100, fireAction: ['semi-automatic'], armorpiercing: 1, hitbonus: 3, weight: 3200, value: 19000, description: 'blue laser pulse, needs protective gear to use, half range penalty' },
    { fireArmClass: 'laser', name: 'Merlion Deathray', damage: '1d12', range: '1800m', ammo: '2hec', capacity: 80, fireAction: ['semi-automatic'], armorpiercing: 3, hitbonus: 4, weight: 2900, value: 27000, description: 'needs protective gear to use, quarter range penalty' },
    { fireArmClass: 'plasma', name: 'Merlion Plasma Cannon', damage: '4d8', range: '90m', ammo: '10hec', capacity: 120, fireAction: ['semi-automatic'], armorpiercing: 0, hitbonus: 1, weight: 6000, value: 29000, description: 'needs protective gear to use' }
];

export default Firearms;