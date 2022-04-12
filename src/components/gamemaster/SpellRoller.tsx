import React, { useState } from "react";
import { d100SpreaderT } from "../../utils/d100Spreader";
import { shuffle } from "../../utils/utilFunctions";
import Ellipsis from "../general/Ellipsis";
import Indexer, { Indexed } from "../general/Indexer";
import { SpellsPerks } from "../perks/Spells";
import { MinorQuirks } from "../Quirks/MinorQuirks";

const spells = shuffle(SpellsPerks);

const sortedSpreadedSpells = d100SpreaderT(spells.map(sp => { return { label: sp.name, value: sp } }).sort());

const minorQuirks = shuffle(MinorQuirks);

const sortedSpreadedminorQuirks = d100SpreaderT(minorQuirks.map(sp => { return { label: sp, value: sp } }).sort());


const SpellRollerView: React.FC = () => {
    const [rolls, setRolls] = useState<number[]>([]);
    const DRollNot = (n: number[]) => {
        while (true) {
            let x = Math.floor(Math.random() * spells.length);
            if (n.filter(p => p === x).length === 0) return x;
        }
    }
    const fractionOfSpells = 3;
    const Roll = () => {
        let numbers: number[] = [];
        for (let counter = 0; counter < fractionOfSpells; counter++) {
            numbers.push(DRollNot(numbers));
        }
        setRolls(numbers);
    };

    return (<>
        <p>When you want to acquire a supernatural ability, you roll over all spells and perks {fractionOfSpells} times and pick one. There are in total {spells.length} spells and mutations.</p>
        <h3>Experience points</h3>
        <p>
            When you first acquire a spell or mutation you must increase your spells skill to 6 and buy the perk, this costs 31 experience points.
            If you do not have 31 experience points available then you may go into negative experience points, while you have negative points the spell or mutation is inactive.<br />
            If you are acquiring additional spells or mutations then the same rules apply, but you don't have to raise your spells skill any further, thus limiting it to -10.<br />
            There is no limit to how many spells or mutations you can acquire this way, however the inactive ones don't become active until your total character point debt is paid, thus adding new ones also delays the old ones.<br />
            Spells and mutations that are active remain active forever. The only escape from mutation is death.
        </p>
        <button onClick={() => Roll()}>Roll</button>
        <ol>
            {rolls.map(r => <li>{spells[r].name} ({r})
                <Ellipsis text={spells[r].description} cutOff={10} />
            </li>)}
        </ol>
        <p>Or if you prefer to roll manually. If you roll the same option twice or a spell or mutation you already posess, just reroll. You should end up with exactly {fractionOfSpells} options.</p>
        <ul>
            {sortedSpreadedSpells.map(spread => {
                return <li><label className="mediumSizedLabel">{spread.low} - {spread.high}: {spread.text} <input type='checkbox' /></label></li>
            })}
            <li><label className="mediumSizedLabel">{sortedSpreadedSpells[sortedSpreadedSpells.length - 1].high + 1} - 100: Reroll </label>(if you get this multiple times, just keep rerolling)</li>
        </ul>
    </>);
}

const MinorQuirkRollerView: React.FC = () => {
    const [rolls, setRolls] = useState<number[]>([]);
    const DRollNot = (n: number[]) => {
        while (true) {
            let x = Math.floor(Math.random() * minorQuirks.length);
            if (n.filter(p => p === x).length === 0) return x;
        }
    }
    const fractionOfSpells = 3;
    const Roll = () => {
        let numbers: number[] = [];
        for (let counter = 0; counter < fractionOfSpells; counter++) {
            numbers.push(DRollNot(numbers));
        }
        setRolls(numbers);
    };

    return (<>

        <p>
            As an optional rule the GM may decide that characters that acquire a spell must also acquire a quirk. The first is generally a minor quirk.
            You roll for 3 different quirks and must pick one. Each quirk carries instructions and a character that does not obey them does not regenerate mana.
        </p>
        <button onClick={() => Roll()}>Roll</button>
        <ol>
            {rolls.map(r => <li>{minorQuirks[r]} ({r})
                <Ellipsis text={minorQuirks[r]} cutOff={30} />
            </li>)}
        </ol>
        <p>Or if you prefer to roll manually. If you roll the same option twice or a spell or mutation you already posess, just reroll. You should end up with exactly {fractionOfSpells} options.</p>
        <ul>
            {sortedSpreadedminorQuirks.map(spread => {
                return <li><label className="largeSizedLabel">{spread.low} - {spread.high}: {spread.text} <input type='checkbox' /></label></li>
            })}
            <li><label className="largeSizedLabel">{sortedSpreadedminorQuirks[sortedSpreadedminorQuirks.length - 1].high + 1} - 100: Reroll </label>(if you get this multiple times, just keep rerolling)</li>
        </ul>
    </>);
}

const SpellRoller: React.FC = () => {
    return <Indexer title="Spells">

        <Indexed title="Spell roller">
            <SpellRollerView />
        </Indexed>
        <Indexed title='Minor quirks'>
            <MinorQuirkRollerView />
        </Indexed>
    </Indexer>
}
export default SpellRoller;