import React from 'react';
import { Character } from '../Character';
import { CharacterRollerShambra } from './CharacterRoller';
import Section from '../playermanual/Section';
import RaceTable from '../races/RaceTable';
import { shambras } from '../races/Shambras';

const experienceAges = [...Array(90)]
    .map((v: any, index: number, arr: any[]) => {
        return { age: index, exp: Character.CharacterPointsShambras(index), mult: Character.ExperienceMultiplerShambras(index) };
    });

const Shambras: React.FC = () => {
    return <>
        <h2>Shambras</h2>
        <h3>Shambra homeworld</h3>
        <p>The shambra homeworld is an inhospitable place for humans, the atmosphere containing lethal levels of chlorine gas at sea level. This is because billions of years ago when there were only single celled organisms deep in the ocean some evolved to use chlorine as an attack mechanism, over time the chlorine built up in the atmosphere. As a result every life form on the planet has evolved to resist chlorine.</p>
        <p>To protect themselves the flora had to evolve to produce PVC plastic, some fauna evolved to have polytetrafluoroethylene (teflon) embedded in their furr or armor. Additionally shambras exhale small amounts of chlorine as a result of their immune system using chlorine to attack infections.</p>
        <h3>Biology and optics</h3>
        <p>Shambras are coverd in a nail like armor embedded with teflon that starts out rainbow refractory color and gets darker and matter over time, it hardens and eventually has to be shed, revealing underneath a new shiny colorful flexible armor</p>
        <p>Shambras have 4 eyes and 8 limbs, their legs tend to grow in proportion over time and have claw like hooves, they have two large upper arms equipped with pincers and two smaller lower arms equipped with a hand-like double pincer. The upper arms have strength and stability, the lower arms have fine motor control</p>
        <p>The Shambras' 4 eyes are located in a square pattern, the lower pair can see in blue and low ultra violet, the upper in green, red and high infra-red, as such the shambras can see 5 base colors, their infra-red allows them to see life forms even in absolute pitch black darkness</p>
        <p>As Shambras grow older they grow in size</p>
        <p>Shambras have no maximum age and grow bigger and smarter as they grow older</p>
        <p>They are hatched from eggs that are about 20cm tall, when they are young they shed every 6-9 months, as they reach adolescence it slows down to once per year, when they are adult it's once every few years. Old shambras only shed around every 10th year</p>
        <p>The oldest shambras are several hundred years old and stand 4 meters tall, they can only move around using both their legs and upper arms due to their sheer mass</p>
        <h3>Playing as a shambra</h3>
        <p>Shambras are a playable species, their stats depend greatly on their age</p>
        <p>Shambras take certain penalties as they grow older and bigger, players that are close to a previous or next age limit may choose to take adjecent effects instead</p>
        
        <RaceTable racialData={shambras} />
        
        <CharacterRollerShambra />

        <Section title='Shambra experience per age is as following'>
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
};

export default Shambras;