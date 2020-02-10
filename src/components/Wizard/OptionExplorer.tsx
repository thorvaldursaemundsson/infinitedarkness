import { Button } from "@material-ui/core";
import React from "react";
import { dispatcher } from "../useCharacter";

export interface IOption {
    key: string;
    value: IOption[];
    dispatch: dispatcher;
}

const GetOptions = (position: string[], optionTree:IOption[]): string[] => {
    if (position.length === 0) {
        return optionTree.map(o => o.key);
    }
    else if (position.length === 1) {
        const ot = optionTree.find(o => o.key === position[0]);
        if (ot !== undefined) return ot.value.map(o => o.key);
    }
    else if (position.length === 2) {
        let ot = optionTree.find(o => o.key === position[0]);
        if (ot !== undefined){
            ot = ot.value.find(o => o.key === position[1]);
            if (ot !== undefined){
                return ot.value.map(o => o.key);
            }
        } 
    }
    return [];
}

interface IOptionButtons {
    position: string[];
    tree: IOption[];
    onSelectCallback: (n:string[]) => void;
    
}

const OptionButtons: React.FC<IOptionButtons> = ({position, tree, onSelectCallback}) => {
    return <>{GetOptions(position, tree).map(o => {
        return <Button variant='contained' onClick={() => onSelectCallback([...position, o])}>{o}</Button>
    })}</>;
}

export default OptionButtons;