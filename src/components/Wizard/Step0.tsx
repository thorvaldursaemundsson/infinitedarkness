import IStepProps from "./WizardSteps";

import React from "react";

import { Button } from "@material-ui/core";

const Step0: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 0;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>Press Next to start the wizard</h3>
        <p>This wizard will ask you a series of questions which will progressively build your character from birth to current state, you can press toggle to view your character at any point</p>
        <Button variant='outlined' key='wizard_step0_next' onClick={() => props.callback(step + 1, props.character)}>Next</Button>
    </div>;
}

export default Step0;