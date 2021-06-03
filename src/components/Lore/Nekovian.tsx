import React from 'react';
import Section from '../playermanual/Section';
import { GenericCharacterRoller } from './CharacterRoller';
import RaceTable from '../races/RaceTable';
import { nekovianData } from '../races/Nekovians';
import { getExperienceAges } from '../races/Races';

const experienceAges = getExperienceAges(nekovianData, 90);

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
    <p>When nekovians swim they may use the regular run table to determine how fast they swim and how far they can swim.</p>
    <h3>Playing as a Nekovian</h3>
    <p>Nekovians are a playable race but very few live outside of their homeworld and home system</p>
    <p>Nekovians move at double speed in water and air, and can fly (glide downwards at ~15 degrees)</p>
    <p>Nekovians have a bite attack, roll combat + agility vs defense, deals 1d6 + strength/3</p>
    
    <RaceTable racialData={nekovianData.racialMods} />
    
    <GenericCharacterRoller raceData={nekovianData} />

    <Section title='Nekovian experience per age is as following'>
        <table>
            <thead>
                <tr>
                    <th>Age</th> <th>Starting experience</th> <th>Experience Multiplier</th>
                </tr>
            </thead>
            <tbody>
                {experienceAges.slice(16, 90).map(ex => <tr><td>{ex.age}</td> <td>{ex.exp}</td> <td>{ex.mult}</td> </tr>)}
            </tbody>
        </table>
    </Section>
</>;


export default Nekovian;