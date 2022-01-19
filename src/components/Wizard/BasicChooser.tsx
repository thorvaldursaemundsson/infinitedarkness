import React, { useState } from "react";
import { race } from "../races/Races";


interface IStep1Props {
    onComplete: (race: race, gender: string, age: number, name: string) => void;
}

const speciesAvailable: race[] = ['human', 'merlion', 'nekovian', 'shambras', 'synth'];

const BasicChooser: React.FC<IStep1Props> = ({ onComplete }) => {
    const [race, setRace] = useState<race>('human');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(30);
    const [name, setName] = useState('no name');

    return (<><p>We start by picking a race, an age, name, gender</p>
        Race:
        {speciesAvailable.map(r => <label className="shortLabel">
            <input checked={race === r} name={r} type='radio' onChange={() => setRace(r)} />{r}
        </label>)}
        <br />
        Gender: <input type='text' value={gender} onChange={(e) => setGender(e.target.value)} /><br />
        Name: <input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br />
        Age: <input type='text' value={age} onChange={(e) => setAge(parseInt(e.target.value))} /><br />
        <button onClick={() => onComplete(race, gender, age, name)}>OK</button>
    </>);
}
export default BasicChooser;