import { PerkTemplate } from "../Perks";
import { IHooker } from "../Character";

const spellhook: IHooker = {
    applyTo: 'spells',
    amount: 0
}

export const Bevloc = new PerkTemplate({
    name: 'M: Bevloc',
    skill: 'spells',
    level: 1,
    description: 'Mutation: body emits no heat, nails and hair become white and matte'
}, spellhook);

export const Ocultos = new PerkTemplate({
    name: 'M: Ocultos',
    skill: 'spells',
    level: 1,
    description: 'Mutation: Eyes grow all over your body, at the rate of 1 per month a new eye opens up somewhere randomly on your skin up to a maximum 12 additional eyes. The eyes are fully functional and grant the ability to gain a glipse of something of your choice, glipse closes the eye forever'
}, spellhook);

export const Biopod =new PerkTemplate({
    name: 'M: Biopod',
    skill:'spells',
    level:1,
    description: 'Mutation: Nails and hair fall out and stop growing, a thin film of slick slime covers your skin, your pores turn into suckers which allow you to grab ahold of things, you gain the ability to turn your body extremely soft and elastic which allows you to squeeze through any slit at least 1 cm narrow'
}, spellhook)

export const SpellsPerks = [Bevloc, Ocultos, Biopod];