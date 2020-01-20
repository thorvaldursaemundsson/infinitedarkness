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
import { ImprovedForaging, ShelterBuilder, BetterNavigation } from './perks/Survival.js';
import { Hacking, AdvancedHacking, ExpertHacking, Networking, Programmer } from './perks/Computer.js';
import { MedicineExpert, Healer, Surgeon } from './perks/Medicine.js';
import { DetectLies, DetectMotives, DetectPersonality } from './perks/Empathy.js';
import { Deception, HideEmotion } from './perks/Subtrefuge.js';
import { Runner, Climber, Jumper, DeepLungs, GoodFortitude, GreatFortitude } from './perks/Athletics.js';
import { Balance, Throwing, Dodger, Tumbler } from './perks/Acrobatics.js';
import { InspireCourage, ArtOfDeal, MotivationalSpeaker, PeaceMaker } from './perks/Persuation.js';


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
        Detection,
        ImprovedForaging,
        ShelterBuilder,
        BetterNavigation,
        Hacking,
        AdvancedHacking,
        ExpertHacking,
        Programmer,
        Networking,
        MedicineExpert,
        Healer,
        Surgeon,
        DetectLies,
        DetectMotives,
        DetectPersonality,
        Deception,
        HideEmotion,
        Runner,
        Climber,
        Jumper,
        DeepLungs,
        GoodFortitude,
        GreatFortitude,
        Balance,
        Throwing,
        Dodger,
        Tumbler,
        InspireCourage,
        ArtOfDeal,
        MotivationalSpeaker,
        PeaceMaker

    ].sort(sortPerk);
}

const sortPerk = (prevPerk: Perk, nextPerk: Perk) => {
    if (prevPerk.skill !== nextPerk.skill) return prevPerk.skill > nextPerk.skill ? 1 : -1;
    else return prevPerk.cost > nextPerk.cost ? 1 : -1;
};