import { PerkTemplate } from "../general/Perks";

export const Balance = new PerkTemplate({
    name: 'balance',
    skill: 'acrobatics',
    level: 1,
    description: 'Your character has excellent balance, gain +5 to balancing rolls'
}, {
    applyTo: 'balance',
    amount: 5
});

export const Throwing = new PerkTemplate({
    name: 'throwing',
    skill: 'acrobatics',
    level: 1,
    description: 'Your character has excellent aim while throwing, gain +5 to all throw rolls'
}, {
    applyTo: 'throw',
    amount: 5
});

export const Dodger = new PerkTemplate({
    name: 'dodger',
    skill: 'acrobatics',
    level: 1,
    description: 'Your character is a faster dodger, gain +3 to all dodge rolls and passive dodging, when active dodging only 1 attack can hit you'
}, {
    applyTo: 'defense',
    amount: 3
});

export const Tumbler = new PerkTemplate({
    name: 'tumbler',
    skill: 'acrobatics',
    level: 1,
    description: 'Your character is an avid tumbler, gain +5 to all tumbling rolls'
}, {
    applyTo: 'tumble',
    amount: 5
});

export const AcrobaticsPerks = [Balance, Throwing, Dodger, Tumbler];