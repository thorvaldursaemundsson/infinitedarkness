import IStepProps from "./WizardSteps";

import { useState, useReducer } from "react";

import { Button } from "@material-ui/core";

import { Character } from "../Character";
import React from "react";
import { IOption, OptionsExplorer } from "./OptionExplorer";
import { useCharacter } from "../useCharacter";

const Step2: React.FC<IStepProps> = ({ character, currentNumber, callback }) => {
    const [c, dispatch] = useReducer(useCharacter, character);
    const step = 2;
    if (currentNumber !== step) return <></>;

    const top: IOption = {
        key: 'Background',
        value: optionTree,
        dispatch: { action: 'background', value: 0, name: '' }
    };

    return <div>
        <h3>where was your character born or hatched?</h3>
        <OptionsExplorer hideButton={false} parentCallback={() => { }} tree={top} dispatchCallback={(d) => dispatch(d)} ></OptionsExplorer>
        <hr />
        <Button variant='outlined' key='wizard_step2_next' onClick={() => callback(step + 1, c)}>Next</Button>
    </div>;
}

const optionTree: IOption[] = [{
    key: 'Coalition of sol',
    dispatch: { action: 'background', value: 0, name: 'Coalition of sol' },
    value: [
        {
            key: 'Earth',
            dispatch: { action: 'background', value: 0, name: ', Earth' },
            value: [
                {
                    key: 'Euroasia',
                    value: [],
                    dispatch: { action: 'background', value: 0, name: ', Euroasia' }
                },
                {
                    key: 'North America',
                    value: [],
                    dispatch: { action: 'background', value: 0, name: ', North America' }
                },
                {
                    key: 'South America',
                    value: [],
                    dispatch: { action: 'background', value: 0, name: ', North America' }
                },
                {
                    key: 'Africa',
                    value: [],
                    dispatch: { action: 'background', value: 0, name: ', Africa' }
                },
                {
                    key: 'Greenland',
                    value: [],
                    dispatch: { action: 'background', value: 0, name: ', Greenland' }
                },
                {
                    key: 'Australia',
                    value: [],
                    dispatch: { action: 'background', value: 0, name: ', Australia' }
                },
                {
                    key: 'Antarctica',
                    value: [],
                    dispatch: { action: 'background', value: 0, name: 'Antarctica' }
                },
            ],
        },
        {
            key: 'Mars',
            value: [],
            dispatch: { action: 'background', value: 0, name: ', Mars' }
        },
        {
            key: 'Ceres',
            value: [],
            dispatch: { action: 'background', value: 0, name: ', Ceres' }
        },
        {
            key: 'Jupiter moon colony',
            value: [],
            dispatch: { action: 'background', value: 0, name: ', Jupiter moons' }
        },
        {
            key: 'Saturn moon coloy',
            value: [],
            dispatch: { action: 'background', value: 0, name: ', Saturn moons' }
        },
        {
            key: 'Outer planets station or spaceborn',
            value: [],
            dispatch: { action: 'background', value: 0, name: ', Voidborn' }
        }
    ]
},
{
    key: 'Centauri Imperium',
    value: [],
    dispatch: { action: 'background', value: 0, name: 'Centauri Imperium' }
},
{
    key: 'Fronteer World',
    value: [],
    dispatch: { action: 'background', value: 0, name: 'Fronteer world' }
}];

export default Step2;