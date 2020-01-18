import IStepProps from "./WizardSteps";

import { useState } from "react";

import { Button } from "@material-ui/core";

import { Character } from "../Character";
import React from "react";
import OptionButtons, { IOption } from "./OptionExplorer";

const Step2: React.FC<IStepProps> = ({ character, currentNumber, callback }) => {
    const [currentPosition, setCurrentPosition] = useState<string[]>([]);
    const step = 2;
    if (currentNumber !== step) return <></>;
    
    const makeBackground = () => {
        return `${character.name} was born on/in ${currentPosition.join(', ')}`;
    }
    return <div>
        <h3>where was your character born or hatched?</h3>
        <OptionButtons tree={optionTree} position={currentPosition} onSelectCallback={(n) => setCurrentPosition(n)}></OptionButtons>
        <br />
        Background: {makeBackground()}
        <br />
        <Button variant='outlined' key='wizard_step2_next' onClick={() => callback(step + 1, new Character({ ...character, age: 2, background: makeBackground() }))}>Next</Button>
    </div>;
}

const optionTree: IOption[] = [{
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
},
{
    key: 'Centauri Imperium',
    value: []
},
{
    key: 'Fronteer World',
    value: []
}];

export default Step2;