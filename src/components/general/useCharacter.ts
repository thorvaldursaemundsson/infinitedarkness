import { Character, CharacterSize } from "../Character";
import { Perk } from "./Perks";
import { Trait } from "../traits/Traits";

export interface dispatcher {
    action: string;
    name?: string;
    value: number;
    perkToAdd?: Perk;
    traitToAdd?: Trait;
}

const getSizeFromString = (str:string|undefined):CharacterSize => {
    switch (str) {
        case 'huge': return 'huge';
        case 'large': return 'large';
        case 'small': return 'small';
        case 'tiny': return 'tiny';
        case 'gigantic': return 'gigantic';
        case 'diminutiv': return 'diminutiv';
        default: return 'medium';
    }
};

export const useCharacter = (state: Character, action: dispatcher): Character => {
    switch (action.action) {
        case 'strength': return new Character({ ...state, strength: action.value });
        case 'agility': return new Character({ ...state, agility: action.value });
        case 'endurance': return new Character({ ...state, endurance: action.value });
        case 'willpower': return new Character({ ...state, willpower: action.value });
        case 'perception': return new Character({ ...state, perception: action.value });
        case 'intelligence': return new Character({ ...state, intelligence: action.value });
        case 'age': return new Character({ ...state, age: action.value });
        case 'skill':
            let r = new Character({
                ...state
            });
            r.skills[state.skills.findIndex(s => s.name === action.name)].level = action.value;
            return r;
        case 'name': return new Character({ ...state, name: action.name || '' });
        case 'species': return new Character({ ...state, species: action.name || '' });
        case 'gender': return new Character({ ...state, gender: action.name || '' });
        case 'background': return new Character({ ...state, background: action.name || '' });
        case 'size':
            return new Character({...state, size: getSizeFromString(action.name)});
    }
    if (action.action === 'addperk') {
        if (action.perkToAdd !== undefined)
            return new Character({ ...state, perks: [...state.perks, action.perkToAdd] });
    }
    else if (action.action === 'removeperk') {
        let r = new Character({
            ...state
        });
        if (action.perkToAdd !== undefined) {
            let pta = action.perkToAdd;
            r.perks = r.perks.filter(p => p.name !== pta.name);
        }
        return r;
    }
    else if (action.action === 'addtrait') {
        if (action.traitToAdd !== undefined)
            return new Character({ ...state, traits: [...state.traits, action.traitToAdd] });
    }

    else if (action.action === 'removetrait') {
        let r = new Character({
            ...state
        });
        if (action.traitToAdd !== undefined) {
            let pta = action.traitToAdd;
            r.traits = r.traits.filter(p => p.name !== pta.name);
        }
        return r;
    }
    return state;
}