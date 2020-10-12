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

const HealthAndRest = () =>
    <Section title='Health and Rest'>
        <h3>Health</h3>
        <i>There are two kinds of health, mental and physical. Injury to either will result in reduced ability and can lead to eventual death</i>
        <h4>Physical Health</h4>
        <p>
            Physical health represents the integrity of body.
        </p>
        <p>If you are injured you take penalty to all physical activities with an equal amount of damage taken. Note that merely walking is an athletics + endurance roll, severe damage may impede your ability to walk a distance.</p>
        <p>If your physical health (life) is reduced to zero you do not immediately die, rather you are partially incapacitated, any extraneous physical activity will cause you to take 1 damage</p>
        <p>If your physical health reaches full negative (-100%) you become unconscious and start to die, you lose 1 life every x number of minutes (x = you endurance), once it hits -200% you are fully dead</p>
        <h5>Pain and adrenaline</h5>
        <p>When you receive an injury during combat your body will produce adrenaline, this prevents penalties to physical activities, it lasts 1 hour, each time it happens you lose 1 mental health.</p>
        <h5>Painkillers</h5>
        <p>Painkillers can reduce the penalty to physical activities by transfering them into mental penalties. The stronger the painkiller the more it dulls the mind.</p>
        
        <h4>Mental Health</h4>
        <p>
            Mental health represents the integrity of the mind.
        </p>
        <p>
            If your mental health is injured you take a penalty to all mental activities equal to the amount of damage.
        </p>
        <p>Mental health injuries come from high levels of stress, over time it can accumulate.</p>
        <p>While you can not directly die from mental health injury it can debilitate you, if you reach zero you enter a state of depression: mundane tasks require a roll, if you fail you lack the motivation to act and do nothing. Even in life threatening situations since your character has lost the will to live.</p>        
        <h5>Ability damage</h5>
        <p>Ability damage recovers 1 per rest, if you have ability damage in multiple abilities then the one with the most damage recovers.</p>
        <p>Very few things cause direct ability damage, however if one ability is reduced to 0 or less then your character immediately falls unconscious</p>
        <h4>Mana</h4>
        <p>Mana is used for spells and activating mutations. A occations may let you expend mana for other purposes. There is no penalty to not having full mana, having below zero mana imposes a penalty equal to negative mana to all skill rolls. This stacks with other penalties.</p>
        <h3>Recovery</h3>
        <p>Recovery of life, mental health and mana generally happens when you rest. Life and mental health depends on the quality of sleep</p>
        <ul>
            <li>No sleep, work: if you stay up all night and work then you recover life at 50% rate and lose 2 mental health. Exhaustion increases by 1 level</li>
            <li>No sleep, no work: if you stay up all night but do nothing then you recover life at 50% and lose 1 mental health.</li>
            <li>Horrible sleep: you wake up with a headache and your body is sore and stiff, recover life at 50% and no mental health recovery. Exhaustion decreases by 1 level</li>
            <li>Low quality sleep: you wake up with a mild headache, life recovery rate 100% and no mental health recovery. Exhaustion decreases by 2 levels</li>
            <li>Adequate sleep: you wake up feeling rested, life recovery rate 100% and 1 mental health Recovery. Exhaustion decreases by 3 levels</li>
            <li>Good sleep: you wake up feeling well rested, life recovery rate 100%, 1 mental health recovery and you gain the "well rested" buff. Exhaustion decreases by 4 levels</li>
            <li>Fantastic sleep: you wake up full or energy, life recovery rate 150%, 2 mental health recovery and you gain the "well rested" buff. Exhaustion decreases by 5 levels</li>
        </ul>
        <p>Well rested: you have +1 to all skill rolls, if you are in a situation where you may lose mental health instead dispend this buff. Lasts 12 hours</p>
        <p>The quality of your sleep depends on the quality of your situation, some things have positive effects, some negative. If the quality if dropped below horrible then you can't fall asleep</p>
        <ul>
            <li>Sleeping on the floor with no cover: horrible sleep</li>
            <li>Sleeping on bad mattress or bedroll: low quality sleep</li>
            <li>Sleeping on bed: adequate quality sleep</li>
            <li>Sleeping on good bed: good sleep</li>
            <li>Temperature ouside of comfort (16-26): drop quality one step</li>
            <li>Extreme temperature: drop quality two steps</li>
            <li>Bad ventilation: drop quality one step</li>
            <li>Sleeping in body suit armor: drop quality one step</li>
            <li>Sleeping in plated or power armor: drop quality two steps</li>
            <li>Sleeping with 3 or more other people in room: drop quality one step</li>
            <li>No noice or disturbances: raise quality one step</li>
            <li>Sleeping medication: raise quality one step</li>
        </ul>
        <p>Life recovery rate is equal to endurance / 5 per day, fractions are carried over.</p>
        <p>Mental health recovery is equal to 1 per day on adequate and good quality sleep, 2 on fantastic sleep quality. It can be accelerated through therapy and meditation</p>
        <p>Mana recovers 1 per day night cycle. It is completely unaffected by quality of sleep or effort during the day.</p>
    </Section>;



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