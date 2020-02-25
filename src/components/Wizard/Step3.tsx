import IStepProps from "./WizardSteps";

import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { IOption } from "./OptionExplorer";
import { Character } from "../Character";

const Step3: React.FC<IStepProps> = (props: IStepProps) => {
    const step = 3;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>what kind of family did your character have?</h3>
        <br/>
        <br/>
        <Button key='wizard_step3_next' onClick={() => props.callback(step + 1, new Character({ ...props.character, age: 4 }))}>Next</Button>
    </div>;
}


export default Step3;