import { PerkTemplate } from "../general/Perks";

export const Deflection = new PerkTemplate({
    name: 'deflection',
    skill: 'combat',
    level: 1,
    description: 'gain +1 to all blocking rolls and damage reduced to 1/3rd (from 1/2nd) on successful blocks'
}, {
    applyTo: 'block',
    amount: 1
});

export const LightWeaponSpecialization = new PerkTemplate({
    name: 'light weapon specialization',
    skill: 'combat',
    level: 1,
    description: 'gain +1 damage and +2 to hit on small melee weapons'
}, {
    applyTo: 'lightmelee',
    amount: 1
});

export const MediumWeaponSpecialization = new PerkTemplate({
    name: 'medium weapon specialization',
    skill: 'combat',
    level: 1,
    description: 'gain +1 damage and +2 to hit on medium melee weapons'
}, {
    applyTo: 'mediummelee',
    amount: 1
});

export const LargeWeaponSpecialization = new PerkTemplate({
    name: 'large weapon specialization',
    skill: 'combat',
    level: 1,
    description: 'gain +1 damage and +2 to hit on large melee weapons'
}, {
    applyTo: 'largemelee',
    amount: 1
});

export const MartialArts = new PerkTemplate({
    name: 'martial arts',
    skill: 'combat',
    level: 1,
    description: 'gain +1 to hit with all unarmed attacks and they now deal 1d4 + strength / 4 damage (not compatible with natural attacks or barbarian)'
}, {
    applyTo: 'unarmed',
    amount: 1
});

export const MartialArtsExpert = new PerkTemplate({
    name: 'martial arts expert',
    skill: 'combat',
    level: 2,
    description: 'gain +2 to hit with all unarmed attacks and they now deal 1d6 + strength / 3 damage. (not compatible with natural attacks or barbarian)'
}, {
    applyTo: 'unarmed',
    amount: 2
});

export const MartialArtsMaster = new PerkTemplate({
    name: 'martial arts master',
    skill: 'combat',
    level: 3,
    description: 'gain +3 to hit with all unarmed attacks and they now deal 1d8 + strength / 3 damage. (not compatible with natural attacks or barbarian)'
}, {
    applyTo: 'unarmed',
    amount: 3
});

export const LightningReflexes = new PerkTemplate({
    name: 'lightning reflexes',
    skill: 'combat',
    level: 1,
    description: 'when you are ambushed you gain +4 to your sequence, does not apply if the attacker has no sequence advantage'
}, {
    applyTo: 'sequence',
    amount: 4,
});

export const SneakAttack = new PerkTemplate({
    name: 'sneak attack',
    skill: 'combat',
    level: 1,
    description: 'you gain +2 to your sequence when you ambush someone and +2 damage on all attacks (both combat and firearms) against anyone with lower sequence and did not attempt to block or dodge'
}, {
    applyTo: 'sequence',
    amount: 2
});

export const Assassination = new PerkTemplate({
    name: 'assassination',
    skill: 'combat',
    level: 2,
    description: 'you gain +1d6 damage on all attacks (both combat and firearms) on anyone who is unable to block or dodge your attack'
}, {
    applyTo: '_',
    amount: 0
});

export const Disarm = new PerkTemplate({
    name: 'disarm',
    skill: 'combat',
    level: 1,
    description: 'You may as an unarmed attack remove someones weapon from their hand, if you succeed by 10 or more you may keep it in your hand'
});

export const DualWeaponFighter = new PerkTemplate({
    name: 'dual weapon fighter',
    skill: 'combat',
    level: 1,
    description: 'When you use two weapons the second attack benefits from strength and agility.'
});

export const DualWeaponMaster = new PerkTemplate({
    name: 'dual weapon master',
    skill: 'combat',
    level: 2,
    description: 'When you use two weapons you may make second attack with your off-hand weapon on every attack.',
});

export const Barbarian = new PerkTemplate({
    name:'barbarian',
    skill:'combat',
    level: 1,
    description: 'You are a brutal warrior, +1 damage and +2 to hit on all offensive combat rolls, -2 to defense and block'
});

export const Berzerker = new PerkTemplate({
    name: 'berzerker',
    skill:'combat',
    level: 2,
    description: 'You are a savage warrior, +1 damage and +2 to hit on all offensive combat rolls, -2 to defense and block'
});

export const Beast = new PerkTemplate({
    name: 'beast',
    skill:'combat',
    level: 3,
    description: 'You cause absolute wreckage, +1 damage and +2 to hit on all offensive combat rolls, -2 to defense and block'
});

export const CombatPerks = [Deflection, LightWeaponSpecialization, MediumWeaponSpecialization, LargeWeaponSpecialization,
    MartialArts, MartialArtsExpert, MartialArtsMaster, LightningReflexes, SneakAttack, Assassination, Disarm, DualWeaponFighter,
    Barbarian, Berzerker, Beast];