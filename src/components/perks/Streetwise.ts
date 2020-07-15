import { PerkTemplate } from "../Perks";

export const CriminalTrader = new PerkTemplate({
    name: 'criminal trader',
    skill: 'streetwise',
    level: 1,
    description: 'Your character gains +3 to all fencing rolls, +3 to all black market rolls involving'
}, {
    applyTo: 'fencing',
    amount: 3
});

export const Gangster = new PerkTemplate({
    name: 'gangster',
    skill: 'streetwise',
    level: 1,
    description: 'Your character is well experienced with gangs both from the inside and outside, gain +3 to all gang rolls, local culture and you may start out as a gang member'
});

export const Gossiper = new PerkTemplate({
    name: 'gossiper',
    skill: 'streetwise',
    level: 1,
    description: 'Your character gains +5 to all gossip roles and using the skill does not block other activities.'
});

export const LocalSlang = new PerkTemplate({
    name: 'local slang',
    skill: 'streetwise',
    level: 1,
    description: 'Pick one location, you know the slang of that location and gain +5 to all streetwise rolls there'
});


export const StreetwisePerks = [CriminalTrader, Gangster, Gossiper, LocalSlang];