import React from 'react';
import Section from './Section';

const CharacterSize = () => <Section title='Character Size'>
<h3>Character Size</h3>
<p>Being small or large has different benefits and penalties</p>
<table>
    <thead>
        <tr>
            <th>Size</th>
            <th>Strength mod</th>
            <th>Defense mod</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Tiny</td>
            <td>-2</td>
            <td>+4</td>
        </tr>
        <tr>
            <td>Small</td>
            <td>-1</td>
            <td>+2</td>
        </tr>
        <tr>
            <td>Medium</td>
            <td>+/-0</td>
            <td>+/-0</td>
        </tr>
        <tr>
            <td>Large</td>
            <td>+1</td>
            <td>-2</td>
        </tr>
        <tr>
            <td>Huge</td>
            <td>+2</td>
            <td>-4</td>
        </tr>
    </tbody>
</table>
</Section>;


export default CharacterSize;