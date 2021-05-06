import { PerkTemplate } from "../general/Perks";

const ArtOfDeal = new PerkTemplate({
    name: 'the art of the deal',
    skill: 'persuasion',
    level: 1,
    description: 'Your character is a strong negotiator when it comes to making a deal, +5 to persuasion rolls when making deal due to using the best words'
}, {
    applyTo: 'deal',
    amount: 5
});

const MotivationalSpeaker = new PerkTemplate({
    name: 'motivational speaker',
    skill: 'persuasion',
    level: 1,
    description: 'Your character is an adept motivational speaker, you gain +3 to persuasion when rolling for motivational speech'
}, {
    applyTo: 'motivationalspeaker',
    amount: 3
});

const InspireCourage = new PerkTemplate({
    name: 'inspire courage',
    skill: 'persuasion',
    level: 1,
    description: 'your character can inspire courage, speak for 1 minute and roll persuasion vs 25, if you succeed they are temporarily immune to mental health damage and penalties (1 hour)'
}, {
    applyTo: 'inspirecourage',
    amount: 0
});

export const PeaceMaker = new PerkTemplate({
    name: 'peace maker',
    skill: 'persuasion',
    level: 1,
    description: 'Your character is known for talking down hostiles and coming to a non-violent outcome, gain +5 when attempting to talk down a hostile'
}, {
    applyTo: 'peacemaker',
    amount: 5
});

export const PersuasionPerks = [ArtOfDeal, MotivationalSpeaker, InspireCourage, PeaceMaker];