import Section from "./Section";
import React from "react";
import Indexer, { Indexed } from "../general/Indexer";
import Firearms from "../skills/firearms";

const Combat: React.FC = () => {
    return <Section title='Combat'>

        <Indexer title='combat'>
            <Indexed title='Combat start'>
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
            </Indexed>
            <Indexed title='Turns'>
                <p>Each turn starts with the characters performing one action in order of highest sequence to lowest</p>
            </Indexed>
            <Indexed title='Dodging and passive defense'>
                <p>Passive defense is the number that your enemy is required to hit to hit you in combat</p>
                You have a passive defense of 10 when:
                <ul>
                    <li>You don't see the attack, or</li>
                    <li>You are doing something that requires concentration, or</li>
                    <li>You are doing something that requires stillness</li>
                    <li>You are immobilized</li>
                </ul>
                You have a passive defense of 10 + agility + your lowest combat or acrobatics when:
                <ul>
                    <li>You can see the attack coming</li>
                </ul>
                If you have a passive dodge you may choose to do an active dodge.
                <ul>
                    <li>An active dodge gives you Acrobatics (active dodge) + Agility + 2d10</li>
                    <li>This applies to ALL incoming attacks</li>
                    <li>You can activate this at any time, so long as you have not acted yet</li>
                    <li>If you have already acted this turn you may "borrow" your next turn's action, your next turn is then spent</li>
                </ul>
            </Indexed>
            <Indexed title='Bleeding'>
                <p>Bleeding occurs when your life is reduced to 0 or if injured by weapon which causes bleeding</p>
                <p>If you take less than 6 damage then the bleeding is light, 7-14 is intermediate bleeding, 15+ is heavy bleeding</p>
                <p>If you take bleeding causing injuries multiple times then the bleeding rate increases by 1 step, from light to intermediate, and intermediate to heavy</p>
                <ul>
                    <li>Light bleeding deals 1 damage every 10 minutes, lasts 1d100 minutes</li>
                    <li>Intermediate bleeding deals 1 damage every 3 minute, lasts 5d6 minutes</li>
                    <li>Heavy bleeding deals 1 damage every 4 turns, lasts until character bleeds out or has first aid performed on them.</li>
                </ul>
            </Indexed>
            <Indexed title='Armor and damage reduction'>
                <p>Armor gives you damage reduction, this damage reduction is always applied before damage multipliers and after damage reducers. Damage calculation is always calculated to the maximum benefit of the wearer of the armor.</p>
            </Indexed>
            <Indexed title='Melee attacking'>
                <p>A melee attack is anything from a punch to a cut with a sword. You roll 2d10 + Combat (skill), if the roll is equal or exceeds the targets passive defense then you hit</p>
                <h5>Overextend</h5>
                <p>Some enemies may be extremely difficult to hit, once a turn you may overextend your attack, you can add up to as much as +10 to your attack roll but this leaves you open to counter attacks, you take twice negative on all skill rolls and passives until it's your turn again</p>
                <h5>Flanking</h5>
                <p>When you are facing two or more opponents attacking you, you will have a penalty to your passive defense by -2 per attacker after the first. 2 attackers is -2, 3 is -4, 4 is -6 and so on.</p>
            </Indexed>
            <Indexed title='Blocking'>
                <p>Blocking is an active action that can be done against melee attacks. You roll 2d10 + Combat (skill), if you successfully block then you only take half damage (round down)</p>
            </Indexed>
            <Indexed title='Ranged attacks and guns'>
                <p>
                    When you shoot someone your roll must hit the targets passive defense to hit.
                    Guns have multiple types of attacks, snipe shots, aimed shots, semi-burst, burst and oppressive fire
                </p>
                <p>Using a weapon that has a higher strength requirement imposes a burden to your aiming, penalty to aiming is 10x what you are missing</p>
                {Firearms.useCases.map(uc => <>
                    <h5>{uc.name} ({uc.attribute})</h5>
                    <p>{uc.description}</p>
                    <ul>
                        {uc.results !== undefined ? uc.results.map(r => <li>{r}</li>) : null}
                    </ul>
                </>)}
            </Indexed>
            <Indexed title='Splash damage'>
                <p>Some weapons do splash damage, meaning they hit an area, some weapons have a "low damage" zone outside the splash area where damage is reduced to 25%</p>
                <ul>
                    <li>The area of effect (including low damage zone) is specified by the weapon</li>
                    <li>All who are caught inside the area of effect roll damage seperately, damage absorbtion applies, defense does not apply</li>
                    <li>Characters who still have a move action may make an acrobatics roll against the attack roll for half damage
                        <ul>
                            <li>Defeating the roll by 10 or more means no damage is taken, but the character moves out of the area</li>
                        </ul>
                    </li>
                    <li>Objects caught within the zone are also damaged</li>
                    <li>The target to hit an area is 10, standard range penalties apply, missing means you off target</li>
                </ul>
                <p>Some weapons that do splash damage are thrown or otherwise follow a ballistic path. These can potentially hit places that are not within direct line of sight. For these situations add +10 and range penalties are doubled.</p>
            </Indexed>
            
            <Indexed title='Multiple attacks'>
                <p>Characters may do more than two or more consecutive attacks in certain circumstances. Only applies to combat rolls</p>
                <ul>
                    <li><b>2 attacks</b>: requires 6 or higher  combat. Take -3 penalty to both attacks</li>
                    <li><b>3 attacks</b>: requires 12 or higher combat. Take -6 penalty to all attacks</li>
                    <li><b>4 attacks</b>: requires 18 or higher combat. Take -9 penalty to all attacks</li>
                    <li><b>5 attacks</b>: requires 24 or higher combat. Take -12 penalty to all attacks</li>
                    <li><b>6 attacks</b>: requires 30 or higher combat. Take -15 penalty to all attacks</li>
                </ul>
            </Indexed>
            <Indexed title='Distance'>
                <p>Targets become harder to hit when they are further away, each 5 meters away gives you a -1 to hit penalty</p>
                <p>Guns have a maximum range, beyond this it's impossible to hit</p>
                <p>Bullets slow down and lose energy to the air, depending on the gun you may deal lower damage</p>
            </Indexed>
            <Indexed title='Cover'>
                <p>Hinding behind a cover, whether partially or fully gives your character cover, cover grants both passive defense and damage reduction</p>
                <p>Damage reduction depends on the type of material is covering you, thickness and hardness matter. When damage absorbtion from cover is applied it stacks with all other sources, armor piercing is applied only once to the entire stack.
                    Cover does not grant any benefits from close range combat rolls or thrown explosive rolls, only firearms and non-explosive thrown like knives.
                    Firearms that deal splash damage like shotguns and missile launchers always apply passive defense and cover damage absorbtion, but may destroy the cover depending on the damage.
                </p>
                <p>Each time damage is taken through damage absorbtion each source drops their damage absorbtion by 1 point, when dropped to zero they no longer provide any benefit.</p>
                <p>If damage exceeds damage absorbtion x 10 then the cover or armor is instantly destroyed. Damage from multiple bullets count seperately for this purpose.</p>
                <table>
                    <thead><th>thiccness/material</th><th>wood</th><th>concrete</th><th>metal</th></thead>
                    <tbody>
                        <tr><td>1cm</td><td>1</td><td>2</td><td>4</td></tr>
                        <tr><td>2cm</td><td>2</td><td>4</td><td>8</td></tr>
                        <tr><td>5cm</td><td>4</td><td>8</td><td>16</td></tr>
                        <tr><td>20cm</td><td>8</td><td>16</td><td>60</td></tr>
                        <tr><td>1m</td><td>16</td><td>40</td><td>200</td></tr>
                    </tbody>
                </table>
                <h5>Low cover</h5>
                <p>less than 1/3rd of your body is covered, you gain +4 passive defense, 25% chance to apply damage absorbtion from cover</p>
                <h5>High cover</h5>
                <p>less than 2/3rds of your body is covered, you gain +8 passive defense, 50% chance to apply damage absorbtion from cover</p>
                <h5>Massive cover</h5>
                <p>More than 2/3rds of your body is covered, you gain +12 passive defense, 75% chance to apply damage absorbtion from cover</p>
                <h5>total cover</h5>
                <p>Your entire body is covered, you gain +20 passive defense if the enemy knows where you are, if they do not then they must guess the square, 100% chance to apply damage absorbtion from cover.
                    Total cover also prevents you from attacking.
                </p>
            </Indexed>
            <Indexed title='Critical hits'>
                <p>Every attack involves 2d10 rolls, if either dice rolls 10 then you add 50% damage (rounded down), if both roll 10 then you double the damage.</p>
            </Indexed>
        </Indexer>
    </Section>;
}

export default Combat;