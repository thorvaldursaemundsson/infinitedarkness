import { SkillName } from "../general/Skills";
import Item, { D, IDamageDice } from "./Item";

export interface IMeleeWeapon extends Item {
    size: 'light' | 'medium' | 'heavy';
    damage: IDamageDice;
    hitbonus?: number;
    armorpiercing?: number;
    strengthRequirement: number;
}

export class MeleeWeapon implements IMeleeWeapon {
    size: "light" | "medium" | "heavy";
    damage: IDamageDice;
    hitbonus?: number | undefined;
    armorpiercing?: number | undefined;
    weight: number;
    value: number;
    description?: string | undefined;
    name: string;
    strengthRequirement: number;
    relatedSkill: SkillName = 'combat';

    constructor(name: string, weight: number, value: number, damage: IDamageDice, size: "light" | "medium" | "heavy", strengthRequirement: number, description: string | undefined, hitbonus: number | undefined, armorpiercing: number | undefined) {
        this.size = size;
        this.name = name;
        this.weight = weight;
        this.value = value;
        this.damage = damage;
        this.description = description;
        this.hitbonus = hitbonus;
        this.armorpiercing = armorpiercing;
        this.strengthRequirement = strengthRequirement;
    }
}

const MeleeWeapons: MeleeWeapon[] = [
    { size: 'light', name: 'Batons/hammers/sticks', damage: D(1,4), weight: 500, value: 10, strengthRequirement: 2, relatedSkill: 'combat', },
    { size: 'light', name: 'Knife', damage: D(1,6), weight: 100, value: 15, description: 'always causes bleeding on damage', strengthRequirement: 1, relatedSkill: 'combat', },
    { size: 'medium', name: 'Machete', damage: D(1,8), hitbonus: 1, weight: 300, value: 100, description: 'always causes bleeding on damage. Requires humanoid arms', strengthRequirement: 3, relatedSkill: 'combat', },
    { size: 'medium', name: 'Club', damage: D(1,6), weight: 1000, value: 0, strengthRequirement: 3, description: 'Big wooden club. Requires humanoid arms', relatedSkill: 'combat', },
    { size: 'medium', name: 'Short spear', damage: D(1,8), hitbonus: 1, armorpiercing: 1, weight: 500, value: 250, description: 'always causes bleeding on damage, +1 meter reach. Requires humanoid arms', strengthRequirement: 3, relatedSkill: 'combat', },
    { size: 'heavy', name: 'Longsword', damage: D(1,10), hitbonus: 1, armorpiercing: 1, weight: 800, value: 750, description: 'always causes bleeding on damage, +1 meter reach. Requires humanoid arms', strengthRequirement: 3, relatedSkill: 'combat', },
    { size: 'heavy', name: 'Greatsword', damage: D(2,6), hitbonus: 2, armorpiercing: 1, weight: 800, value: 750, description: 'always causes bleeding on damage, +1 meter reach. Requires humanoid arms', strengthRequirement: 3, relatedSkill: 'combat', },
    { size: 'heavy', name: 'Long spear', damage: D(1,10), hitbonus: 0, armorpiercing: 1, weight: 900, value: 500, description: 'always causes bleeding on damage, +2 meter reach. Requires humanoid arms', strengthRequirement: 3, relatedSkill: 'combat', },
    { size: 'heavy', name: 'Battleaxe', damage: D(1,12), hitbonus: 0, armorpiercing: 2, weight: 1500, value: 800, description: 'always causes bleeding on damage, +1 meter reach. Requires humanoid arms', strengthRequirement: 4, relatedSkill: 'combat', },
    { size: 'medium', name: 'Short bow', damage: D(1,6), hitbonus: -1, armorpiercing: 0, weight: 800, value: 900, description: 'Add +1 damage if strength is above 4, double multi-attack penalties. Requires humanoid arms', strengthRequirement: 3, relatedSkill: 'combat', },
    { size: 'medium', name: 'Long bow', damage: D(1,8), hitbonus: -2, armorpiercing: 1, weight: 900, value: 1200, description: 'Add +1 damage if strength is above 4, +2 if strength is above 8 (non-stacking), double multi-attack penalties. Requires humanoid arms', strengthRequirement: 4, relatedSkill: 'combat', },
    { size: 'medium', name: 'Compund bow', damage: D(1,10), armorpiercing: 1, weight: 700, value: 5000, description: 'Add +1 damage if strength is above 4, +2 if strength is above 8 (non-stacking), double multi-attack penalties. Requires humanoid arms', strengthRequirement: 3, relatedSkill: 'combat', },
    { size: 'medium', name: 'Cross bow', damage: D(1,8), armorpiercing: 2, weight: 1000, value: 1000, description: 'May use firearm skill in place of combat skill (only aimed shot), reloading is a move action, can hold bolt for 4 hours', strengthRequirement: 2, relatedSkill: 'combat', },
    { size: 'medium', name: 'Advanced Cross bow', damage: D(1,12), armorpiercing: 3, weight: 900, value: 15000, description: 'May use firearm skill in place of combat skill (only aimed shot), reloading is a move action, can hold bolt indefinitely', strengthRequirement: 2, relatedSkill: 'combat', },
];

export default MeleeWeapons;