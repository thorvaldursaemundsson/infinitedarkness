import IStepProps from "./WizardSteps";
import React from "react";
import { Button } from "@material-ui/core";

const Step9: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 9;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>repeat step 8 until finished</h3>
        <Button key='wizard_step9_next' onClick={() => props.callback(step + 1, props.character)}>Next</Button>
    </div>;
}

export default Step9;