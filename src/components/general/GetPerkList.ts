import { Perk } from './Perks';
import { CombatPerks } from '../perks/Combat';
import { FirearmsPerks } from '../perks/Firearms';
import { PilotPerks } from '../perks/Pilot';
import { SpellsPerks } from '../perks/Spells';
import { InvestigationPerks } from '../perks/Investigation';
import { IntimidationPerks } from '../perks/Intimidation';
import { LarcenyPerks } from '../perks/Larceny';
import { StealthPerks } from '../perks/Stealth';
import { SurvivalPerks } from '../perks/Survival';
import { ComputerPerks } from '../perks/Computer';
import { MedicinePerks } from '../perks/Medicine';
import { EmpathyPerks } from '../perks/Empathy';
import { SubtreFugePerks } from '../perks/Subterfuge';
import { AthleticsPerks } from '../perks/Athletics';
import { AcrobaticsPerks } from '../perks/Acrobatics';
import { PersuasionPerks } from '../perks/Persuasion';
import { StreetwisePerks } from '../perks/Streetwise';
import { SciencePerks } from '../perks/Science';
import { SavoirFairePerks } from '../perks/SavoirFaire';
import { CookingPerks } from '../perks/Cooking';
import { ElectronicsPerks } from '../perks/Electronics';
import { ExplosivesPerks } from '../perks/Explosives';
import { GeneralKnowledgePerks } from '../perks/GeneralKnowledge';
import { MechanicsPerks } from '../perks/Mechanics';

export const GetPerkList = (): Perk[] => {
    return [
        ...CombatPerks,
        ...CookingPerks,
        ...ComputerPerks,
        ...FirearmsPerks,
        ...PilotPerks,
        ...SpellsPerks,
        ...InvestigationPerks,
        ...IntimidationPerks,
        ...LarcenyPerks,
        ...StealthPerks,
        ...SurvivalPerks,
        ...MedicinePerks,
        ...EmpathyPerks,
        ...ElectronicsPerks,
        ...ExplosivesPerks,
        ...GeneralKnowledgePerks,
        ...MechanicsPerks,
        ...SubtreFugePerks,
        ...AthleticsPerks,
        ...AcrobaticsPerks,
        ...PersuasionPerks,
        ...StreetwisePerks,
        ...SciencePerks,
        ...SavoirFairePerks,
    ].sort(sortPerk);
}

const sortPerk = (prevPerk: Perk, nextPerk: Perk) => {
    if (prevPerk.skill !== nextPerk.skill) return prevPerk.skill > nextPerk.skill ? 1 : -1;
    else return prevPerk.cost > nextPerk.cost ? 1 : -1;
};