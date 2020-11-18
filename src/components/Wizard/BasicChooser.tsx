import React, { useState } from "react";

type race = 'human' | 'shambras' | 'merlion' | 'nekovian';

interface IStep1Props {
    onComplete: (race: race, gender: string, age: number, name: string) => void;
}

const BasicChooser: React.FC<IStep1Props> = ({ onComplete }) => {
    const [race, setRace] = useState<race>('human');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(99);
    const [name, setName] = useState('no name');

    return (<><p>We start by picking a race, an age, name, gender</p>
        Race:
        <label className="shortLabel"><input checked={race === 'human'} name="race" type='radio' onChange={() => setRace('human')} />Human</label>
        <label className="shortLabel"><input checked={race === 'shambras'}  name="race" type='radio' onChange={() => setRace('shambras')} />Shambras</label>
        <label className="shortLabel"><input checked={race === 'merlion'}  name="race" type='radio' onChange={() => setRace('merlion')} />Merlion</label>
        <label className="shortLabel"><input checked={race === 'nekovian'}  name="race" type='radio' onChange={() => setRace('nekovian')} />Nekovian</label>
        <br />
        Gender: <input type='text' value={gender} onChange={(e) => setGender(e.target.value)} /><br />
        Name: <input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br />
        Age: <input type='text' value={age} onChange={(e) => setAge(parseInt(e.target.value))} /><br />
        <button onClick={() => onComplete(race, gender, age, name)}>OK</button>
    </>);
}
export default BasicChooser;