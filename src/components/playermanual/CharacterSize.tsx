import React, { CSSProperties } from 'react';
import Section from './Section';

const tdWidth: CSSProperties = {
    width: '160px',
    borderBottom: '1px solid #EEEEEE'
};

const CharacterSize = () => <Section title='Character Size & movement speed'>
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
    <table style={{ width: '480px' }}>
        <thead>
            <tr>
                <th style={tdWidth}>Type</th>
                <th style={tdWidth}>Speed</th>
                <th style={tdWidth}>Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style={tdWidth}>Walk</td>
                <td style={tdWidth}>x1</td>
                <td style={tdWidth}>endurance + athletics hours</td>
            </tr>
            <tr>
                <td style={tdWidth}>Power Walk</td>
                <td style={tdWidth}>x2</td>
                <td style={tdWidth}>endurance + athletics / 4 hours</td>
            </tr>
            <tr>
                <td style={tdWidth}>Jog</td>
                <td style={tdWidth}>x3</td>
                <td style={tdWidth}>endurance + athletics / 8 hours</td>
            </tr>
            <tr>
                <td style={tdWidth}>Run</td>
                <td style={tdWidth}>x4</td>
                <td style={tdWidth}>(endurance + athletics) x 4 minutes</td>
            </tr>
            <tr>
                <td style={tdWidth}>Sprint</td>
                <td style={tdWidth}>x5</td>
                <td style={tdWidth}>endurance + athletics minutes</td>
            </tr>
        </tbody>
    </table>
    <p>Speed is determined by size, athletics skill and species</p>
    <h6>Size</h6>
    <table style={{ width: '320px' }}>
        <thead>
            <tr>
                <th style={tdWidth}>Size</th>
                <th style={tdWidth}>Speed</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style={tdWidth}>Tiny</td>
                <td style={tdWidth}>4</td>
            </tr>
            <tr>
                <td style={tdWidth}>Small</td>
                <td style={tdWidth}>5</td>
            </tr>
            <tr>
                <td style={tdWidth}>Medium</td>
                <td style={tdWidth}>6</td>
            </tr>
            <tr>
                <td style={tdWidth}>Large</td>
                <td style={tdWidth}>7</td>
            </tr>
            <tr>
                <td style={tdWidth}>Huge</td>
                <td style={tdWidth}>8</td>
            </tr>
        </tbody>
    </table>
    <h6>Athletics skill</h6>
    <table style={{ width: '320px' }}>
        <thead>
            <tr>
                <th style={tdWidth}>Skill</th>
                <th style={tdWidth}>Bonus</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style={tdWidth}>0</td>
                <td style={tdWidth}>0</td>
            </tr>
            <tr>
                <td style={tdWidth}>6</td>
                <td style={tdWidth}>1</td>
            </tr>
            <tr>
                <td style={tdWidth}>12</td>
                <td style={tdWidth}>2</td>
            </tr>
            <tr>
                <td style={tdWidth}>18</td>
                <td style={tdWidth}>3</td>
            </tr>
        </tbody>
    </table>
    <h6>Species</h6>
    <table style={{ width: '320px' }}>
        <thead>
            <tr>
                <th style={tdWidth}>Species</th>
                <th style={tdWidth}>Bonus</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style={tdWidth}>Human</td>
                <td style={tdWidth}>1</td>
            </tr>
            <tr>
                <td style={tdWidth}>Merlion</td>
                <td style={tdWidth}>1</td>
            </tr>
            <tr>
                <td style={tdWidth}>Nekovian</td>
                <td style={tdWidth}>2</td>
            </tr>
            <tr>
                <td style={tdWidth}>Shambra</td>
                <td style={tdWidth}>0</td>
            </tr>
        </tbody>
    </table>
</Section>;


export default CharacterSize;