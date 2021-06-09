import React from 'react';
import { bigNumberSeparator, weightConverter } from '../../utils/utilFunctions';
import Indexer, { Indexed } from '../general/Indexer';
import { ActuatorOptions } from './Robotics/Actuators';
import { ChassiOptions } from './Robotics/Chassi';
import { PowerCores } from './Robotics/PowerCore';
import { SensorOptions } from './Robotics/Sensors';
import { Skeletons } from './Robotics/Skeleton';

const Robotics: React.FC = () =>
    <Indexer title='Robotics' >
        <Indexed title='Differences' ><Differences /></Indexed>
        <Indexed title='Chassi'><Chassi /></Indexed>
        <Indexed title='Skeleton' > <Skeleton /></Indexed>
        <Indexed title='Actuators'><Actuators /></Indexed>
        <Indexed title='Power Core'><PowerCore /></Indexed>
        <Indexed title='Sensors'><Sensors /></Indexed>
        <Indexed title='Meta-cognitive core'><MetaCognitiveCore /></Indexed>
    </Indexer>;

//intelligence and willpower, accessories
const MetaCognitiveCore = () => <>

</>;

//perception, accessories
const Sensors = () => <div>
    <p>The chassi is the outside container, sometimes referred to as the armor</p>
    <ul>
        {SensorOptions.map(cha => <li><b>{cha.name}</b> {cha.description} <br />
            <b>Weight</b>: {weightConverter(cha.weightGrams)}<br />
            <b>Cost</b>: {bigNumberSeparator(cha.value)} {cha.things && <ul>{cha.things.map(th => <li>{th}</li>)}</ul>}
        </li>)}
    </ul>
</div>;

//endurance and strength, accessories
const PowerCore = () => <div>
    <p>The chassi is the outside container, sometimes referred to as the armor</p>
    <ul>
        {PowerCores.map(cha => <li><b>{cha.name}</b> {cha.description} <br />
            <b>Weight</b>: {weightConverter(cha.weightGrams)}<br />
            <b>Cost</b>: {bigNumberSeparator(cha.value)} {cha.things && <ul>{cha.things.map(th => <li>{th}</li>)}</ul>}
        </li>)}
    </ul>
</div>;

//agility and strength, accessories
const Actuators = () => <div>
    <p>The chassi is the outside container, sometimes referred to as the armor</p>
    <ul>
        {ActuatorOptions.map(cha => <li><b>{cha.name}</b> {cha.description} <br />
            <b>Weight</b>: {weightConverter(cha.weightGrams)}<br />
            <b>Cost</b>: {bigNumberSeparator(cha.value)} {cha.things && <ul>{cha.things.map(th => <li>{th}</li>)}</ul>}
        </li>)}
    </ul>
</div>;

//endurance and damage absorbtion, accessories
const Skeleton = () => <div>
    <p>The chassi is the outside container, sometimes referred to as the armor</p>
    <ul>
        {Skeletons.map(cha => <li><b>{cha.name}</b> {cha.description} <br />
            <b>Weight</b>: {weightConverter(cha.weightGrams)}<br />
            <b>Cost</b>: {bigNumberSeparator(cha.value)} {cha.things && <ul>{cha.things.map(th => <li>{th}</li>)}</ul>}
        </li>)}
    </ul>
</div>;

//damage absorbtion, accessories
const Chassi = () => <div>
    <p>The chassi is the outside container, sometimes referred to as the armor</p>
    <ul>
        {ChassiOptions.map(cha => <li><b>{cha.name}</b> {cha.description} <br />
            <b>Weight</b>: {weightConverter(cha.weightGrams)}<br />
            <b>Cost</b>: {bigNumberSeparator(cha.value)} {cha.things && <ul>{cha.things.map(th => <li>{th}</li>)}</ul>}
        </li>)}
    </ul>
</div>;


const Differences = () => <div>
    <ul>
        <li>no adrenaline, always half minus from damage</li>
        <li>no natural healing, extremely limited bleeding</li>
        <li>no mental health, impervious to mental states, fear, illusions</li>
        <li>no mana, no spells ever</li>
        <li>no exhaustion</li>
        <li>no need to eat or drink</li>
        <li>requires service weekly</li>
        <li>recovers life only when mechanics and electronics skills are used, costs replacement parts</li>
        <li>requires 4h recharge daily</li>
        <li>runs out of energy in 1 week</li>
        <li>only loses consciousness when at -200% or when completely switched off</li>
        <li>may reallocate experience points when spending new ones (1:1)</li>
        <li>ability scores always start at 2, can only be upgraded with better parts, not experience points</li>
        <li>always starts with static amount of experience points and always has exactly 1 multiplier</li>
    </ul>
</div>;




export default Robotics;