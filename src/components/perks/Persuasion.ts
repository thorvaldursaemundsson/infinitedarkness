import { PerkTemplate } from "../general/Perks";

const skill = 'persuasion';

const MotivationalSpeaker = new PerkTemplate({
    name: 'motivational speaker',
    skill: skill,
    level: 1,
    description: 'Your character is an adept motivational speaker, you gain +3 to persuasion when rolling for motivational speech, maximum number of people is raised to 40, you may include yourself, additionally the bonus lasts for the whole day on every skill check.'
}, {
    applyTo: 'motivationalspeaker',
    amount: 3
});

const InspireCourage = new PerkTemplate({
    name: 'inspire courage',
    skill: skill,
    level: 1,
    description: 'When you inspire courage people become immune to fear, lasts against one contested roll or until they go to sleep or 24 hours (which ever happens first).'
}, {
    applyTo: 'inspirecourage',
    amount: 0
});

const PeaceMaker = new PerkTemplate({
    name: 'peace maker',
    skill: skill,
    level: 1,
    description: 'Your character is known for talking down hostiles and coming to a non-violent outcome, gain +5 when attempting to talk down a hostile'
}, {
    applyTo: 'peacemaker',
    amount: 5
});

const Trader = new PerkTemplate({
    name: 'trader',
    skill: skill,
    level: 1,
    description: 'You are a thrifty trader who is has deep experience with trading, you receive 10% better prices when selling and bargaining'
});

export const PersuasionPerks = [MotivationalSpeaker, InspireCourage, PeaceMaker, Trader];