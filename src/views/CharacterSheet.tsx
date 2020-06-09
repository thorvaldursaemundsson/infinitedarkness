import React, { useReducer, useState } from 'react';
import { Character } from '../components/Character';
import { GetTraits } from '../components/traits/Traits';
import { GetPerkList } from '../components/GetPerkList';
import { useCharacter } from '../components/useCharacter';

import './charactersheet.css';
import EditText, { HideText } from '../components/HideText';

interface CharacterSheetProps {
    initialCharacter: Character;
    characterCallback: (c: Character) => void;
}
const padSize = 35;
export const CharacterSheet: React.FC<CharacterSheetProps> = (props) => {
    const [character, dispatch] = useReducer(useCharacter, props.initialCharacter);
    const [viewState, setViewState] = useState<"edit" | "print" | "explain" | "hide">("edit");
    const [viewTraitList, setViewTraitList] = useState(false);
    const [viewPerkList, setViewPerkList] = useState(false);

    return (<div className="characterSheet">
        {viewState !== "edit" ?
            <button className='no-print' onClick={() => setViewState("edit")}>edit</button>
            :
            <button className='no-print' onClick={() => setViewState("explain")}>explain</button>}
        {/* page 1 */}
        <table>
            <thead>
                <tr>
                    <th colSpan={3}><h4>Infinite Darkness</h4></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <label>Name</label> <EditText txt={character.name} isEdit={viewState} onChange={(str) => dispatch({ name: str, action: 'name', value: 0 })} explain={character.explain('name')} />
                    </td>
                    <td>
                        <label>Life</label> <HideText txt={character.getLife()} isEdit={viewState} explain={character.explain('life')} />
                    </td>
                    <td>
                        <label>Strength</label> <EditText txt={character.strength} isEdit={viewState} onChange={(str) => dispatch({ action: 'strength', value: parseInt(str) })} explain={character.explain('strength')} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Gender</label> <EditText txt={character.gender} isEdit={viewState} onChange={(str) => dispatch({ name: str, action: 'gender', value: 0 })} explain={character.explain('gender')} />
                    </td>
                    <td>
                        <label>Mana</label> <HideText txt={character.getMana()} isEdit={viewState} explain={character.explain('mana')} /> </td>
                    <td>
                        <label>Endurance</label> <EditText txt={character.endurance} isEdit={viewState} onChange={(str) => dispatch({ action: 'endurance', value: parseInt(str) })} explain={character.explain('endurance')} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Species</label> <EditText txt={character.species} isEdit={viewState} onChange={(str) => dispatch({ name: str, action: 'species', value: 0 })} explain={character.explain('species')} />
                    </td>
                    <td>
                        <label>Mental Health</label> <HideText txt={character.getMentalHealth()} isEdit={viewState} explain={character.explain('mentalHealth')} />
                    </td>
                    <td>
                        <label>Agility</label> <EditText txt={character.agility} isEdit={viewState} onChange={(str) => dispatch({ action: 'agility', value: parseInt(str) })} explain={character.explain('agility')} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Age</label> <EditText txt={character.age} isEdit={viewState} onChange={(str) => dispatch({ action: 'age', value: parseInt(str) })} explain={character.explain('age')} />
                    </td>
                    <td>
                        <label>Melee DB s / m / l</label>  <HideText txt={character.getDamageBonusSmall() + '/' + character.getDamageBonusMedium() + '/' + character.getDamageBonusLarge()} isEdit={viewState} explain={character.explain('damageBonus')} />
                    </td>
                    <td>
                        <label>Perception</label> <EditText txt={character.perception} isEdit={viewState} onChange={(str) => dispatch({ action: 'perception', value: parseInt(str) })} explain={character.explain('perception')} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Character points</label> <HideText txt={character.getCalculatedPointsLeft()} explain={character.explain('pointsLeft')} isEdit={viewState} />
                    </td>
                    <td>
                        <label>Homeworld</label> <EditText txt={character.background} isEdit={viewState} onChange={(str) => dispatch({ action: 'background', value: 0, name: str })} explain={character.explain('background')} />
                    </td>
                    <td>
                        <label>Intelligence</label> <EditText txt={character.intelligence} isEdit={viewState} onChange={(str) => dispatch({ action: 'intelligence', value: parseInt(str) })} explain={character.explain('intelligence')} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Experience multiplier</label>  <HideText txt={character.getExperienceMultiplier()} isEdit={viewState} explain={character.explain('experienceMultiplier')} />
                    </td>
                    <td>
                        <label>Player</label>
                    </td>
                    <td>
                        <label>Willpower</label> <EditText txt={character.willpower} isEdit={viewState} onChange={(str) => dispatch({ action: 'willpower', value: parseInt(str) })} explain={character.explain('willpower')} />
                    </td>
                </tr>
                <tr>
                    <td>
                        Background
                    </td>
                    <td>
                        Apperance traits
                    </td>
                    <td>
                        Personality traits
                    </td>
                </tr>
                {Pad(5, 0).map(i =>
                    <tr>
                        <td> &nbsp;</td>
                        <td> &nbsp;</td>
                        <td> &nbsp;</td>
                    </tr>
                )}
                <tr>
                    <td style={{ border: 'none' }}>
                        <h5>Skills</h5>
                        <table className="skillTable">
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Exp</th>
                                    <th>Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {character.skills.map(skill => {
                                    return <tr>
                                        <td>
                                            <label>{skill.name}</label>
                                        </td>
                                        <td></td>
                                        <td>
                                            <EditText txt={skill.level} isEdit={viewState} onChange={(str) => dispatch({ action: 'skill', name: skill.name, value: parseInt(str) })} explain={character.explain('skill:' + skill.name)} />
                                        </td>
                                    </tr>
                                })}
                                {Pad(padSize, character.skills.length).map(i => {
                                    return <tr>
                                        <td > <label> </label></td>
                                        <td> </td>
                                        <td> </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </td>
                    <td style={{ border: 'none' }}>
                        <h5>Perks {(viewState === "edit") ? <button className='no-print' onClick={() => setViewPerkList(!viewPerkList)}>Add Perk</button> : null}</h5>
                        <table>
                            <tbody>
                                {viewPerkList ? GetPerkList().map(perk => {
                                    return <tr className='no-print'>
                                        <td>
                                            <button onClick={() => dispatch({ action: 'addperk', name: perk.name, value: 0, perkToAdd: perk })}>{perk.name}</button> {perk.description()}
                                        </td>
                                    </tr>
                                }) : null}
                                {character.perks.map(perk => {
                                    return <tr>
                                        <td>
                                            {perk.name}
                                        </td>
                                    </tr>
                                })}
                                {Pad(viewPerkList ? 0 : padSize+1, character.perks.length).map(i => {
                                    return <tr>
                                        <td> <label> </label></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </td>
                    <td style={{ border: 'none' }}>
                        <h5>Traits {(viewState === "edit") ? <button className='no-print' onClick={() => setViewTraitList(!viewTraitList)}>Add Trait</button> : null}</h5>
                        <table>
                            <tbody>
                                {viewTraitList ? GetTraits().map(trait => {
                                    return <tr className='no-print'>
                                        <td>
                                            <button onClick={() => dispatch({ action: 'addtrait', name: trait.name, value: 0, traitToAdd: trait })}>{trait.name}</button> {trait.description}
                                        </td>
                                    </tr>
                                }) : null}
                                {character.traits.map(trait => {
                                    return <tr>
                                        <td>
                                            {trait.name}
                                        </td>
                                    </tr>
                                })}
                                {Pad(viewTraitList ? 0 : padSize - 28, character.traits.length).map(i => {
                                    return <tr>
                                        <td> <label> </label></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        <h5 style={{marginTop:'20px'}}>Reputation</h5>
                        <table>
                            <tbody>
                                {Pad(padSize - 8, 0).map(i => <tr>
                                    <td> <label> </label></td>
                                </tr>)}
                            </tbody>
                        </table>
                    </td>
                </tr>
                {/* page 2 */}
                <tr>
                    <td style={{ border: 'none' }}>
                        <h4>Inventory</h4>
                    </td>
                    <td style={{ border: 'none' }}>
                        <h4>Equipment</h4>
                    </td>
                    <td style={{ border: 'none' }}>
                        <h4>Stash</h4>
                    </td>
                </tr>

                <tr>
                    <td> Credits:</td>
                    <td> </td>
                    <td> Credits:</td>
                </tr>

                {Pad(49, 0).map(i =>
                    <tr>
                        <td> &nbsp;</td>
                        <td> </td>
                        <td> </td>
                    </tr>
                )}
            </tbody>
        </table></div>);
}


const Pad = (minSize: number, size: number) => {
    const i = Math.max(minSize - size, 0);
    let ar = new Array<number>();
    for (let counter = 0; counter < i; counter++) {
        ar.push(counter);
    }
    return ar;
}