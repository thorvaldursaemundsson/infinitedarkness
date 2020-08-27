import { PerkTemplate } from "../general/Perks";

export const ImprovedForaging = new PerkTemplate({
    name: 'improved foraging',
    skill: 'survival',
    level: 1,
    description: 'Your character is better at foraging for food, gain +5 to foraging rolls'
}, {
    applyTo: 'forage',
    amount: 5
});

export const Fisher = new PerkTemplate({
    name: 'fisher',
    skill: 'survival',
    level: 1,
    description: 'Your character knows how to fish, gain +5 to all fishing rolls'
});

export const Hunter = new PerkTemplate({
    name: 'hunter',
    skill: 'survival',
    level: 1,
    description: 'Your character knows how to hunt, gain +5 to all hunting rolls'
});

export const Tracker = new PerkTemplate({
    name:'tracker',
    skill: 'survival',
    level: 1,
    description: 'Your character can track anything through the wilds, gain +5 to tracking'
});

export const BetterNavigation = new PerkTemplate({
    name: 'better navigation',
    skill: 'survival',
    level: 1,
    description: 'Your character is better at finding their way in the wild, +5 to navigation rolls'
}, {
    applyTo: 'navigate',
    amount: 5
});

export const ShelterBuilder = new PerkTemplate({
    name: 'shelter builder',
    skill: 'survival',
    level: 1,
    description: 'your character can build shelters that offer protection against exposure, +5 to build shelter roll'
}, {
    applyTo: 'shelter',
    amount: 5
});

export const SurvivalPerks = [ImprovedForaging, BetterNavigation, ShelterBuilder];