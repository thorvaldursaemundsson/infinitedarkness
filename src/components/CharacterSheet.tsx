import React, { useReducer, useState } from 'react';
import { Field } from './Field';
import { Paper, Grid, Button } from '@material-ui/core';
import { Character } from './Character';
import { Perk } from './Perks';
import StringField from './StringField';
import { GetTraits, Trait } from './traits/Traits';
import { GetPerkList } from './GetPerkList';

interface CharacterSheetProps {
    initialCharacter: Character;
    characterCallback: (c: Character) => void;
}

export const CharacterSheet: React.FC<CharacterSheetProps> = (props) => {
    const [character, dispatch] = useReducer(useCharacter, props.initialCharacter);
    const [edit, setEdit] = useState(false);
    const [viewTraitList, setViewTraitList] = useState(false);

    const perksList = GetPerkList();

    return <Paper style={{ textAlign: 'left' }}>
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
                <StringField label={'background'} value={character.background} enableEdit={edit} onChange={n => dispatch({ action: 'background', value: 0, name: n })} ></StringField>
                <Field enableButtons={edit} label='age' max={900} min={1} value={character.age} onChange={n => dispatch({ action: 'age', value: n })}>Your age determines your starting, maximum experience, as well as experience multiplier</Field>
                <Paper>Experience multiplier: {character.getExperienceMultiplier()}</Paper>
                <Paper>Hit points: {character.getHitpoints()}</Paper>
                <Paper>Mana: {character.getMana()}</Paper>
                <Paper>Fear resistence: {character.getFearResistence()}</Paper>
                <Paper>Damage bonus small: {character.getDamageBonusSmall()}</Paper>
                <Paper>Damage bonus medium: {character.getDamageBonusMedium()}</Paper>
                <Paper>Damage bonus large: {character.getDamageBonusLarge()}</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                {character.skills.map(s => {
                    let modifier: number = 0;
                    switch (s.attribute) {
                        case 'strength': modifier = character.strength; break;
                        case 'agility': modifier = character.agility; break;
                        case 'endurance': modifier = character.endurance; break;
                        case 'perception': modifier = character.perception; break;
                        case 'willpower': modifier = character.willpower; break;
                        case 'intelligence': modifier = character.intelligence; break;
                    }
                    return <Field key={s.name}
                        enableButtons={edit}
                        modifier={modifier}
                        max={40}
                        min={0}
                        label={s.name}
                        value={s.level}
                        onChange={(n => dispatch({ action: 'skill', name: s.name, value: n }))}>
                        ({s.attribute.substring(0, 3).toUpperCase()}) {s.description}
                        <div>
                            <h5 style={{ marginTop: '12px', marginBottom: '6px' }}>Perks</h5>
                            {perksList.filter(p => p.skill === s.name).map(p => {
                                return <Button key={'addperk_' + p.name} onClick={() => dispatch({ action: 'addperk', name: p.name, value: 0, perkToAdd: p })}>{p.name}</Button>;
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
                    </>)
                })}
            </Grid>
        </Grid>
    </Paper>;
}

interface dispatcher {
    action: string;
    name?: string;
    value: number;
    perkToAdd?: Perk;
    traitToAdd?: Trait;
}

const useCharacter = (state: Character, action: dispatcher): Character => {
    switch (action.action) {
        case 'strength': return new Character({ ...state, strength: action.value });
        case 'agility': return new Character({ ...state, agility: action.value });
        case 'endurance': return new Character({ ...state, endurance: action.value });
        case 'willpower': return new Character({ ...state, willpower: action.value });
        case 'perception': return new Character({ ...state, perception: action.value });
        case 'intelligence': return new Character({ ...state, intelligence: action.value });
        case 'age': return new Character({ ...state, age: action.value });
        case 'skill':
            let r = new Character({
                ...state
            });
            r.skills[state.skills.findIndex(s => s.name === action.name)].level = action.value;
            return r;
        case 'name': return new Character({ ...state, name: action.name || '' });
        case 'species': return new Character({ ...state, species: action.name || '' });
        case 'gender': return new Character({ ...state, gender: action.name || '' });
        case 'background': return new Character({ ...state, background: action.name || '' });
    }
    if (action.action === 'addperk') {
        if (action.perkToAdd !== undefined)
            return new Character({ ...state, perks: [...state.perks, action.perkToAdd] });
    }
    else if (action.action === 'removeperk') {
        let r = new Character({
            ...state
        });
        if (action.perkToAdd !== undefined) {
            let pta = action.perkToAdd;
            r.perks = r.perks.filter(p => p.name !== pta.name);
        }
        return r;
    }
    else if (action.action === 'addtrait') {
        if (action.traitToAdd !== undefined)
            return new Character({ ...state, traits: [...state.traits, action.traitToAdd] });
    }

    else if (action.action === 'removetrait') {
        let r = new Character({
            ...state
        });
        if (action.traitToAdd !== undefined) {
            let pta = action.traitToAdd;
            r.traits = r.traits.filter(p => p.name !== pta.name);
        }
        return r;
    }


    return state;
}