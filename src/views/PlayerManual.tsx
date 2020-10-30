import React, { useState } from 'react';
import MakeCharacter from '../components/playermanual/MakeCharacter';
import Combat from '../components/playermanual/Combat';
import Equipment from '../components/playermanual/Equipment';
import Wealth from '../components/playermanual/Wealth';
import Experience from '../components/playermanual/Experience';
import Vehicles from '../components/playermanual/Vehicles';
import Section from '../components/playermanual/Section';
import CharacterSheetOverview from '../components/playermanual/CharacterSheetOverview';
import { SpellsPerks } from '../components/perks/Spells';
import CarryingCapacity from '../components/playermanual/CarryingCapacity';
import CharacterSize from '../components/playermanual/CharacterSize';
import Radiation from '../components/playermanual/Radiation';
import Consumables from '../components/playermanual/Consumables';
import Cybernetics from '../components/playermanual/Cybernetics';
import HealthAndRest from '../components/playermanual/HealthAndRest';

const PlayerManual: React.FC = () => {
    return (<div>
        <h1>The Player Manual</h1>
        <p>This page is to help the player create characters and play the game, view each section below for more details.</p>
        <hr />
        <MakeCharacter key='pm1' />
        <hr />
        <CharacterSheetOverview key='pm2' />
        <hr />
        <RollingSkills key='pmrs' />
        <hr />
        <Experience key='pm4' />
        <hr />
        <CharacterSize key='pmcs' />
        <hr />
        <Combat key='pm5' />
        <hr />
        <HealthAndRest key='pm8' />
        <hr />
        <Wealth key='pm3' />
        <hr />
        <Equipment key='pm6' />
        <hr />
        <Consumables key='pmcons' />
        <hr />
        <CarryingCapacity key='pmcc' />
        <hr />
        <Cybernetics key='pmcyb' />
        <hr />
        <Vehicles key='pm7' />
        <hr />
        <Radiation key='pmr' />
        <hr />
        <Section title='Spell Roller'><SpellRoller key='pm9' /></Section>
    </div>);
}

const RollingSkills = () => 
    <Section title='Making a skill roll'>
        <h3>Rolling a skill</h3>
        <p>When you attempt to do anything that has a possibility of failure the GM will call on the player to make a skill roll. A skill roll involves two 10 sided dice, your skill rank and an appropriate ability (strength, agility, etc).</p>
        <p>Roll the dice, add them up, add the skill and ability (and any relevant perk if you have it). This number will be compared with a target, some targets are defined in the skill's description, other's depend on other character's skills. If the total equals or exceeds the target then the skill roll is a success. Most often a failure does not result in a catastrophic result, rather there is a spectrum from critical failure, mild failure, success, great success and supreme success</p>
        <p>In cases where there's no available table to check on the GM will choose an appropriate level of difficulty based on the attempted skill according to this table.</p>
        <ul>
            <li>Inconsequential: 0 </li>
            <li>Trivial: 5</li>
            <li>Easy: 10</li>
            <li>Routine: 15</li>
            <li>Challenging: 20</li>
            <li>Hard: 25</li>
            <li>Very hard: 30</li>
            <li>Extremely hard: 35</li>
            <li>Hellish: 40</li>
            <li>Impossible: 45</li>
            <li>Heroic: 50</li>
            <li>Godmode: 55</li>
            <li>Don't even try: 60</li>
        </ul>
        <h4>Take 4</h4>
        <p>Players can always choose to Take 4, this means instead of rolling they use the number 4. In some cases the GM might say that players are not allowed to Take 4 but it is adviced to be rare.</p>
        <h4>Take 10</h4>
        <p>If there are no harmful consequences, the character is not under duress or stress then the player may choose to take 10. This works similarly to Take 4. Passive skills are encouraged to always use Take 10.</p>
        <h4>Take 15</h4>
        <p>If the situation is such that it allows for Take 10 then the player may opt to take 10 times as long and Take 15.</p>
    </Section>



const SpellRoller: React.FC = (props) => {
    const [rolls, setRolls] = useState<number[]>([]);
    const DRollNot = (n: number[]) => {
        while (true) {
            let x = Math.floor(Math.random() * SpellsPerks.length);
            if (n.filter(p => p === x).length === 0) return x;
        }
    }
    const fractionOfSpells = 3;
    const Roll = () => {
        let numbers:number[] = [];
        for (let counter = 0; counter < fractionOfSpells; counter++){
            numbers.push(DRollNot(numbers));
        }
        setRolls(numbers);
    };

    return (<>
        <p>When you want to acquire a supernatural ability, you roll over all spells and perks {fractionOfSpells} times and pick one. There are in total {SpellsPerks.length} spells and mutations.</p>
        <button onClick={() => Roll()}>Roll</button>
        <ol>
            {rolls.map(r => <li>{SpellsPerks[r].name} ({r})</li>)}
        </ol>
    </>);
}


export default PlayerManual;