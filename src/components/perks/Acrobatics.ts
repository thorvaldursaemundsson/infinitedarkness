import { PerkTemplate } from "../general/Perks";

const Balance = new PerkTemplate({
    name: 'balance',
    skill: 'acrobatics',
    level: 1,
    description: 'Your character has excellent balance, gain +5 to balancing rolls'
}, {
    applyTo: 'balance',
    amount: 5
});

const AccurateThrower = new PerkTemplate({
    name: 'Accurate Thrower',
    skill: 'acrobatics',
    level: 1,
    description: 'Your character has excellent aim while throwing, when throwing (using either athletics, combat or explosives) you suffer only half penalties to throwing'
}, {
    applyTo: '',
    amount: 0
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
    description: 'Your character is an avid tumbler, gain +5 to all tumbling rolls'
}, {
    applyTo: 'tumble',
    amount: 5
});

export const AcrobaticsPerks = [Balance, AccurateThrower, Dodger, Evasive, Elusive, Tumbler];