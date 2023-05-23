import React, { useState } from 'react';
import { findRacialModFromRage } from '../../utils/utilFunctions';
import { CharacterSize } from '../Character';
import { GenericCharacterRoller, ICharacterData } from '../Lore/CharacterRoller';
import { humansData } from '../races/Humans';
import { IRaceData, race } from '../races/Races';
import { getStrengthMod, IStats } from './PointBuy';

interface IAbilityRollerProps {
    startingSpecies: race;
    startingAge: number;
    onComplete: (output: IStats) => void;
}



const getRacialMods = (age: number, species: race): IRaceData => {
    let data = findRacialModFromRage(species, age);
    if (data === undefined) throw new Error("unable to find race");
    return {
        racialMods: [data],
        experienceMultipler: humansData.experienceMultipler,
        experiencePoints: humansData.experiencePoints
    };
};



const interceptData = (characterdata: ICharacterData | undefined, onComplete: (output: IStats) => void, size: CharacterSize, age: number, species: race) => {
    if (characterdata === undefined) return;
    onComplete({
        restExp: 0,

        size: size,
        age: age,
        species: species,
        strength: characterdata.strength.reduce((a, b) => a + b) + getStrengthMod(size),
        agility: characterdata.agility.reduce((a, b) => a + b),
        endurance: characterdata.endurance.reduce((a, b) => a + b),
        intelligence: characterdata.intelligence.reduce((a, b) => a + b),
        perception: characterdata.perception.reduce((a, b) => a + b),
        willpower: characterdata.willpower.reduce((a, b) => a + b),
    });
};

const AbilityRoller: React.FC<IAbilityRollerProps> = ({ startingAge, startingSpecies, onComplete }) => {
    const [size, setSize] = useState<CharacterSize>('medium');

    const currentRacialMod = findRacialModFromRage(startingSpecies, startingAge);
    if (currentRacialMod === undefined) {
        return <>please choose valid species and age range</>;
    }

    const racialData = getRacialMods(startingAge, startingSpecies);

    return <div>
        <GenericCharacterRoller raceData={racialData} startingAge={startingAge} onChoose={(data) => interceptData(data, onComplete, size, startingAge, startingSpecies)} />
        {racialData.racialMods[0].sizeOptions.map(s => <label className="shortLabel">
            <input type='radio' name='size' onClick={() => setSize(s)} checked={s === size} />{s}
        </label>)}
    </div>;
};


export default AbilityRoller;