import { PerkTemplate } from "../Perks";

export const Deflection = new PerkTemplate({
    name: 'deflection',
    skill: 'combat',
    level: 1,
    description: 'gain +1 to all blocking rolls and damage reduced to 1/3rd (from 1/2nd) on successful blocks'
},{
    applyTo: 'block',
    amount: 1
});

export const LightWeaponSpecialization = new PerkTemplate({
    name: 'light weapon specialization',
    skill: 'combat',
    level: 1,
    description: 'gain +1 damage and +2 to hit on small melee weapons'
},{
    applyTo: 'lightmelee',
    amount: 1
});

export const MediumWeaponSpecialization = new PerkTemplate({
    name: 'medium weapon specialization',
    skill: 'combat',
    level: 1,
    description: 'gain +1 damage and +2 to hit on medium melee weapons'
},{
    applyTo: 'mediummelee',
    amount: 1
});

export const LargeWeaponSpecialization = new PerkTemplate({
    name: 'large weapon specialization',
    skill: 'combat',
    level: 1,
    description: 'gain +1 damage and +2 to hit on large melee weapons'
},{
    applyTo: 'largemelee',
    amount: 1
});

export const CombatPerks = [Deflection, LightWeaponSpecialization, MediumWeaponSpecialization, LargeWeaponSpecialization];