import IStepProps from "./WizardSteps";

import { Button } from "@material-ui/core";
import React, { useState } from "react";
import OptionButtons, { IOption } from "./OptionExplorer";
import { Character } from "../Character";

const Step3: React.FC<IStepProps> = (props: IStepProps) => {
    const [currentPosition, setCurrentPosition] = useState<string[]>([]);
    const step = 3;
    if (props.currentNumber !== step) return null;
    const makeBackground = () => {
        return props.character.background + '.\nRaised in a ' + currentPosition.join(', ');
    }
    return <div>
        <h3>what kind of family did your character have?</h3>
        <OptionButtons tree={optionTree} position={currentPosition} onSelectCallback={(n) => setCurrentPosition(n)}></OptionButtons>
        <br/>
        Background: {makeBackground()}
        <br/>
        <Button key='wizard_step3_next' onClick={() => props.callback(step + 1, new Character({ ...props.character, age: 4, background: makeBackground() }))}>Next</Button>
    </div>;
}

const optionTree: IOption[] = [{
    key: 'good family',
    value: []
},
{
    key: 'bad family',
    value: []
},
{
    key: 'foster family',
    value: []
},
{
    key: 'orphanage',
    value: []
},
{
    key: 'homeless',
    value: []
}];

export default Step3;