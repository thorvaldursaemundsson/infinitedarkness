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
    constructor(name: string, description: string, results?: string[] | undefined) {
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
    'The object can not be of any previous consequence since it had to have either existed or not in both worlds. The object and its circumstances must be known to you.',
    [
        'base mana: 2',
        'object is larger than 1kg: +1 mana',
        'object is not within visual sight of caser: +2 mana',
        'object is/was partially used: +2 mana',
        'you dont see the object: +3 mana'
    ]
);

export const Splinter = new SpellTemplate(
    'Splinter',
    'Spell: you split into two clones of yourself with all of your capabilities and has shared mana. Lasts 24 hours after which one will die and the other will revert into being the original (players choice). Spend 2 mana every day to keep it alive longer, prevents mana regen while active',
    ['Base mana: 3',
        'Increase duration: +1 mana per 24 hour']
);

export const Unmask = new SpellTemplate(
    'Unmask',
    'Spell: Your skin splits open and shreds to pieces, revealing a new person hiding underneat. This person is the real you, this person doesnt need to have your face, gender, DNA or even height (you may increase or decrease up to 10cm)',
    [
        'base mana: 2 (change face only)',
        'change fingerprint/retina: +1 mana',
        'change color of skin, eyes and/or hair: +1 mana',
        'change gender: +2 mana (requires change DNA)',
        'change DNA: +1 mana',
        'change trait: +3 mana (requires character points if you add a positive or remove a negative, only one trait)'
    ]
);

export const UmbraConstant = new SpellTemplate(
    'Umbra Constant',
    'Spell: Your shadow becomes a temporary fixture on the ground, you may also enter the shadow and hide inside it for up to one hour. If the surface is damaged you get pushed out immediately.',
    ['base mana: 2',
        'increase to five hours: +1 mana',
        'increase to two days: +2 mana',
        'increase to ten days: +3 mana',
        'increase to fourty days: +4 mana',
        'increase to one hundred days: +5 mana',
        'hide additional stuff: +1 mana per 10 kg']
);

export const MirrorTrap = new SpellTemplate(
    'Mirror Trap',
    'Spell: you trap someone in a mirror when you see them through the mirror directly, they become trapped inside a fake mirror universe, they are automatically freed when the mirror is broken, while inside the mirror they are timeless and immortal, lasts 1 day',
    ['base mana: 3',
        'increase by 1 day: +1 mana per day']
);

export const DarkVortex = new SpellTemplate(
    'Dark Vortex',
    'Spell: You draw dark matter from all directions into one single point up to 1 meter away from your head, the dark matter creates a gravity well with 1m/s/s pull at 1 meter away, lasts 1 minute. You can interact with this point as if it was a tiny ball',
    ['base mana: 1',
        'increase gravity: +1 mana per 1/m/s/s',
        'increase distance: +1 mana per 5 meters']
);

export const LuminiferousTransubstantiation = new SpellTemplate(
    'Luminiferous Transubstantiation',
    'Spell: Your body converts into pure ultra high energy light that moves at the speed of light through up to 100m of matter or 100km of air, you travel up 300km. Clothes and equipment not included by default. While in light form you are blind, you must roll 10 points higher to accurately rematerialize where you want to, otherwise you will rematerialize within 1d100 x 10 meters of the target.',
    ['base mana: 2',
        'increase distance: +1 mana per 300km',
        'increase through: +1 mana per 100m or 100km air',
        'bring additional stuff: +1 mana per 10kg',
        'if you dont see the target: -10 to your roll']
);

export const ColorBias = new SpellTemplate(
    'ColorBias',
    'Spell: You alter the color charge of the subatomic matter of a small object that you touch, this object becomes intensly radiactive as it slowly converts into energy. Level 8 radiation at 1 meter. 1 gram per hour, stops at 2 hours. Max 1kg',
    ['base mana: 3',
        'increase radiation level: +1 mana per level (+0.1 gram per hour)',
        'increase duration: +1 mana per hour',
        'increase max kg: +1 mana per kg'
    ]
);

export const Rift = new SpellTemplate(
    'Rift',
    'Spell: Opens up a tiny rift to another dimension at the palm of your hand, a strange energy leaks out '
);

export const Conversation = new SpellTemplate(
    'Conversation',
    'Spell: You mentally communicate with anyone youve previously met, you may do at most 4 back/fourth, maximum 100 words each time. Persons who dont know you can do this will experience it as an inner monologue, asking uncomfortable questions may yield no answer',
    ['base mana: 2',
        'person is not on the same planet: +1 mana',
        'person is not in the same system: +2 mana',
        'person is dead: +5 mana',
        'longer converation: +1 mana per back/fourth']
);

export const HyperSight = new SpellTemplate(
    'Hyper Sight',
    'Spell: You see things from the vantage point of a higher dimension, allowing you to see through matter as if it were transparent for up to 100 meters. Lasts 10 minutes',
    ['base mana: 2',
        'increase range: +1 mana per 100 meters',
        'increase time: +1 mana per 10 minutes']
);

export const Tesseraction = new SpellTemplate(
    'Tesseraction',
    'Spell: you designate a 1x1x1 cubic meter volume to become the host of a four dimensional tesseract. You add 7 extra cubic meters of volume which only you can interact with, you may rotate the tesserate so that any of the volumes becomes coterminus with reality. Lasts 5 days',
    ['base mana: 3',
        'increase duration: +1 mana per 2 days',
        'increase size: +1 mana per cubic meter',
        'allow someone else to interact: +1 mana per person']
);

export const HarshEmpathy = new SpellTemplate(
    'Harsh Empathy',
    'Spell: You establish an unrelenting empathic link to another person, which allows you to feel everything they feel, they feel everything you feel. Mental trauma and respite is shared. Lasts 1 day',
    ['base mana: 1',
        'increase duration: +1 mana per 2 days']
);

//mutations
export const MortisAlbum = new SpellTemplate(
    'Mortis Album',
    'Mutation: body emits no heat, nails and hair become white and matte, your skin loses its color and becomes gray, you no longer need to breathe air or consume food, you gain 1 radiation resistence'
);

export const Ocultos = new SpellTemplate(
    'Ocultos',
    'Mutation: Eyes grow all over your body, at the rate of 1 per 11 days a new eye opens up somewhere randomly on your skin up to a maximum 33 additional eyes. The eyes are fully functional and grant the ability to gain a glipse of something of your choice, glipse closes the eye forever',
    ['any yes or no question: 2 mana',
        'any single word answer question: 3 mana',
        'any single sentence answer question: 4 mana',
        'any advanced question: 5 mana']
);

export const Biopod = new SpellTemplate(
    'Biopod',
    'Mutation: Nails and hair fall out and stop growing, a thin film of slick slime covers your skin, your pores turn into suckers which allow you to grab ahold of things, you gain the ability to turn your body extremely soft and elastic which allows you to squeeze through any slit at least 1 cm narrow'
);

export const Xeropaga = new SpellTemplate(
    'Xeropaga',
    'Mutation: Your tongue permanently transforms into a viper that delivers powerful neurotoxin when it bites. Additionally the first time you strike someone you gain 1d6 mana, they lose the same amount, this affect only works once per target ever.',
    ['use spell to hit their defense (standard rules) counts as full round action and you only have base level defense for the rest of the round',
        'base mana: 1',
        '1st round: 1d6 intelligence damage',
        '2nd round: 1d6 perception damage',
        '3rd round: 1d6 willpower damage',]
);

export const TwinSoul = new SpellTemplate(
    'Twin Soul',
    'Mutation: You have a guest inside your mind, another entity. This entity has their own mental abilities and skill set. If it is in their interest they can help you, you may use their skills or mental abilities for any check.',
    ['Interference: This entity can always communicate with you, if it wishes to distract you you have -3 to all rolls',
        'Eject entity: If (and only if) the entity is willing you may eject it, if it has nowhere to go it simply seizes to exist',
        'Absorb entity: You may absorb the mind of a dying (below -100% life, but not dead) person, the person must be willing',
        'Battle of wills: if you absorb a mind while already having one then the guest has a chance to force out the host, each roll 2d10+willpower, highest wins, loser is forcefully ejected.']
);

export const SpellsPerks = [MortisAlbum, Ocultos, Biopod, Xeropaga, TwinSoul,

    DimensionalSwap, Splinter, Unmask, UmbraConstant, MirrorTrap, DarkVortex, LuminiferousTransubstantiation, ColorBias, Rift, Conversation,
    HyperSight, Tesseraction, HarshEmpathy];