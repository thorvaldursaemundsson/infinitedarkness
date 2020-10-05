import React from 'react';
import Section from './Section';

const CharacterSize = () => <Section title='Character Size'>
    <h3>Character Size</h3>
    <p>Being small or large has different benefits and penalties</p>
    <p>The size range and mass range may be exceeded at the player's and game master's discretion. But it is expected that characters get their size according to their size.</p>
    <table>
        <thead>
            <tr>
                <th>Size</th>
                <th>Strength mod</th>
                <th>Defense mod</th>
                <th>Size range (cm)</th>
                <th>Mass range (kg)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tiny</td>
                <td>-2</td>
                <td>+4</td>
                <td>90-130</td>
                <td>25-40</td>
            </tr>
            <tr>
                <td>Small</td>
                <td>-1</td>
                <td>+2</td>
                <td>120-160</td>
                <td>35-65</td>
            </tr>
            <tr>
                <td>Medium</td>
                <td>+/-0</td>
                <td>+/-0</td>
                <td>150-190</td>
                <td>60-110</td>
            </tr>
            <tr>
                <td>Large</td>
                <td>+1</td>
                <td>-2</td>
                <td>180-250</td>
                <td>90-160</td>
            </tr>
            <tr>
                <td>Huge</td>
                <td>+2</td>
                <td>-4</td>
                <td>240-300</td>
                <td>150-250</td>
            </tr>
        </tbody>
    </table>
    <h3>Movement speed</h3>
    <p>Characters have default and maximum movement speeds, and running speeds which are some multiplicative of their default speed. The walking speed is how far a character can walk in a round</p>
    <p>Characters may choose to power walk but take a -5 to all rolls if they do so and lose their skill bonus to their defense, if they jog they take a -10 and lose their agility to their defense</p>
    <p>To run during combat uses up all actions during combat, they gain a +4 defense while running but forgo skill</p>
    <p>To sprint the character must have first run, they gain a +6 defense while sprinting but forgo skill and agility</p>
    <table>
        <thead>
            <tr>
                <th>Type</th>
                <th>Speed</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Walk</td>
                <td>x1</td>
                <td>endurance + athletics hours</td>
            </tr>
            <tr>
                <td>Power Walk</td>
                <td>x2</td>
                <td>endurance + athletics / 4 hours</td>
            </tr>
            <tr>
                <td>Jog</td>
                <td>x3</td>
                <td>endurance + athletics / 8 hours</td>
            </tr>
            <tr>
                <td>Run</td>
                <td>x4</td>
                <td>(endurance + athletics) x 4 minutes</td>
            </tr>
            <tr>
                <td>Sprint</td>
                <td>x5</td>
                <td>endurance + athletics minutes</td>
            </tr>
        </tbody>
    </table>
    <p>Speed is determined by size, athletics skill and species</p>
    <h6>Size</h6>
    <table>
        <thead>
            <tr>
                <th>Size</th>
                <th>Speed</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tiny</td>
                <td>4</td>
            </tr>
            <tr>
                <td>Small</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Medium</td>
                <td>6</td>
            </tr>
            <tr>
                <td>Large</td>
                <td>7</td>
            </tr>
            <tr>
                <td>Huge</td>
                <td>8</td>
            </tr>
        </tbody>
    </table>
    <h6>Athletics skill</h6>
    <table>
        <thead>
            <tr>
                <th>Skill</th>
                <th>Bonus</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>6</td>
                <td>1</td>
            </tr>
            <tr>
                <td>12</td>
                <td>2</td>
            </tr>
            <tr>
                <td>18</td>
                <td>3</td>
            </tr>
        </tbody>
    </table>
    <h6>Species</h6>
    <table>
        <thead>
            <tr>
                <th>Species</th>
                <th>Bonus</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Human</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Merlion</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Nekovian</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Shambra</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
</Section>;


export default CharacterSize;