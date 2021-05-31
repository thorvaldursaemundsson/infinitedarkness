import { PerkTemplate } from "../general/Perks";

const Balance = new PerkTemplate({
    name: 'balance',
    skill: 'acrobatics',
    level: 1,
    description: 'You gain the following benefits ',
    results: [
        'You can move across difficult terrain without movement penalty',
        'When you stand up from a prone position it costs only 1 meter movement',
        'You take only half damage from hazardous terrain'
    ]
});

const AccurateThrower = new PerkTemplate({
    name: 'Accurate Thrower',
    skill: 'acrobatics',
    level: 1,
    description: 'Your character has excellent aim while throwing, when throwing (using either athletics, combat or explosives) you suffer only half penalties range to throwing'
});

const Dodger = new PerkTemplate({
    name: 'dodger',
    skill: 'acrobatics',
    level: 1,
    description: 'Your character is a faster dodger, you gain +3 to your active defense'
}, {
    applyTo: 'activedefense',
    amount: 3
});

const Evasive = new PerkTemplate({
    name: 'evasive',
    skill: 'acrobatics',
    level: 2,
    description: 'Your character is trained in evasive maneuvers, you gain +3 to your passive defense. Prerequisite: Dodger perk'
}, {
    applyTo: 'passivedefense',
    amount: 3
});

const Elusive = new PerkTemplate({
    name: 'elusive',
    skill: 'acrobatics',
    level: 3,
    description: 'Your character is naturally elusive, while awake you have +3 to your base defense. Prerequisite: Evasive perk'
}, {
    applyTo: 'basedefense',
    amount: 3
});

const Tumbler = new PerkTemplate({
    name: 'tumbler',
    skill: 'acrobatics',
    level: 1,
    description: 'Your character gains the following effects',
    results: [
        'When falling, roll 2d10 acrobatics + agility, subtract half the result from meters fallen',
        'You may substitute acrobatics for athletics when jumping',
        'You may land into standing position',
        'If you use an action that consumes one (and only one) meter of movement, it doesn\'t count as having used movement'
    ]
});

export const AcrobaticsPerks = [Balance, AccurateThrower, Dodger, Evasive, Elusive, Tumbler];