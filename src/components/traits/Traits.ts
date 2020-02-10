import { IHooker } from '../Character';


export interface Trait extends IHooker {
    name: string;
    cost: number;
    description: string;
}

const Coward: Trait = {
    name: 'cocowardwardice',
    cost: -20,
    description: 'You are a coward that more easily falls vicim to fear. willpower counts as 2 lower for fear',
    applyTo:'fear',
    amount:-2,
}

const Brave: Trait = {
    name: 'brave',
    cost: 20,
    description: 'You are brave and are less likely to be phased by fear. willpower counts as 2 higher for fear',
    applyTo:'fear',
    amount:2,
}

const FoolHardy: Trait = {
    name: 'foolhardy',
    cost: 10,
    description: 'At first glance you seem brave, but actually you are just ignoring the feeling completely. You gain 1 fear resistence but you are no longer privy to your own fear stat, the DM will roll for your fear without your knowledge',
    applyTo:'fear',
    amount:1,
}

const Frail: Trait = {
    name: 'frail',
    cost: -20,
    description: 'You are frail and easily damaged, -2 maximum hitpoints',
    applyTo:'hitpoints',
    amount:-2,
}

const Resillient: Trait = {
    name: 'resillient',
    cost: 20,
    description: 'You are able to withstand more punishment, +2 maximum hitpoints',
    applyTo:'hitpoints',
    amount:2,
}

export const GetTraits = ():Trait[] & IHooker[] => {
    return [
        Coward,
        Brave,
        FoolHardy,
        Frail,
        Resillient
    ]
};