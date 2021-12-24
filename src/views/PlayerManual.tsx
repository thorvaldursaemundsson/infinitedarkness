import React from 'react';
import MakeCharacter from '../components/playermanual/MakeCharacter';
import Combat from '../components/playermanual/Combat';
import Equipment from '../components/playermanual/Equipment';
import Wealth from '../components/playermanual/Wealth';
import Experience from '../components/playermanual/Experience';
import Vehicles from '../components/playermanual/Vehicles';
import Section from '../components/Section';
import CharacterSheetOverview from '../components/playermanual/CharacterSheetOverview';
import CarryingCapacity from '../components/playermanual/CarryingExhaustion';
import Radiation from '../components/playermanual/Radiation';
import Consumables from '../components/playermanual/Consumables';
import Cybernetics from '../components/playermanual/Cybernetics';
import HealthAndRest from '../components/playermanual/HealthAndRest';
import { IViewProps } from './IViewProps';
import CharacterSizeAndSpeed from '../components/playermanual/CharacterSizeAndSpeed';


const PlayerManual: React.FC<IViewProps> = ({route}) => {
    console.log(route);
    return (<div>
        <h1>The Player Manual</h1>
        <p>This page is to help the player create characters and play the game, view each section below for more details.</p>
        <hr />
        <MakeCharacter initiallyOpen={route === 'makeCharacter'} key='pm1' />
        <hr />
        <CharacterSheetOverview key='pm2' />
        <hr />
        <RollingSkills key='pmrs' />
        <hr />
        <Experience key='pm4' />
        <hr />
        <CharacterSizeAndSpeed key='pmcs' />
        <hr />
        <CarryingCapacity key='pmcc' />
        <hr />
        <Combat key='pm5' />
        <hr />
        <HealthAndRest key='pm8' />
        <hr/>
        <Wealth key='pm3' />
        <hr />
        <Equipment key='pm6' />
        <hr />
        <Consumables key='pmcons' />
        <hr />
        <Vehicles key='pm7' />
        <hr />
        <Cybernetics key='pmcyb' />
        <hr />
        <Radiation key='pmr' />
        
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
        <h4>Critical success and failure</h4>
        <p>When you roll 2d10 on a skill or ability check and both dice show 10, roll another d10 and add to the roll.</p>
        <p>When you roll 2d10 on a skill or ability check and both dice show 1, roll another d10 and subtract from the roll.</p>
    </Section>



export default PlayerManual;