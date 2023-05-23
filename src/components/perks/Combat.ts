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
    description: 'You have specialized training in light melee weapons',
    results: [
        'add +1 damage with light melee weapons',
        'add +2 to hit with light melee weapons',
        'first attack with light melee weapon uses 1 less action point'
    ]
}, {
    applyTo: 'lightmelee',
    amount: 1
});

const LightWeaponsMaster = new PerkTemplate({
    name: 'light weapon master',
    skill: 'combat',
    level: 2,
    description: 'You have mastered light melee weapons and gain additional benefits. Requires Light weapon specialization',
    results: [
        'once per turn when you hit a target with a light melee weapon you may add 1d6 damage',
        'attacks beyond the first with a light melee weapon use 1 less action point'
    ]
});

const MediumWeaponSpecialization = new PerkTemplate({
    name: 'medium weapon specialization',
    skill: 'combat',
    level: 1,
    description: 'You have specialized training in medium melee weapons',
    results: [
        'add +1 to hit with medium melee weapons',
        'add +2 to damage with medium weapons',
        'first attack with medium melee weapon uses 1 less action point'
    ]
}, {
    applyTo: 'mediummelee',
    amount: 1
});

const MediumWeaponMaster = new PerkTemplate({
    name: 'medium weapon master',
    skill: 'combat',
    level: 2,
    description: 'You have mastered medium weapons. Requires Light weapon specialization',
    results: [
        'first hit on each turn with a medium weapon adds +1d6 damage',
        'following hits add +1d4 damage'
    ]
});

const HeavyWeaponSpecialization = new PerkTemplate({
    name: 'heavy weapon specialization',
    skill: 'combat',
    level: 1,
    description: 'you have specialized large melee weapons.',
    results: [
        'you add +3 damage with large melee weapons'
    ]
}, {
    applyTo: 'largemelee',
    amount: 1
});

const HeavyWeaponMaster = new PerkTemplate({
    name: 'heavy weapon master',
    skill: 'combat',
    level: 2,
    description: 'You have mastered heavy weapons, when you make an attack with a large melee weapon you can spend extra action points to gain additional benefit, for each 1. Requires Heavy weapon specialization',
    results: [
        'add +2 to hit',
        'add +1 to damage',
        'if you spend 2 add knockback (1 meter) or knockdown (prone) (target rolls strength + 2d10 vs damage)',
        'if you spend 4, disorient target, target rolls endurance + 2d10 vs damage or lose 1d4 action points on their next turn'
    ]
});

const MartialArts = new PerkTemplate({
    name: 'martial arts',
    skill: 'combat',
    level: 1,
    description: 'You have trained martial arts in unarmed combat and gain several benefits, not compatible with barbarian or any perk that has barbarian as a prerequisite',
    results: [
        'add +2 to hit with unarmed attacks',
        'punches deal 1d4 + strength / 4 damage',
        'kicks deal 1d6 + strength / 4 damage',
        'the first unarmed or natural attack use one less action point'
    ]
}, {
    applyTo: 'unarmed',
    amount: 1
});

const MartialArtsExpert = new PerkTemplate({
    name: 'martial arts expert',
    skill: 'combat',
    level: 2,
    description: 'You have advanced your martial arts, not compatible with barbarian or any perk that has barbarian as a prerequisite. Requires martial arts',
    results: [
        'add an additional +2 to hit with all unarmed attacks',
        'punches deal 1d6 + strength / 3 damage',
        'kicks deal 1d8 + strength / 3 damage',
        'the second unarmed or natural attack use one less action point'
    ]
}, {
    applyTo: 'unarmed',
    amount: 2
});

const MartialArtsMaster = new PerkTemplate({
    name: 'martial arts master',
    skill: 'combat',
    level: 3,
    description: 'gain +6 to hit with all unarmed attacks and they now deal 1d8 + strength / 3 damage. (not compatible with natural attacks or barbarian).  Requires martial art expert',
    results: [
        'add an additional +2 to hit with all unarmed attacks',
        'punches deal 1d8 + strength / 3 damage',
        'kicks kicks deal 1d8 + strength / 2 damage',
        'any unarmed or natural attack beyond the second use one less action point'
    ]
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