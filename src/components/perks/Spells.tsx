import { PerkTemplate } from "../Perks";

export const Xorg = new PerkTemplate({
    name: 'SC: Xorg',
    skill: 'spells',
    level: 1,
    description: 'Spell Component: In the shape of fangs'
},{
    applyTo: 'spells',
    amount: 0
});

export const Bevloc = new PerkTemplate({
    name: 'M: Bevloc',
    skill: 'spells',
    level: 1,
    description: 'Mutation: body emits no heat, nails and hair become white and matte'
},{
    applyTo: 'spells',
    amount: 0
});

export const SpellsPerks = [Xorg, Bevloc];