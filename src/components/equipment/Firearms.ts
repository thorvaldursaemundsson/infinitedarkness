import { SkillName } from "../general/Skills";
import Item, { D, ICondition, IDamageDice, IQuality } from "./Item";

export type Ammo = '9x17' | '9x21' | '9x23' |
    '10x19' | '10x21' |
    '11x17' | '11x21' |
    '12x20' | '12x24' | '12x28' |
    '4mm ec' |
    '12 gauge' | '20 gauge' |
    '20mm rpg' | '30mm rpg' | '40mm rpg' | '50mm rpg' |
    '1hec' | '2hec' | '3hec' | '5hec' | '10hec';

export interface ILoudness {
    deafnessRange: number;
    deafnessTime: number;
    hearingRange: number;
}

export interface AmmoInformation {
    ammo: Ammo;
    cost: number;
    /** grams */
    weight: number;
    types: string[];
    description: string;
    loudness: ILoudness;
}

export const AmmoTypesInformation: AmmoInformation[] = [
    {
        ammo: '9x17',
        cost: 2,
        weight: 7,
        types: ['tracer', 'hollow point', 'standard'],
        description: 'a small short 9mm bullet',
        loudness: {
            deafnessRange: 0,
            deafnessTime: 0,
            hearingRange: 1000,
        }
    }, {
        ammo: '9x21',
        cost: 3,
        weight: 9,
        types: ['tracer', 'hollow point', 'armor piercing', 'standard'],
        description: 'a slightly longer version of the 9mm',
        loudness: {
            deafnessRange: 0,
            deafnessTime: 0,
            hearingRange: 1500,
        }
    }, {
        ammo: '9x23',
        cost: 3.5,
        weight: 11,
        types: ['tracer', 'hollow point', 'armor piercing', 'standard'],
        description: 'a long version of the 9mm',
        loudness: {
            deafnessRange: 1,
            deafnessTime: 1,
            hearingRange: 2000,
        }
    }, {
        ammo: '10x19',
        cost: 2.8,
        weight: 10,
        types: ['hollow point', 'standard'],
        description: 'a standard 10cm bullet',
        loudness: {
            deafnessRange: 1,
            deafnessTime: 1,
            hearingRange: 1500,
        }
    }, {
        ammo: '10x21',
        cost: 3.6,
        weight: 11,
        types: ['tracer', 'hollow point', 'armor piercing', 'standard'],
        description: 'a long version of the 10cm bullet',
        loudness: {
            deafnessRange: 1,
            deafnessTime: 2,
            hearingRange: 2000,
        }
    }, {
        ammo: '11x17',
        cost: 3.8,
        weight: 12,
        types: ['incendiary', 'standard'],
        description: 'a short wide 11cm bullet',
        loudness: {
            deafnessRange: 2,
            deafnessTime: 1,
            hearingRange: 2000,
        }
    }, {
        ammo: '11x21',
        cost: 6,
        weight: 15,
        types: ['armor piercing', 'incendiary', 'standard'],
        description: 'a normal 11cm bullet',
        loudness: {
            deafnessRange: 2,
            deafnessTime: 2,
            hearingRange: 3000,
        }
    }, {
        ammo: '12x20',
        cost: 10,
        weight: 16,
        types: ['armor piercing', 'incendiary', 'standard'],
        description: 'a large 12cm bullet',
        loudness: {
            deafnessRange: 2,
            deafnessTime: 5,
            hearingRange: 5000,
        }
    }, {
        ammo: '12x24',
        cost: 16,
        weight: 20,
        types: ['hollow point', 'armor piercing', 'incendiary', 'standard'],
        description: 'a long large 12cm bullet',
        loudness: {
            deafnessRange: 3,
            deafnessTime: 10,
            hearingRange: 10000,
        }
    }, {
        ammo: '12x28',
        cost: 20,
        weight: 25,
        types: ['tracer', 'hollow point', 'armor piercing', 'incendiary', 'standard'],
        description: 'a very long large 12cm bullet',
        loudness: {
            deafnessRange: 3,
            deafnessTime: 12,
            hearingRange: 20000,
        }
    }, {
        ammo: '4mm ec',
        cost: 3,
        weight: 0.2,
        types: ['standard', 'neodymium'],
        description: 'a tiny caseless ferromagnetic iron bullet',
        loudness: {
            deafnessRange: 0,
            deafnessTime: 0,
            hearingRange: 900,
        }
    }, {
        ammo: '12 gauge',
        cost: 9,
        weight: 28,
        types: ['shell', 'slug', 'explosive', 'wolf'],
        description: 'a 12 gauge shotgun shell',
        loudness: {
            deafnessRange: 2,
            deafnessTime: 2,
            hearingRange: 2000,
        }
    }, {
        ammo: '20 gauge',
        cost: 6.6,
        weight: 21,
        types: ['shell', 'slug', 'wolf'],
        description: 'a 20 gauge shotgun shell',
        loudness: {
            deafnessRange: 1,
            deafnessTime: 1,
            hearingRange: 2000,
        }
    }, {
        ammo: '20mm rpg',
        cost: 1500,
        weight: 800,
        types: ['standard', 'grenade'],
        description: 'a 40mm rocket propelled grenade',
        loudness: {
            deafnessRange: 0,
            deafnessTime: 0,
            hearingRange: 20000,
        }
    }, {
        ammo: '30mm rpg',
        cost: 2500,
        weight: 1600,
        types: ['frag', 'standard', 'grenade', 'fire bomb'],
        description: 'a 40mm rocket propelled grenade',
        loudness: {
            deafnessRange: 0,
            deafnessTime: 0,
            hearingRange: 25000,
        }
    }, {
        ammo: '40mm rpg',
        cost: 4000,
        weight: 2200,
        types: ['plasma bomb', 'frag', 'standard', 'grenade', 'fire bomb'],
        description: 'a 40mm rocket propelled grenade',
        loudness: {
            deafnessRange: 0,
            deafnessTime: 0,
            hearingRange: 40000,
        }
    }, {
        ammo: '50mm rpg',
        cost: 8000,
        weight: 3000,
        types: ['plasma bomb', 'homing', 'standard', 'grenade', 'fire bomb'],
        description: 'a 50mm rocket propelled grenade',
        loudness: {
            deafnessRange: 0,
            deafnessTime: 0,
            hearingRange: 100000,
        }
    }, {
        ammo: '1hec',
        cost: 0.01,
        weight: 0,
        types: ['standard'],
        description: '1 unit of hyperelectron charge, battery rechargeable',
        loudness: {
            deafnessRange: 0,
            deafnessTime: 0,
            hearingRange: 500,
        }
    }, {
        ammo: '2hec',
        cost: 0.2,
        weight: 0,
        types: ['standard'],
        description: '1 unit of hyperelectron charge, battery rechargeable',
        loudness: {
            deafnessRange: 0,
            deafnessTime: 0,
            hearingRange: 500,
        }
    }, {
        ammo: '3hec',
        cost: 1,
        weight: 0,
        types: ['standard'],
        description: '1 unit of hyperelectron charge, battery rechargeable, designed for high discharge',
        loudness: {
            deafnessRange: 0,
            deafnessTime: 0,
            hearingRange: 500,
        }
    }, {
        ammo: '5hec',
        cost: 2,
        weight: 0,
        types: ['standard'],
        description: '1 unit of hyperelectron charge, battery rechargeable, designed for very high discharge',
        loudness: {
            deafnessRange: 0,
            deafnessTime: 0,
            hearingRange: 500,
        }
    }, {
        ammo: '10hec',
        cost: 4,
        weight: 0,
        types: ['standard'],
        description: '10 units of hyperelectron charge, battery rechargeable, designed for extreme discharge',
        loudness: {
            deafnessRange: 0,
            deafnessTime: 0,
            hearingRange: 500,
        }
    }
];

export interface IAmmoModification {
    name: string;
    description: string;
    cost: number;
    armorPiercingAdd?: number | undefined;
    armorPiercingMultiplier?: number | undefined;
    damageAdd?: number | undefined;
    damageMultiplier?: number | undefined;
    splashAdd?: number | undefined;
    splashMultiplier?: number | undefined;
    hitAdd?: number | undefined;
    rangeMultiplier?: number | undefined;
}

export const AmmoModifications: IAmmoModification[] = [
    { name: 'Standard', description: 'default version of the ammo, assumes the weapons stats unchanged', cost: 1 },
    { name: 'Tracer', description: 'tracer rounds have built in pyrotechnics which makes the bullet projectile more visible, adds +3 to hit.', hitAdd: 3, cost: 1.3 },
    { name: 'Hollow point', description: 'hollow point bullets are designed to shatter upon impact, adds +3 damage, reduces armor piercing to zero and doubles damage reduction from armor', damageAdd: 3, armorPiercingMultiplier: 0, cost: 1.1 },
    { name: 'Armor Piercing', description: 'bullet made of hard steel alloy instead of lead, adds +4 armor piercing, -1 damage.', armorPiercingAdd: 4, damageAdd: -1, cost: 1.1 },
    { name: 'Incendiary', description: 'bullet is designed to superheat, allows it to melt metal upon impact and cause massive damage +2 armor piercing and +1 damage.', damageAdd: 1, armorPiercingAdd: 2, cost: 2.5 },
    { name: 'Shell', description: 'contains multiple pellets which spread and gives to hit bonus', cost: 1 },
    { name: 'Slug', description: 'contains a single metal slug, removes splash, adds +4 armor piercing, +1 to hit bonus, double range', armorPiercingAdd: 2, damageAdd: 1, hitAdd: 1, cost: 1, rangeMultiplier: 2 },
    { name: 'Explosive', description: 'contains an alloy which explodes on contact, removes splash, adds +2 damage, +3 armor piercing, +1 to hit.', damageAdd: 2, armorPiercingAdd: 3, hitAdd: 1, cost: 2 },
    { name: 'Wolf', description: 'tungsten slug, named after the old name of tungsten, extremely hard and heavy slug, double range. armor piercing +5, damage +2', armorPiercingAdd: 5, damageAdd: 2, cost: 10, rangeMultiplier: 2 },
    { name: 'Neodymium', description: 'ferromagnetic neodymium bullet, stronger magnet results in more force', armorPiercingAdd: 1, damageAdd: 1, cost: 10 },
    { name: 'Plasma Bomb', description: 'Uses the bomb to initiate a thermo-nuclear fusion reaction, releasing super heated plasma. Increase damaga and area of effect by 50%, deals fire and electric damage, armor piercing reduced to 0.', damageMultiplier: 1.5, splashMultiplier: 1.5, cost: 5 },
    { name: 'Fire Bomb', description: 'The grenade releases a rapidly burning accelerant, half damage every round for anyone within the area, removes armor piercing, anying leaving instead takes 1d6, lasts 1d4 rounds, +150% cost. Not compatible  with fire or frag', cost: 1 },
    { name: 'Frag', description: 'releases metal fragments at extreme velocity. Double damage and damage reduction from armor/cover. Not compatible with plasma', cost: 1 },
    { name: 'Homing', description: 'homes in on target, requires snipe shot. Range penalties are halved. Not compatible with grenade', cost: 1.5 },
    { name: 'Grenade', description: 'non-rocket propelled, reduces range to 80m, removes backblast property, adds +1 strength requirement due to recoil', cost: 1 },
];


type fireAction = 'single action revolver' | 'double action revolver' | 'bolt action' | 'pump action' | 'semi-automatic' | 'fully-automatic' | 'continuous';

type fireArmClass = 'handgun' | 'submachinegun' | 'rifle' | 'machinegun' | 'rocketlauncher' | 'laser' | 'plasma';


type actionCost = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface IFirearm extends Item {
    fireArmClass: fireArmClass,
    damage: IDamageDice;
    /**
     * meters
     */
    range: number;
    armorpiercing?: number;
    hitbonus?: number;
    fireAction: fireAction[];
    capacity: number;
    ammo: Ammo;
    rps?: number;
    strengthRequirement: number;
    splashRange?: number;
    lowDamageZone?: number;
    /** default move action */
    reload: actionCost;
    fireCost: actionCost;
}



export class FireArm implements IFirearm {
    fireArmClass: fireArmClass;
    damage: IDamageDice;
    range: number;
    armorpiercing?: number;
    hitbonus?: number;
    fireAction: fireAction[];
    capacity: number;
    ammo: Ammo;
    rps?: number;
    weight: number;
    value: number;
    description?: string;
    name: string;
    strengthRequirement: number;
    splashRange?: number;
    lowDamageZone?: number;
    reload: actionCost;
    fireCost: actionCost;
    relatedSkill: SkillName = 'firearms';
    ammoModification?: IAmmoModification = undefined;
    firearmModification?: IFirearmModification[] = [];
    quality?: IQuality;
    condition?: ICondition;

    constructor(name: string, weight: number, value: number, damage: IDamageDice, fireArmClass: fireArmClass, range: number, fireAction: fireAction[], capacity: number, ammo: Ammo, strengthRequirement: number, description: string | undefined, hitbonus: number | undefined, armorpiercing: number | undefined, rps: number | undefined, splashRange: number | undefined, lowDamageZone: number | undefined, reload: actionCost, fireCost: actionCost) {
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
        this.reload = reload;
        this.fireCost = fireCost;
        this.firearmModification = [];
    }

    public getHitBonus(): number {
        return (this.hitbonus || 0) + this.getQualityBonus() + this.getConditionBonus() + this.getAmmoHitBonus() + this.getModHitBonus();
    }

    public getArmorPercing(): number {
        return ((this.armorpiercing || 0) + this.getAmmoArmorPercingBonus() + this.getModArmorPercingBonus()) * this.getAmmoArmorPercingFactor();
    }

    public getDamageDice(): IDamageDice {


        return {
            numberOfDice: this.damage.numberOfDice,
            sides: this.damage.sides,
            bonus: this.damage.bonus + this.getModDamageBonus() + this.getAmmoDamageBonus() + this.getQualityBonus(),
        };
    }

    private getQualityBonus(): number {
        return (this.quality && this.quality.effect) || 0;
    }

    private getConditionBonus(): number {
        return (this.condition && this.condition.effect) || 0;
    }

    private getAmmoHitBonus(): number {
        if (this.ammoModification !== undefined &&
            this.ammoModification.hitAdd !== undefined) {
            return this.ammoModification.hitAdd;
        }
        return 0;
    }

    private getAmmoDamageBonus(): number {
        if (this.ammoModification !== undefined &&
            this.ammoModification.damageAdd !== undefined) {
            return this.ammoModification.damageAdd;
        }
        return 0;
    }

    private getAmmoArmorPercingBonus(): number {
        if (this.ammoModification !== undefined &&
            this.ammoModification.armorPiercingAdd !== undefined) {
            return this.ammoModification.armorPiercingAdd;
        }
        return 0;
    }

    private getAmmoArmorPercingFactor(): number {
        if (this.ammoModification !== undefined &&
            this.ammoModification.armorPiercingMultiplier !== undefined) {
            return this.ammoModification.armorPiercingMultiplier;
        }
        else return 1;
    }

    private getModHitBonus(): number {
        let b = 0;
        if (this.firearmModification !== undefined && this.firearmModification.length > 0) {
            for (var index in this.firearmModification) {
                const fm = this.firearmModification[index];
                b += fm.hitMod || 0;
            }
        }
        return b;
    }

    private getModArmorPercingBonus(): number {
        let b = 0;
        if (this.firearmModification !== undefined && this.firearmModification.length > 0) {
            for (var index in this.firearmModification) {
                const fm = this.firearmModification[index];
                b += fm.armorPiercingMod || 0;
            }
        }
        return b;
    }

    private getModDamageBonus(): number {
        let b = 0;
        if (this.firearmModification !== undefined && this.firearmModification.length > 0) {
            for (var index in this.firearmModification) {
                const fm = this.firearmModification[index];
                b += fm.damageMod || 0;
            }
        }
        return b;
    }
}

const IFirearms: IFirearm[] = [
    //hand guns
    {
        fireArmClass: 'handgun', name: 'revolver', damage: D(1, 10), range: 300, ammo: '10x19', strengthRequirement: 2, capacity: 6, fireAction: ['double action revolver'], armorpiercing: 1, weight: 800, value: 1000,
        description: 'basic revolver, this antique weapon design is mostly considered a collectors item for gun and antique enthusiasts. It still works.', reload: 3, fireCost: 4, relatedSkill: 'firearms'
    },
    {
        fireArmClass: 'handgun', name: 'Fantry Light Model', damage: D(2, 6), range: 350, ammo: '10x21', strengthRequirement: 1, capacity: 19, fireAction: ['semi-automatic'], armorpiercing: 1, weight: 950, value: 900,
        description: 'the light handgun model of the fantry gun manufacturer, has a generous ammo capacity and the design makes it less loud than other handguns', relatedSkill: 'firearms', reload: 3, fireCost: 3
    },
    {
        fireArmClass: 'handgun', name: 'Fantry Heavy Model', damage: D(2, 8), range: 450, ammo: '11x21', strengthRequirement: 4, capacity: 14, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 1200, value: 1200,
        description: 'a large hand gun designed to inflict serious damage', relatedSkill: 'firearms', reload: 3, fireCost: 4
    },
    {
        fireArmClass: 'handgun', name: 'Merlion Atomic', damage: D(2, 6), range: 400, ammo: '10x21', strengthRequirement: 2, capacity: 12, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 850, hitbonus: 2, value: 1700,
        description: 'Common handgun used exclusively by merlions, the arcane alloys allows for both supreme recoil handling', relatedSkill: 'firearms', reload: 2, fireCost: 3
    },

    //submachinegun
    {
        fireArmClass: 'handgun', name: 'Fantry Sub Model', damage: D(1, 8), range: 350, ammo: '9x21', strengthRequirement: 3, capacity: 24, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 2, rps: 8, weight: 1800, value: 2800,
        description: 'A very light submachine gun, fires relatively slow for a submachine gun on while on full automatic', relatedSkill: 'firearms', reload: 4, fireCost: 3
    },
    {
        fireArmClass: 'handgun', name: 'Skolt cleaner', damage: D(1, 10), range: 300, ammo: '10x19', strengthRequirement: 4, capacity: 36, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 1, rps: 10, weight: 2100, value: 3100,
        description: 'The Skolt Cleaner is a popular submachinegun', reload: 4, fireCost: 4, relatedSkill: 'firearms',
    },

    //rifle
    {
        fireArmClass: 'rifle', name: 'Fantry Assault Model', damage: D(2, 6), range: 800, ammo: '11x17', strengthRequirement: 3, capacity: 48, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 1, weight: 2200, value: 1500,
        description: 'A light weight assault weapon', rps: 6, hitbonus: 1, relatedSkill: 'firearms', reload: 4, fireCost: 4
    },
    {
        fireArmClass: 'rifle', name: 'Skolt Hunter', damage: D(2, 8), range: 100, ammo: '12x20', strengthRequirement: 4, capacity: 8, fireAction: ['bolt action'], armorpiercing: 2, weight: 2300, value: 2000,
        description: 'A rifle primarily designed for hunting', reload: 5, fireCost: 5, relatedSkill: 'firearms',
    },
    {
        fireArmClass: 'rifle', name: 'Skolt LG', damage: D(2, 10), range: 1200, ammo: '12x24', strengthRequirement: 5, capacity: 6, fireAction: ['bolt action'], armorpiercing: 3, weight: 3500, value: 2100,
        description: 'The skolt LG (long gun) is primarily designed for hunting large game', reload: 6, fireCost: 5, relatedSkill: 'firearms',
    },
    {
        fireArmClass: 'rifle', name: 'Night AV Sniper', damage: D(2, 10), range: 1800, ammo: '12x28', strengthRequirement: 5, capacity: 4, fireAction: ['bolt action'], armorpiercing: 5, hitbonus: -1, weight: 8200, value: 3600,
        description: 'This huge sniper rifle is designed to take out targets at extreme range, or damage vehicles', reload: 5, fireCost: 5, relatedSkill: 'firearms',
    },
    //automatic rifle
    {
        fireArmClass: 'rifle', name: 'Skolt Advanced', damage: D(1, 12), range: 700, ammo: '11x21', strengthRequirement: 4, capacity: 60, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 3, rps: 8, weight: 3200, value: 3600,
        description: 'A slim and futuristic looking fully automatic assault rifle designed for urban warfare ', hitbonus: 1, relatedSkill: 'firearms', reload: 4, fireCost: 4
    },
    {
        fireArmClass: 'rifle', name: 'Merlion Predator', damage: D(2, 10), range: 1100, ammo: '12x24', strengthRequirement: 4, capacity: 45, fireAction: ['semi-automatic', 'fully-automatic'], armorpiercing: 4, rps: 12, weight: 3600, value: 11000,
        description: 'This strange merlion designed weapon was originally intended as an anti-human weapon, but when merlions decided that humans were harmless creatures they offered this weapon as a gesture of good will', relatedSkill: 'firearms', reload: 4, fireCost: 4
    },
    //shotgun
    {
        fireArmClass: 'rifle', name: 'Skolt Crusher', damage: D(2, 6), range: 160, ammo: '12 gauge', strengthRequirement: 4, capacity: 10, fireAction: ['semi-automatic'], weight: 2600, value: 2400, armorpiercing: 1,
        description: 'The skolt crusher is a long barrel semi-automatic shotgun, has a low spread. If within 3 meters lowest damage dice counts as max. Double range penalty to accuracy.', splashRange: 0.5, lowDamageZone: 1, relatedSkill: 'firearms',
        reload: 5, fireCost: 4
    },
    {
        fireArmClass: 'rifle', name: 'Night Hammer', damage: D(2, 6), range: 80, ammo: '12 gauge', strengthRequirement: 4, capacity: 12, fireAction: ['pump action'], weight: 2700, value: 2100, hitbonus: 1,
        description: 'This old fashioned pump action shotgun offers a wide spread which increases likelyhood of hitting. If within 2 meters lowest damage dice counts as max. Double range penalty to accuracy.', splashRange: 0.8, lowDamageZone: 1, relatedSkill: 'firearms',
        reload: 8, fireCost: 4
    },
    {
        fireArmClass: 'rifle', name: 'Night Hammer sawed off', damage: D(2, 6), range: 40, ammo: '12 gauge', strengthRequirement: 4, capacity: 12, fireAction: ['pump action'], weight: 2000, value: 2000, hitbonus: 2,
        description: 'A sawed off version of the Night Hammer, slightly lighter and has a huge spread. If within 1 meters lowest damage dice counts as max. Double range penalty to accuracy.', splashRange: 1, relatedSkill: 'firearms',
        reload: 8, fireCost: 3
    },
    //magnetic guns
    {
        fireArmClass: 'rifle', name: 'Night Coil', damage: D(2, 6), range: 1200, ammo: '4mm ec', strengthRequirement: 6, capacity: 60, fireAction: ['semi-automatic'], weight: 7000, value: 2600, hitbonus: 2, armorpiercing: 4,
        description: 'This experimental weapon uses electromagnetic induction to launch a bullet, naturally very silent', reload: 6, fireCost: 4, relatedSkill: 'firearms',
    },
    {
        fireArmClass: 'rifle', name: 'Skolt Railgun', damage: D(2, 8), range: 1800, ammo: '4mm ec', strengthRequirement: 7, capacity: 60, fireAction: ['semi-automatic'], weight: 11000, value: 3800, hitbonus: 1, armorpiercing: 5,
        description: 'A huge railgun, has two long rails along which a tiny ferromagnetic bullet is accelerated to breathtaking speeds', reload: 6, fireCost: 5, relatedSkill: 'firearms',
    },
    {
        fireArmClass: 'rifle', name: 'Merlion Force Gun', damage: D(2, 8), range: 2000, ammo: '4mm ec', strengthRequirement: 6, capacity: 60, fireAction: ['semi-automatic'], weight: 9000, value: 5400, hitbonus: 1, armorpiercing: 5,
        description: 'A strange rifle that exploits the electroweak force in an unknown way', reload: 3, fireCost: 5, relatedSkill: 'firearms',
    },
    //machinegun
    {
        fireArmClass: 'machinegun', name: 'Fantry Tyrant Model', damage: D(1, 8), range: 600, ammo: '9x17', strengthRequirement: 5, capacity: 200, fireAction: ['fully-automatic'], rps: 6, weight: 8000, value: 5500,
        description: 'The Tyrant model of the Fantry gun manufacturer, fully automatic machine gun light enough to hold up or using the tripod', relatedSkill: 'firearms', reload: 8, fireCost: 4
    },
    {
        fireArmClass: 'machinegun', name: 'Merlion Durium', damage: D(1, 12), range: 900, ammo: '9x23', strengthRequirement: 6, capacity: 150, fireAction: ['fully-automatic'], armorpiercing: 3, rps: 6, weight: 7000, value: 6700, hitbonus: 3,
        description: 'An elegant machine gun used only be the merlion military', relatedSkill: 'firearms', reload: 6, fireCost: 4
    },
    {
        fireArmClass: 'machinegun', name: 'Skolt Obliderator', damage: D(2, 10), range: 1600, ammo: '12x28', strengthRequirement: 9, capacity: 120, fireAction: ['fully-automatic'], armorpiercing: 4, rps: 8, weight: 12000, value: 9500,
        description: 'Point this massive machinegun in a direction, hold down the trigger and watch as everything is turned into swiss cheese. Reloading takes a full round action', reload: 8, fireCost: 6, relatedSkill: 'firearms',
    },
    //rocket launcher
    {
        fireArmClass: 'rocketlauncher', name: 'Minirocket Launcher', damage: D(6, 8), range: 600, ammo: '20mm rpg', strengthRequirement: 6, capacity: 8, fireAction: ['semi-automatic'], armorpiercing: 2, weight: 6000, value: 6000, hitbonus: -1,
        description: 'Specialized rocket launcher, fires small rockets, designed to take out heavily armored soldiers. Reloading takes a full round action. Backblast: Deals 3d6 fire damage to anyone standing behind operator in up to 2 meters', splashRange: .5, lowDamageZone: 2, relatedSkill: 'firearms',
        reload: 8, fireCost: 6
    },
    {
        fireArmClass: 'rocketlauncher', name: 'AV-RPG', damage: D(8, 8), range: 1000, ammo: '30mm rpg', strengthRequirement: 6, capacity: 3, fireAction: ['bolt action'], armorpiercing: 4, weight: 5000, value: 800, hitbonus: -2,
        description: 'Standard anti-vehicle rocket launcher, destroys light tanks, up to 1 meter concrete. Reloading takes a full round action. Backblast: Deals 4d6 fire damage to anyone standing behind operator in up to 4 meters', splashRange: 2, lowDamageZone: 3, relatedSkill: 'firearms',
        reload: 8, fireCost: 6
    },
    {
        fireArmClass: 'rocketlauncher', name: 'AT-RPG', damage: D(10, 8), range: 2500, ammo: '40mm rpg', strengthRequirement: 6, capacity: 2, fireAction: ['bolt action'], armorpiercing: 6, weight: 5000, value: 12000, hitbonus: -3,
        description: 'Heavy anti-tank rocket launcher, will destroy any vehicle or base. Reloading takes a full round action. Backblast: Deals 5d6 fire damage to anyone standing behind operator in up to 8 meters', splashRange: .5, lowDamageZone: 1, relatedSkill: 'firearms',
        reload: 8, fireCost: 7
    },
    {
        fireArmClass: 'rocketlauncher', name: 'AB-RPG', damage: D(12, 8), range: 3500, ammo: '50mm rpg', strengthRequirement: 6, capacity: 1, fireAction: ['bolt action'], armorpiercing: 8, weight: 7000, value: 14000, hitbonus: -4,
        description: 'This rocket launcher is designed to destroy entire buildings, anything hit by it is vaporized. Reloading takes a full round action. Backblast: Deals 6d6 fire damage to anyone standing behind operator in up to 16 meters', splashRange: .5, lowDamageZone: 1, relatedSkill: 'firearms',
        reload: 8, fireCost: 7
    },
    //energy weapons
    {
        fireArmClass: 'laser', name: 'Fantry Lasergun', damage: D(2, 4), range: 1800, ammo: '1hec', strengthRequirement: 1, capacity: 80, fireAction: ['semi-automatic', 'continuous'], armorpiercing: 1, hitbonus: 5, weight: 1100, value: 2800,
        description: 'the only laser handgun, fires green laser, needs protective gear to use, has blinding effect to all within 2 meters for 2d4 rounds (acrobatics 20 for half) and additionally -1 (cumulative) on all sight related checks until a long rest has been completed, half range penalty', relatedSkill: 'firearms',
        reload: 8, fireCost: 3
    },
    {
        fireArmClass: 'laser', name: 'Skolt Lightpulse', damage: D(3, 4), range: 2000, ammo: '2hec', strengthRequirement: 3, capacity: 60, fireAction: ['semi-automatic', 'continuous'], armorpiercing: 2, hitbonus: 4, weight: 3000, value: 4400,
        description: 'shoots a high energy blue laser pulse, needs protective gear to use, has blinding effect to all within 3 meters for 3d4 rounds (acrobatics 20 for half) and additionally -2 (cumulative) on all sight related checks until a long rest has been completed, half range penalty', relatedSkill: 'firearms',
        reload: 8, fireCost: 4
    },
    {
        fireArmClass: 'laser', name: 'Merlion Deathray', damage: D(3, 6), range: 2400, ammo: '3hec', strengthRequirement: 3, capacity: 40, fireAction: ['semi-automatic', 'continuous'], armorpiercing: 3, hitbonus: 4, weight: 3000, value: 16000,
        description: 'shoots a ultraviolet laser pulse, needs protective gear to use, has blinding effect to all within 4 meters for 3d6 rounds (acrobatics 25 for half) and additionally -4 (cumulative) on all sight related checks until a long rest has been completed, inflicts 1 radiation dose every 10 shots in 4 meter thick clothes negates radiation, half range penalty', relatedSkill: 'firearms',
        reload: 6, fireCost: 4
    },
    {
        fireArmClass: 'plasma', name: 'Skolt Plasma Bloom', damage: D(4, 6), range: 120, ammo: '5hec', strengthRequirement: 4, capacity: 20, fireAction: ['semi-automatic'], hitbonus: 1, weight: 6200, value: 18000,
        description: 'shoots an intense laser which causes the air to "bloom", induction is used to propel the blooming plasma, has blinding effect to all within 2 meters for 2d4 rounds (acrobatics 18 for half), level 2 radiation, half damage at 40 meters', relatedSkill: 'firearms',
        reload: 8, fireCost: 6
    },
    {
        fireArmClass: 'plasma', name: 'Merlion Plasma Cannon', damage: D(6, 6), range: 100, ammo: '10hec', strengthRequirement: 4, capacity: 15, fireAction: ['semi-automatic'], hitbonus: 1, weight: 6000, value: 24000,
        description: 'shoots highly energetic beam of charged particles which ionizes the air as it passes through it, needs protective gear to use, has blinding effect to all within 2 meters for 2d4 rounds (acrobatics 18 for half), level 5 radiation , half damage at 50 meters', relatedSkill: 'firearms',
        reload: 8, fireCost: 6
    }
];

const Firearms = IFirearms.map(f => new FireArm(f.name, f.weight, f.value, f.damage, f.fireArmClass, f.range, f.fireAction, f.capacity, f.ammo,
    f.strengthRequirement, f.description, f.hitbonus, f.armorpiercing, f.rps, f.splashRange, f.lowDamageZone, f.reload, f.fireCost));

export interface IFirearmModification {
    name: string;
    description: string;
    cost: number;
    costMultiplier: number;
    /**
     * grams
     */
    weight: number;
    weightMultiplier?: number | undefined;
    effects: string[];
    strengthMod?: number | undefined;
    hitMod?: number | undefined;
    damageMod?: number | undefined;
    armorPiercingMod?: number | undefined;
    rangeMod?: number | undefined;
    ammoCapacityMod?: number | undefined;
}

export const FirearmModifications: IFirearmModification[] = [
    {
        name: 'Scope',
        description: 'Reduces long range penalties by half when using snipe or aimed shot',
        effects: [],
        cost: 300,
        costMultiplier: 1,
        weight: 200,
    },
    {
        name: 'Targeting gyro scope',
        description: 'Reduces long range penalties by third when using snipe shot or half when using aimed shot. Does not stack with regular scope',
        effects: [],
        cost: 2200,
        costMultiplier: 1,
        weight: 400,
    },
    {
        name: 'Suppressor',
        description: 'Reduces the sound of a ballistic firearm (handguns, submachine guns, rifles, machineguns)',
        effects: ['sound -50%', 'deafness -1 round', '-20% range', '-1 armor piercing'],
        cost: 400,
        costMultiplier: 1,
        weight: 100,
        rangeMod: .8,
        armorPiercingMod: -1,
    },
    {
        name: 'Heavy Suppressor',
        description: 'Reduces the sound of a ballistic firearm (handguns, submachine guns, rifles, machineguns)',
        effects: ['sound -75%', 'deafness -2 round', '-40% range', '-2 armor piercing'],
        cost: 500,
        costMultiplier: 1,
        weight: 200,
        rangeMod: .6,
        armorPiercingMod: -2,
    },
    {
        name: 'Laser Target',
        description: 'Adds a laser target which helps aiming.',
        effects: ['+2 hit bonus'],
        cost: 600,
        costMultiplier: 1,
        weight: 0,
        hitMod: 2,
    },
    {
        name: 'Extended magazine',
        description: 'Double clip size',
        effects: ['ammo +100%'],
        cost: 0,
        costMultiplier: 1.2,
        weight: 0,
        weightMultiplier: 1.1,
        ammoCapacityMod: 2,
    },
    {
        name: 'Auto-loader',
        description: 'Converts a semi-automatic firearm into a fully-automatic one, removes semi-auto mode, adds full-auto mode. Not available for energy weapons',
        effects: ['remove semi-auto', 'add full-auto', 'hit bonus -4', 'armor piercing -1'],
        cost: 100,
        weight: 0,
        costMultiplier: 1,
        hitMod: -4,
        armorPiercingMod: -1,
    },
    {
        name: 'Extra barrel',
        description: 'Adds a secondary barrel (often 20mm rpg), single ammo capacity, reduces accuracy slightly. Only available to rifle type weapons.',
        effects: ['hit bonus -1'],
        cost: 200,
        weight: 500,
        costMultiplier: 1,
    },
    {
        name: 'Heavy Stock',
        description: 'Improves recoil control, can not be transferred to other firearms.',
        effects: ['+1 hit bonus', '+1 damage bonus'],
        cost: 0,
        costMultiplier: 1.2,
        weight: 0,
        weightMultiplier: 1.4,
        hitMod: 1,
        damageMod: 1,
    },
    {
        name: 'Bayonet',
        description: 'Adds a spear at the end of your firearm turning it into a spear, not available to handguns and machineguns. Uses long spear stats',
        effects: [],
        cost: 600,
        costMultiplier: 1,
        weight: 800,
    },
    {
        name: 'Long barrel',
        description: 'Longer barrel range for increased range, not available to machineguns and energy weapons.',
        effects: ['+50% maximum range'],
        cost: 0,
        costMultiplier: 1.1,
        weight: 0,
        weightMultiplier: 1.1,
        rangeMod: 1.5
    },
    {
        name: 'Environmental shielding',
        description: 'This weapon is protected from environmental damages including water, salt, acid, heat, emp.',
        effects: [],
        cost: 0,
        costMultiplier: 1.2,
        weight: 0,
        weightMultiplier: 1,
    },
    {
        name: 'Tripod',
        description: 'Reduces strength requirement, only avalable for rifles and machineguns. Placing tripod uses move action',
        effects: ['-2 strength requirement'],
        cost: 100,
        costMultiplier: 1,
        weight: 300,
        strengthMod: -2,
    },
    {
        name: 'Large Tripod',
        description: 'Reduces strength requirement, only avalable for rifles and machineguns. Placing tripod uses move action',
        effects: ['-3 strength requirement'],
        cost: 200,
        costMultiplier: 1,
        weight: 1000,
        strengthMod: -3,
    },
    {
        name: 'Arm mount',
        description: 'Allows use of two handed firearms with one hand',
        effects: ['+3 strength requirement'],
        cost: 200,
        costMultiplier: 1,
        weight: 1000,
        strengthMod: +3,
    },
    {
        name: 'Turbo charge',
        description: '(energy weapons) +50% damage, can only fire once per round.',
        effects: ['ammo use +100%', '-25% range', 'Overheats: uses 2 ammo per shot, can only fire every other turn, if used two turns in a row will immediately overheat after second shot'],
        cost: 0,
        costMultiplier: 1.25,
        weight: 500,
    },
    {
        name: 'Barrel Cooler',
        description: 'Delays overheating, speeds up cooling.',
        effects: ['Overheats at 4x ammo capacity', 'Cools after 1 minute'],
        cost: 400,
        weight: 300,
        costMultiplier: 1,
    },
    {
        name: 'Heat sink',
        description: 'Absorbs heat and vents it into the air, if combined with Turbo charge will instead allow fire once every turn and increases ammo use to 4 per shot. If used on normal firearm prevents overheating',
        effects: ['Energy weapon does not overheat', 'Uses 1 ec charge every 10th used.'],
        cost: 600,
        weight: 600,
        costMultiplier: 1,
    }
];

export default Firearms;