import React from 'react';
import Section from './Section';


const Radiation = () => <Section title='Radiation'>
    <h3>Radiation</h3>
    <p>Ionizing radiation can be found everywhere. The effects of radiation does are cumulative, meaning each dose adds on the previous levels. Radiation levels can increase beyond 10, each level adds +1 dose per round</p>
    <p>Radiation naturally drops at the rate of 1 per year, this effect can be accelerated to 1 per month with a medicine check.</p>
    <p>Additionally, radiation doses can go above </p>
    <table style={{ width: '100%' }}>
        <thead>
            <tr>
                <th>Level</th>
                <th>Time per dose</th>
                <th>Number of doses</th><th>Effect</th>
            </tr>
        </thead>
        <tbody>
            <tr> <td>0</td><td>Safe (drop 1 dose per year)</td> <td>0</td><td>No effect</td> </tr>
            <tr> <td>1</td><td>1 Year</td> <td>1</td><td>Life regen halved</td> </tr>
            <tr> <td>2</td><td>1 Month</td> <td>2</td><td>-1 to all rolls</td> </tr>
            <tr> <td>3</td><td>4 Days</td> <td>3</td><td>-2 to all rolls</td> </tr>
            <tr> <td>4</td><td>12 hours</td> <td>4</td><td>-1 to all stats</td> </tr>
            <tr> <td>5</td><td>1 hour</td> <td>5</td><td>-2 to all stats</td> </tr>
            <tr> <td>6</td><td>10 minutes</td> <td>6</td><td>Life regen quartered</td></tr>
            <tr> <td>7</td><td>10 rounds</td> <td>7</td><td>Hair falls out, severe nausea, -3 to all rolls</td> </tr>
            <tr> <td>8</td><td>2 rounds</td> <td>8</td><td>10% chance to die every day, tissue decay</td>  </tr>
            <tr> <td>9</td><td>1 rounds </td><td>9</td><td>5% chance to die every hour, lose 1 life every hour</td>  </tr>
            <tr> <td>10</td><td>1 rounds = 2 doses</td><td>10</td><td>5% chance to die every minute</td> </tr>
        </tbody>
    </table>
    <h5>Situations and protection</h5>
    <p>Various situations have various levels of radiation, and it can come from multiple sources.</p>
    <p>Protection is subtractive, simply subtract the protection from the level. Multiple sources stack. Distance to local sources matter a lot</p>
    <table style={{ width: '100%' }}>
        <thead>
            <tr><th>Situation (examples)</th><th>Level</th> <th>Protection Source</th> <th>Protection amount</th></tr>
        </thead>
        <tbody>
            <tr>
                <td>Habitable planet surface</td>
                <td>0</td>
                <td>Normal clothes</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Habitable planet near space</td>
                <td>1</td>
                <td>Space Suit, anti-radiation drugs</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Low orbit (magnetically active planet)</td>
                <td>2</td>
                <td>Space ship, 1m concrete</td>
                <td>2</td>
            </tr>
            <tr>
                <td>High orbit (magnetically active planet)</td>
                <td>3</td>
                <td>Space ship (advanced), 2m concrete</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Stellar space</td>
                <td>4</td>
                <td>4m concrete</td>
                <td>4</td>
            </tr>
            <tr>
                <td>Interstellar space</td>
                <td>5</td>
                <td>6m concrete</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Van allen belts</td>
                <td>6</td>
                <td>8m concrete</td>
                <td>6</td>
            </tr>
            <tr>
                <td>Inside nuclear reactor (1 meter)</td>
                <td>7</td>
                <td>10m concrete</td>
                <td>7</td>
            </tr>
            <tr>
                <td>Near meltdown site (50 meters)</td>
                <td>8</td>
                <td>15m concrete</td>
                <td>8</td>
            </tr>
            <tr>
                <td>Near meltdown site (20 meters), </td>
                <td>9</td>
                <td>25m concrete</td>
                <td>9</td>
            </tr>
            <tr>
                <td>Near meltdown site (5 meters), FTL core beam</td>
                <td>10</td>
                <td>40m concrete</td>
                <td>10</td>
            </tr>
        </tbody>
    </table>
</Section>;


export default Radiation;