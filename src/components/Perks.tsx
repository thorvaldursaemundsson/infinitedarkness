import gun1 from './perks/gun1.json';
import gun2 from './perks/gun2.json';
import gun3 from './perks/gun3.json';
import gun4 from './perks/gun4.json';


export interface Perk {
    name: string;
    skill: string;
    cost: number;
    description: string;
}
export const GetPerkList = (): Perk[] => {
    return [
        { ...gun1 },
        { ...gun2 },
        { ...gun3 },
        { ...gun4 },
        
    ].sort(sortPerk);
}

const sortPerk = (prevPerk:Perk, nextPerk:Perk) => {
    if (prevPerk.skill !== nextPerk.skill) return prevPerk.skill > nextPerk.skill ? 1 : -1;
    else return prevPerk.cost > nextPerk.cost ? 1 : -1;
};