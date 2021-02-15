import React, { useState } from "react";

const roll = (sides: number, nbr: number) => {
    const rolls = [];
    for (let counter = 0; counter < nbr; counter++) {
        rolls.push(Math.floor((Math.random() * sides) + 1));
    }
    return rolls;
}
const rollManyAttacks = (sides: number, nbr: number, attacks: number) => {
    const rolls = [];
    for (let counter = 0; counter < attacks; counter++) {
        rolls.push(roll(sides, nbr));
    }
    return rolls;
}

const DamageDiceCalc: React.FC = () => {
    const [numberOfDice, setNumberOfDice] = useState(1);
    const [sidesPerDice, setSidesPerDice] = useState(6);
    const [numberOfHits, setNumberOfHits] = useState(1);
    const [damageBonus, setDamageBonus] = useState(0);
    const [damageReduction, setDamageReduction] = useState(0);
    const [rolls, setRolls] = useState<number[][]>([]);

    const sumDamages = rolls.map(r => {
        return r.reduce((a, b) => {
            return Math.max(0, (a + b + damageBonus - damageReduction));
        });
    });
    let sumDmg = 0;
    if (sumDamages.length > 0)
        sumDmg = sumDamages.reduce((a, b) => a + b);

    const reroll = () => {
        setRolls(rollManyAttacks(sidesPerDice, numberOfDice, numberOfHits));
    }

    return <div>
        <button onClick={() => reroll()} >Reroll</button><br/>
        <input type='text' value={numberOfDice} onChange={(e) => setNumberOfDice(parseInt(e.target.value))} /> Number of dice<br />
        <input type='text' value={sidesPerDice} onChange={(e) => setSidesPerDice(parseInt(e.target.value))} /> Sides per dice<br />
        <input type='text' value={damageBonus} onChange={(e) => setDamageBonus(parseInt(e.target.value))} /> Damage bonus<br />
        <input type='text' value={numberOfHits} onChange={(e) => setNumberOfHits(parseInt(e.target.value))} /> Number of hits<br />
        <input type='text' value={damageReduction} onChange={(e) => setDamageReduction(parseInt(e.target.value))} /> Final damage reduction<br />
        <br />

        {sumDamages.map(r => <>{r} </>)} = {sumDmg}
    </div>;
}

export default DamageDiceCalc;