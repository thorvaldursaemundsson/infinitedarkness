import { PerkTemplate } from "../Perks";
import { IHooker } from "../Character";
import React from "react";

const spellhook: IHooker = {
    applyTo: 'spells',
    amount: 0
}

class SpellTemplate implements PerkTemplate {
    name: string;
    skill: string;
    level: 1 | 2 | 3 | 4 | 5;
    applyTo: string;
    amount: number;
    _description: string;
    constructor(name: string, description: string) {
        this.name = name;
        this.skill = 'spells';
        this.level = 1;
        this._description = description;
        this.applyTo = spellhook.applyTo;
        this.amount = spellhook.amount;
    }
    description(): JSX.Element {
        return <>{this._description}</>;
    }
    cost(): number {
        return this.level * 10;
    }
}

export const DimensionalSwap = new SpellTemplate(
    'Dimensional Swap',
    'Spell: You can cause an object to being to exist or seize to exist by finding a virtual parallel universe which is identical in every way except for the objects existence.'+
    'The object can not be of any previous consequence since it had to have either existed or not in both worlds. The object and its circumstances must be known to you'
);

export const MortisAlbum = new SpellTemplate(
    'Mortis Album',
    'Mutation: body emits no heat, nails and hair become white and matte, your skin loses its color and becomes gray, you no longer need to breathe air or consume food');

export const Ocultos = new SpellTemplate('Ocultos',
    'Mutation: Eyes grow all over your body, at the rate of 1 per month a new eye opens up somewhere randomly on your skin up to a maximum 12 additional eyes. The eyes are fully functional and grant the ability to gain a glipse of something of your choice, glipse closes the eye forever');

export const Biopod = new SpellTemplate('Biopod',
    'Mutation: Nails and hair fall out and stop growing, a thin film of slick slime covers your skin, your pores turn into suckers which allow you to grab ahold of things, you gain the ability to turn your body extremely soft and elastic which allows you to squeeze through any slit at least 1 cm narrow');

export const SpellsPerks = [MortisAlbum, Ocultos, Biopod, DimensionalSwap];