import { PerkTemplate } from "../Perks";

export const Climber = new PerkTemplate({
    name: 'climber',
    skill: 'athletics',
    level: 1,
    description: 'Your character is better at climing, gain +5 to climbing rolls'
}, {
    applyTo: 'climb',
    amount: 5
});

export const Runner = new PerkTemplate({
    name: 'runner',
    skill: 'athletics',
    level: 1,
    description: 'Your character is better at running, gain +5 to running'
}, {
    applyTo: 'run',
    amount: 5
});

export const Jumper = new PerkTemplate({
    name: 'jumper',
    skill: 'athletics',
    level: 1,
    description: 'Your character is better at jumping, gain +5 to jumping rolls'
}, {
    applyTo: 'jump',
    amount: 5
});

export const Swimmer = new PerkTemplate({
    name: 'swimmer',
    skill: 'athletics',
    level: 1,
    description: 'Your character is better at swimming, gain +5 to swimming rolls'
}, {
    applyTo: 'jump',
    amount: 5
});

export const DeepLungs = new PerkTemplate({
    name: 'deep lungs',
    skill: 'athletics',
    level: 1,
    description: 'Your character has deep lungs, gain +5 to holding your breath'
}, {
    applyTo: 'breath',
    amount: 5
});

export const GoodFortitude = new PerkTemplate({
    name: 'good fortitude',
    skill: 'athletics',
    level: 1,
    description: 'Your character has great fortitude, gain +1 hitpoints'
}, {
    applyTo: 'life',
    amount: 1
});

export const GreatFortitude = new PerkTemplate({
    name: 'great fortitude',
    skill: 'athletics',
    level: 2,
    description: 'Your character has great fortitude, gain +2 hitpoints'
}, {
    applyTo: 'life',
    amount: 2
});

export const SupremeFortitude = new PerkTemplate({
    name: 'great fortitude',
    skill: 'athletics',
    level: 3,
    description: 'Your character has supreme fortitude, gain +4 hitpoints'
}, {
    applyTo: 'life',
    amount: 4
});

export const StrongBack = new PerkTemplate({
    name: 'strong back',
    skill: 'athletics',
    level: 1,
    description: 'Your strength counts as +2 for the purposes of carrying capacity'
});

export const AthleticsPerks = [Climber, Runner, Swimmer, Jumper, DeepLungs, GoodFortitude, GreatFortitude, SupremeFortitude,StrongBack];