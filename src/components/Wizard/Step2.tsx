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
    dispatch: { action: '', value: 0 },
    value: [
        {
            key: 'Earth',
            dispatch: { action: '', value: 0 },
            value: [
                {
                    key: 'Euroasia',
                    value:[],
                    dispatch: { action: '', value: 0 }
                },
                {
                    key: 'North America',
                    value:[],
                    dispatch: { action: '', value: 0 }
                },
                {
                    key: 'South America',
                    value:[],
                    dispatch: { action: '', value: 0 }
                },
                {
                    key: 'Africa',
                    value:[],
                    dispatch: { action: '', value: 0 }
                },
                {
                    key: 'Greenland',
                    value:[],
                    dispatch: { action: '', value: 0 }
                },
                {
                    key: 'Australia',
                    value:[],
                    dispatch: { action: '', value: 0 }
                },
                {
                    key: 'Antarctica',
                    value:[],
                    dispatch: { action: '', value: 0 }
                },
            ],
        },
        {
            key: 'Mars',
            value: [],
            dispatch: { action: '', value: 0 }
        },
        {
            key: 'Ceres',
            value: [],
            dispatch: { action: '', value: 0 }
        },
        {
            key: 'Jupiter moon colony',
            value: [],
            dispatch: { action: '', value: 0 }
        },
        {
            key: 'Saturn moon coloy',
            value: [],
            dispatch: { action: '', value: 0 }
        },
        {
            key: 'Outer planets station or spaceborn',
            value: [],
            dispatch: { action: '', value: 0 }
        }
    ]
},
{
    key: 'Centauri Imperium',
    value: [],
    dispatch: { action: '', value: 0 }
},
{
    key: 'Fronteer World',
    value: [],
    dispatch: { action: '', value: 0 }
}];

export default Step2;