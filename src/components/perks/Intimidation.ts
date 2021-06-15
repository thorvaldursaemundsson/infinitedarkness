import { PerkTemplate } from "../general/Perks";

const Interrogator = new PerkTemplate({
    name: 'interrogator',
    skill: 'intimidation',
    level: 1,
    description: 'When you interrogate someone they no longer have a benefit to subterfuge against you.'
}, {
    applyTo: 'interrogation',
    amount: 3
});

const Frighten = new PerkTemplate({
    name: 'frighten',
    skill: 'intimidation',
    level: 1,
    description: 'When you frighten someone they must attempt to flee if possible, surrender if they can reasonably believe they will be given quarter before attacking you.'
}, {
    applyTo: 'frighten',
    amount: 0
});

const Spook = new PerkTemplate({
    name: 'spook',
    skill: 'intimidation',
    level: 1,
    description: 'Your story is so scary that it prevents mental health recovery for 1d6 days.'
}, {
    applyTo: 'spook',
    amount: 3
});

export const IntimidationPerks = [Interrogator, Frighten, Spook];