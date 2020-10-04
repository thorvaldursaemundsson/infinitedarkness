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
import { SubtreFugePerks } from '../perks/Subtrefuge';
import { AthleticsPerks } from '../perks/Athletics';
import { AcrobaticsPerks } from '../perks/Acrobatics';
import { PersuationPerks } from '../perks/Persuation';
import { StreetwisePerks } from '../perks/Streetwise';
import { Perk } from './Perks';
import { SciencePerks } from '../perks/Science';
import { SavoirFairePerks } from '../perks/SavoirFaire';

export const GetPerkList = (): Perk[] => {
    return [
        ...CombatPerks,
        ...FirearmsPerks,
        ...PilotPerks,
        ...SpellsPerks,
        ...InvestigationPerks,
        ...IntimidationPerks,
        ...LarcenyPerks,
        ...StealthPerks,
        ...SurvivalPerks,
        ...ComputerPerks,
        ...MedicinePerks,
        ...EmpathyPerks,
        ...SubtreFugePerks,
        ...AthleticsPerks,
        ...AcrobaticsPerks,
        ...PersuationPerks,
        ...StreetwisePerks,
        ...SciencePerks,
        ...SavoirFairePerks,
    ].sort(sortPerk);
}

const sortPerk = (prevPerk: Perk, nextPerk: Perk) => {
    if (prevPerk.skill !== nextPerk.skill) return prevPerk.skill > nextPerk.skill ? 1 : -1;
    else return prevPerk.cost > nextPerk.cost ? 1 : -1;
};