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
    constructor(name: string, description: string, castingTime?: string, range?: string, results?: string[] | undefined) {
        this.name = name;
        this.skill = 'spells';
        this.level = 1;
        const rangeText = range !== undefined ? `range: ${range}` : '';
        const castingText = castingTime !== undefined ? `Casting time: ${castingTime}. ` : '';
        this.description = `${castingText}${description} ${rangeText}`;
        this.applyTo = spellhook.applyTo;
        this.amount = spellhook.amount;
        this.results = results;
    }
    cost(): number {
        return this.level * 10;
    }
}

//spells
const DimensionalSwap = new SpellTemplate(
    'Dimensional Swap',
    'Spell: You can cause an object to begin to exist or seize to exist by finding a virtual parallel universe which is identical in every way except for the objects existence.' +
    'The object can not be of any previous consequence since it had to have either existed or not in both worlds. The object and its circumstances must be known to you. It is not possible to create paradoxes',
    '1 action',
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

const Splinter = new SpellTemplate(
    'Splinter',
    'Spell: You cover yourself in a cocoon, after a minute the cocoon splits open revealing two clones of yourself with all of your capabilities and has shared mana, both think they are the original, your equipment and inventory is duplicated. Lasts 24 hours after which one will die and whoever is left is the original (players choice). The duplicate will slowly disintigrate into nothing after death (including equipment which immediately becomes innert and useless). Spend 2 mana every day to keep it alive longer, prevents mana regen while active. Skills gained by a clone is gained by the original too, experience multiplier applies across the whole set. Mana is shared between clones',
    '1 minute',
    'personal',
    [
        'Base mana: 3',
        'Increase duration: +1 mana per 24 hour',
        'Increase number of clones: +3 per clone'
    ]
);

const Unmask = new SpellTemplate(
    'Unmask',
    'Spell: Your skin splits open and shreds to pieces, revealing a new person hiding underneat. This person is the real you, this person doesnt need to have your face, gender, DNA or even height (you may increase or decrease up to 10cm). Leaves behind residue of your old skin.',
    '1 action',
    'personal',
    [
        'base mana: 2 (change face only)',
        'change fingerprints: +1 mana',
        'change color of skin, eyes and/or hair: +1 mana',
        'change gender: +2 mana (requires change DNA)',
        'change DNA: +1 mana',
        'change trait: +3 mana (requires character points if you add a positive or remove a negative, only one trait)',
        'you can not change your dna, fingerprints to match someone else, to match someone\'s looks you must also roll a (disguise) subterfuge'
    ]
);

const UmbraConstant = new SpellTemplate(
    'Umbra Constant',
    'Spell: Your shadow becomes a temporary fixture on the ground, you may also enter the shadow and hide inside it for up to one hour. If the surface is damaged you get pushed out immediately.',
    '1 move action',
    'direct contact',
    ['base mana: 2',
        'increase to five hours: +1 mana',
        'increase to two days: +2 mana',
        'increase to ten days: +3 mana',
        'increase to fourty days: +4 mana',
        'increase to one hundred days: +5 mana',
        'hide additional stuff: +1 mana per 10 kg']
);

const MirrorTrap = new SpellTemplate(
    'Mirror Trap',
    'Spell: you trap someone in a mirror when you see them through the mirror directly, they become trapped inside a fake mirror universe, they are automatically freed when the mirror is broken, while inside the mirror they are timeless and immortal, lasts 1 day',
    '1 action',
    '10 meters, visual contact',
    ['base mana: 3',
        'increase by 1 day: +1 mana per day']
);

const DarkVortex = new SpellTemplate(
    'Dark Vortex',
    'Spell: You draw dark matter from all directions into one single point up to 1 meter away from your head, the dark matter creates a gravity well with 1m/s/s pull at 1 meter away, lasts 1 minute. You can interact with this point as if it was a tiny ball',
    '1 action',
    '1 meter, visual contact',
    ['base mana: 1',
        'increase gravity: +1 mana per 1/m/s/s',
        'increase distance: +1 mana per 5 meters']
);

const LuminiferousTransubstantiation = new SpellTemplate(
    'Luminiferous Transubstantiation',
    'Spell: Your body converts into pure ultra high energy light that moves at the speed of light through up to 1m of solid or liquid matter or 30m of air, you travel up 30m. Clothes and equipment not included by default. While in light form you are blind, you must roll 10 points higher to accurately rematerialize where you want to, otherwise you will rematerialize within 1d6 meters of the target.',
    '1 action',
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

const ColorBias = new SpellTemplate(
    'ColorBias',
    'Spell: You alter the color charge of the subatomic matter of a small object that you touch, this object becomes intensly radiactive as it slowly converts into energy. Level 8 radiation at 1 meter. 1 microgram of the object is annihilated per hour, stops at 2 hours. Object weight max 1kg',
    '1 action',
    'direct contact',
    [
        'base mana: 3',
        'increase radiation level: +1 mana per level (+0.1 microgram per hour)',
        'increase duration: +1 mana per hour',
        'increase max kg: +1 mana per kg'
    ]
);

const Rift = new SpellTemplate(
    'Rift',
    'Spell: Opens up a tiny rift to another dimension at the palm of your hand, a strange energy leaks out. This rift can be moved around only by you, you move it freely with your mind. It moves at a rate of up to 600meters per round. It must be within 300 meters of you. Anyone that touches it must roll 1d10 for a random effect. It lasts as long as you want but drains you of 1 mana per turn. To hit a person you must make a combat roll. If two consequtive effects are the same, reroll.',
    '1 action',
    'direct contact',
    [
        'base mana: 3',
        'The caster rolls the effect, can reroll for 1 mana',
        '1: a burst of unknown, shimmering energy escapes, roll 1d6, 1: strength, 2: agility, 3: endurance, 4: perception, 5: intelligence, 6: willpower. Roll 1d6 damage',
        '2: a burst of invisible kinetic energy escapes, target is violently pushed away from rift, takes 2d6 damage (10 armor piercing), is moved an equal amount of meters away.',
        '3: a burst of gamma rays escape, target gains 1d8 levels of radiation',
        '4: a burst of heat escapes, target is ignited, takes 1d6 damage (8 armor piercing) per turn for 10 turns',
        '5: a bubbling prismatic tentacle lashes out, target is healed 2d6 life but paralyzed for an equal number of rounds, gaining 1 life each round.',
        '6: a stream of large teeth engulf the target, target takes 1d6 damage (2 armor piercing) and has a -10 penalty to all actions for 1 round',
        '7: a burst of toxic black ash escapes, all people within 6 meters take 1d4 damage (6 armor piercing) and are blinded for 1 round',
        '8: a white bolt of lightning escapes and hits the target, the target can take 1 extra action and takes 1 mental health damage for 1d6 rounds',
        '9: the target gains control of the rift, but mana is drained at a double rate',
        '10: a burst of otherworldy mental projections escape, target gains 1d6 mana, loses 2d6 mental health, the target can gain a spell or mutation immediately.'
    ]
);

const Conversation = new SpellTemplate(
    'Conversation',
    'Spell: You mentally communicate with anyone youve previously met, you may do at most 4 back/fourth, maximum 100 words each time. Persons who dont know you can do this will experience it as an inner monologue, asking uncomfortable questions may yield no answer',
    '1 action',
    'unlimited',
    [
        'base mana: 2',
        'person is not on the same planet: +1 mana',
        'person is not in the same system: +2 mana',
        'person is dead: +5 mana',
        'longer converation: +1 mana per back/fourth'
    ]
);

const HyperSight = new SpellTemplate(
    'Hyper Sight',
    'Spell: You see things from the vantage point of a higher dimension, allowing you to see through matter as if it were transparent for up to 100 meters. Lasts 10 minutes',
    '1 move action',
    'personal',
    [
        'base mana: 2',
        'increase range: +1 mana per 100 meters',
        'increase time: +1 mana per 10 minutes']
);

const Tesseraction = new SpellTemplate(
    'Tesseraction',
    'Spell: you designate a 1x1x1 cubic meter volume to become the host of a four dimensional tesseract. You add 7 extra cubic meters of volume which only you can interact with, you may rotate the tesserate so that any of the volumes becomes coterminus with reality. Lasts 5 days',
    '1 action',
    '1 meter visual contact',
    [
        'base mana: 3',
        'increase duration: +1 mana per 2 days',
        'increase size: +1 mana per cubic meter',
        'allow someone else to interact: +1 mana per person'
    ]
);

const SensoryMeld = new SpellTemplate(
    'Sensory meld',
    'Spell: You establish an unrelenting empathic link to another person, you perceive everything they do, they perceive everything you do. Lasts 24 hours. Once per hour the target may attempt to suppress this effect with a contested roll (2d10 + willpower + spells). If either die while this is in effect the other takes 2d6 mental health damage from the trauma. You can have multiple links at the same time, sensory perception is shared across the network.',
    'free action',
    '10 meters, visual contact',
    [
        'base mana: 1',
        'increase duration: +1 mana per 2 days',
        'increase distance: +1 mana per 4 meters',
        'add telepathy: +2 mana',
        're-establish link without visual contact: +5 mana, allows contest to resist'
    ]
);

const EmapthicEqualibrium = new SpellTemplate(
    'Empathic Equalibrium',
    'Spell: You establish an immediate empathic link to another person which causes the sum total of your life damage and mental health damage to be redistributed equally. Both know what the other has been thinking since they woke up. There is no contested roll. Can only be used once per round.',
    'free action',
    '10 meters visual contact',
    [
        'base mana: 2',
        'redistribute unequally: 1 mana per life in your favor',
    ]
);

const SpiritualRegeneration = new SpellTemplate(
    'Spiritual Regeneration',
    'Spell: You are able to convert mana into life and reverse on yourself and others.',
    '1 minute',
    'personal or direct contact',
    [
        'base mana: 1, heal 1 life per round for 1d6 rounds',
        'increase regen: 1 mana, +1d6 rounds (can be applied multiple times)',
        'apply to other person: +1 mana, other target consumes equal amount of mana',
        'recover mana: lose 1 maximum life, recover 1d6 mana, no roll. recover 1 maximum life per 24 hours with no option to speed up recover under any circumstances',
    ]
);

const Quintessence = new SpellTemplate(
    'Quintessence',
    'Spell: You projectile vomit a stream of a silvery bubbling liquid. When it hits a target the liquid engulfs it completely. After 1 minute the liquid disappates and the target is released, for the target no time has passed.',
    '1 action',
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

const SolarFlare = new SpellTemplate(
    'Solar Flare',
    'Spell: Hot electric plasma engulfs your body, which you can direct at one target, damage counts as heat and electric, as such non-fire resistant armor only applies half damage absorbtion, power armor and electric devices have no effect while in contact with flame. If you are wearing clothes they are immediately incinirated, armor loses 1 condition (1 DA) per turn. Fire resistant materials instead take 4 times longer to damage. Lasts 1 minute',
    '1 action',
    'personal, 10 meter range',
    [
        'While active add spells skill to base defense, add +2 damage absorbtion, increase speed by +3',
        'Anyone who attacks you in melee takes 1d6 damage (this damage applies even if they miss!)',
        'Anyone who starts their turn within 1 meter takes 1d6 damage',
        'Send out jet of hot plasma dealing 2d6, (combat + agility) range 10 meters',
        'damage absorbtion from fire, lightning and plasma sources: 100',
        'base mana: 2',
        'can spend extra mana: +1 damage absorbtion, +1d6 damage per 1 mana',
        'can spend extra mana: +3 speed per 1 mana',
        'can spend extra mana: +1 meter area of effect per 2 mana'
    ]
);

const QuantumLeap = new SpellTemplate(
    'Quantum Leap',
    'Spell: You make the electrons in your body perform a quantum leap, removing their friction from the rest of the world for a split second. While frictionless you can move through solid objects freely and become completely invisible. Gravity still applies so if you stand still and make a quantum leap you will fall through the ground potentially dooming yourself. If you end the spell while inside solid or liquid matter it fuses with your body- destroying it utterly. Lasts up to 1 round.',
    '1 action',
    'personal',
    [
        'base mana: 1 entire body or partial, clothes, armor, equipment, inventory is not automatically included',
        'quantum leap other matter: +1 mana per 20 kg',
        'extend duration: +1 mana per round (after 2 rounds you take 1 damage per round, this is damage can not be reduced by any means)',
        'You can use this spell in place of dodge or block, making the attack phase through you. If you are multi-attacking this counts as a melee attack',
        'To jump through a wall you must also succeed a acrobatics 15 or you will fuse with the wall or floor',
        'You can make part of your body frictionless',
        'While frictionless you are immune all photon and material effects.'
    ]
);

const Assimilation = new SpellTemplate(
    'Assimilation',
    'Spell: You touch a living being directly and begin assimilating their body into yours, they roll 2d10 + willpower + spells to contest your roll, the winner steals 1d4 life and 1d2 mana from the loser. Additionally you gain some features from the creature if they are a different species from yours (determined by the GM), if the loser dies then compare the winner and loser attribute, pick the one with the biggest difference and move one step closer. All these effects last 2d10 days.',
    '1 action',
    'touch',
    [
        'base mana: 2',
        'increase damage +1d4 life, +1d2 mana, increase cost mana: +1',
        'increase duration +1d10 days: increase cost mana: +1',
        'negate ability loss: +4 mana (no effect if positive ability)',
        'negate effect if lose: +4 mana (no effect on either if caster loses)',
        'You can exceed your maximum life and mana using this. You lose 1 of each every 24 hours until they are normal again.'
    ]
);

const ManipulateSpacetime = new SpellTemplate(
    'Manipulate Spacetime',
    'Spell: you change the fabric of spacetime to create a unidirectional field of gravity in the shape of a cylinder 1 meter across, directed away from you, the direction of gravity can be in any direction of your choosing. It does not cancel out existing gravity fields but rather adds to them. The field lasts for 6 seconds and propagates at the speed of light. Anything caught in this field is accelerated by 10m/s/s. Each time you use this ability you become 1d10 days younger (over the course of a minute) per mana spent.',
    '1 action',
    '100 meters',
    [
        'base mana: 1',
        'can spend extra mana: double the length per 1 mana (may be applied multiple times, each time doubling length)',
        'can spend extra mana: increase cylinder diameter by 1 meter per 1 mana',
        'can spend extra mana: increase duration by 6 seconds per 1 mana',
        'can spend extra mana: increase field strength of 10/s/s per 1 mana',
    ]
);

const MoteOfPureEntropy = new SpellTemplate(
    'Mote of Pure Entropy',
    'Spell: You produce a mote in the palm of your hand which you can then move freely once per round at the rate of 10 meters/round, the mote gives of white light when in contact with air. If it comes into contact with a solid object roll a 1d10, the mote then evaporates. The mote will evaporate at the end of your turn, you can prevent evaporation with a spell + willpower roll vs 5 x number of turns the mote has been active. If you have multiple motes then you must keep track of them seperately, if two motes touch then they annihilate each other.',
    '1 action',
    '40 meters',
    [
        'base mana: 1',
        'add effect: +2 mana (per effect)',
        'to hit an unwilling creature you must defeat their defense with your spell roll',
        '1: The target takes 1d10 falling damage and is flung 1d6 meters in a random direction, 1 meter if the object is 200kg or heavier, 500kg or heavier not flung',
        '2: The target ages 4d12 days, creatures experience this trauma as 2d6 mental health damage, it does not regenerate life from this',
        '3: The surface area where contact is made is disintegrated, creatures and objects take 2d4 damage which cant be reduced, if the creature is wearing armor the armor damage absorbtion is reduced by 2d4 instead',
        '4: The surface area where contact is made heats up and catches fire, 2d6 thermal damage for 4 rounds',
        '5: The target briefly glows brightly and then cools down, 3d6 thermal damage, the creature loses its move action on its next 1d4 rounds',
        '6: The targete speeds up, objects operate at double speed, creatures gain 1 extra action, lasts 1d6 rounds at the end the creature gains one exhaustion level',
        '7: The target swap place with the caster of the mote',
        '8: The target is restored to previous state, restore 1d3 condition (max pristine) or regenerate 1d6 life instantly.',
        '9: The target begins to glow brightly for 1d4 rounds, the target has +10 base defense and -10 to all rolls based on sight',
        '10: The target becomes completelybn  insvisible (entire spectrum) and blind for 2d12 rounds.',
    ]
);

const Precognition = new SpellTemplate(
    'Precognition',
    'Spell: You learn the outcome of your next action. Before you take an action that takes no more than 1 round you may attempt to see the outcome before it happens. First you roll for precognition, then you roll for your skill, you find out the outcome of your result and may choose whether to move forward or do something else. If you don\'t proceed then you end your turn.',
    'free action',
    undefined,
    [
        'for an action that takes 1 action: 2 mana',
        'for an action that takes 1 minute: 4 mana',
        'for an action that takes 10 minutes: 6 mana',
        'for an action that takes 1 hour: 8 mana',
        'for an action that takes 4 hours: 10 mana',
        'for an action that takes 8 hours: 12 mana',
        'for an action that takes 16 hours: 14 mana',
        'for an action that takes 24 hours: 16 mana'
    ]
);

const ThoughtInvasion = new SpellTemplate(
    'Thought Invasion',
    'Spell: you look at someone within range, think of a phrase cause them to speak it out loud. They believe it is their own thoughts. They make a contested willpower + spell + 2d10 roll to resist. If they resist they instead feel the thought as an intrusive foreign thought. The spell only works if the target is awake, lucid and able to speak.',
    undefined,
    '60 meters',
    [
        'base mana: 3',
        'you can delay the phrase based on time, up to 24 hours per 1 mana extra',
        'you can delay the phrase until a simple unambigious trigger for 2 mana, if the trigger does not occur within 24 hours nothing happens',
        'you can make the target believe the phrase is true for 6 seconds for 4 extra mana',
        'the target is under no obligation to believe the phrase is true otherwise, merely that it had this thought and said it. It is up to the GM\'s discretion to decide how the target reacts'
    ]
);

//mutations
const MortisAlbum = new SpellTemplate(
    'Mortis Album',
    'Mutation: body emits no heat (invisible to infrared), nails and hair become white and matte, your skin loses its color and becomes gray. If injured white powder escapes instead of blood, you are no longer suseptible to the bleed condition.',
    undefined,
    undefined,
    [
        'you gain 1 radiation resistance at all times',
        'you no longer eat food, drink water or breathe air',
        'you no longer need to sleep to rest, instead sitting still for 4 hours is enough to gain a full nights rest',
        'you permanently increase your perception by 1',
        'you can see shapes and contours in darkness'
    ]
);

const Ocultos = new SpellTemplate(
    'Ocultos',
    'Mutation: Eyes grow all over your body, at the rate of 1 per 1d12 days a new eye opens up somewhere randomly on your skin up to a maximum 33 additional eyes. The eyes are fully functional and grant the ability to gain a glipse of something of your choice, glipse closes an eye of your choice which then disappears. The GM rolls the correctness secretly.',
    '1 minute',
    undefined,
    [
        'any yes or no question: 2 mana. Answer correctness 99%',
        'any single word answer question: 3 mana. Answer correctness 95%',
        'any single sentence answer question: 4 mana. Answer correctness 90%',
        'any advanced question: 6 mana. Answer correctness 80%',
        'you add +5 to your sequence'
    ]
);

const Biopod = new SpellTemplate(
    'Biopod',
    'Mutation: Nails and hair fall out and stop growing, a thin film of slick transparent mucus covers your skin, your pores turn into suckers which allow you to grab ahold of things and stick to hard surfaces, you gain the ability to turn your body extremely soft and elastic which allows you to squeeze through any slit at least 1 cm narrow',
    undefined,
    undefined,
    [
        'you automatically defeat attempts to grapple you, nothing can restrain you',
        'slashing damage (for example blades) deal only half damage'
    ]
);

const Xenobite = new SpellTemplate(
    'Xenobite',
    'Mutation: Your tongue permanently transforms into a viper that delivers powerful neurotoxin when it bites its victim. The snake phases through armor and clothes as if it was air, damage absorbtion from any source has no effect. Additionally the first time you strike someone you gain 1d6 mana, they lose the same amount, after resting this can be done again.',
    '1 action',
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

const TwinSoul = new SpellTemplate(
    'Twin Soul',
    'Mutation: You have a guest inside your mind, another entity. This entity has their own mental abilities and skill set. If it is in their interest they can help you, you may use their skills or mental abilities for any check.',
    undefined,
    'touch',
    [
        'Interference: This entity can always communicate with you, if it wishes to distract you you have -3 to all rolls',
        'Eject entity: If (and only if) the entity is willing you may eject it, if it has nowhere to go it simply seizes to exist',
        'Absorb entity: You may absorb the mind of a dying (below -100% life, but not dead) person, the person must be willing',
        'Slumber: You can enter a passive state where the other mind takes over, if you stay passive for more than 24h then you must succeed battle of wills or permanently become the passive',
        'Battle of wills: if you absorb a mind while already having one then the guest has a chance to force out the host, each roll 2d10+willpower, highest wins, loser is forcefully ejected.'
    ]
);

const Ferral = new SpellTemplate(
    'Ferral',
    'Mutation: Your skin turns into a dark shade of grey like iron then grow into small scales that rust and also slowly fall out. Your nails and teeth turn into black hard steel, your hair turn into thin steel wires. You are not affected by magnetism. Your insides and blood are also black and metallic.',
    undefined,
    undefined,
    [
        'You gain permanenty: 2 damage absorbtion',
        'You gain permanently: 1 armor piercing and +1 damage on all unarmed attacks',
        'you gain permanently: 1 strength, 1 endurance, -1 agility, -1 perception',
        'you gain permanently: +25% weight',
        'you gain permanently: -1 speed',
        'As an action you can increase damage strength by 2 and absorbtion by 1 and damage by 1 by eating 500 grams of pure iron, doing so costs 3 mana and every drops speed by 0.5 (round down), speed cant go below 4, lasts one 24 hours'
    ]
);

const CursedBlood = new SpellTemplate(
    'Cursed Blood',
    'Mutation: Your blood gains the ability to absorb and emit gamma rays, each dose of radiation you gain heals 1 life and 1 level of exhaustion and 1 dose of radiation when you rest. Additionally you can emit gamma radiation, when you do you lose the ability to heal from radiation for 24 hours. Be warned that you still suffer all negative effects of radiation poisoning, including risk of death.',
    undefined,
    undefined,
    [
        'Per 1 dose: 1 life, 1 exhaustion',
        'If you absorb 7 or more doses of radiation you also regenerate 1 mana when you rest',
        'Emit radiation: As an action spend 2 mana, emit 4 level for 24 hours (you gain 1 dose per 12 hours), at 1 meter others feel level 3 radiation',
        'If you bleed, your blood will emit level 5 radiation at 1 meter distance',
    ]
);

const XRayVision = new SpellTemplate(
    'X-Ray Vision',
    'Mutation: your visual band changes from normal visible light (400nm - 700nm wavelength) to x rays (0.01nm - 10nm), as such low density materials become nearly invisible to you, high density remain visible. Additionally whenever your eyes are open you emmit x rays in all directions, this counts as illumination for you up to 100 meters, and as a level 1 radiation source to everyone within 2 meters. You also gain +2 radiation resistance.',
    undefined,
    undefined,
    [
        'You can stop the radiation by closing your eyes, however it does not matter if you are conscious as long as you are alive',
        'You can temporarily extend your x-ray vision length by two for 1 hour, costs 1 mana, increases radiation level by 1 (this can be stacked), when doing so radiation source counts as 1 level lower per 2 meters',
        'You can temporarily increase your radiation resistance by 1 for 1 hour, cost 1 mana'
    ]
);

const ThornSkin = new SpellTemplate(
    'Thorn Skin',
    'Mutation: Sharp needlelike thorns extrude from your skin over your entire body, no place is without, the thorns color match your hair color or skin color. These thorns have a variety of effects and can be shot out from anywhere on your body.',
    undefined,
    undefined,
    [
        'The thorns offer small protection, increase damage absorbtion by 1 permanently',
        'The torns can help you climb, you add +5 on any climbing check',
        'Anyone who grapples you takes 1d6 damage',
        'As an action you can shoot out thorns at one target, roll 2d10 + spell + agility vs their defense, if you hit they take 1d6 damage, costs 1 mana. Thorns immediately grown back',
        'You may enlognate the thorns at will, it takes 10 minutes (100 consecutive full round actions), costs 1 mana, lasts 24 hours. Each time add +1d6 to any damage, +5 to climb and +1 damage absorbtion'
    ]
);



export const SpellsPerks = [MortisAlbum, Ocultos, Biopod, Xenobite, TwinSoul, Ferral, CursedBlood, XRayVision, ThornSkin,//9

    DimensionalSwap, Splinter, Unmask, UmbraConstant, MirrorTrap, DarkVortex, LuminiferousTransubstantiation, ColorBias, Rift, Conversation, HyperSight, Tesseraction,
    SensoryMeld, EmapthicEqualibrium, SpiritualRegeneration, Quintessence, SolarFlare, QuantumLeap, Assimilation, ManipulateSpacetime, MoteOfPureEntropy, Precognition, ThoughtInvasion //23
];