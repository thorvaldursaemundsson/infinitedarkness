import { PerkTemplate } from "../Perks";

export const Hacking = new PerkTemplate({
    name: 'hacking',
    skill: 'computer',
    level: 1,
    description: 'Your character can hack into computer systems, gain +3 vs software protection'
},{
    applyTo: 'hack',
    amount: 3
});

export const AdvancedHacking = new PerkTemplate({
    name: 'advanced hacking',
    skill: 'computer',
    level: 2,
    description: 'Your character is an advanced hacker, gain extra +3 vs software protection'
},{
    applyTo: 'hack',
    amount: 3
});

export const Programmer = new PerkTemplate({
    name: 'programmer',
    skill: 'computer',
    level: 1,
    description: 'Your character can write software'
},{
    applyTo: 'programmer',
    amount: 3
});
export const Networking = new PerkTemplate({
    name: 'networking expert',
    skill: 'computer',
    level: 1,
    description: 'Your character is an expert in networking together computers, make serverfarms, etc'
},{
    applyTo: 'networking',
    amount: 3
});

export const ComputerPerks = [Hacking, AdvancedHacking, Programmer, Networking];