import React, { useState, useReducer } from 'react';
import { Field } from './Field';
import { Label } from './Label';
import { Paper, Grid } from '@material-ui/core';
import { Skill, GetSkillList } from './Skills';
import { normalize } from 'path';

interface CharacterSheetProps {

}

const fSum = (n: number): number => {
    let x = 0;
    for (let i = 0; i <= n; i++) {
        x += i;
    }
    return x;
};


interface Technique {
    name: string;
    bonus: string;
    cost: number;
}

interface Character {
    strength: number;
    agility: number;
    endurance: number;
    perception: number;
    willpower: number;
    intelligence: number;
    skills: Skill[];
    techniques: Technique[];
}

export const CharacterSheet: React.FC<CharacterSheetProps> = (props) => {
    const [character, dispatch] = useReducer(useCharacter, {
        strength: 5,
        agility: 5,
        endurance: 5,
        perception: 5,
        willpower: 5,
        intelligence: 5,
        skills: GetSkillList(),
        techniques: []
    });


    let maxPoints = 1000;
    let calculatedPointUse = fSum(character.strength) * 4
        + fSum(character.agility) * 4
        + fSum(character.endurance) * 4
        + fSum(character.perception) * 4
        + fSum(character.willpower) * 4
        + fSum(character.intelligence) * 4
        + character.skills.map(s => fSum(s.level)).reduce((a, b) => a + b, 0);

    let hitpoints = character.strength + character.endurance * 2;

    let mana = character.endurance + character.willpower * 2;

    let damageBonusSmall = Math.floor(character.strength / 4);
    let damageBonusMedium = Math.floor(character.strength / 3);
    let damageBonusLarge = Math.floor(character.strength / 2);


    return <Paper style={{ textAlign: 'left' }}>
        <Grid container spacing={3} >
            <Grid item xs={12} sm={6}>
                Character points used {calculatedPointUse} / {maxPoints}
                <Field label='strength' value={character.strength} onChange={n => dispatch({ action: 'strength', value: n })}></Field>
                <Field label='agility' value={character.agility} onChange={n => dispatch({ action: 'agility', value: n })}></Field>
                <Field label='endurance' value={character.endurance} onChange={n => dispatch({ action: 'endurance', value: n })}></Field>
                <Field label='perception' value={character.perception} onChange={n => dispatch({ action: 'perception', value: n })}></Field>
                <Field label='willpower' value={character.willpower} onChange={n => dispatch({ action: 'willpower', value: n })}></Field>
                <Field label='intelligence' value={character.intelligence} onChange={n => dispatch({ action: 'intelligence', value: n })}></Field>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper>Hit points: {hitpoints}</Paper>
                <Paper>mana: {mana}</Paper>
                <Paper>damage bonus small: {damageBonusSmall}</Paper>
                <Paper>damage bonus medium: {damageBonusMedium}</Paper>
                <Paper>damage bonus large: {damageBonusLarge}</Paper>
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
                    return <Field modifier={modifier} max={30} min={0} label={s.name + ' ' + s.attribute.substring(0,3).toUpperCase()} value={s.level} onChange={(n => dispatch({ action: 'skill', name: s.name, value: n }))}></Field>
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

const useCharacter = (state: Character, action: dispatcher) => {
    switch (action.action) {
        case 'strength': return { ...state, strength: action.value };
        case 'agility': return { ...state, agility: action.value };
        case 'endurance': return { ...state, endurance: action.value };
        case 'willpower': return { ...state, willpower: action.value };
        case 'perception': return { ...state, perception: action.value };
        case 'intelligence': return { ...state, intelligence: action.value };
        case 'skill':
            let r = {
                ...state
            };
            r.skills[state.skills.findIndex(s => s.name === action.name)].level = action.value;
            return r;
    }
    return state;
}