import { CharacterSize } from "../../Character";

interface ISkeleton {
    name: string;
    description: string;
    things?: string[];
    weightGrams: number;
    value: number;
}

export const weightSizeMultiplier = (weightGrams:number, size:CharacterSize):number => {
    switch (size){
        case 'minute': return weightGrams * 0.12;
        case 'tiny': return weightGrams * 0.25;
        case 'small': return weightGrams * .5;
        case 'medium': return weightGrams;
        case 'large': return weightGrams * 2;
        case 'huge': return weightGrams * 4;
        case 'gigantic': return weightGrams * 8;
        case 'colossal': return weightGrams * 16;
        case 'titanic': return weightGrams * 32;
    }
}

export const Skeletons: ISkeleton[] = [
    {
        name: 'aluminum frame',
        description: 'light aluminum skeleton frame',
        value: 2000,
        weightGrams: 3000
    },
    {
        name: 'steel frame',
        description: 'skeleton frame made of high carbon steel, stronger than aluminum',
        value: 3000,
        weightGrams: 6000,
        things: ['+2 life']
    },
    {
        name: 'titan alloy frame',
        description: 'skeleton frame made of titan alloy',
        value: 12000,
        weightGrams: 6000,
        things: ['+4 life', '+1 damage absorbtion']
    }
];