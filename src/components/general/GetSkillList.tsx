import { Skill } from './Skills';
import Acrobatics from '../skills/acrobatics';
import Athletics from '../skills/athletics';
import Combat from '../skills/combat';
import Computer from '../skills/computer';
import Firearms from '../skills/firearms';
import Empathy from '../skills/empathy';
import Intimidation from '../skills/intimidation';
import Investigation from '../skills/investigation';
import Larceny from '../skills/larceny';
import Medicine from '../skills/medicine';
import Persuasion from '../skills/persuasion';
import Pilot from '../skills/pilot';
import Spells from '../skills/spells';
import Stealth from '../skills/stealth';
import Subterfuge from '../skills/subterfuge';
import Survival from '../skills/survival';
import Mechanics from '../skills/mechanics';
import Streetwise from '../skills/streetwise';
import Science from '../skills/Science';
import Electronics from '../skills/electronics';
import Explosives from '../skills/explosives';
import Cooking from '../skills/cooking';
import GeneralKnowledge from '../skills/generalknowledge';
import SavoirFaire from '../skills/savoir-faire';

export const GetSkillList = (): Skill[] => {
    return [
        Acrobatics,
        Athletics,
        Combat,
        Computer,
        Empathy,
        Firearms,
        Intimidation,
        Investigation,
        Larceny,
        Medicine,
        Persuasion,
        Pilot,
        Spells,
        Stealth,
        Subterfuge,
        Survival,
        Streetwise,
        Mechanics,
        Science,
        Electronics,
        Explosives,
        Cooking,
        GeneralKnowledge,
        SavoirFaire

    ].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
}