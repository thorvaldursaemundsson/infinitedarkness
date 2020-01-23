import { PerkTemplate } from "../Perks";

export const DetectMotives = new PerkTemplate({
    name: 'detect motives',
    skill: 'empathy',
    level: 1,
    description: 'Your character is more likely to accurately guess other peoples motives, gain +3 to empathy when finding out motives'
},{
    applyTo: 'detectmotives',
    amount: 3
});

export const DetectLies = new PerkTemplate({
    name: 'detect lies',
    skill: 'empathy',
    level: 1,
    description: 'Your character is harder to lie to and can pick up on small signs that someone is not truthful, you gain +3 vs lies'
},{
    applyTo: 'detectlies',
    amount: 3
});

export const DetectPersonality = new PerkTemplate({
    name: 'detect personality',
    skill: 'empathy',
    level: 1,
    description: 'Your char acter can read other people and better understand their personality, you gain +3 when attempting to read personality'
},{
    applyTo: 'detectpersonality',
    amount: 3
});

export const EmpathyPerks = [DetectMotives, DetectLies, DetectPersonality];