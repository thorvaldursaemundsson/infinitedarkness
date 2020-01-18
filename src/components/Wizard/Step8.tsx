import IStepProps from "./WizardSteps";
import React from "react";
import { Button } from "@material-ui/core";
import { Character } from "../Character";

const Step8: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 8;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>how does your character make a living?</h3>
        <Button key='wizard_step8_next' onClick={() => props.callback(step + 1, new Character({...props.character}))}>Next</Button>
    </div>;
}

export default Step8;