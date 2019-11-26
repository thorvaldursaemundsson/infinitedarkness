import gunmastery from './perks/gunmastery.json';


export interface Perk {
    name: string;
    skill: string;
    cost: number;
    description: string;
}
export const GetPerkList = (): Perk[] => {
    return [
        { ...gunmastery },
        
    ].sort((a, b) => a.skill < b.skill ? -1 : 1);
}