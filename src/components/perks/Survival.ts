import { PerkTemplate } from "../general/Perks";

const HunterGatherer = new PerkTemplate({
    name: 'Hunter gatherer',
    skill: 'survival',
    level: 1,
    description: 'Your character is better at foraging for food, gain +5 to foraging rolls, you only take half penalties to unfamiliar biome and harsh biome'
}, {
    applyTo: 'forage',
    amount: 5
});

const ShelterBuilder = new PerkTemplate({
    name: 'shelter builder',
    skill: 'survival',
    level: 1,
    description: 'your character can build shelters that offer protection against exposure, +5 to build shelter roll and only suffer half penalty for building shelter for multiple people. Your shelters require only 10 minutes of maintenance'
}, {
    applyTo: 'shelter',
    amount: 5
});

const HardenedSurvivalist = new PerkTemplate({
    name: 'hardened survivalist',
    skill: 'survival',
    level: 1,
    description: 'You are resillient to the environment and ignore two factors that reduce sleep quality, when you sleep in a shelter it counts as 1 higher quality for you. You gain 1 maximum mental health.'
},
{
    applyTo: 'mentalHealth',
    amount: 1
});

export const SurvivalPerks = [HunterGatherer, ShelterBuilder, HardenedSurvivalist];