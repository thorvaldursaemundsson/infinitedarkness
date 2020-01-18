import IStepProps from "./WizardSteps";

import { Button } from "@material-ui/core";
import React from "react";

const Step3: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 3;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>what kind of family did your character have?</h3>
        <Button key='wizard_step3_next' onClick={() => props.callback(step + 1, props.character)}>Next</Button>
    </div>;
}

export default Step3;