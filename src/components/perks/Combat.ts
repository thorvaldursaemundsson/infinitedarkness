import { PerkTemplate } from "../general/Perks";

const Deflection = new PerkTemplate({
    name: 'deflection',
    skill: 'combat',
    level: 1,
    description: 'gain +1 to all blocking rolls and damage reduced to 1/3rd (from 1/2nd) on successful blocks'
}, {
    applyTo: 'block',
    amount: 1
});

const LightWeaponSpecialization = new PerkTemplate({
    name: 'light weapon specialization',
    skill: 'combat',
    level: 1,
    description: 'gain +1 damage and +2 to hit on small melee weapons'
}, {
    applyTo: 'lightmelee',
    amount: 1
});

const MediumWeaponSpecialization = new PerkTemplate({
    name: 'medium weapon specialization',
    skill: 'combat',
    level: 1,
    description: 'gain +1 damage and +2 to hit on medium melee weapons'
}, {
    applyTo: 'mediummelee',
    amount: 1
});

const LargeWeaponSpecialization = new PerkTemplate({
    name: 'large weapon specialization',
    skill: 'combat',
    level: 1,
    description: 'gain +1 damage and +2 to hit on large melee weapons'
}, {
    applyTo: 'largemelee',
    amount: 1
});

const MartialArts = new PerkTemplate({
    name: 'martial arts',
    skill: 'combat',
    level: 1,
    description: 'gain +1 to hit with all unarmed attacks and they now deal 1d4 + strength / 4 damage (not compatible with natural attacks or barbarian)'
}, {
    applyTo: 'unarmed',
    amount: 1
});

const MartialArtsExpert = new PerkTemplate({
    name: 'martial arts expert',
    skill: 'combat',
    level: 2,
    description: 'gain +2 to hit with all unarmed attacks and they now deal 1d6 + strength / 3 damage. (not compatible with natural attacks or barbarian). Requires martial arts'
}, {
    applyTo: 'unarmed',
    amount: 2
});

const MartialArtsMaster = new PerkTemplate({
    name: 'martial arts master',
    skill: 'combat',
    level: 3,
    description: 'gain +3 to hit with all unarmed attacks and they now deal 1d8 + strength / 3 damage. (not compatible with natural attacks or barbarian).  Requires martial art expert'
}, {
    applyTo: 'unarmed',
    amount: 3
});

const LightningReflexes = new PerkTemplate({
    name: 'lightning reflexes',
    skill: 'combat',
    level: 1,
    description: 'when you are ambushed you gain +4 to your sequence, does not apply if the attacker has no sequence advantage'
}, {
    applyTo: 'sequence',
    amount: 4,
});

const Disarm = new PerkTemplate({
    name: 'disarm',
    skill: 'combat',
    level: 1,
    description: 'You may as an unarmed attack remove someones weapon from their hand, if you succeed by 10 or more you may keep it in your hand'
});

const DualWeaponFighter = new PerkTemplate({
    name: 'dual weapon fighter',
    skill: 'combat',
    level: 1,
    description: 'When you use two weapons strength requirement increases are reduced by half, your off-hand gains full agility and half skill.'
});

const DualWeaponMaster = new PerkTemplate({
    name: 'dual weapon master',
    skill: 'combat',
    level: 2,
    description: 'When you use two weapons strength requirement increases are ignored. Both hands gain full skill and agility bonus. Requires dual weapon fighter',
});

const Barbarian = new PerkTemplate({
    name: 'barbarian',
    skill: 'combat',
    level: 1,
    description: 'You are a brutal warrior, +1 damage and +2 to hit on all offensive combat rolls, -2 to defense and block. You also gain +3 to your endurance roll to stay awake when critical'
});

const Berzerker = new PerkTemplate({
    name: 'berzerker',
    skill: 'combat',
    level: 2,
    description: 'You are a savage warrior, +1 damage and +2 to hit on all offensive combat rolls, -2 to defense and block. You also gain +3 to your endurance roll to stay awake when critical. Requires barbarian'
});

const Beast = new PerkTemplate({
    name: 'beast',
    skill: 'combat',
    level: 3,
    description: 'You cause absolute wreckage, +1 damage and +2 to hit on all offensive combat rolls, -2 to defense and block. You also gain +3 to your endurance roll to stay awake when critical. Requires berzerker.'
});



export const CombatPerks = [Deflection, LightWeaponSpecialization, MediumWeaponSpecialization, LargeWeaponSpecialization,
    MartialArts, MartialArtsExpert, MartialArtsMaster, LightningReflexes, Disarm, DualWeaponFighter, DualWeaponMaster,
    Barbarian, Berzerker, Beast];