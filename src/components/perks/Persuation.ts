import { PerkTemplate } from "../Perks";

export const ArtOfDeal = new PerkTemplate({
    name: 'the art of the deal',
    skill: 'persuation',
    level: 1,
    description: 'Your character is a strong negotiator when it comes to making a deal, +3 to persuation rolls when making deal'
}, {
    applyTo: 'deal',
    amount: 3
});

export const MotivationalSpeaker = new PerkTemplate({
    name: 'motivational speaker',
    skill: 'persuation',
    level: 1,
    description: 'Your character is an adept motivational speaker, you gain +3 to persuation when rolling for motivational speech'
}, {
    applyTo: 'motivationalspeaker',
    amount: 3
});

export const InspireCourage = new PerkTemplate({
    name: 'inspire courage',
    skill: 'persuation',
    level: 1,
    description: 'your character can inspire courage, speak for 1 minute and roll persuation, any character gains that hears you +2 fear resistence but not more than your result'
}, {
    applyTo: 'inspirecourage',
    amount: 0
});

export const PeaceMaker = new PerkTemplate({
    name: 'peace maker',
    skill: 'persuation',
    level: 1,
    description: 'Your character is known for talking down hostiles and coming to a non-violent outcome, gain +3 when attempting to talk down a hostile'
}, {
    applyTo: 'peacemaker',
    amount: 0
});

export const PersuationPerks = [ArtOfDeal, MotivationalSpeaker, InspireCourage, PeaceMaker];