import { PerkTemplate } from "../general/Perks";

const Healer = new PerkTemplate({
    name: 'healer',
    skill: 'medicine',
    level: 1,
    description: 'Your character is an expert at cleaning wounds and applying bandages, gains +3 to first aid rolls and heal +1 life when successfully stopping bleeding or performing surgery.'
}, {
    applyTo: 'healing',
    amount: 3
});

const MedicineExpert = new PerkTemplate({
    name: 'medicine expert',
    skill: 'medicine',
    level: 1,
    description: 'Your character knows which medicines are best for which situation and how to dose them, +3 to all drug and medicines related rolls, immediately heal +1 life when applying stempack once per day per patient.'
}, {
    applyTo: 'medicines',
    amount: 3
});

const Surgeon = new PerkTemplate({
    name: 'surgeon',
    skill: 'medicine',
    level: 1,
    description: 'Your gain +3 when performing surgeries and failed surgeries deal half damage, successful surgeries immediately heal +1 life'
}, {
    applyTo: 'suregon',
    amount: 3
});

const Diagnostician = new PerkTemplate({
    name: 'diagnostician',
    skill: 'medicine',
    level: 1,
    description: 'You have much experience diagnosing patients, you gain a +3 to your diagnosis rolls, additionally if you succeed the next following surgery or administer medicine rolls gain +2 if you are involved.',
});

const Psychiatrist = new PerkTemplate({
    name: 'psychiatrist',
    skill: 'medicine',
    level: 1,
    description: 'Your character can perform psychiatric diagnostics and treatment, gain +3 to psychotherapy'
}, {
    applyTo: 'psychiatry',
    amount: 3
});

const CrossSpeciesHealer = new PerkTemplate({
    name: 'cross species healer',
    skill: 'medicine',
    level: 1,
    description: 'You have familiarized yourself with one species outside your own, pick one species, that species no longer "different species" penalty to medicine checks',
});

const SurgicalStrike = new PerkTemplate({
    name: 'Surgical Strike',
    skill: 'medicine',
    level: 2,
    description: 'You know how to use your knowledge of anatomy with deadly precision. If you hit someone using a firearm (aim or snipe only) or a combat weapon and exceed their defense by 10 points you can add +1d6 damage',
});

export const MedicinePerks = [Healer, MedicineExpert, Surgeon, Psychiatrist, CrossSpeciesHealer, Diagnostician, SurgicalStrike];