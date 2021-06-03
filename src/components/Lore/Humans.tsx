import React from "react";
import Section from "../playermanual/Section";
import { humansData } from "../races/Humans";
import { getExperienceAges } from "../races/Races";
import RaceTable from "../races/RaceTable";
import { GenericCharacterRoller } from "./CharacterRoller";

const experienceAges = getExperienceAges(humansData, 100);


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
        <p>Humans are inherently good at throwing, like their ancestors throwing crap. Humans suffer half range penalty for accuracy when throwing.</p>
        <RaceTable racialData={humansData.racialMods} />

        <GenericCharacterRoller raceData={humansData} />

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

export default Humans;