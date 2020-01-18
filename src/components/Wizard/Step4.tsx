import IStepProps from "./WizardSteps";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Character } from "../Character";
import { GetTraits, Trait } from "../traits/Traits";

const Step4: React.FC<IStepProps> = (props: IStepProps) => {
    const [traits, setTraits] = useState<Trait[]>([]);
    const step = 4;
    if (props.currentNumber !== step) return null;
    return <div>
        <h3>what is your characters strengths and weaknesses</h3>
        {GetTraits().map(trait => {
            return <Button onClick={() => setTraits([...traits, trait])}>{trait.name}</Button>
        })}
        <br/>
        {traits.map(trait => <p>{trait.name}</p>)}
        <br/>
        <Button key='wizard_step4_next' onClick={() => props.callback(step + 1, new Character({ ...props.character, traits: traits }))}>Next</Button>
    </div>;
}

export default Step4;