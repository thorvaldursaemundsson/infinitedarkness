import IStepProps from "./WizardSteps";

import { Button } from "@material-ui/core";
import React from "react";

const Step6: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 6;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>what interests and hobbies does your character have?</h3>
        <Button key='wizard_step6_next' onClick={() => props.callback(step + 1, props.character)}>Next</Button>
    </div>;
}

export default Step6;