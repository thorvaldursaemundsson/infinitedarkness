import React from 'react';
import { IHooker } from './Character.js';
import { Deflection, LightWeaponSpecialization, MediumWeaponSpecialization, LargeWeaponSpecialization } from './perks/Combat.js';
import { HandGunSpecialization, RifleSpecialization, MachineGunSpecialization, RocketLaunchersSpecialization, LaserSpecialization, PlasmaSpecialization } from './perks/Firearms.js';
import { QualifiedForAirplane, QualifiedForBoat, QualifiedForCar, QualifiedForFTL, QualifiedForShip, QualifiedForSpaceship, QualifiedForSubmarine } from './perks/Pilot.js';
import { SpellBad, SpellDo, SpellFew, SpellFirst, SpellGet, SpellGo, SpellGood, SpellKnow, SpellLast, SpellLong, SpellMake, SpellMany, SpellSay, SpellSee, SpellShort, SpellTake } from './perks/Spells.js';
import { Forensics, Enigmas } from './perks/Investigation.js';
import { Interrogator, Frighten, Spook } from './perks/Intimidation.js';
import { LockPick, SlightOfHand } from './perks/Larceny.js';
import { Shadow, Camouflage, Detection } from './perks/Stealth.js';


export interface Perk extends IHooker {
    name: string;
    skill: string;
    level: 1 | 2 | 3 | 4 | 5;
    cost(): number;
    description(): JSX.Element;
}

interface IPerk {
    name: string;
    skill: string;
    level: 1 | 2 | 3 | 4 | 5;
    description: string;
}

export class PerkTemplate implements Perk {
    name: string;
    skill: string;
    level: 1 | 2 | 3 | 4 | 5;
    applyTo: string;
    amount: number;
    _description: string;
    description(): JSX.Element {
        return <>{this._description}</>;
    }
    cost(): number {
        return this.level * 10;
    }
    constructor(data: IPerk, hook: IHooker) {
        this.name = data.name;
        this.skill = data.skill;
        this.level = data.level;
        this._description = data.description;
        this.applyTo = hook.applyTo;
        this.amount = hook.amount;
    }
}
export const GetPerkList = (): Perk[] => {
    return [
        Deflection,
        LightWeaponSpecialization,
        MediumWeaponSpecialization,
        LargeWeaponSpecialization,
        HandGunSpecialization,
        RifleSpecialization,
        MachineGunSpecialization,
        RocketLaunchersSpecialization,
        LaserSpecialization,
        PlasmaSpecialization,
        QualifiedForAirplane,
        QualifiedForBoat,
        QualifiedForCar,
        QualifiedForFTL,
        QualifiedForShip,
        QualifiedForSpaceship,
        QualifiedForSubmarine,
        SpellBad,
        SpellDo,
        SpellFew,
        SpellFirst,
        SpellGet,
        SpellGo,
        SpellGood,
        SpellKnow,
        SpellLast,
        SpellLong,
        SpellMake,
        SpellMany,
        SpellSay,
        SpellSee,
        SpellShort,
        SpellTake,
        Forensics,
        Enigmas,
        Interrogator,
        Frighten,
        Spook,
        LockPick,
        SlightOfHand,
        Shadow,
        Camouflage,
        Detection

    ].sort(sortPerk);
}

const sortPerk = (prevPerk: Perk, nextPerk: Perk) => {
    if (prevPerk.skill !== nextPerk.skill) return prevPerk.skill > nextPerk.skill ? 1 : -1;
    else return prevPerk.cost > nextPerk.cost ? 1 : -1;
};