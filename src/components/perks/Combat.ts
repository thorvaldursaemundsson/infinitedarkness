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
    description: 'gain +1 damage and +2 to hit on light melee weapons'
}, {
    applyTo: 'lightmelee',
    amount: 1
});

const LightWeaponsMaster = new PerkTemplate({
    name: 'light weapon master',
    skill: 'combat',
    level: 2,
    description: 'once per turn when you hit a target with a light melee weapon you may add 1d6 damage. Requires Light weapon specialization'
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

const MediumWeaponMaster = new PerkTemplate({
    name: 'medium weapon master',
    skill: 'combat',
    level: 2,
    description: 'once per turn when you hit a target with a medium melee weapon you may add 1d6 damage. Requires Light weapon specialization'
});

const HeavyWeaponSpecialization = new PerkTemplate({
    name: 'heavy weapon specialization',
    skill: 'combat',
    level: 1,
    description: 'gain +1 damage and +2 to hit on large melee weapons'
}, {
    applyTo: 'largemelee',
    amount: 1
});

const HeavyWeaponMaster = new PerkTemplate({
    name: 'heavy weapon master',
    skill: 'combat',
    level: 2,
    description: 'once per turn when you hit a target with a medium melee weapon you may add 1d6 damage. Requires Heavy weapon specialization'
});

const MartialArts = new PerkTemplate({
    name: 'martial arts',
    skill: 'combat',
    level: 1,
    description: 'gain +2 to hit with all unarmed attacks and they now deal 1d4 + strength / 4 damage (not compatible with natural attacks or barbarian)'
}, {
    applyTo: 'unarmed',
    amount: 1
});

const MartialArtsExpert = new PerkTemplate({
    name: 'martial arts expert',
    skill: 'combat',
    level: 2,
    description: 'gain +4 to hit with all unarmed attacks and they now deal 1d6 + strength / 3 damage. (not compatible with natural attacks or barbarian). Requires martial arts'
}, {
    applyTo: 'unarmed',
    amount: 2
});

const MartialArtsMaster = new PerkTemplate({
    name: 'martial arts master',
    skill: 'combat',
    level: 3,
    description: 'gain +6 to hit with all unarmed attacks and they now deal 1d8 + strength / 3 damage. (not compatible with natural attacks or barbarian).  Requires martial art expert'
}, {
    applyTo: 'unarmed',
    amount: 3
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

const PreciseAttacker = new PerkTemplate({
    name: 'precise attacker',
    skill: 'combat',
    level: 1,
    description: 'You add +2 to all attacks when you roll combat, instead of adding +1 damage per 10 points above you instead add +1 per 5 points above',
}, {
    amount: 2,
    applyTo: 'combatHitBonus'
});

const Wrestler = new PerkTemplate({
    name: 'Wrestler',
    skill: 'combat',
    level: 1,
    description: 'You are adept at wrestling and grappling. You add +3 to your combat roll to grapple, wrestle, shove or disarm a target and a +3 to athletics or acrobatics on contested rolls for grab, shove or disarm'
});

export const CombatPerks = [Deflection, LightWeaponSpecialization, LightWeaponsMaster, MediumWeaponSpecialization, MediumWeaponMaster, HeavyWeaponSpecialization, HeavyWeaponMaster,
    MartialArts, MartialArtsExpert, MartialArtsMaster, Disarm, DualWeaponFighter, DualWeaponMaster, PreciseAttacker, Wrestler,
    Barbarian, Berzerker, Beast];