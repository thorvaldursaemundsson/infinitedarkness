import React from "react";
import Section from "../Section";
import {  merlionsData } from "../races/Merlions";
import { getExperienceAges } from "../races/Races";
import RaceTable from "../races/RaceTable";
import { GenericCharacterRoller } from "./CharacterRoller";

const experienceAges = getExperienceAges(merlionsData, 120);

const Merlions: React.FC = () => {
    return <>
        <h2>Merlions</h2>
        <h3>The Merlion homeworld</h3>
        <p>Very little is known about the merlion homeworld other than the fact that it was destroyed some time around Earth date 2060 in a cataclysmic event believed to been driven by some kind of religious war.</p>
        <h3>Furs, tails and claws</h3>
        <p>Merlions are bipedal aliens, generally between 130-160cm tall, weighing at 35-60kg, covered in brown or green furr with blue stripes across their back, they have big pointy ears and black eyes and a tail that reaches the ground.</p>
        <p>Merlions have a special ability known as "redolex", where they fly into a serene rage that deepens their intellectual creativity, it allows them to connect ideas but blocks them from using it.</p>
        <p>Though they do not typically wear clothes they do often wear powered exoskeleton with integrated tools or armor, often brandishing symbols on their exoskeleton which signifies their clan and rank, some apply vibrant dyes to their furr for the same reason.</p>
        <p>Clans are made up of children, three parents and nine grandparents, when a child old enough to become a parent the grandparents are released from their clan and duties.</p>
        <p>Merlions do not have male or female genders or sexes, instead they have three genders: linon, caion, vekon, to reproduce each contributes and all three can become pregnant. Depending on which gender the merlion is born from it will have slightly different morphology.</p>
        <p>Linons tend to be bigger, protective and highly logical, merlions born from linons often have short tempers and use short bursts of redolex to help them think</p>
        <p>Caions have longer, sharper claws and fangs, they have exceptional spacial awareness and senses, merlions born from caions often have purple stripes instead of blue ones.</p>
        <p>Vekons are slightly smaller, have good social awareness and empathy, merlions born from vekons are natural leaders.</p>
        <h3>Playing a Merlion</h3>
        <p>Merlions are a playable species but not recommended for new players, their stats are slightly affected by their age</p>
        <p>Merlions gain trait "redolex" which increases all mental skills by +1 during combat</p>
        <p>Merlions gain trait "manaless" which locks them out of spells, they gain +2 to all resistence against spells</p>
        <p>Merlions can use their claws, 1d2 + strength / 5 damage</p>
        <RaceTable racialData={merlionsData.racialMods} />
        
        <GenericCharacterRoller raceData={merlionsData} />
        <Section title='Merlion experience per age is as following'>
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

export default Merlions;