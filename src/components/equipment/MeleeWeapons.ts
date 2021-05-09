import Item from "./Item";

interface IMeleeWeapon extends Item {
    size: 'small' | 'medium' | 'large';
    damage: string;
    hitbonus?: string;
    armorpiercing?: number;
}

export class MeleeWeapon implements IMeleeWeapon {
    size: "small" | "medium" | "large";
    damage: string;
    hitbonus?: string | undefined;
    armorpiercing?: number | undefined;
    weight: number;
    value: number;
    description?: string | undefined;
    name: string;
    constructor(name: string, weight: number, value: number, damage: string, size: "small" | "medium" | "large", description: string | undefined, hitbonus: string | undefined, armorpiercing: number | undefined) {
        this.size = size;
        this.name = name;
        this.weight = weight;
        this.value = value;
        this.damage = damage;
        this.description = description;
        this.hitbonus = hitbonus;
        this.armorpiercing = armorpiercing;
    }
}

const MeleeWeapons: MeleeWeapon[] = [
    { size: 'small', name: 'Batons/hammers/sticks', damage: '1d4', weight: 500, value: 10 },
    { size: 'small', name: 'Knife', damage: '1d4 + 1', weight: 100, value: 15, description: 'always causes bleeding on damage' },
    { size: 'medium', name: 'Machete', damage: '1d6 + 1 ', hitbonus: '+1', weight: 300, value: 100, description: 'always causes bleeding on damage' },
    { size: 'medium', name: 'Club', damage: '1d6', weight: 1000, value: 0 },
    { size: 'medium', name: 'Short spear', damage: '1d8', hitbonus: '+1', armorpiercing: 1, weight: 500, value: 250, description: 'always causes bleeding on damage, +1 meter reach' },
    { size: 'large', name: 'Longsword', damage: '1d8 +1', hitbonus: '+2 OQ, -2 CQ', armorpiercing: 1, weight: 800, value: 750, description: 'always causes bleeding on damage, +1 meter reach' },
    { size: 'large', name: 'Long spear', damage: '1d8 +1', hitbonus: '+4 OQ, -4 CQ', armorpiercing: 1, weight: 900, value: 500, description: 'always causes bleeding on damage, +2 meter reach' },
    { size: 'large', name: 'Battleaxe', damage: '1d10 +1', hitbonus: '-2 CQ', armorpiercing: 2, weight: 1500, value: 800, description: 'always causes bleeding on damage, +1 meter reach' },
    { size: 'medium', name: 'Short bow', damage: '1d6', hitbonus: '-2', armorpiercing: 0, weight: 800, value: 900, description: 'Add +1 damage if strength is above 4, double multi-attack penalties' },
    { size: 'medium', name: 'Long bow', damage: '1d8', hitbonus: '-2', armorpiercing: 1, weight: 900, value: 1200, description: 'Add +1 damage if strength is above 4, +2 if strength is above 8 (non-stacking), double multi-attack penalties' },
    { size: 'medium', name: 'Compund bow', damage: '1d8+1', armorpiercing: 1, weight: 700, value: 5000, description: 'Add +1 damage if strength is above 4, +2 if strength is above 8 (non-stacking), double multi-attack penalties' },
    { size: 'medium', name: 'Cross bow', damage: '1d8', armorpiercing: 0, weight: 1000, value: 1000, description: 'May use firearm skill in place of combat skill (only aimed shot), reloading is a move action' },
];

export default MeleeWeapons;