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
    constructor(name: string, description: string, range?: string, results?: string[] | undefined) {
        this.name = name;
        this.skill = 'spells';
        this.level = 1;
        if (range !== undefined)
            this.description = description + '. range: ' + range;
        else this.description = description;
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
    '10 meters, visual contact',
    [
        'base mana: 2',
        'object is larger than 1kg: +1 mana',
        'object is not within visual sight of caser: +2 mana',
        'object is/was partially used: +2 mana',
        'you dont see the object: +3 mana',
        'increase range: +1 mana per 10 meters',
        'no visual contact: +2 mana'
    ]
);

export const Splinter = new SpellTemplate(
    'Splinter',
    'Spell: you split into two clones of yourself with all of your capabilities and has shared mana. Lasts 24 hours after which one will die and the other will revert into being the original (players choice). Spend 2 mana every day to keep it alive longer, prevents mana regen while active',
    'personal',
    ['Base mana: 3',
        'Increase duration: +1 mana per 24 hour']
);

export const Unmask = new SpellTemplate(
    'Unmask',
    'Spell: Your skin splits open and shreds to pieces, revealing a new person hiding underneat. This person is the real you, this person doesnt need to have your face, gender, DNA or even height (you may increase or decrease up to 10cm)',
    'personal',
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
    'direct contact',
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
    '10 meters, visual contact',
    ['base mana: 3',
        'increase by 1 day: +1 mana per day']
);

export const DarkVortex = new SpellTemplate(
    'Dark Vortex',
    'Spell: You draw dark matter from all directions into one single point up to 1 meter away from your head, the dark matter creates a gravity well with 1m/s/s pull at 1 meter away, lasts 1 minute. You can interact with this point as if it was a tiny ball',
    '1 meter, visual contact',
    ['base mana: 1',
        'increase gravity: +1 mana per 1/m/s/s',
        'increase distance: +1 mana per 5 meters']
);

export const LuminiferousTransubstantiation = new SpellTemplate(
    'Luminiferous Transubstantiation',
    'Spell: Your body converts into pure ultra high energy light that moves at the speed of light through up to 1m of solid or liquid matter or 30m of air, you travel up 30m. Clothes and equipment not included by default. While in light form you are blind, you must roll 10 points higher to accurately rematerialize where you want to, otherwise you will rematerialize within 1d6 meters of the target.',
    'personal',
    [
        'base mana: 2',
        'increase distance: +1 mana per +300m distance and +1m through solid objects',
        'bring additional stuff: +1 mana per 20kg',
        'if you dont see the target: -10 to your roll',
        'if you materialize inside solid matter you are ejected to the nearest empty space and take 1d6 damage per meter traveled',
        'if you materialize inside liquid matter you take 1d6 damage'
    ]
);

export const ColorBias = new SpellTemplate(
    'ColorBias',
    'Spell: You alter the color charge of the subatomic matter of a small object that you touch, this object becomes intensly radiactive as it slowly converts into energy. Level 8 radiation at 1 meter. 1 microgram per hour, stops at 2 hours. Object weight max 1kg',
    'direct contact',
    [
        'base mana: 3',
        'increase radiation level: +1 mana per level (+0.1 microgram per hour)',
        'increase duration: +1 mana per hour',
        'increase max kg: +1 mana per kg'
    ]
);

export const Rift = new SpellTemplate(
    'Rift',
    'Spell: Opens up a tiny rift to another dimension at the palm of your hand, a strange energy leaks out. This rift can be moved around only by you, you move it freely with your mind. It moves at a rate of up to 600meters per round. It must be within 300 meters of you. Anyone that touches it must roll 1d10 for a random effect. It lasts as long as you want but drains you of 1 mana per turn. To hit a person you must make a combat roll. If two consequtive effects are the same, reroll.',
    'direct contact',
    [
        'base mana: 4',
        '1: a burst of unknown, shimmering energy escapes, roll 1d6, 1: strength, 2: agility, 3: endurance, 4: perception, 5: intelligence, 6: willpower. Roll 1d6 damage',
        '2: a burst of invisible kinetic energy escapes, target is violently pushed away from rift, takes 2d6 damage (10 armor piercing), is moved an equal amount of meters away.',
        '3: a burst of gamma rays escape, target gains 1d8 levels of radiation',
        '4: a burst of heat escapes, target is ignited, takes 1d6 damage (8 armor piercing) per turn for 10 turns',
        '5: a bubbling prismatic tentacle lashes out, target is healed 2d6 life but paralyzed for an equal number of rounds, gaining 1 life each round.',
        '6: a stream of large teeth engulf the target, target takes 1d6 damage (2 armor piercing) and has a -10 penalty to all actions for 1 round',
        '7: a burst of toxic black ash escapes, all people within 6 meters take 1d4 damage (6 armor piercing) and are blinded for 1 round',
        '8: a white bolt of lightning escapes and hits the target, the target can take 1 extra action and takes 1 mental health damage for 1d6 rounds',
        '9: the target gains control of the rift, but mana is drained at a double rate',
        '10: a burst of otherworldy mental projections escape, target gains 1d6 mana, loses 2d6 mental health, if the target has enough spare points they can gain a spell or mutation immediately.'
    ]
);

export const Conversation = new SpellTemplate(
    'Conversation',
    'Spell: You mentally communicate with anyone youve previously met, you may do at most 4 back/fourth, maximum 100 words each time. Persons who dont know you can do this will experience it as an inner monologue, asking uncomfortable questions may yield no answer',
    'unlimited',
    [
        'base mana: 2',
        'person is not on the same planet: +1 mana',
        'person is not in the same system: +2 mana',
        'person is dead: +5 mana',
        'longer converation: +1 mana per back/fourth'
    ]
);

export const HyperSight = new SpellTemplate(
    'Hyper Sight',
    'Spell: You see things from the vantage point of a higher dimension, allowing you to see through matter as if it were transparent for up to 100 meters. Lasts 10 minutes',
    'personal',
    [
        'base mana: 2',
        'increase range: +1 mana per 100 meters',
        'increase time: +1 mana per 10 minutes']
);

export const Tesseraction = new SpellTemplate(
    'Tesseraction',
    'Spell: you designate a 1x1x1 cubic meter volume to become the host of a four dimensional tesseract. You add 7 extra cubic meters of volume which only you can interact with, you may rotate the tesserate so that any of the volumes becomes coterminus with reality. Lasts 5 days',
    '1 meter visual contact',
    [
        'base mana: 3',
        'increase duration: +1 mana per 2 days',
        'increase size: +1 mana per cubic meter',
        'allow someone else to interact: +1 mana per person'
    ]
);

export const HarshEmpathy = new SpellTemplate(
    'Harsh Empathy',
    'Spell: You establish an unrelenting empathic link to another person, which allows you to feel everything they feel, they feel everything you feel. Mental trauma and respite is shared. Lasts 1 day',
    '10 meters, visual contact',
    [
        'base mana: 1',
        'increase duration: +1 mana per 2 days'
    ]
);

export const BrutalEmpathy = new SpellTemplate(
    'Brutal Empathy',
    'Spell: You establish an immediate empathic link to another person which causes the sum total of your life damage to be redistributed equally',
    '10 meters visual contact',
    [
        'base mana: 2',
        'redistribute unequally: 1 mana per life in your favor',
    ]
);

export const SpiritualRegeneration = new SpellTemplate(
    'Spiritual Regeneration',
    'Spell: You are able to convert mana into life and reverse on yourself and others.',
    'personal or direct contact',
    [
        'base mana: 1, heal 1 life per round for 1d6 rounds',
        'increase regen: 1 mana, +1d6 rounds (can be applied multiple times)',
        'apply to other person: +1 mana, other target consumes equal amount of mana',
        'recover mana: lose 1 maximum life, recover 1d6 mana, no roll. recover 1 maximum life per 24 hours with no option to speed up recover under any circumstances',
    ]
);

export const Quintessence = new SpellTemplate(
    'Quintessence',
    'Spell: You projectile vomit a stream of a silvery bubbling liquid. When it hits a target the liquid engulfs it completely. After 1 minute the liquid disappates and the target is released, for the target no time has passed.',
    '5 meters',
    [
        'base mana: 1. Make an unarmed attack to see if you hit a person',
        'duration 10 minutes, +1 mana',
        'duration 1 hour, +2 mana',
        'duration 10 hours, +3 mana',
        'duration 1 day, +4 mana',
        'duration 10 days, +5 mana',
        'if the liquid hits a surface or object heavier than 1000kg it will disappate immediately',
        'anything that touches the liquid will feel intense cold and take 1d6 damage per mana spent',
        'if damage equal to mana x 100 is dealt to the liquid it will disappate'
    ]
);

export const SolarFlare = new SpellTemplate(
    'Solar Flare',
    'Spell: Hot electric plasma engulfs your body, which you can direct at one target. If you are wearing clothes or armor they take damage. Lasts 1 minute',
    'personal, 10 meter range',
    [
        'base mana: 2',
        'each extra mana spent gives: +1 defense, damage absorbtion, +1d6 damage',
        'Anyone standing within 1 meter, or attacks you in melee takes 1d6 damage every round',
        'Gain +2 defense and damage absorbtion while in effect',
        'Move at double speed',
        'Send out jet of hot plasma dealing 2d6, (combat + agility) range 10 meters',
        'damage absorbtion to fire, lightning and plasma sources: 100'
    ]
);


//mutations
export const MortisAlbum = new SpellTemplate(
    'Mortis Album',
    'Mutation: body emits no heat (invisible to infrared), nails and hair become white and matte, your skin loses its color and becomes gray',
    undefined,
    [
        'you gain 1 radiation resistance at all times',
        'you no longer eat food, drink water or breathe air',
        'you no longer need to sleep to rest, instead sitting still for 4 hours is enough to gain a full nights rest',
        'you permanently increase perception by 1 and can see normally in darkness'
    ]
);

export const Ocultos = new SpellTemplate(
    'Ocultos',
    'Mutation: Eyes grow all over your body, at the rate of 1 per 1d12 days a new eye opens up somewhere randomly on your skin up to a maximum 33 additional eyes. The eyes are fully functional and grant the ability to gain a glipse of something of your choice, glipse closes the eye forever',
    undefined,
    [
        'any yes or no question: 2 mana',
        'any single word answer question: 3 mana',
        'any single sentence answer question: 4 mana',
        'any advanced question: 6 mana'
    ]
);

export const Biopod = new SpellTemplate(
    'Biopod',
    'Mutation: Nails and hair fall out and stop growing, a thin film of slick slime covers your skin, your pores turn into suckers which allow you to grab ahold of things, you gain the ability to turn your body extremely soft and elastic which allows you to squeeze through any slit at least 1 cm narrow'
);

export const Xeropaga = new SpellTemplate(
    'Xeropaga',
    'Mutation: Your tongue permanently transforms into a viper that delivers powerful neurotoxin when it bites. The snake phases through armor as if it was air, damage absorbtion from armor or cover has no effect. Additionally the first time you strike someone you gain 1d6 mana, they lose the same amount, this affect only works once per target per 24h.',
    undefined,
    [
        'use spell to hit their defense (standard rules) counts as full round action and you only have base level defense for the rest of the round. If you miss then no effect. No effects on robots',
        'base mana: 1',
        '1st round: 1d6 intelligence damage, drain 1d6 mana',
        '2nd round: 1d6 perception damage',
        '3rd round: 1d6 willpower damage',
        'you may opt to deal no damage for no mana cost, but you still drain'
    ]
);

export const TwinSoul = new SpellTemplate(
    'Twin Soul',
    'Mutation: You have a guest inside your mind, another entity. This entity has their own mental abilities and skill set. If it is in their interest they can help you, you may use their skills or mental abilities for any check.',
    undefined,
    [
        'Interference: This entity can always communicate with you, if it wishes to distract you you have -3 to all rolls',
        'Eject entity: If (and only if) the entity is willing you may eject it, if it has nowhere to go it simply seizes to exist',
        'Absorb entity: You may absorb the mind of a dying (below -100% life, but not dead) person, the person must be willing',
        'Battle of wills: if you absorb a mind while already having one then the guest has a chance to force out the host, each roll 2d10+willpower, highest wins, loser is forcefully ejected.'
    ]
);

export const Ferral = new SpellTemplate(
    'Ferral',
    'Mutation: Your skin turns into a dark shade of grey like iron then grow into small scales that rust and also slowly fall out. Your nails and teeth turn into black hard steel, your hair turn into thin steel wires',
    undefined,
    [
        'You gain 3 damage absorbtion at all times',
        'Your unarmed attacks gain 2 armor piercing and 1 damage',
        'You can eat and digest iron, if you do you gain +3 damage absorbtion for 1 day per 100 grams of iron',
        'Your base weight increases by 25%',
        'You increase strength and endurance by 1, decrease agility by 1',
        'Electrical weapons deal double damage and always bypass damage absorbtion'
    ]
);



export const SpellsPerks = [MortisAlbum, Ocultos, Biopod, Xeropaga, TwinSoul, Ferral,

    DimensionalSwap, Splinter, Unmask, UmbraConstant, MirrorTrap, DarkVortex, LuminiferousTransubstantiation, ColorBias, Rift, Conversation, HyperSight, Tesseraction,
    HarshEmpathy, BrutalEmpathy, SpiritualRegeneration, Quintessence, SolarFlare];