import { PerkTemplate } from "../Perks";

export const Interrogator = new PerkTemplate({
    name: 'interrogator',
    skill: 'intimidation',
    level: 1,
    description: 'Your character is better able to break down a subject to the point where they no longer can without information, you gain +3 to interrogation'
}, {
    applyTo: 'interrogation',
    amount: 3
});

export const Frighten = new PerkTemplate({
    name: 'frighten',
    skill: 'intimidation',
    level: 1,
    description: 'When you roll for frighten you gain +3 to your roll and any target that is affected become fearful for as many rounds as their mental health is damaged, fearful imposes -5 to all attacking actions'
}, {
    applyTo: 'frighten',
    amount: 0
});

export const Spook = new PerkTemplate({
    name: 'spook',
    skill: 'intimidation',
    level: 1,
    description: 'Your character gains +3 when telling spooky story'
}, {
    applyTo: 'spook',
    amount: 3
});

export const IntimidationPerks = [Interrogator, Frighten, Spook];