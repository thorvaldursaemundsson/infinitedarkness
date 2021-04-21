import { PerkTemplate } from "../general/Perks";

const Hacking = new PerkTemplate({
    name: 'hacking',
    skill: 'computer',
    level: 1,
    description: 'Your character can hack into computer systems, gain +3 vs software protection'
}, {
    applyTo: 'hacking',
    amount: 5
});

const AdvancedHacking = new PerkTemplate({
    name: 'advanced hacking',
    skill: 'computer',
    level: 2,
    description: 'Your character is an advanced hacker, gain extra +3 vs software protection'
}, {
    applyTo: 'hacking',
    amount: 5
});

const Programmer = new PerkTemplate({
    name: 'programmer',
    skill: 'computer',
    level: 1,
    description: 'Your character can write software, gain +3 to craft software rolls, crafting software time is reduced to 50%'
}, {
    applyTo: 'craft software',
    amount: 3
});

const SeniorDeveloper = new PerkTemplate({
    name: 'Senior Developer',
    skill: 'computer',
    level: 2,
    description: 'Your character is a senior developer, you gain +3 to craft software and crafting software time is reduced to 33%'
}, {
    applyTo: 'craft software',
    amount: 3
});


export const ComputerPerks = [Hacking, AdvancedHacking, Programmer, SeniorDeveloper];