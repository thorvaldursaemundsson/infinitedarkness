import { PerkTemplate } from "../general/Perks";
const skill = 'athletics';

const Climber = new PerkTemplate({
    name: 'climber',
    skill: skill,
    level: 1,
    description: 'Your character is better at climing, when you climb you move at half rather than quarter speed.'
}, {
    applyTo: 'climb',
    amount: 5
});

const DistanceThrower = new PerkTemplate({
    name: 'Distance Thrower',
    skill: 'acrobatics',
    level: 1,
    description: 'Your character is experienced with building momentum. Add +25% maximum distance to all throwing. (using either athletics, combat or explosives)'
}, {
    applyTo: '',
    amount: 0
});

const Runner = new PerkTemplate({
    name: 'runner',
    skill: skill,
    level: 1,
    description: 'Your character is better at running, gain +5 to running (effectively doubling your maximum range)'
}, {
    applyTo: 'run',
    amount: 5
});

const Jumper = new PerkTemplate({
    name: 'jumper',
    skill: skill,
    level: 1,
    description: 'Your character is better at jumping, gain +5 to jumping rolls and falling counts as 1 less meter.'
}, {
    applyTo: 'jump',
    amount: 5
});

const Swimmer = new PerkTemplate({
    name: 'swimmer',
    skill: skill,
    level: 1,
    description: 'Your character is better at swimming, gain +5 to swimming rolls'
}, {
    applyTo: 'jump',
    amount: 5
});

const DeepLungs = new PerkTemplate({
    name: 'deep lungs',
    skill: skill,
    level: 1,
    description: 'You have trained your body to hold your breath for longer, you hold your breath for twice as long.'
}, {
    applyTo: 'breath',
    amount: 5
});

const FastSwimmer = new PerkTemplate({
    name: 'fast swimmer',
    skill: skill,
    level: 1,
    description: 'When you roll to swim at 100% speed you instead swim at 150%'
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

const Fast = new PerkTemplate({
    name: 'Fast',
    skill: skill,
    level: 1,
    description: 'You are a trained runner, gain +1 base speed and +3 to all running rolls'
}, {
    applyTo: 'speed',
    amount: 1
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
})

export const AthleticsPerks = [Climber, Runner, Swimmer, Jumper, DistanceThrower, DeepLungs, FastSwimmer, GoodFortitude, GreatFortitude, SupremeFortitude, StrongBack,
    Fast, HighMobility, Marathoner, ArmorSpecialist, ArmorMaster, Hardy];