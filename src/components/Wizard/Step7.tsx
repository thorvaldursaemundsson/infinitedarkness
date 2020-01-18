import IStepProps from "./WizardSteps";

import { Button } from "@material-ui/core";
import React from "react";

const Step7: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 7;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>what education does your character have?</h3>
        <Button key='wizard_step7_next' onClick={() => props.callback(step + 1, props.character)}>Next</Button>
    </div>;
}

export default Step7;