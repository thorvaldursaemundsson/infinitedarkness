import { PerkTemplate } from "../general/Perks";

export const Chef = new PerkTemplate({
    name: 'Chef',
    skill: 'cooking',
    level: 1,
    description: 'You are a professional chef, time taken to cook is reduced to 75% and you gain +3 to cooking rolls'
}, {
    applyTo: '',
    amount: 0
});

export const GourmetChef = new PerkTemplate({
    name: 'Gourmet Chef',
    skill: 'cooking',
    level: 2,
    description: 'You are a gourmet chef, you gain +3 to all cooking rolls and take no penalty for the first 5 extra meals you prepare'
}, {
    applyTo: 'cooking',
    amount: 3
});

export const Scrambler = new PerkTemplate({
    name: 'Scrambler',
    skill: 'cooking',
    level: 1,
    description: 'You are used to working with inadequate tools and ingredients, ignore all penalties from tools and half penalties from low quality ingredients. When you speed cook you only take -5 to penalty'
}, {
    applyTo: '',
    amount: 0
});

export const ComputerPerks = [Chef, GourmetChef, Scrambler];