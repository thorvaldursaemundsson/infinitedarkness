import IStepProps from "./WizardSteps";

import { useState } from "react";

import { Button } from "@material-ui/core";

import { Character } from "../Character";
import React from "react";

const Step2: React.FC<IStepProps> = ({ character, currentNumber, callback }) => {
    const [currentPosition, setCurrentPosition] = useState<string[]>([]);
    const step = 2;
    if (currentNumber !== step) return <></>;
    const GetOptions = (position: string[]): string[] => {
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
    const makeBackground = () => {
        return `${character.name} was born on/in ${currentPosition.join(', ')}`;
    }
    return <div>
        <h3>where was your character born or hatched?</h3>
        {GetOptions(currentPosition).map(o => {
            return <Button variant='contained' onClick={() => setCurrentPosition([...currentPosition, o])}>{o}</Button>
        })}
        <br />
        Background: {makeBackground()}
        <br />
        <Button variant='outlined' key='wizard_step2_next' onClick={() => callback(step + 1, new Character({ ...character, background: '' }))}>Next</Button>
    </div>;
}

interface IOption {
    key: string;
    value: IOption[];
}

const optionTree: IOption[] = [];

optionTree.push({
    key: 'Coalition of sol',
    value: [
        {
            key: 'Earth',
            value: [
                {
                    key: 'Euroasia',
                    value:[]
                },
                {
                    key: 'North America',
                    value:[]
                },
                {
                    key: 'South America',
                    value:[]
                },
                {
                    key: 'Africa',
                    value:[]
                },
                {
                    key: 'Greenland',
                    value:[]
                },
                {
                    key: 'Australia',
                    value:[]
                },
                {
                    key: 'Antarctica',
                    value:[]
                },
            ]
        },
        {
            key: 'Mars',
            value: []
        },
        {
            key: 'Ceres',
            value: []
        },
        {
            key: 'Jupiter moon colony',
            value: []
        },
        {
            key: 'Saturn moon coloy',
            value: []
        },
        {
            key: 'Outer planets station or spaceborn',
            value: []
        }
    ]
});

optionTree.push({
    key: 'Centauri Imperium',
    value: []
})

optionTree.push({
    key: 'Fronteer World',
    value: []
})


export default Step2;