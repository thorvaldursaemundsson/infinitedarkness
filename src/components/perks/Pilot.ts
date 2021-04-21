import { PerkTemplate } from "../general/Perks";

const QualifiedForCar = new PerkTemplate({
    name: 'car qualified',
    skill: 'pilot',
    level: 1,
    description: 'gain +6 to all car driving rolls, is qualified to drive car'
}, {
    applyTo: 'drive car',
    amount: 6
});

const QualifiedForBoat = new PerkTemplate({
    name: 'boat qualified',
    skill: 'pilot',
    level: 1,
    description: 'gain +6 to all boat sailing rolls, is qualified to drive boat no larger than 10 metric tons'
}, {
    applyTo: 'drive boat',
    amount: 6
});

const QualifiedForShip = new PerkTemplate({
    name: 'ship qualified',
    skill: 'pilot',
    level: 2,
    description: 'gain +9 to all ship sailing rolls, is qualified to drive ship no smaller than 10 metric tons'
}, {
    applyTo: 'drive ship',
    amount: 9
});

const QualifiedForSubmarine = new PerkTemplate({
    name: 'submarine qualified',
    skill: 'pilot',
    level: 3,
    description: 'gain +12 to all submarine sailing rolls, is qualified to drive a submarine'
}, {
    applyTo: 'drive submarine',
    amount: 12
});

const QualifiedForAirplane = new PerkTemplate({
    name: 'airplane qualified',
    skill: 'pilot',
    level: 2,
    description: 'gain +9 to all airplane piloting rolls, is qualified to drive an airplane'
}, {
    applyTo: 'pilot airplane',
    amount: 9
});

const QualifiedForSpaceship = new PerkTemplate({
    name: 'spaceship qualified',
    skill: 'pilot',
    level: 2,
    description: 'gain +9 to all spaceship piloting rolls, is qualified to pilot a spaceship'
}, {
    applyTo: 'pilot spaceship',
    amount: 9
});

const QualifiedForFTL = new PerkTemplate({
    name: 'FTL qualified',
    skill: 'pilot',
    level: 2,
    description: 'gain +9 to all FTL spaceship piloting rolls, is qualified to engage hyperdrive'
}, {
    applyTo: 'pilot FTL',
    amount: 9
});

export const PilotPerks = [QualifiedForAirplane, QualifiedForBoat, QualifiedForCar, QualifiedForFTL, QualifiedForShip, QualifiedForSpaceship, QualifiedForSubmarine];