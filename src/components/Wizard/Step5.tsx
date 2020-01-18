import IStepProps from "./WizardSteps";

import { Button } from "@material-ui/core";
import React from "react";
import { Character } from "../Character";

const Step5: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 5;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>what kind of personality does your character have?</h3>
        <Button key='wizard_step5_next' onClick={() => props.callback(step + 1, new Character({...props.character}))}>Next</Button>
    </div>;
}

export default Step5;