import { Deflection, LightWeaponSpecialization, MediumWeaponSpecialization, LargeWeaponSpecialization } from './perks/Combat';
import { HandGunSpecialization, RifleSpecialization, MachineGunSpecialization, RocketLaunchersSpecialization, LaserSpecialization, PlasmaSpecialization } from './perks/Firearms';
import { QualifiedForAirplane, QualifiedForBoat, QualifiedForCar, QualifiedForFTL, QualifiedForShip, QualifiedForSpaceship, QualifiedForSubmarine } from './perks/Pilot';
import { SpellBad, SpellDo, SpellFew, SpellFirst, SpellGet, SpellGo, SpellGood, SpellKnow, SpellLast, SpellLong, SpellMake, SpellMany, SpellSay, SpellSee, SpellShort, SpellTake } from './perks/Spells';
import { Forensics, Enigmas, Search } from './perks/Investigation';
import { Interrogator, Frighten, Spook } from './perks/Intimidation';
import { LockPick, SlightOfHand } from './perks/Larceny';
import { Shadow, Camouflage, Detection } from './perks/Stealth';
import { ImprovedForaging, ShelterBuilder, BetterNavigation } from './perks/Survival';
import { Hacking, AdvancedHacking, ExpertHacking, Networking, Programmer } from './perks/Computer';
import { MedicinePerks } from './perks/Medicine';
import { DetectLies, DetectMotives, DetectPersonality } from './perks/Empathy';
import { Deception, HideEmotion } from './perks/Subtrefuge';
import { Runner, Climber, Jumper, DeepLungs, GoodFortitude, GreatFortitude } from './perks/Athletics';
import { Balance, Throwing, Dodger, Tumbler } from './perks/Acrobatics';
import { InspireCourage, ArtOfDeal, MotivationalSpeaker, PeaceMaker } from './perks/Persuation';
import { Perk } from './Perks';

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
        Search,
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
        ...MedicinePerks,
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