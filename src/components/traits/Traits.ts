import { IHooker } from '../Character';
import { race } from '../races/Races';


export interface Trait extends IHooker {
    name: string;
    cost: number;
    description: string;
    race: race | 'any';
}

const Coward: Trait = {
    name: 'Coward',
    cost: -10,
    description: 'You are a coward that more easily falls vicim to fear. You may never choose fight when frighetened or coerced and you receive a -3 penalty to resist all sources of fear.',
    applyTo: 'fear',
    amount: -2,
    race: 'any',
}

const Brave: Trait = {
    name: 'brave',
    cost: 10,
    description: 'You are brave and are less likely to be phased by fear. You are always allowed to choose fight when frightened, remain silent when interrogated, fight when coerced, you receive +3 to resist all sources of fear, when you take mental health damage from fear related sources you take 1 less (minimum 0).',
    applyTo: 'fear',
    amount: 3,
    race: 'any',
}

const FoolHardy: Trait = {
    name: 'foolhardy',
    cost: 10,
    description: 'At first glance you seem brave, but actually you are just ignoring the feeling completely. You gain 1 fear resistence but you are no longer privy to your own fear stat, the DM will roll for your fear without your knowledge',
    applyTo: 'fear',
    amount: 1,
    race: 'any',
}

const Frail: Trait = {
    name: 'frail',
    cost: -10,
    description: 'You are frail and easily damaged, -2 maximum hitpoints',
    applyTo: 'life',
    amount: -2,
    race: 'any',
}

const Resillient: Trait = {
    name: 'resillient',
    cost: 20,
    description: 'You are able to withstand more punishment, +2 maximum hitpoints',
    applyTo: 'life',
    amount: 2,
    race: 'any',
}

const Reckless: Trait = {
    name: 'reckless',
    cost: -10,
    description: 'You are reckless when using tools, items lose condition at double rate',
    applyTo: '',
    amount: 0,
    race: 'any',
}

const Gifted: Trait = {
    name: 'gifted',
    cost: 80,
    description: 'you are naturally gifted and everything seems to come easier to you, gain +1 to your 4 lowest base stats, however your experience multiplier is reduced by 1 (min 1)',
    applyTo: 'experienceMultiplier',
    amount: -1,
    race: 'any',
}

const FastMetabolism: Trait = {
    name: 'fast metabolism',
    cost: 20,
    description: 'You have a very high metabolism, you heal +1 life per day, eat 50% more, poison and drugs acts twice as fast and last half as long',
    amount: 0,
    applyTo: '',
    race: 'any',
}

const DoubleHanded: Trait = {
    name: 'double handed',
    cost: 10,
    description: 'you are proficient with both hands, can do any task with either hand',
    amount: 0,
    applyTo: '',
    race: 'any',
}

const Phobia: Trait = {
    name: 'phobia',
    cost: -10,
    description: 'pick one thing, your character has a phobia for that and is forced to make a fear roll when they see it',
    amount: 0,
    applyTo: '',
    race: 'any',
}

const WealthyFamily: Trait = {
    name: 'wealthy family',
    cost: 30,
    description: 'you come from a wealthy family, you start with an additional 60k credits and you are known in your home town, you have innate high society minimum mid success on savoir-faire',
    amount: 0,
    applyTo: '',
    race: 'any',
}

const LightningReflexes: Trait = {
    name: 'lightning reflexes',
    cost: 20,
    description: 'You are fast to react to danger, you add +3 to your sequence and +3 to rolls triggered by reaction',
    amount: 3,
    applyTo: 'sequence',
    race: 'any',
}

const Frugal: Trait = {
    name: 'frugal',
    cost: 10,
    description: 'you are always vigilant trying to find the best prices, all purchases are 10% off (maxium 10k credits per day)',
    amount: 0,
    applyTo: '',
    race: 'any',
}

const Durable: Trait = {
    name: 'durable',
    cost: 20,
    description: 'you are durable and gain +1 damage absorbtion',
    amount: 1,
    applyTo: 'damageAbsorption',
    race: 'any',
}

const MentallyFlexible: Trait = {
    name: 'mentally flexible',
    cost: 30,
    description: 'you are highly mentally flexible, you gain +1 to your experience multiplier',
    amount: 1,
    applyTo: 'experienceMultiplier',
    race: 'any',
}

const Stubborn: Trait = {
    name: 'stubborn',
    cost: -10,
    description: 'you are stubborn and unlikely to change your ways, -1 to experience multiplier (min 1) and you are resistent to being convinced (+2 resist persuasion)',
    amount: -1,
    applyTo: 'experienceMultiplier',
    race: 'any',
}

const ForgetfulFace: Trait = {
    name: 'forgetful face',
    cost: -10,
    description: 'people are less likely to remember your face or your name, you dont tend to stand out in a crowd. 50% chance that you wont get any reputation for your deeds',
    amount: 0,
    applyTo: '',
    race: 'any',
}

const Blind: Trait = {
    name: 'blind',
    cost: -30,
    description: 'your eyesight is so poor that you are legally blind, your perception counts as -5 for all visual rolls (where you need to see), 0 if you have cybernetic eyes, additionally if you move faster than base speed you risk running into things',
    amount: 0,
    applyTo: '',
    race: 'any',
}

const Deaf: Trait = {
    name: 'deaf',
    cost: -20,
    description: 'your hearing is so poor that you are legally deaf, your perception counts as -5 for all auditory rolls, 0 if you have cybernetic ears. You can speak using sign language',
    amount: 0,
    applyTo: '',
    race: 'any',
}

const Mute: Trait = {
    name: 'mute',
    cost: -20,
    description: 'you cant speak, you can only communicate in writing. All skills that involve speaking are impossible for you',
    amount: 0,
    applyTo: '',
    race: 'any',
}

const NaturalTalent: Trait = {
    name: 'natural talent',
    cost: 10,
    description: 'pick one skill, you have +3 to that skill',
    amount: 0,
    applyTo: '',
    race: 'any',
};

const Conspiritorial: Trait = {
    name: 'Conspiritorial',
    cost: -10,
    description: 'You tend to believe in conspiricies and often fall prey to magical thinking. Whenever you roll for general knowledge you suffer a -5, additionally evidence contrary to your beliefs do not cause you to change your beliefs.',
    amount: 0,
    applyTo: '',
    race: 'any',
};

const PersonOfAction: Trait = {
    name: 'Person of action',
    cost: 20,
    description: 'You are a person of action, you gain +1 action points',
    amount: 1,
    applyTo: 'actionpoints',
    race: 'any'
};

const Flight: Trait = {
    name: 'Flight',
    cost: 40,
    description: 'You were born with large arms and hollow bones. You have limited flight, while unencumbered and unexhausted you can maintain level flight for a number of meters equal to strength + athletics before you must touch ground, penalties to physical activities like life damage subtract. Only for nekovians',
    amount: 0,
    applyTo: '',
    race: 'nekovian',
};

const Blubber: Trait = {
    name: 'Blubber',
    cost: 10,
    description: 'You were born in a extremely cold environment and have a layer of blubber under your skin that protects you from extreme cold but makes you vulnerable to heat and slows you down by 1 movement. You can withstand temperatures as cold as -60 Celsius without suffering any negative effects.',
    amount: -1,
    applyTo: 'speed',
    race: 'nekovian',
};

const Magnetoreception: Trait = {
    name: 'Magnetoreception',
    cost: 40,
    description: 'You were born with latent magnetoreception allowing you to feel magnetic fields. You may use your perception to detect magnetic fields. Only Shambras',
    amount: 0,
    applyTo: '',
    race: 'shambras',
};

const HardShell: Trait = {
    name: 'Hard Shell',
    cost: 10,
    description: 'Your shell is much harder than most shambras, damage absorbtion is increased from 1 to 2 while it is thick.',
    amount: 0,
    applyTo: '',
    race: 'shambras'
};

const Hyperredolexant: Trait = {
    name: 'Hyperredolexant',
    cost: 20,
    description: 'When you enter redolex you feel a deeper rage than most others of your kin, your bonus to all metal activity is increased to 4. Only Merlions',
    amount: 0,
    applyTo: '',
    race: 'merlion'
};

export const GetTraits = (): Trait[] & IHooker[] => {
    return [
        Coward,
        Brave,
        FoolHardy,
        Frail,
        Resillient,
        Reckless,
        Gifted,
        FastMetabolism,
        DoubleHanded,
        Phobia,
        WealthyFamily,
        LightningReflexes,
        Frugal,
        Durable,
        MentallyFlexible,
        Stubborn,
        ForgetfulFace,
        Blind,
        Deaf,
        Mute,
        NaturalTalent,
        Conspiritorial,
        PersonOfAction,
        Flight,
        Magnetoreception,
        HardShell,
        Hyperredolexant,
        Blubber
    ].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
};