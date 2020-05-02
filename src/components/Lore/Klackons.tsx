import React from 'react';
import { Character } from '../Character';

const experienceAges = [...Array(90)]
    .map((v: any, index: number, arr: any[]) => {
        return { age: index, exp: Character.CharacterPointsKlackon(index), mult: Character.ExperienceMultiplerKlackon(index) };
    });

const Klackons: React.FC = () => {
    return <>
        <h2>Klackons</h2>
        <h3>Klackon homeworld</h3>
        <p>The klackon homeworld is an inhospitable place for humans, the atmosphere containing lethal levels of chlorine gas at sea level. This is because billions of years ago when there were only single celled organisms deep in the ocean some evolved to use chlorine as an attack mechanism, over time the chlorine built up in the atmosphere. As a result every life form on the planet has evolved to resist chlorine.</p>
        <p>To protect themselves the flora had to evolve to produce PVC plastic, some fauna evolved to have polytetrafluoroethylene (teflon) embedded in their furr or armor. Additionally klackons exhale small amounts of chlorine as a result of their immune system using chlorine to attack infections.</p>
        <h3>Biology and optics</h3>
        <p>Klackons are coverd in a nail like armor embedded with teflon that starts out rainbow refractory color and gets darker and matter over time, it hardens and eventually has to be shed, revealing underneath a new shiny colorful flexible armor</p>
        <p>Klackons have 4 eyes and 6 limbs, their legs tend to grow in proportion over time, they have two large upper arms equipped with pincers and two smaller lower arms equipped with a hand-like double pincer. The upper arms have strength and stability, the lower arms have fine motor control</p>
        <p>The Klackons' 4 eyes are located in a square pattern, the lower pair can see in blue and low ultra violet, the upper in green, red and high infra-red, as such the klackons can see 5 base colors, their infra-red allows them to see life forms even in absolute pitch black darkness</p>
        <p>As Klackons grow older they grow in size</p>
        <p>Klackons have no maximum age and grow bigger and smarter as they grow older</p>
        <p>They are hatched from eggs that are about 20cm tall, when they are young they shed every 6-9 months, as they reach adolescence it slows down to once per year, when they are adult it's once every few years. Old klackons only shed around every 10th year</p>
        <p>The oldest klackons are several hundred years old and stand 4 meters tall, they can only move around using both their legs and upper arms due to their sheer mass</p>
        <h3>Playing as a klackon</h3>
        <p>Klackons are a playable species, their stats depend greatly on their age</p>
        <table>
            <thead>
                <tr>
                    <th> </th> <th>Age 15-20</th> <th>Age 21-25</th> <th>Age 26-35</th> <th>Age 36-50</th> <th>Age 51-70</th> <th>Age 71-100</th> <th>Age 101+</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> STR</td> <td> 1d6</td> <td> 1d6</td> <td> 1d8</td>  <td> 1d8</td>  <td> 1d10</td> <td> 1d10</td> <td> 1d12</td>
                </tr>
                <tr>
                    <td> AGI</td> <td> 1d10</td>  <td> 1d10</td> <td> 1d8</td> <td> 1d8</td> <td> 1d6</td>  <td> 1d6</td> <td> 1d4</td>
                </tr>
                <tr>
                    <td> END</td> <td> 1d6</td>  <td> 1d6</td>  <td> 1d8</td> <td> 1d8</td> <td> 1d10</td> <td> 1d10</td> <td> 1d10</td>
                </tr>
                <tr>
                    <td> PER</td> <td> 1d12</td> <td> 1d12</td>  <td> 1d12</td> <td> 1d12</td> <td> 1d10</td> <td> 1d10</td> <td> 1d10</td>
                </tr>
                <tr>
                    <td> INT</td> <td> 1d4</td>  <td> 1d6</td> <td> 1d6</td>  <td> 1d8</td>  <td> 1d8</td> <td> 1d8</td>  <td> 1d10</td>
                </tr>
                <tr>
                    <td> WILL</td>  <td> 1d6</td>  <td> 1d8</td>  <td> 1d10</td>  <td> 1d10</td> <td> 1d10</td> <td> 1d10</td>  <td> 1d10</td>
                </tr>
            </tbody>
        </table>
        
        Klackon experience per age is as following
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
    </>
};

export default Klackons;