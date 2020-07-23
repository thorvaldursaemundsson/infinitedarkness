import { PerkTemplate } from "../Perks";

export const Physicist = new PerkTemplate({
    name: 'phycisist',
    skill: 'science',
    level: 1,
    description: 'Youve studied physics, gain +3 to all physics science rolls'
});

export const AdvancedPhysicist = new PerkTemplate({
    name: 'phycisist',
    skill: 'science',
    level: 2,
    description: 'Youve studied physics a lot, gain +3 to all physics science rolls'
});

export const Chemist = new PerkTemplate({
    name: 'chemist',
    skill: 'science',
    level: 1,
    description: 'Youve studied chemistry, gain +3 to all chemistry science rolls'
});

export const AdvancedChemist = new PerkTemplate({
    name: 'chemist',
    skill: 'science',
    level: 2,
    description: 'Youve studied chemistry a lot, gain +3 to all chemistry science rolls'
});

export const Biologist = new PerkTemplate({
    name: 'biologist',
    skill: 'science',
    level: 1,
    description: 'Youve studied biology, gain +3 to all biology science rolls'
});

export const AdvancedBiologist = new PerkTemplate({
    name: 'biologist',
    skill: 'science',
    level: 2,
    description: 'Youve studied biology a lot, gain +3 to all biology science rolls'
});

export const SciencePerks = [Physicist, Chemist, Biologist, AdvancedBiologist, AdvancedChemist, AdvancedPhysicist];