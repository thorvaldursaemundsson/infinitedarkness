export interface Skill {
    name: string;
    attribute: string|'strength'|'agility'|'endurance'|'perception'|'willpower'|'intelligence';
    level: number;
}

export const GetSkillList = ():Skill[] => {
    return [
        {
            name:'combat',
            attribute:'agility',
            level:0
        },
    ];
}