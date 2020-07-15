import { PerkTemplate } from "../Perks";

export const Shadow = new PerkTemplate({
    name: 'shadow',
    skill: 'stealth',
    level: 1,
    description: 'Your character gains +3 to stealth rolls when following someone while remaining hidden'
}, {
    applyTo: 'shadow',
    amount: 3
});

export const Camouflage = new PerkTemplate({
    name: 'camouflage',
    skill: 'stealth',
    level: 1,
    description: 'Your character is able to use their surroundings to hide in plain sight, +3 to stealth while hiding'
}, {
    applyTo: 'camouflage',
    amount: 3
});

export const Detection = new PerkTemplate({
    name: 'detection',
    skill: 'stealth',
    level: 1,
    description: 'Your character is harder to hide from, you gain +3 vs shadows and hiders'
}, {
    applyTo: 'detection',
    amount: 3
});

export const StealthPerks = [Shadow, Camouflage, Detection];