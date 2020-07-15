import React from 'react';
import Section from '../playermanual/Section';
import { Character } from '../Character';

const experienceAges = [...Array(90)]
    .map((v: any, index: number, arr: any[]) => {
        return { age: index, exp: Character.CharacterPointsNekovian(index), mult: Character.ExperienceMultiplerNekovian(index) };
    });

const Nekovian = () => <>
    <h2>Nekovians</h2>
    <h3>Nekovian homeworld</h3>
    <p>The Nekovian homeworld is Neke in the Ashra System</p>
    <h3>Flying Amphibian</h3>
    <p>A nekovian is a bipedal intelligent amphibian, they live in the ocean of Neke and on the various islands.</p>
    <p>A fully grown nekovian stands between 1.1 and 1.4 meters tall on average, their skin ranges from light blue to dark blue. They have a long tail with fins at the end.
    Their head is almost like a salamander with the exception that they have ridges on their forehead that goes across their head and reaches their spine.
    Their spine is followed by small fins which split into two at the end of their tail.
    </p>
    <p>Nekovians have very long arms, up to 2 meters span, with webbed skin both above and below. When stretched out their arms forms wings which allow them to glide in the air.</p>
    <h3>Playing as a Nekovian</h3>
    <p>Nekovians are a playable race but very few live outside of their homeworld and home system</p>
    <p>Nekovians move at double speed in water and can fly</p>
    <table>
        <thead>
            <tr>
                <th> </th> <th>Age 16-24</th> <th>Age 25-36</th> <th>Age 37-60</th> <th>Age 61+</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <td> STR</td> <td> 1d12</td> <td> 1d12</td> <td> 1d10</td>  <td> 1d10</td>
            </tr>
            <tr>
                <td> AGI</td>  <td> 1d12</td> <td> 1d10</td> <td> 1d10</td>  <td> 1d8</td>
            </tr>
            <tr>
                <td> END</td>  <td> 1d10</td> <td> 1d12</td> <td> 1d10</td>  <td> 1d8</td>
            </tr>
            <tr>
                <td> PER</td>  <td> 1d8</td> <td> 1d8</td> <td> 1d6</td>  <td> 1d4</td>
            </tr>
            <tr>
                <td> INT</td>  <td> 1d8</td> <td> 1d10</td> <td> 1d8</td>  <td> 1d8</td>
            </tr>
            <tr>
                <td> WILL</td>  <td> 1d12</td> <td> 1d12</td> <td> 1d12</td>  <td> 1d12</td>
            </tr>
        </tbody>
    </table>

    <Section title='Nekovian experience per age is as following'>
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
</>;


export default Nekovian;