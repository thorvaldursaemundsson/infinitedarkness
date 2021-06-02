import React from "react";
import { Character } from "../Character";
import Section from "../playermanual/Section";
import RaceTable from "../races/RaceTable";
import { synths } from "../races/Synth";
import { GenericCharacterRoller } from "./CharacterRoller";

const experienceAges = [...Array(90)]
    .map((v: any, index: number, arr: any[]) => {
        return { age: index, exp: Character.CharacterPointsSynths(index), mult: Character.ExperienceMultiplerSynths(index) };
    });


const Synths: React.FC = () => {
    return <>
        <h2>Synths</h2>
        <p>Synth is short for synthetic, as in synthetic person. A synthetic person is often legally viewed as a human.</p>
        <h3>Differences</h3>
        <p>There are many differences between synths are organics</p>
        <ul>
            <li>no adrenaline, always half minus from damage</li>
            <li>no natural healing, no bleeding</li>
            <li>no mental health, impervious to mental states, fear, illusions</li>
            <li>no mana, no spells ever</li>
            <li>no exhaustion</li>
            <li>do not need to eat, drink, breathe, sleep</li>
            <li>requires service weekly</li>
            <li>recovers life only when mechanics and electronics skills are used, costs replacement parts</li>
            <li>requires 4h recharge daily, or 1h fast recharge station</li>
            <li>runs out of energy in 1 week, each day without recharging they go into lower energy use gaining a cumulative -5 to all rolls</li>
            <li>may reallocate experience points when spending new ones (1:1)</li>
        </ul>
        <RaceTable racialData={synths} />

        <GenericCharacterRoller racialMod={synths} />

        <Section title='Human experience per age is as following'>

            <table>
                <thead>
                    <tr>
                        <th>Age</th> <th>Starting experience</th> <th>Experience Multiplier</th>
                    </tr>
                </thead>
                <tbody>
                    {experienceAges.slice(16, 101).map(ex => <tr><td>{ex.age}</td> <td>{ex.exp}</td> <td>{ex.mult}</td> </tr>)}
                </tbody>
            </table>
        </Section>
    </>
}

export default Synths;