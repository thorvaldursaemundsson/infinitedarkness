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
import { SkillName } from './Skills';

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

interface IPerkBySkill {
    skill: SkillName;
    perks: Perk[];
}

export const GetPerkListBySkills = (): IPerkBySkill[] => {
    return [
        { skill: 'combat', perks: CombatPerks },
        { skill: 'cooking', perks: CookingPerks },
        { skill: 'computer', perks: ComputerPerks },
        { skill: 'firearms', perks: FirearmsPerks },
        { skill: 'pilot', perks: PilotPerks },
        { skill: 'spells', perks: SpellsPerks },
        { skill: 'investigation', perks: InvestigationPerks },
        { skill: 'intimidation', perks: IntimidationPerks },
        { skill: 'larceny', perks: LarcenyPerks },
        { skill: 'stealth', perks: StealthPerks },
        { skill: 'survival', perks: SurvivalPerks },
        { skill: 'medicine', perks: MedicinePerks },
        { skill: 'empathy', perks: EmpathyPerks },
        { skill: 'electronics', perks: ElectronicsPerks },
        { skill: 'explosives', perks: ExplosivesPerks },
        { skill: 'general knowledge', perks: GeneralKnowledgePerks },
        { skill: 'mechanics', perks: MechanicsPerks },
        { skill: 'subterfuge', perks: SubtreFugePerks },
        { skill: 'athletics', perks: AthleticsPerks },
        { skill: 'acrobatics', perks: AcrobaticsPerks },
        { skill: 'persuasion', perks: PersuasionPerks },
        { skill: 'streetwise', perks: StreetwisePerks },
        { skill: 'science', perks: SciencePerks },
        { skill: 'savoir-faire', perks: SavoirFairePerks },
    ];
}

const sortPerk = (prevPerk: Perk, nextPerk: Perk) => {
    if (prevPerk.skill !== nextPerk.skill) return prevPerk.skill > nextPerk.skill ? 1 : -1;
    else return prevPerk.cost > nextPerk.cost ? 1 : -1;
};