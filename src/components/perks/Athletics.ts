import { PerkTemplate } from "../general/Perks";
const skill = 'athletics';
export const Climber = new PerkTemplate({
    name: 'climber',
    skill: skill,
    level: 1,
    description: 'Your character is better at climing, gain +5 to climbing rolls'
}, {
    applyTo: 'climb',
    amount: 5
});

export const Runner = new PerkTemplate({
    name: 'runner',
    skill: skill,
    level: 1,
    description: 'Your character is better at running, gain +5 to running'
}, {
    applyTo: 'run',
    amount: 5
});

export const Jumper = new PerkTemplate({
    name: 'jumper',
    skill: skill,
    level: 1,
    description: 'Your character is better at jumping, gain +5 to jumping rolls'
}, {
    applyTo: 'jump',
    amount: 5
});

export const Swimmer = new PerkTemplate({
    name: 'swimmer',
    skill: skill,
    level: 1,
    description: 'Your character is better at swimming, gain +5 to swimming rolls'
}, {
    applyTo: 'jump',
    amount: 5
});

export const DeepLungs = new PerkTemplate({
    name: 'deep lungs',
    skill: skill,
    level: 1,
    description: 'You have trained your body to hold your breath for longer, +5 to holding breath'
}, {
    applyTo: 'breath',
    amount: 5
});

export const FastSwimmer = new PerkTemplate({
    name: 'fast swimmer',
    skill: skill,
    level: 1,
    description: 'When you roll to swim at 100% speed you instead swim at 150%'
});

export const GoodFortitude = new PerkTemplate({
    name: 'good fortitude',
    skill: skill,
    level: 1,
    description: 'Your character has great fortitude, gain +2 life'
}, {
    applyTo: 'life',
    amount: 2
});

export const GreatFortitude = new PerkTemplate({
    name: 'great fortitude',
    skill: skill,
    level: 2,
    description: 'Your character has great fortitude, gain +4 life'
}, {
    applyTo: 'life',
    amount: 4
});

export const SupremeFortitude = new PerkTemplate({
    name: 'supreme fortitude',
    skill: skill,
    level: 3,
    description: 'Your character has supreme fortitude, gain +6 hitpoints'
}, {
    applyTo: 'life',
    amount: 6
});

export const StrongBack = new PerkTemplate({
    name: 'strong back',
    skill: skill,
    level: 1,
    description: 'Your strength counts as +3 for the purposes of carrying capacity'
}, {
    applyTo: 'carryingCapacity',
    amount: 3
});

export const Fast = new PerkTemplate({
    name: 'Fast',
    skill: skill,
    level: 1,
    description: 'You are a trained runner, gain +1 base speed and +3 to all running rolls'
}, {
    applyTo: 'speed',
    amount: 1
});

export const HighMobility = new PerkTemplate({
    name: 'High mobility',
    skill: skill,
    level: 2,
    description: 'You are highly mobile, gain +1 base speed and can enter sprint in a single round.'

}, {
    amount: 1,
    applyTo: 'speed'
});

export const Marathoner = new PerkTemplate({
    name: 'Marathoner',
    skill: skill,
    level: 1,
    description: 'Gain +10 on running, ignore one level of carry capacity or exhaustion'
});

export const ArmorSpecialist = new PerkTemplate({
    name: 'armor specialist',
    skill: skill,
    description: 'You are a specialist at using armor, armor penalty to agility is reduced by 2 and weight from armor counts as half',
    level: 1
});

export const ArmorMaster = new PerkTemplate({
    name: 'armor master',
    skill: skill,
    description: 'You have mastered armor using, armor penalty to agility is further reduced by 2 and weight is halved again',
    level: 2
});

export const AthleticsPerks = [Climber, Runner, Swimmer, Jumper, DeepLungs, GoodFortitude, GreatFortitude, SupremeFortitude, StrongBack,
    Fast, HighMobility, Marathoner, ArmorSpecialist, ArmorMaster];