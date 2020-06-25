import { Skill } from './Skills';
import Acrobatics from './skills/acrobatics';
import Athletics from './skills/athletics';
import Combat from './skills/combat';
import Computer from './skills/computer';
import Firearms from './skills/firearms';
import Empathy from './skills/empathy';
import Intimidation from './skills/intimidation';
import Investigation from './skills/investigation';
import Larceny from './skills/larceny';
import Medicine from './skills/medicine';
import Persuation from './skills/persuation';
import Pilot from './skills/pilot';
import Spells from './skills/spells';
import Stealth from './skills/stealth';
import Subtrefuge from './skills/subtrefuge';
import Survival from './skills/survival';
import Mechanics from './skills/mechanics';

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
        Persuation,
        Pilot,
        Spells,
        Stealth,
        Subtrefuge,
        Survival,
        Mechanics
        
    ].sort((a, b) => a.name < b.name ? -1 : 1);
}