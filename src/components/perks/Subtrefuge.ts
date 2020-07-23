import { PerkTemplate } from "../Perks";

export const HideEmotion = new PerkTemplate({
    name: 'hide emotion',
    skill: 'subtrefuge',
    level: 1,
    description: 'Your character is harder to read than most, gain +5 vs having your personality or motives detected'
}, {
    applyTo: 'emotions',
    amount: 5
});

export const Deception = new PerkTemplate({
    name: 'deception',
    skill: 'subtrefuge',
    level: 1,
    description: 'Your character is a skilled liar, gain +4 vs having your lies spotted'
}, {
    applyTo: 'lies',
    amount: 4
});

export const SubtreFugePerks = [HideEmotion, Deception];