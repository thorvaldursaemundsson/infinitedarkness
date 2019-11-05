import React, { useState, useReducer } from 'react';
import { Field } from './Field';
import { Label } from './Label';
import { Paper, Grid } from '@material-ui/core';
import { Skill, GetSkillList } from './Skills';
import { normalize } from 'path';
import { Character } from './Character';

interface CharacterSheetProps {
    initialCharacter: Character;
}






export const CharacterSheet: React.FC<CharacterSheetProps> = (props) => {
    const [character, dispatch] = useReducer(useCharacter, props.initialCharacter);

    return <Paper style={{ textAlign: 'left' }}>
        <Grid container spacing={3} >
            <Grid item xs={12} sm={6}>
                Character points used {character.getCalculatedPointsUsed()} / {character.getStartingPointsAvailable()} ({character.getMaximumPointsAvailable()})
                <Field label='strength' value={character.strength} onChange={n => dispatch({ action: 'strength', value: n })}></Field>
                <Field label='agility' value={character.agility} onChange={n => dispatch({ action: 'agility', value: n })}></Field>
                <Field label='endurance' value={character.endurance} onChange={n => dispatch({ action: 'endurance', value: n })}></Field>
                <Field label='perception' value={character.perception} onChange={n => dispatch({ action: 'perception', value: n })}></Field>
                <Field label='willpower' value={character.willpower} onChange={n => dispatch({ action: 'willpower', value: n })}></Field>
                <Field label='intelligence' value={character.intelligence} onChange={n => dispatch({ action: 'intelligence', value: n })}></Field>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field label='age' max={80} min={15} value={character.age} onChange={n => dispatch({ action: 'age', value: n })}></Field>
                <Paper>Hit points: {character.getHitpoints()}</Paper>
                <Paper>mana: {character.getMana()}</Paper>
                <Paper>damage bonus small: {character.getDamageBonusSmall()}</Paper>
                <Paper>damage bonus medium: {character.getDamageBonusMedium()}</Paper>
                <Paper>damage bonus large: {character.getDamageBonusLarge()}</Paper>
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
                    return <Field modifier={modifier} max={30} min={0} label={s.name + ' ' + s.attribute.substring(0, 3).toUpperCase()} value={s.level} onChange={(n => dispatch({ action: 'skill', name: s.name, value: n }))}></Field>
                })}
            </Grid>
        </Grid>
    </Paper>;
}

interface dispatcher {
    action: string;
    name?: string;
    value: number;
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
    }
    return state;
}