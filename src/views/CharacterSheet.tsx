import React, { useReducer, useState } from 'react';
import { Field } from '../components/Field';
import { Paper, Grid, Button } from '@material-ui/core';
import { Character } from '../components/Character';
import StringField from '../components/StringField';
import { GetTraits, Trait } from '../components/traits/Traits';
import { GetPerkList } from '../components/GetPerkList';
import { useCharacter } from '../components/useCharacter';
import { Label } from '../components/Label';

import './charactersheet.css';

interface CharacterSheetProps {
    initialCharacter: Character;
    characterCallback: (c: Character) => void;
}
const smallLabel = {
};
export const CharacterSheet2: React.FC<CharacterSheetProps> = (props) => {
    const [character, dispatch] = useReducer(useCharacter, props.initialCharacter);
    const [edit, setEdit] = useState(true);
    const [viewTraitList, setViewTraitList] = useState(false);

    const perksList = GetPerkList();

    return <Paper className="characterSheet">
        <Button key='charactersheet_edit' onClick={() => setEdit(!edit)}>edit</Button>
        <Grid container spacing={3} >
            <Grid item xs={12} sm={6}>
                Character points left {character.getCalculatedPointsLeft()}
                <Field enableButtons={edit} max={character.getMaxStrength()} label='strength' value={character.strength} onChange={n => dispatch({ action: 'strength', value: n })}>Raw muscle strength</Field>
                <Field enableButtons={edit} max={character.getMaxAgility()} label='agility' value={character.agility} onChange={n => dispatch({ action: 'agility', value: n })}>Steady hands, reflexes</Field>
                <Field enableButtons={edit} max={character.getMaxEndurance()} label='endurance' value={character.endurance} onChange={n => dispatch({ action: 'endurance', value: n })}>Ability to last long</Field>
                <Field enableButtons={edit} max={character.getMaxPerception()} label='perception' value={character.perception} onChange={n => dispatch({ action: 'perception', value: n })}>eyesight, hearing, and how much you smell</Field>
                <Field enableButtons={edit} max={character.getMaxWillpower()} label='willpower' value={character.willpower} onChange={n => dispatch({ action: 'willpower', value: n })}>ability to say "no" when it's sooo good</Field>
                <Field enableButtons={edit} max={character.getMaxIntelligence()} label='intelligence' value={character.intelligence} onChange={n => dispatch({ action: 'intelligence', value: n })}>big brainy boy</Field>
            </Grid>
            <Grid item xs={12} sm={6}>
                <StringField label={'name'} value={character.name} enableEdit={edit} onChange={n => dispatch({ action: 'name', value: 0, name: n })} ></StringField>
                <StringField label={'gender'} value={character.gender} enableEdit={edit} onChange={n => dispatch({ action: 'gender', value: 0, name: n })} ></StringField>
                <StringField label={'species'} value={character.species} enableEdit={edit} onChange={n => dispatch({ action: 'species', value: 0, name: n })} ></StringField>

                <Field enableButtons={edit} label='age' max={900} min={1} value={character.age} onChange={n => dispatch({ action: 'age', value: n })}>Your age determines your starting, maximum experience, as well as experience multiplier</Field>
                <div>Experience multiplier: {character.getExperienceMultiplier()}</div>
                <div>
                    <Label style={smallLabel}>Life:</Label><Label style={smallLabel}> {character.getLife()}</Label>
                    <Label style={smallLabel}>Mana:</Label><Label style={smallLabel}> {character.getMana()}</Label>
                </div>
                <div>
                    <Label style={smallLabel}>Fear resistence:</Label><Label style={smallLabel}> {character.getFearResistence()}</Label>
                    <Label style={smallLabel}>Sequence:</Label><Label style={smallLabel}> {character.getSequence()}</Label>
                </div>

                <div><Label>Melee damage (small/medium/large):</Label> {character.getDamageBonusSmall()} / {character.getDamageBonusMedium()} / {character.getDamageBonusLarge()}</div>
                <StringField label={'background'} value={character.background} enableEdit={edit} onChange={n => dispatch({ action: 'background', value: 0, name: n })} ></StringField>
            </Grid>
            <Grid item xs={12} sm={6}>
                {character.skills.map(s => {

                    return <Field key={s.name}
                        enableButtons={edit}
                        max={40}
                        min={0}
                        label={s.name}
                        value={s.level}
                        onChange={(n => dispatch({ action: 'skill', name: s.name, value: n }))}>
                        {s.description}
                        {s.useCases.map(uc => {
                            return (<div>
                                <b>{uc.name}</b> ({uc.attribute} - {uc.type}) = {s.level + character.getAttributeValueByName(uc.attribute) + character.getHook(uc.name)}
                                <br />{uc.description}
                            </div>);
                        })}
                        <div>
                            <h5 style={{ marginTop: '12px', marginBottom: '6px' }}>Perks</h5>
                            {perksList.filter(p => p.skill === s.name).map(p => {

                                return <Button disabled={p.level * 4 > s.level} key={'addperk_' + p.name} onClick={() => dispatch({ action: 'addperk', name: p.name, value: 0, perkToAdd: p })}>{p.name}</Button>;
                            })}
                        </div>
                    </Field>
                })}
            </Grid>

            <Grid item xs={12} sm={6}>
                <h1>Traits</h1>
                {character.traits.map(trait => {
                    return (<div>
                        <b>{trait.name}</b> {trait.description} ({trait.cost})
                        {edit && <Button key={'removetrait_' + trait.name} onClick={() => dispatch({ action: 'removetrait', name: trait.name, value: 0, traitToAdd: trait })}>X</Button>}
                        <br />
                    </div>)
                })}
                {edit === true ?
                    <>
                        {viewTraitList === true ?
                            <>
                                <Button key='traitsbutton' onClick={() => setViewTraitList(false)}>Hide Traits</Button>
                                {GetTraits().map(trait => {
                                    return <div style={{ paddingBottom: '6px' }}>
                                        <Button size='small' variant='contained' onClick={() => dispatch({ action: 'addtrait', name: trait.name, value: 0, traitToAdd: trait })}>{trait.name}</Button>
                                        ({trait.cost})
                                        {trait.description}
                                    </div>
                                })}
                            </>
                            : <Button key='traitsbutton' onClick={() => setViewTraitList(true)}>View Traits</Button>}
                    </>
                    : null
                }
                <h1>Perks</h1>
                {character.perks.map(perk => {
                    return (<><b>{perk.name}</b> ({perk.cost()}) {perk.description()}
                        {edit && <Button key={'removeperk_' + perk.name} size="small" onClick={() => dispatch({ action: 'removeperk', name: perk.name, value: 0, perkToAdd: perk })}>X</Button>}
                        <br />
                    </>)
                })}
            </Grid>
        </Grid>
    </Paper>;
}



export const CharacterSheet: React.FC<CharacterSheetProps> = (props) => {
    const [character, dispatch] = useReducer(useCharacter, props.initialCharacter);
    const [edit, setEdit] = useState<"true" | "false" | "hide">("true");
    const [viewTraitList, setViewTraitList] = useState(false);
    const [viewPerkList, setViewPerkList] = useState(false);

    const setNext = () => {
        switch (edit) {
            case "true": setEdit("false"); return;
            case "false": setEdit("hide"); return;
            case "hide": setEdit("true"); return;

        }
    };

    const perksList = GetPerkList();

    return (<div className="characterSheet">
        <button onClick={() => setNext()}>edit</button>
        <table>
            <tbody>
                <tr>
                    <td><label>Name</label> <EditText txt={character.name} isEdit={edit} onChange={(str) => dispatch({ name: str, action: 'name', value: 0 })} /></td>
                    <td><label>Life</label> <HideText txt={character.getLife()} isEdit={edit} /></td>
                    <td><label>Strength</label> <EditText txt={character.strength} isEdit={edit} onChange={(str) => dispatch({ action: 'strength', value: parseInt(str) })} /></td>
                </tr>
                <tr>
                    <td><label>Gender</label> <EditText txt={character.gender} isEdit={edit} onChange={(str) => dispatch({ name: str, action: 'gender', value: 0 })} /></td>
                    <td><label>Mana</label> <HideText txt={character.getMana()} isEdit={edit} /> </td>
                    <td><label>Endurance</label> <EditText txt={character.endurance} isEdit={edit} onChange={(str) => dispatch({ action: 'endurance', value: parseInt(str) })} /></td>
                </tr>
                <tr>
                    <td><label>Species</label> <EditText txt={character.species} isEdit={edit} onChange={(str) => dispatch({ name: str, action: 'species', value: 0 })} /></td>
                    <td><label>Fear Resistence</label> <HideText txt={character.getFearResistence()} isEdit={edit} /> </td>
                    <td><label>Agility</label> <EditText txt={character.agility} isEdit={edit} onChange={(str) => dispatch({ action: 'agility', value: parseInt(str) })} /></td>
                </tr>
                <tr>
                    <td><label>Age</label> <EditText txt={character.age} isEdit={edit} onChange={(str) => dispatch({ action: 'age', value: parseInt(str) })} /></td>
                    <td><label>Melee DB s / m / l</label>  <HideText txt={character.getDamageBonusSmall() + '/' + character.getDamageBonusMedium() + '/' + character.getDamageBonusLarge()} isEdit={edit} /> </td>
                    <td><label>Perception</label> <EditText txt={character.perception} isEdit={edit} onChange={(str) => dispatch({ action: 'perception', value: parseInt(str) })} /></td>
                </tr>
                <tr>
                    <td><label>Character points</label> <HideText txt={character.getCalculatedPointsLeft()} isEdit={edit} /> </td>
                    <td><label>Homeworld</label> <EditText txt={character.background} isEdit={edit} onChange={(str) => dispatch({ action: 'background', value: 0, name: str })} /> </td>
                    <td><label>Intelligence</label> <EditText txt={character.intelligence} isEdit={edit} onChange={(str) => dispatch({ action: 'intelligence', value: parseInt(str) })} /></td>
                </tr>
                <tr>
                    <td><label>Experience multiplier</label>  <HideText txt={character.getExperienceMultiplier()} isEdit={edit} /> </td>
                    <td></td>
                    <td><label>Willpower</label> <EditText txt={character.willpower} isEdit={edit} onChange={(str) => dispatch({ action: 'willpower', value: parseInt(str) })} /></td>
                </tr>
                <tr>
                    <td>
                        <h5>Skills</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th><label>Skill</label></th>
                                    <th>Exp</th>
                                    <th>Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {character.skills.map(skill => {
                                    return <tr>
                                        <td >
                                            <label>{skill.name}</label>
                                        </td>
                                        <td></td>
                                        <td>
                                            <EditText txt={skill.level} isEdit={edit} onChange={(str) => dispatch({ action: 'skill', name: skill.name, value: parseInt(str) })} />
                                        </td>
                                    </tr>
                                })}
                                {Pad(45, character.skills.length).map(i => {
                                    return <tr>
                                        <td > <label> </label></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <h5>Perks {(edit === "true") ? <button onClick={() => setViewPerkList(!viewPerkList)}>Add Perk</button> : null}</h5>
                        <table>
                            <tbody>
                                {viewPerkList ? GetPerkList().map(perk => {
                                    return <tr>
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
                                {Pad(viewPerkList ? 0 : 45, character.perks.length).map(i => {
                                    return <tr>
                                        <td> <label> </label></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <h5>Traits {(edit === "true") ? <button onClick={() => setViewTraitList(!viewTraitList)}>Add Trait</button> : null}</h5>


                        <table>
                            <tbody>
                                {viewTraitList ? GetTraits().map(trait => {
                                    return <tr>
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
                                {Pad(viewTraitList ? 0 : 45, character.traits.length).map(i => {
                                    return <tr>
                                        <td> <label> </label></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table></div>);
}

interface IHideText {
    isEdit: "true" | "false" | "hide";
    txt: string | number;
}
const HideText: React.FC<IHideText> = ({ isEdit, txt }) => {
    if (isEdit === "true")
        return <>{txt}</>;
    else if (isEdit === "false")
        return <>{txt}</>;
    else return null;
}

interface IEditText extends IHideText {
    onChange: (str: string) => void;
}

const EditText: React.FC<IEditText> = ({ isEdit, onChange, txt }) => {
    if (isEdit === "true")
        return <input type="text" onChange={(e) => onChange(e.target.value)} value={txt}></input>
    else return <HideText txt={txt} isEdit={isEdit} />
}

const Pad = (minSize: number, size: number) => {
    const i = Math.max(minSize - size, 0);
    let ar = new Array<number>();
    for (let counter = 0; counter < i; counter++) {
        ar.push(counter);
    }
    return ar;
}