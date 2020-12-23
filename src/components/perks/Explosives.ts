import { PerkTemplate } from "../general/Perks";

const skill = 'explosives';

const BombMaker = new PerkTemplate({
    name: 'bombmaker',
    skill: skill,
    level: 1,
    description: 'You know how to make home made bombs, +3 to making bombs'
});

const GrenadeThrower = new PerkTemplate({
    name: 'Grenade thrower',
    skill: skill,
    level: 1,
    description: 'You have done extensive training in throwing grenades and other bombs, when you throw a grenade you gain +3 to your roll.'
});

const DisarmingExpert = new PerkTemplate({
    name: 'Disarming Expert',
    skill: skill,
    level: 1,
    description: 'You know a thing or two about disarming bombs, when you roll to disarm a bomb add +3 to your roll.',
});

export const ExplosivesPerks = [BombMaker, GrenadeThrower, DisarmingExpert];