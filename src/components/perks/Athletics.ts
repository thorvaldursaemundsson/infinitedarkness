import { PerkTemplate } from "../general/Perks";
const skill = 'athletics';

const Climber = new PerkTemplate({
    name: 'climber',
    skill: skill,
    level: 1,
    description: 'Your character is better at climing',
    results: [
        'when you climb you move at half rather than quarter speed',
        'when climbing you may use both hands for your action'
    ]
});

const DistanceThrower = new PerkTemplate({
    name: 'Distance Thrower',
    skill: 'acrobatics',
    level: 1,
    description: 'Your character is experienced with building momentum. Add +25% maximum distance to all throwing. (using either athletics, combat or explosives)'
});

const Runner = new PerkTemplate({
    name: 'runner',
    skill: skill,
    level: 1,
    description: 'Your character is better at running',
    results: [
        'You gain +1 speed',
        'You can run twice as far without gaining exhaustion'
    ]
}, {
    amount: 1,
    applyTo: 'speed'
});

const Jumper = new PerkTemplate({
    name: 'jumper',
    skill: skill,
    level: 1,
    description: 'Your character is better at jumping',
    results: [
        'You can jump 2 meters further and 0.5 meters higher',
        'When you roll for jump and get a dice result of 10 or less it counts as 10',
        'You only need 2 meter of running up to avoid -5 on roll'
    ]
});

const Swimmer = new PerkTemplate({
    name: 'swimmer',
    skill: skill,
    level: 1,
    description: 'Your character is better at swimming',
    results: [
        'You can hold your breath for 1 minute longer',
        'You suffer only half penalties from difficult waters',
        'You gain 1 base speed in water'
    ]
});

const DeepLungs = new PerkTemplate({
    name: 'deep lungs',
    skill: skill,
    level: 1,
    description: 'You have trained your body to hold your breath for longer, you hold your breath for four as long.'
});


const GoodFortitude = new PerkTemplate({
    name: 'good fortitude',
    skill: skill,
    level: 1,
    description: 'Your character has great fortitude, gain +2 life'
}, {
    applyTo: 'life',
    amount: 2
});

const GreatFortitude = new PerkTemplate({
    name: 'great fortitude',
    skill: skill,
    level: 2,
    description: 'Your character has great fortitude, gain +4 life'
}, {
    applyTo: 'life',
    amount: 4
});

const SupremeFortitude = new PerkTemplate({
    name: 'supreme fortitude',
    skill: skill,
    level: 3,
    description: 'Your character has supreme fortitude, gain +6 hitpoints'
}, {
    applyTo: 'life',
    amount: 6
});

const StrongBack = new PerkTemplate({
    name: 'strong back',
    skill: skill,
    level: 1,
    description: 'Your strength counts as +3 for the purposes of carrying capacity'
}, {
    applyTo: 'carryingCapacity',
    amount: 3
});

const HighMobility = new PerkTemplate({
    name: 'High mobility',
    skill: skill,
    level: 2,
    description: 'You are highly mobile, gain +1 base speed and can enter sprint in a single round.'

}, {
    amount: 1,
    applyTo: 'speed'
});

const Marathoner = new PerkTemplate({
    name: 'Marathoner',
    skill: skill,
    level: 1,
    description: 'Gain +10 on running, ignore one level of carry capacity or exhaustion'
});

const ArmorSpecialist = new PerkTemplate({
    name: 'armor specialist',
    skill: skill,
    description: 'You are a specialist at using armor, armor penalty to agility is reduced by 2 and weight from armor counts as half',
    level: 1
});

const ArmorMaster = new PerkTemplate({
    name: 'armor master',
    skill: skill,
    description: 'You have mastered armor using, armor penalty to agility is further reduced by 2 and weight is halved again',
    level: 2
});

const Hardy = new PerkTemplate({
    name: 'Hardy',
    skill: skill,
    description: 'You gain +1 damage absorbtion while awake.',
    level: 2,
}, {
    amount: 1,
    applyTo: 'damageAbsorption'
});

const Robust = new PerkTemplate({
    name: 'Robust',
    skill: skill,
    description: 'You gain +1 damage absorbtion while awake. Prerequisite: Hardy',
    level: 3,
}, {
    amount: 1,
    applyTo: 'damageAbsorption'
});

export const AthleticsPerks = [Climber, Runner, Swimmer, Jumper, DistanceThrower, DeepLungs, GoodFortitude, GreatFortitude, SupremeFortitude, StrongBack,
    HighMobility, Marathoner, ArmorSpecialist, ArmorMaster, Hardy, Robust];