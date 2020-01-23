import { PerkTemplate } from "../Perks";

export const Balance = new PerkTemplate({
    name: 'balance',
    skill: 'acrobatics',
    level: 1,
    description: 'Your character has excellent balance, gain +3 to balancing rolls'
},{
    applyTo: 'balance',
    amount: 3
});

export const Throwing = new PerkTemplate({
    name: 'throwing',
    skill: 'acrobatics',
    level: 1,
    description: 'Your character has excellent aim while throwing, gain +3 to all throw rolls'
},{
    applyTo: 'throw',
    amount: 3
});

export const Dodger = new PerkTemplate({
    name: 'dodger',
    skill: 'acrobatics',
    level: 1,
    description: 'Your character is a faster dodger, gain +3 to all dodge rolls and passive dodging'
},{
    applyTo: 'dodge',
    amount: 3
});

export const Tumbler = new PerkTemplate({
    name: 'tumbler',
    skill: 'acrobatics',
    level: 1,
    description: 'Your character is an avid tumbler, gain +3 to all tumbling rolls'
},{
    applyTo: 'tumble',
    amount: 3
});

export const AcrobaticsPerks = [Balance, Throwing, Dodger, Tumbler];