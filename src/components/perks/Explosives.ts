import { PerkTemplate } from "../general/Perks";

export const BombMaker = new PerkTemplate({
    name: 'bombmaker',
    skill: 'explosives',
    level: 1,
    description: 'You know how to make home made bombs, +3 to making bombs'
});

export const ExplosivesPerks = [BombMaker];