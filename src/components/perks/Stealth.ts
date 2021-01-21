import { PerkTemplate } from "../general/Perks";

const Shadow = new PerkTemplate({
    name: 'shadow',
    skill: 'stealth',
    level: 1,
    description: 'Your character gains +3 to stealth rolls when following someone while remaining hidden'
}, {
    applyTo: 'shadow',
    amount: 3
});

const Camouflage = new PerkTemplate({
    name: 'camouflage',
    skill: 'stealth',
    level: 1,
    description: 'Your character is able to use their surroundings to hide in plain sight, +3 to stealth while hiding'
}, {
    applyTo: 'camouflage',
    amount: 3
});

const Detection = new PerkTemplate({
    name: 'detection',
    skill: 'stealth',
    level: 1,
    description: 'Your character is harder to hide from, you gain +3 vs stealth'
}, {
    applyTo: 'detection',
    amount: 3
});

const SixthSense = new PerkTemplate({
    name: 'sixth sense',
    skill: 'stealth',
    level: 2,
    description: 'You gain +3 vs stealth and automatically use your second defense value when attacked out of combat while you are awake and nothing prevents your movement.'
}, {
    applyTo: 'detection',
    amount: 3
});

export const StealthPerks = [Shadow, Camouflage, Detection, SixthSense];