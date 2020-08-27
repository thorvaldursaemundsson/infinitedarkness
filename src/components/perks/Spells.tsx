import { PerkTemplate } from "../general/Perks";
import { IHooker } from "../Character";

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
    description: string;
    results?: string[];
    constructor(name: string, description: string, results?:string[] | undefined) {
        this.name = name;
        this.skill = 'spells';
        this.level = 1;
        this.description = description;
        this.applyTo = spellhook.applyTo;
        this.amount = spellhook.amount;
        this.results = results;
    }
    cost(): number {
        return this.level * 10;
    }
}
//spells
export const DimensionalSwap = new SpellTemplate(
    'Dimensional Swap',
    'Spell: You can cause an object to being to exist or seize to exist by finding a virtual parallel universe which is identical in every way except for the objects existence.' +
    'The object can not be of any previous consequence since it had to have either existed or not in both worlds. The object and its circumstances must be known to you',
    [
        'base mana: 2',
        'object is larger than 1kg: +1 mana',
        'object is not within visual sight of caser: +2 mana',
        'object is/was partially used: +2 mana'
    ]
);

export const Splinter = new SpellTemplate(
    'Splinter',
    'Spell: you split into two clones of yourself with all of your capabilities and has shared mana. Lasts 24 hours after which one will die and the other will revert into being the original (players choice). Spend 2 mana every day to keep it alive longer, prevents mana regen while active',
    
);

export const Unmask = new SpellTemplate(
    'Unmask',
    'Spell: Your skin splits open and shreds to pieces, revealing a new person hiding underneat. This person is the real you, this person doesnt need to have your face, gender, DNA or even height (you may increase or decrease up to 10cm)',
    [
        'base mana: 2',
        'change fingerprint/retina: +1 mana',
        'change color of skin, eyes or hair: +1 mana',
        'change gender: +2 mana',
        'change DNA: +1 mana'
    ]
);

export const UmbraConstant = new SpellTemplate(
    'Umbra Constant',
    'Spell: Your shadow becomes a permanent fixture on the ground and a place for you to hide, you can hide there for 4 hours plus 2 hours per mana spent'
);

export const MirrorTrap = new SpellTemplate(
    'Mirror Trap',
    'Spell: you trap someone in a mirror when you see them through the mirror, they become trapped inside a fake mirror universe and are only freed when the mirror is broken, while inside the mirror they are timeless and immortal'
);

export const DarkTransubstantiation = new SpellTemplate(
    'Dark Transubstantiation',
    'Spell: your body transforms into dark matter for a few seconds and then transforms back, in this split second you may travel up to 10km in any direction freely, however you are completely blind while traveling.'
);

//mutations
export const MortisAlbum = new SpellTemplate(
    'Mortis Album',
    'Mutation: body emits no heat, nails and hair become white and matte, your skin loses its color and becomes gray, you no longer need to breathe air or consume food'
);

export const Ocultos = new SpellTemplate(
    'Ocultos',
    'Mutation: Eyes grow all over your body, at the rate of 1 per month a new eye opens up somewhere randomly on your skin up to a maximum 12 additional eyes. The eyes are fully functional and grant the ability to gain a glipse of something of your choice, glipse closes the eye forever'
);

export const Biopod = new SpellTemplate(
    'Biopod',
    'Mutation: Nails and hair fall out and stop growing, a thin film of slick slime covers your skin, your pores turn into suckers which allow you to grab ahold of things, you gain the ability to turn your body extremely soft and elastic which allows you to squeeze through any slit at least 1 cm narrow'
);

export const Xeropaga = new SpellTemplate(
    'Xeropaga',
    'Mutation: Your tongue permanently transforms into a viper that delivers lethal neurotoxin when it bites, anyone bitten loses 1 intelligence, willpower and perception ever round, there is no resistence or cure'
);

export const SpellsPerks = [MortisAlbum, Ocultos, Biopod, Xeropaga, 
    
    DimensionalSwap, Splinter, Unmask, UmbraConstant, MirrorTrap, DarkTransubstantiation];