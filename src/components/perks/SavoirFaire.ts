import { PerkTemplate } from "../general/Perks";

const Aristocrat = new PerkTemplate({
    name: 'aristocrat',
    skill: 'savoir-faire',
    level: 1,
    description: 'Your character gains +5 to all high society related savoir-faire rolls, +2 to persuasion'
}, {
    applyTo: 'highsociety',
    amount: 5
});

const Enforcer = new PerkTemplate({
    name: 'enforcer',
    skill: 'savoir-faire',
    level: 1,
    description: 'Your character gains +5 to all law enforcement related savoir-faire rolls, +1 to all other skills when acting as a law enforcer'
}, {
    applyTo: 'enforcer',
    amount: 5
});

const Lawyer = new PerkTemplate({
    name: 'lawyer',
    skill: 'savoir-faire',
    level: 1,
    description: 'Your character gains +5 to all legal attourney related savoir-faire rolls, +1 to all other skills when acting as a lawyer'
}, {
    applyTo: 'lawyer',
    amount: 5
});

const Soldier = new PerkTemplate({
    name: 'soldier',
    skill: 'savoir-faire',
    level: 1,
    description: 'Your character gains +5 to all military related savoir-faire rolls, +2 to sequence'
}, {
    applyTo: 'soldier',
    amount: 5
});

const Academic = new PerkTemplate({
    name: 'academic',
    skill: 'savoir-faire',
    level: 1,
    description: 'Your character gains +5 to all academic related savoir-faire rolls, +2 to general knowledge'
}, {
    applyTo: 'academic',
    amount: 5
});

export const SavoirFairePerks = [Aristocrat, Enforcer, Lawyer, Soldier, Academic];