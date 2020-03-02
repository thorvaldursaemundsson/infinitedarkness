import { PerkTemplate } from "../Perks";

export const Climber = new PerkTemplate({
    name: 'climber',
    skill: 'athletics',
    level: 1,
    description: 'Your character is better at climing, gain +3 to climbing rolls'
},{
    applyTo: 'climb',
    amount: 3
});

export const Runner = new PerkTemplate({
    name: 'runner',
    skill: 'athletics',
    level: 1,
    description: 'Your character is better at running, gain +3 to running'
},{
    applyTo: 'run',
    amount: 3
});

export const Jumper = new PerkTemplate({
    name: 'jumper',
    skill: 'athletics',
    level: 1,
    description: 'Your character is better at jumping, gain +3 to jumping rolls'
},{
    applyTo: 'jump',
    amount: 3
});

export const Swimmer = new PerkTemplate({
    name: 'swimmer',
    skill: 'athletics',
    level: 1,
    description: 'Your character is better at swimming, gain +3 to swimming rolls'
},{
    applyTo: 'jump',
    amount: 3
});

export const DeepLungs = new PerkTemplate({
    name: 'deep lungs',
    skill: 'athletics',
    level: 1,
    description: 'Your character has deep lungs, gain +3 to holding your breath'
},{
    applyTo: 'breath',
    amount: 3
});

export const GoodFortitude = new PerkTemplate({
    name: 'good fortitude',
    skill: 'athletics',
    level: 1,
    description: 'Your character has great fortitude, gain +1 hitpoints'
},{
    applyTo: 'life',
    amount: 1
});

export const GreatFortitude = new PerkTemplate({
    name: 'great fortitude',
    skill: 'athletics',
    level: 2,
    description: 'Your character has great fortitude, gain +2 hitpoints'
},{
    applyTo: 'life',
    amount: 2
});

export const AthleticsPerks = [Climber, Runner, Swimmer, Jumper, DeepLungs, GoodFortitude, GreatFortitude];