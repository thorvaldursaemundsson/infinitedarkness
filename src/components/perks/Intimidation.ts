import { PerkTemplate } from "../general/Perks";

const skill = 'intimidation';

const Interrogator = new PerkTemplate({
    name: 'Interrogator',
    skill: skill,
    level: 1,
    description: 'When you interrogate someone you choose whether they take mental health damage. If they do they take double when lying.'
}, {
    applyTo: 'interrogation',
    amount: 3
});

const Frighten = new PerkTemplate({
    name: 'Frighten',
    skill: skill,
    level: 1,
    description: 'When you frighten someone they take 1 extra mental health damage if they fight you. Additionally the enemies get only half bonus from outnumbering your team. Frighten range increases to 50 meters.'
}, {
    applyTo: 'frighten',
    amount: 0
});

const Dominator = new PerkTemplate({
    name: 'Dominator',
    skill: skill,
    level: 1,
    description: 'Targets that choose to fight must first make an active contest roll (2d10 + will + intimidation) otherwise they must comply.'
});

const Spook = new PerkTemplate({
    name: 'Spook',
    skill: skill,
    level: 1,
    description: 'Your story is so scary that it prevents mental health recovery for 1d6 days.'
}, {
    applyTo: 'spook',
    amount: 3
});

const IronWill = new PerkTemplate({
    name: 'Iron Will',
    skill: skill,
    level: 1,
    description: 'Whenever you resist an intimidation you add +3 to your result, additionally whenever you take mental health damage you take 1 less (minimum one)'
});

export const IntimidationPerks = [Interrogator, Frighten, Dominator, Spook, IronWill];