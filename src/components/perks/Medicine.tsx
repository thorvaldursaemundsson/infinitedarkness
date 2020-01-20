import { PerkTemplate } from "../Perks";

export const Healer = new PerkTemplate({
    name: 'healer',
    skill: 'medicine',
    level: 1,
    description: 'Your character knows how to clean wounds and apply bandages, gains +3 to medicine when attending to injuries'
},{
    applyTo: 'healing',
    amount: 3
});

export const MedicineExpert = new PerkTemplate({
    name: 'medicine expert',
    skill: 'medicine',
    level: 1,
    description: 'Your character knows which medicines are best for which situation and how to dose them, +3 to giving medicine'
},{
    applyTo: 'medicines',
    amount: 3
});

export const Surgeon = new PerkTemplate({
    name: 'surgeon',
    skill: 'medicine',
    level: 1,
    description: 'Your character can perform surgeries'
},{
    applyTo: 'suregon',
    amount: 3
});