import { PerkTemplate } from "../general/Perks";

const Forensics = new PerkTemplate({
    name: 'forensics',
    skill: 'investigation',
    level: 1,
    description: 'You know how to better investigate a crime scene, you gain +3 to investigation, additionally you never find bad clues'
}, {
    applyTo: 'crimescene',
    amount: 3
});

const Enigmas = new PerkTemplate({
    name: 'enigmas',
    skill: 'investigation',
    level: 1,
    description: 'Mysteries, riddles, codes, clues- Your character can analyze them with +3 to investigation'
}, {
    applyTo: 'enigma',
    amount: 3
});

const Search = new PerkTemplate({
    name: 'search',
    skill: 'investigation',
    level: 1,
    description: 'When you try to find hidden objects you gain +3 to your roll and you may always try again'
}, {
    applyTo: 'search',
    amount: 3
});

export const InvestigationPerks = [Forensics, Enigmas, Search];