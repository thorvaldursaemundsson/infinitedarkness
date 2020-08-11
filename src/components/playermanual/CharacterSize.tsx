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
</Section>;


export default CharacterSize;