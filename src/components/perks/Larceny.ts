import { PerkTemplate } from "../general/Perks";

export const SlightOfHand = new PerkTemplate({
    name: 'slight of hand',
    skill: 'larceny',
    level: 1,
    description: 'Your character gains +3 to all pickpocket rolls, additionally you can steal any sized item at penalty'
}, {
    applyTo: 'slightofhand',
    amount: 3
});

export const LockPick = new PerkTemplate({
    name: 'lockpick',
    skill: 'larceny',
    level: 1,
    description: 'Your character is well able to pick locks, +3 to all lockpicking rolls, additionally the first failed attempt never breaks a lock'
}, {
    applyTo: 'lockpicking',
    amount: 3
});

export const HideObject = new PerkTemplate({
    name: 'hide object',
    skill: 'larceny',
    level: 1,
    description: 'Your character is good at finding spots to hide objects, +5 to make object hidden'
}, {
    applyTo: 'hide object',
    amount: 5
});

export const LarcenyPerks = [SlightOfHand, LockPick, HideObject];