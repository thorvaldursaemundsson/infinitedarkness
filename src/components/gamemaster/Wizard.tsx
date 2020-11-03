import React, { useState } from 'react';

type race = 'human'|'shambras'|'merlion'|'nekovian';

const Wizard: React.FC = () => {
    const [race, setRace] = useState<race>('human');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(99);
    const [name, setName] = useState('no name');

    return <div>
        <h2>Character Creator Wizard</h2>
        <p>We start by picking a race, an age, name, gender</p>
    </div>;
}


export default Wizard;