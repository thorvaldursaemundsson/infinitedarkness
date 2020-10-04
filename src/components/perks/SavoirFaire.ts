import { PerkTemplate } from "../general/Perks";

export const Aristocrat = new PerkTemplate({
    name: 'aristocrat',
    skill: 'savoir-faire',
    level: 1,
    description: 'Your character gains +5 to all high society related savoir-faire rolls'
}, {
    applyTo: 'highsociety',
    amount: 5
});

export const Enforcer = new PerkTemplate({
    name: 'enforcer',
    skill: 'savoir-faire',
    level: 1,
    description: 'Your character gains +5 to all law enforcement related savoir-faire rolls'
}, {
    applyTo: 'enforcer',
    amount: 5
});

export const Lawyer = new PerkTemplate({
    name: 'lawyer',
    skill: 'savoir-faire',
    level: 1,
    description: 'Your character gains +5 to all legal attourney related savoir-faire rolls'
}, {
    applyTo: 'lawyer',
    amount: 5
});

export const Soldier = new PerkTemplate({
    name: 'soldier',
    skill: 'savoir-faire',
    level: 1,
    description: 'Your character gains +5 to all military related savoir-faire rolls'
}, {
    applyTo: 'soldier',
    amount: 5
});

export const Academic = new PerkTemplate({
    name: 'academic',
    skill: 'savoir-faire',
    level: 1,
    description: 'Your character gains +5 to all academic related savoir-faire rolls'
}, {
    applyTo: 'academic',
    amount: 5
});

export const SavoirFairePerks = [Aristocrat, Enforcer, Lawyer, Soldier, Academic];