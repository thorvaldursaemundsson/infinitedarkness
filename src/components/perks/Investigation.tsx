import { PerkTemplate } from "../Perks";

export const Forensics = new PerkTemplate({
    name: 'forensics',
    skill: 'investigation',
    level: 1,
    description: 'You know how to better investigate a crime scene, you gain +3 to investigation'
},{
    applyTo: 'crimescene',
    amount: 3
});

export const Enigmas = new PerkTemplate({
    name: 'enigmas',
    skill: 'investigation',
    level: 1,
    description: 'Mysteries, riddles, codes, clues- Your character can analyze them with +3 to investigation'
},{
    applyTo: 'enigma',
    amount: 3
});