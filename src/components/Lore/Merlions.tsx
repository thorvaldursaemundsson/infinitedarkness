import React from "react";
import { Character } from "../Character";
import Section from "../playermanual/Section";

const experienceAges = [...Array(90)]
    .map((v: any, index: number, arr: any[]) => {
        return { age: index, exp: Character.CharacterPointsMerlion(index), mult: Character.ExperienceMultiplerMerlion(index) };
    });

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
        <p>Merlions may choose between small and medium size</p>
        <table>
            <thead>
                <tr>
                    <th> </th> <th>Age 18-24</th> <th>Age 25-40</th> <th>Age 41-80</th> <th>Age 81+</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> STR</td> <td> 1d6</td> <td> 1d6</td> <td> 1d8</td>  <td> 1d8</td>
                </tr>
                <tr>
                    <td> AGI</td>  <td> 1d10</td> <td> 1d10</td> <td> 1d8</td>  <td> 1d8</td>
                </tr>
                <tr>
                    <td> END</td>  <td> 1d8</td> <td> 1d8</td> <td> 1d6</td>  <td> 1d6</td>
                </tr>
                <tr>
                    <td> PER</td>  <td> 1d10</td> <td> 1d10</td> <td> 1d8</td>  <td> 1d8</td>
                </tr>
                <tr>
                    <td> INT</td>  <td> 4d4</td> <td> 4d4</td> <td> 4d4</td>  <td> 4d4</td>
                </tr>
                <tr>
                    <td> WILL</td>  <td> 1d10</td> <td> 1d10</td> <td> 1d10</td>  <td> 1d10</td>
                </tr>
            </tbody>
        </table>
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