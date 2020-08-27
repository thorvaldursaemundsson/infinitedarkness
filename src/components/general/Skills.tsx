
export interface UseCase {
    attribute: 'strength' | 'agility' | 'endurance' | 'perception' | 'willpower' | 'intelligence';
    name: string;
    description: string;
    results?: string[];
    type: 'active' | 'passive';
}

export interface Skill {
    name: string;
    level: number;
    description: string;
    useCases: UseCase[];
}


export class SkillTemplate implements Skill {
    name: string;
    level: number;
    description: string;
    useCases: UseCase[];
    constructor(name: string, description: string, useCases: UseCase[], level = 0) {
        this.name = name;
        this.level = level;
        this.description = description;
        this.useCases = useCases;
    }
}
