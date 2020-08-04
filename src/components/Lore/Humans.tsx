import React from "react";
import { Character } from "../Character";
import Section from "../playermanual/Section";

const experienceAges = [...Array(90)]
    .map((v: any, index: number, arr: any[]) => {
        return { age: index, exp: Character.CharacterPointsHuman(index), mult: Character.ExperienceMultiplerHuman(index) };
    });


const Humans: React.FC = () => {
    return <>
        <h2>Humans</h2>
        <h3>The human homeworld</h3>
        <p>It's Earth</p>
        <h3>Human biology</h3>
        <p>It's often believed that humans are the default, the standard of all the species. That is a very human centric belief system.</p>
        <p>Humans are however very diverse and have a rich history, they live on many planets and make up 95% of the people in the Sol system and 99% of the people in the Centauri system.</p>
        <h3>Playing a human character</h3>
        <p>Humans are the obvious choice for new players but also a good option for experienced players too. These are their stats</p>
        <table>
            <thead>
                <tr>
                    <th> </th> <th>Age 18-26</th> <th>Age 27-40</th> <th>Age 41-80</th> <th>Age 81+</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> STR</td> <td>1d8</td>  <td>1d10</td>  <td>1d10</td>  <td>1d8</td>
                </tr>
                <tr>
                    <td> AGI</td>  <td>1d10</td>  <td>1d10</td>  <td>1d8</td>  <td>1d6</td>
                </tr>
                <tr>
                    <td> END</td>  <td>1d12</td>  <td>1d12</td>  <td>1d10</td>  <td>1d8</td>
                </tr>
                <tr>
                    <td> PER</td>  <td>1d12</td>  <td>1d10</td>  <td>1d8</td>  <td>1d6</td>
                </tr>
                <tr>
                    <td> INT</td>  <td>1d10</td>  <td>1d10</td>  <td>1d10</td>  <td>1d8</td>
                </tr>
                <tr>
                    <td> WILL</td>  <td>1d6</td>  <td>1d8</td>  <td>1d10</td>  <td>1d8</td>
                </tr>
            </tbody>
        </table>

        <Section title='Human experience per age is as following'>

            <table>
                <thead>
                    <tr>
                        <th>Age</th> <th>Starting experience</th> <th>Experience Multiplier</th>
                    </tr>
                </thead>
                <tbody>
                    {experienceAges.slice(16, 81).map(ex => <tr><td>{ex.age}</td> <td>{ex.exp}</td> <td>{ex.mult}</td> </tr>)}
                </tbody>
            </table>
        </Section>
    </>
}

export default Humans;