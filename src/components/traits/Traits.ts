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
    description: 'you are naturally gifted, gain +1 to your 4 lowest base stats',
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
        Aggressive
    ].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
};