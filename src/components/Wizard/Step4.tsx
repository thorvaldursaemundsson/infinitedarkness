import IStepProps from "./WizardSteps";
import React from "react";
import { Button } from "@material-ui/core";

const Step4: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 4;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>what is your characters strengths and weaknesses</h3>
        <Button key='wizard_step4_next' onClick={() => props.callback(step + 1, props.character)}>Next</Button>
    </div>;
}

export default Step4;