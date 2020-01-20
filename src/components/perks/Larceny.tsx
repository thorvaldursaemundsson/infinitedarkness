import { PerkTemplate } from "../Perks";

export const SlightOfHand = new PerkTemplate({
    name: 'slight of hand',
    skill: 'larceny',
    level: 1,
    description: 'Your character gains +3 to all sight of hand rolls'
},{
    applyTo: 'slightofhand',
    amount: 3
});

export const LockPick = new PerkTemplate({
    name: 'lockpick',
    skill: 'larceny',
    level: 2,
    description: 'Your character is well able to pick locks, +6 to all lockinging rolls'
},{
    applyTo: 'slightofhand',
    amount: 6
});

export const HideObject = new PerkTemplate({
    name: 'hide object',
    skill: 'larceny',
    level: 1,
    description: 'Your character is good at finding spots to hide objects, +3 to make object hidden'
},{
    applyTo: 'slightofhand',
    amount: 3
});