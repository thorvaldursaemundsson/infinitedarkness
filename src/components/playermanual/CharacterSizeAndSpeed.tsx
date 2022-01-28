import React, { CSSProperties } from 'react';
import { CharacterSizeMods } from '../Character';
import Section from '../Section';

const tdWidth: CSSProperties = {
    width: '160px',
    borderBottom: '1px solid #EEEEEE'
};

const CharacterSizeAndSpeed = () => <Section title='Character Size & movement speed'>
    <h3>Character Size</h3>
    <p>Being small or large has different benefits and penalties</p>
    <p>The size range and mass range may be exceeded at the player's and game master's discretion. But it is expected that characters get their size according to their size.</p>
    <p>Secondary mod refers to base defense and any situation or skill where it is disadvantageous to be large and advantageous to be small, such as hiding, tumbling, etc.</p>
    <table>
        <thead>
            <tr>
                <th>Size</th>
                <th>Strength mod</th>
                <th>Secondary mod</th>
                <th>Height range (cm)</th>
                <th>Mass range (kg)</th>
                <th>Speed base</th>
                <th>Base defense</th>
            </tr>
        </thead>
        <tbody>

            {CharacterSizeMods.map(m => <tr>
                <td>
                    {m.size}
                </td>
                <td>
                    {m.strengthMod}
                </td>
                <td>
                    {m.secondaryMod}
                </td>
                <td>
                    {m.averageHeight[0]} - {m.averageHeight[0]}
                </td>
                <td>
                    {m.averageWeight[0]} - {m.averageWeight[0]}
                </td>
                <td>
                    {m.speedBase}
                </td>
                <td>
                    {10 + m.secondaryMod}
                </td>
            </tr>)}
        </tbody>
    </table>
    <h3>Movement speed</h3>
    <p>Characters have default and maximum movement speeds, and running speeds which are some multiplicative of their default speed. The walking speed is how far a character can walk in a round</p>
    <p>Characters may choose to power walk but take a -5 to all rolls if they do so and lose their skill bonus to their defense, if they jog they take a -10 and lose their agility to their defense</p>
    <p>To run during combat uses up all actions during combat, they gain a +4 defense while running but forgo skill (use second defense number in place of third)</p>
    <p>To sprint the character must have first run, they forgo skill and agility (use only first defense number)</p>

    <p>Speed is determined by size, athletics skill and species</p>
    <h6>Size</h6>
    <p>See above table</p>
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
    <h5>Movement speed types</h5>
    <p>There are multiple movement speed types.</p>
    <table>
        <thead>
            <tr>
                <th>Type</th>
                <th>Speed</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Walk</td>
                <td>100%</td>
                <tr>Normal walking speed using move action</tr>
            </tr>
            <tr>
                <td>Power Walk</td>
                <td>200%</td>
                <tr>Requires use of both move action and action.</tr>
            </tr>
            <tr>
                <td>Jog</td>
                <td>300%</td>
                <tr>Requires use of both move action and action. Defense drops from active to passive, or passive to base. Can not use if defense is already at base</tr>
            </tr>
            <tr>
                <td>Run</td>
                <td>400%</td>
                <tr>Requires use of both move action and action. Defense drops to base, can only use if defense is on active.<br />
                    May not react</tr>
            </tr>
            <tr>
                <td>Sprint</td>
                <td>500%</td>
                <tr>Requires use of both move action and action. Defense drops to base, can only use if defense is on active<br />
                    Must run in a straigth or near straight line.<br />
                    Must have used run action in previous turn.<br />
                    Prevents reaction
                </tr>
            </tr>
        </tbody>
    </table>
    <p><b>Important notice!</b> Exhaustion and being over carrying capacity limits maximum speed, it also increases effort for available speeds. <br />
        For example if you are at 1 level of exhaustion and can't sprint, running now uses as much energy as sprinting. Walking uses twice as much energy.<br />
        Characters that wear heavy armor, carry huge loads of loot or are very exhausted have drastically limited travel ability. You may not fast travel while overburdened.</p>
</Section>;


export default CharacterSizeAndSpeed;