
export type SkillName = 'acrobatics'|'athletics'|'combat'|'computer'|'cooking'|'electronics'|'empathy'|'explosives'|'firearms'|'general knowledge'|'intimidation'|'investigation'|'larceny'|'mechanics'|'medicine'|'persuation'|'pilot'|'savoir-faire'|'science'|'spells'|'stealth'|'streetwise'|'subtrefuge'|'survival';

export interface UseCase {
    attribute: 'strength' | 'agility' | 'endurance' | 'perception' | 'willpower' | 'intelligence';
    name: string;
    description: string;
    results?: string[];
    type: 'active' | 'passive';
}

export interface Skill {
    name: SkillName;
    level: number;
    description: string;
    useCases: UseCase[];
}


export class SkillTemplate implements Skill {
    name: SkillName;
    level: number;
    description: string;
    useCases: UseCase[];
    constructor(name: SkillName, description: string, useCases: UseCase[], level = 0) {
        this.name = name;
        this.level = level;
        this.description = description;
        this.useCases = useCases;
    }
}