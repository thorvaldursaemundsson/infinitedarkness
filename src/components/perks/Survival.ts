import { PerkTemplate } from "../Perks";

export const ImprovedForaging = new PerkTemplate({
    name: 'improved foraging',
    skill: 'survival',
    level: 1,
    description: 'Your character is better at foraging for food, gain +5 to foraging rolls'
}, {
    applyTo: 'forage',
    amount: 5
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