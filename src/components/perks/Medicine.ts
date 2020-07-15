import { PerkTemplate } from "../Perks";

export const Healer = new PerkTemplate({
    name: 'healer',
    skill: 'medicine',
    level: 1,
    description: 'Your character knows how to clean wounds and apply bandages, gains +3 to surgery and medicine and heal +1 life when successfully stopping bleeding or performing surgery'
}, {
    applyTo: 'healing',
    amount: 3
});

export const MedicineExpert = new PerkTemplate({
    name: 'medicine expert',
    skill: 'medicine',
    level: 1,
    description: 'Your character knows which medicines are best for which situation and how to dose them, +3 to giving medicine, additionally heal +1 life when applying stempack'
}, {
    applyTo: 'medicines',
    amount: 3
});

export const Surgeon = new PerkTemplate({
    name: 'surgeon',
    skill: 'medicine',
    level: 1,
    description: 'Your gain +3 when performing surgeries and failed surgeries deal half damage, successful surgeries heal +1 life'
}, {
    applyTo: 'suregon',
    amount: 3
});

export const Psychiatrist = new PerkTemplate({
    name: 'psychiatrist',
    skill: 'medicine',
    level: 1,
    description: 'Your character can perform psychiatric diagnostics and treatment, gain +3 to therapy as well'
}, {
    applyTo: 'psychiatry',
    amount: 3
});

export const MedicinePerks = [Healer, MedicineExpert, Surgeon, Psychiatrist];