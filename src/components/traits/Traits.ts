import { IHooker } from '../Character';


export interface Trait extends IHooker {
    name: string;
    cost: number;
    description: string;
}

const Coward: Trait = {
    name: 'cowardwardice',
    cost: -10,
    description: 'You are a coward that more easily falls vicim to fear. willpower counts as 2 lower for fear',
    applyTo: 'fear',
    amount: -2,
}

const Brave: Trait = {
    name: 'brave',
    cost: 10,
    description: 'You are brave and are less likely to be phased by fear. willpower counts as 2 higher for fear',
    applyTo: 'fear',
    amount: 2,
}

const FoolHardy: Trait = {
    name: 'foolhardy',
    cost: 10,
    description: 'At first glance you seem brave, but actually you are just ignoring the feeling completely. You gain 1 fear resistence but you are no longer privy to your own fear stat, the DM will roll for your fear without your knowledge',
    applyTo: 'fear',
    amount: 1,
}

const Frail: Trait = {
    name: 'frail',
    cost: -10,
    description: 'You are frail and easily damaged, -2 maximum hitpoints',
    applyTo: 'hitpoints',
    amount: -2,
}

const Resillient: Trait = {
    name: 'resillient',
    cost: 20,
    description: 'You are able to withstand more punishment, +2 maximum hitpoints',
    applyTo: 'hitpoints',
    amount: 2,
}

const Reckless: Trait = {
    name: 'reckless',
    cost: -10,
    description: 'You are reckless when using tools, items lose condition at double rate',
    applyTo: '',
    amount: 0,
}

const Gifted: Trait = {
    name: 'gifted',
    cost: 80,
    description: 'you are naturally gifted and everything seems to come easier to you, gain +1 to your 4 lowest base stats, however your experience multiplier is reduced by 1 (min 1)',
    applyTo: '',
    amount: 0,
}

const FastMetabolism: Trait = {
    name: 'fast metabolism',
    cost: 20,
    description: 'You have a very high metabolism, you heal +1 life per day, eat 50% more, poison and drugs acts twice as fast and last half as long',
    amount: 0,
    applyTo: ''
}

const DoubleHanded: Trait = {
    name: 'double handed',
    cost: 10,
    description: 'you are proficient with both hands, can do any task with either hand',
    amount: 0,
    applyTo: '',
}

const Phobia: Trait = {
    name: 'phobia',
    cost: -10,
    description: 'pick one thing, your character has a phobia for that and is forced to make a fear roll when they see it',
    amount: 0,
    applyTo: ''
}

const WealthyFamily: Trait = {
    name: 'wealthy family',
    cost: 30,
    description: 'you come from a wealthy family, you start with an additional 40k credits and you are known in your home town',
    amount: 0,
    applyTo: '',
}

const Aggressive: Trait = {
    name: 'aggressive',
    cost: 10,
    description: 'you are particularly aggressive and fast to fight, +2 to sequence and -2 to all defense',
    amount: 0,
    applyTo: ''
}

const YoungShambra: Trait = {
    name: 'young shambra',
    cost: 0,
    description: 'all shambras age 26-35: -2 defense, -4 climb and swim, -6 jump',
    amount: 0,
    applyTo: ''
}

const JuvenileShambra: Trait = {
    name: 'juvenile shambra',
    cost: 0,
    description: 'all shambras age 36-50: -4 defense, -8 climb and swim, -12 jump, +1 life',
    amount: 0,
    applyTo: ''
}

const AdultShambra: Trait = {
    name: 'adult shambra',
    cost: 0,
    description: 'all shambras age 51-70: -6 defense, -12 climb and swim, -18 jump, +1 life',
    amount: 0,
    applyTo: ''
}

const MatureShambra: Trait = {
    name: 'mature shambra',
    cost: 0,
    description: 'all shambras age 71-100: -8 defense, -16 climb and swim, -24 jump, +2 life',
    amount: 0,
    applyTo: ''
}

const VenerableShambra: Trait = {
    name: 'Venerable shambra',
    cost: 0,
    description: 'all shambras age 100+: -10 defense, -20 climb and swim, -30 jump, +3 life',
    amount: 0,
    applyTo: ''
}

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
        Aggressive,
        YoungShambra,
        JuvenileShambra,
        AdultShambra,
        MatureShambra,
        VenerableShambra
    ].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
};