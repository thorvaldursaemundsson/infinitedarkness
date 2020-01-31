import Section from "./Section";
import React from "react";

const Combat: React.FC = () => {
    return <Section title='Combat'>
        <h3>Combat start</h3>
        <p>Combat starts when one group or individual assaults another group or individual, depending on whether the assault is an ambush or not.</p>
        <h5>Sequence</h5>
        <p>Sequence is the order turns, it is rolled at the start of the first turn. Your sequence is 2d10 + perception + agility + modifier. Modifiers can come from perks, traits and the situation</p>
        <p>If one side has exceptionally high sequence then members of that team can get one free action on the first turn. To get this they must exceed their enemies highest sequence by 20.</p>
        <p>Some actions can be done in response to actions done to you, such as active dodging and blocking. If however you've already spent your action then to dodge or block you must forgo your next turn and take a -4 sequence penalty</p>
        <h5>Ambush</h5>
        <p>An ambush is defined by whether the defender knows the attack is coming.</p>
        <p>If it is an unseen ambush (the defenders are not aware of the attackers) the attackers gain +20 on their sequence</p>
        <p>If it is a surprise attack (the defender are aware of the attacker but did not expect to be attacked) the attackers gain +10 on their sequence</p>
        <p>If the defenders know they are going to be attacked then there is no modifier</p>
        <h5>Counter-ambush</h5>
        <p>If the defenders know they are going to be attacked and stand prepared for it but the attackers don't know that they know the defenders gain a +10 on their sequence</p>
        <h3>Turns</h3>
        <p>Each turn starts with the characters performing one action in order of highest sequence to lowest</p>
        <h3>Dodging & passive defense</h3>
        <p>Your passive defense is 10 + the highest of acrobatics or combat, certain perks and situations can increase this</p>
        <p>Active dodging is an action, if you dodge you can not do anything else, if you have already acted on this turn you may do one additional active dodge at the cost of your next turns action and a loss of sequence (-4). To actively dodge one attack you roll you 2d10 + Acrobatics (skill), perks and situations that benefit passive defense benefit this</p>
        <h3>Armor & damage reduction</h3>
        <p>Armor gives you damage reduction, this damage reduction is always applied before damage multipliers and after damage reducers. Damage calculation is always calculated to the maximum benefit of the wearer of the armor.</p>
        <h3>Melee attacking</h3>
        <p>A melee attack is anything from a punch to a cut with a sword. You roll 2d10 + Combat (skill), if the roll is equal or exceeds the targets passive defense then you hit</p>
        <h5>Flanking</h5>
        <p>When you are facing two or more opponents attacking you, you will have a penalty to your passive defense by -2 per attacker after the first. 2 attackers is -2, 3 is -4, 4 is -6 and so on.</p>
        <h3>Blocking</h3>
        <p>Blocking is an active action that can be done against melee attacks. You roll 2d10 + Combat (skill), if you successfully block then you only take half damage (round down)</p>
        <h3>Ranged attacks & guns</h3>
        <p>When you shoot someone your roll must hit the targets passive defense to hit. Guns have multiple types of attacks, snipe shots, aimed shots, semi-burst, burst and oppressive fire</p>
        <h5>Snipe shot</h5>
        <p>A snipe shot is the slowest kind, you roll 2d10 + Fireams (skill), if you roll below 8 you do nothing (and your action is spent), if you roll 8 or above you shoot. Available on lever action, bolt action, semi-automatic</p>
        <h5>Aimed shot</h5>
        <p>Aimed shot is the simplest, you roll 2d10 + Firearms (skill) and shoot 1 bullet, available on lever action, bolt action, semi-automatic</p>
        <h5>Semi-burst</h5>
        <p>You shoot multiple bullets, you roll 2d10 + Firearms (skill) + 10, shoot 4 bullets, if you hit passive defense then 1 bullet hits, for each 5 points above passive defense 1 additional bullet hits. Available to semi-automatic guns only.</p>
        <h5>Burst</h5>
        <p>You hold down fully-automatic for a short burst, you roll 2d10 + Firearms (skill) + 15, shoot 10 bullets, if you hit passive defense then 1 bullet hits, for each 5 points above passive defense 1 additional bullet hits. Available only to fully-automatic guns</p>
        <h5>Oppressive Fire</h5>
        <p>You hold down fully-automatic for a long oppressive burst, the number of bullets depend on the gun, you roll 2d10 + Firearms (skill) + 20, if you hit passive defense then 1 bullet hits, for each 5 points above passive defense 1 additional bullet hits. Only available to fully-automatic guns.</p>
        <h3>Distance</h3>
        <p>Targets become harder to hit when they are further away, each 4 meters away gives you a -1 to hit penalty</p>
        <p>Guns have a maximum range, beyond this it's impossible to hit</p>
        <p>Bullets slow down and lose energy to the air, depending on the gun you may deal lower damage</p>
        <h3>Cover</h3>
        <p>Hinding behind a cover, whether partially or fully gives your character cover, cover grants both passive defense and damage reduction</p>
        <p>Damage reduction depends on the type of material is covering you, thickness and hardness matter</p>
        <table>
            <thead><th>thiccness/material</th><th>wood</th><th>concrete</th><th>metal</th></thead>
            <tbody>
                <tr><td>1cm</td><td>1</td><td>2</td><td>4</td></tr>
                <tr><td>2cm</td><td>2</td><td>5</td><td>10</td></tr>
                <tr><td>5cm</td><td>4</td><td>10</td><td>20</td></tr>
                <tr><td>20cm</td><td>8</td><td>20</td><td>40</td></tr>
                <tr><td>100m</td><td>16</td><td>40</td><td>100</td></tr>
            </tbody>
        </table>
        <h5>Low cover</h5>
        <p>less than 1/3rd of your body is covered, you gain +4 passive defense</p>
        <h5>high cover</h5>
        <p>less than 2/3rds of your body is covered, you gain +8 passive defense</p>
        <h5>massive cover</h5>
        <p>more than 2/rds of your body is covered, you gain +12 passive defense</p>
        <h5>total cover</h5>
        <p>Your entire body is covered, you gain +20 passive defense if the enemy knows where you are, if they do not then they simply automatically miss</p>
    </Section>;
}

export default Combat;