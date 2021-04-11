import Section from "./Section";
import React, { useState } from "react";
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
            <Indexed title='Actions'>
                <p>During combat characters make take actions on their turn. In some special circumstances a character can take a specific action out of turn. These require that the character has actions left.</p>
                <h5>Action</h5>
                <p>You get one action, this can be an attack, interacting with an object, or performing a skill. Some attacking modes lets you attack multiple times. You can also use your action to make a move action.</p>
                <h5>Move action</h5>
                <p>Using your move action you can move up to your speed. Move action can be broken up between actions. Some actions specify that you have reduced movement, if its reduced to zero then you may not make any kind of move action.</p>
                <p>Falling prone costs 1 movement speed, standing up costs half. Swiming, climbing and jumping counts as move, see athletics. Jumping uses half your movement and the distance is not affected by speed. See athletics skill.</p>
            </Indexed>
            <Indexed title='Turns'>
                <p>Each turn starts with the characters performing one action in order of highest sequence to lowest</p>
                <p><b>Optional Rule</b>: give players limited time to decide what they do on each of their turns, it discourages players to think they can delibarate and ponder when everyone is waiting for them.
                The recommended time for that is between 10-30 seconds and maximum one question. Exceeding this means the player character takes the active dodge action.<br />
                A secondary benefit is that the players feel the tension of battle more intensely.</p>
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
            <Indexed title='Armor and damage reduction'>
                <p>Armor gives you damage reduction, this damage reduction is always applied before damage multipliers and after damage reducers. Damage calculation is always calculated to the maximum benefit of the wearer of the armor.</p>
            </Indexed>
            <Indexed title='Bleeding, critical and dying'>
                <p>A character has five stages of life</p>
                <ol>
                    <li>Undamaged: Life is at 100%, no damage has been taken.</li>
                    <li>Nominal: Life is above 0, during combat they suffer no negative penalties, after combat they gain one exhaustion and mental health damage.</li>
                    <li>Critical: Life is 0 or less, but more than -100%. They must roll 2d10 + endurance vs total damage taken to stay conscious, they take damage if they do any physically challenging activity.
                        <br />A critical character can be forcefully awakened with adrenaline (administer medicine 20). Doing so imposes one exhaustion and mental health damage. They still take damage and can bleed.</li>
                    <li>Dying: Life is below -100% but above -200%. They are unconscious and can not perform any action.</li>
                    <li>Dead: This state is permanent and irreversible, there's no coming back, roll up a new character.</li>
                </ol>
                <p>Exhaustion and mental health damage is cumulative. So if you are brought to dying you gain 3 levels of exhaustion at the end of combat, 4 if adrenaline was administered.
                    <br />Note that damage to mental health prevents recovery so if a character is damaged daily with no time for recovery they will break down psychologically.
                </p>
                <p>
                    Bleeding happens when you take a certain amount of damage, bleeding can happen once per turn and can stack. Damage from bleeding does not cause further bleeding even if it takes you below a life threshold.
                    <br />A single first aid will stop all bleeding.
                </p>
                <ul>
                    <li>While nominal if you take 50% or more of your life in a single round: Light bleeding deals 1d10 damage at the rate of 1 per 10 minutes</li>
                    <li>While critical if you take any damage: Intermediate bleeding deals 1d20 damage at the rate of 1 per 5 minutes</li>
                    <li>While dying if you take any damage: Heavy bleeding deals 1 damage every 4 turns, lasts until character bleeds out or has first aid performed on them.</li>
                </ul>
                <p>If bleeding causes you to go to a different stage then those effects take hold but the bleeding type does not change. Unless you take more damage from any other source than bleeding.</p>
                <Section title='example'>
                    <p>Example: Character <b>John Done</b> has 15 total life. He is shot and takes 8 points of damage.</p>
                    <p>John Doe is reduced to 7 life, and must roll 1d10 bleed damage. John rolls 8.</p>
                    <p>Combat ends and John takes 1 level of exhaustion and 1 mental health damage</p>
                    <p>After 70 minutes John has taken enough damage that he is now critical, he immediately must make a check to stay awake, 2d10 + endurance vs 15 (total damage taken at this point)</p>
                    <p>Luckily John rolls a total of 17 and stays awake, if he performs any action that requires a strength, endurance or agility check (even passive!) he will take 1 damage</p>
                    <p>John takes 1 more level of exhaustion and mental health damage from entering critical stage.</p>
                    <p>If he takes damage from any action at this stage he will start bleeding at an intermediate rate.</p>
                    <p>So it's very important to stop bleeding as soon as possible, even if the bleeding is light!</p>
                    <p>Another 10 minute passes and John takes the final 8th damage from his initial bleeding, this puts him at -1 life but since the damage was from bleeding he does not have to roll for intermediate bleeding.</p>

                </Section>
            </Indexed>
            <Indexed title='Melee attacking'>
                <p>A melee attack is anything from a punch to a cut with a sword. You roll 2d10 + Combat (skill), if the roll is equal or exceeds the targets defense then you hit</p>
                <h5>Overextend</h5>
                <p>Some enemies may be extremely difficult to hit, once a turn you may overextend your attack, you can add up to as much as +10 to your attack roll but this leaves you open to counter attacks, you take twice negative on all skill rolls and passives until it's your turn again</p>
                <h5>Flanking</h5>
                <p>When a target is flanked (facing more than one melee combatant) the attackers will gain bonus to hit equal to the number of flankers x2. This does not apply if they are flanked too.</p>
                <h5>Two weapon fighting</h5>
                <p>When you are using two melee weapons you may make one second attack immediately after the first on the same target. This attack does not benefit from your agility bonus to hit or strength bonus to damage. The second weapon must be a light weapon if your strength is 6 or less.
                If you use multiple attacks option with two weapons only the first attack gets a bonus attack from the off-hand weapon, multi-attack penalty applies to off-hand weapon.
                </p>
            </Indexed>
            <Indexed title='Multiple attacks'>
                <p>Characters may do more than two or more consecutive attacks in certain circumstances. Only applies to combat rolls. Additional attacks may be reserved for blocking, unused blocks can not be converted into attacks when it is not your turn.</p>
                <p>Each attack after the first also costs one movement, if you are out of movement then you can not perform additional attacks.</p>
                <ul>
                    <li><b>2 attacks</b>: requires 6 or higher  combat. Take -3 penalty to all attacks</li>
                    <li><b>3 attacks</b>: requires 12 or higher combat. Take -6 penalty to all attacks</li>
                    <li><b>4 attacks</b>: requires 18 or higher combat. Take -9 penalty to all attacks</li>
                    <li><b>5 attacks</b>: requires 24 or higher combat. Take -12 penalty to all attacks</li>
                    <li><b>6 attacks</b>: requires 30 or higher combat. Take -15 penalty to all attacks</li>
                </ul>
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
                <h5>Firearm loudness and hearing loss</h5>
                <p>(Optional rule) Firearms can be heard from away, but it varies heavily on the caliber and conditions. Without ear protection firearms can cause temporary hearing loss.</p>
            </Indexed>
            <Indexed title='Splash damage'>
                <p>Some weapons do splash damage, meaning they hit an area, some weapons have a "low damage" zone outside the splash area where damage is reduced to 25% (rounded down)</p>
                <ul>
                    <li>The area of effect (including low damage zone) is specified by the weapon</li>
                    <li>All who are caught inside the area of effect roll damage seperately, damage absorbtion applies, defense does not apply, cover applies</li>
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
            <Indexed title='Distance'>
                <p>Targets become harder to hit when they are further away, each 3 meters away gives you a -1 to hit penalty. Some conditions affect range penalties, these conditions stack with other conditions, perks and weapon stats.</p>
                <ul>
                    <li>No gravity and no atmosphere: range penalties halfed (does not apply to lasers)</li>
                    <li>Rain or heavy winds: double range penalties</li>
                    <li>Light mist or smoke: double range penalites</li>
                    <li>Mist or smoke: quadrouple range penalties</li>
                </ul>
                <p>Guns have a maximum range, beyond this it's impossible to hit. In space this range is 2x</p>
                <p>Bullets slow down and lose energy to the air, depending on the gun you may deal lower damage, as an optional rule you may reduce damage by 50% at half firearm range, this should stack with any inherit firearm range damage penalty.</p>
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
                <p>Low cover (25% +) of your body is covered, you gain +4 passive defense, 25% chance to apply damage absorbtion from cover</p>
                <h5>High cover</h5>
                <p>Mid cover (50% +) of your body is covered, you gain +8 passive defense, 50% chance to apply damage absorbtion from cover</p>
                <h5>Massive cover</h5>
                <p>High cover (75% +) of your body is covered, you gain +12 passive defense, 75% chance to apply damage absorbtion from cover</p>
                <h5>total cover</h5>
                <p>Your entire body is covered, you gain +20 passive defense if the enemy knows where you are, if they do not then they must guess the hex, 100% chance to apply damage absorbtion from cover.
                Total cover also prevents you from attacking.
                </p>
            </Indexed>
            <Indexed title='Dual wielding'>
                <p>You can use two weapons, one in each hand, but without an appropriate perk you lose your ability and skill bonuses to the off-hand, and only benefit half of your skill bonus to your main hand. The off-hand also gains no bonus to damage from strength. Your off hand counts as having 2 lower strength</p>
                <p>With the DoubleHanded trait both hands count as your main hand, you can use either hand for a weapon and if you dual wield they both only take the main hand penalty.</p>
                <p>Strength requirement also increases by 2 points when you dual wield. If you put medium or large weapon in your off hand then the strength requirement increases to 3. Attempting to use a large weapon with one hand increases strength requirement by 2.</p>
                <p>Small melee weapons have a default strength requirement of 1. Medium melee weapons have a default strength requirement of 3. Large melee weapons have a default requirement of 5.</p>
                <p>Two handed firearms (anything but hand-guns and the Fantry Lasergun) can not be dual wielded.</p>
            </Indexed>
            <Indexed title='Falling damage'>
                <FallingDamage />
            </Indexed>
        </Indexer>
    </Section >;
}

interface IFallingData {
    height: number;
    sides: number;
    numberOfDice: number;
}

const fallingDamageConstant = (height: number, gravity: number, atmosphere: number): IFallingData => {
    const effectiveHeight = Math.floor(height * gravity);
    const numberOfDice = effectiveHeight <= 4 ?
        1
        : Math.floor(Math.sqrt(effectiveHeight) + .5 - (Math.pow(effectiveHeight, .5) * atmosphere * atmosphere * 0.1));
    let sides = 4;
    if (effectiveHeight < 1) return { height: height, sides: 4, numberOfDice: 0 }
    else if (effectiveHeight < 3) sides = 6;
    else if (effectiveHeight < 4) sides = 8;
    else sides = 10;
    return { height: height, sides: sides, numberOfDice: numberOfDice };
}


const FallingDamage: React.FC = () => {
    const [gravity, setGravity] = useState(1);
    const [atmopshere, setAtmosphere] = useState(1);

    const maxHeight = Math.min(atmopshere !== 0 ? 1 / atmopshere * (Math.sqrt(gravity) * 450) : 10000, 10000);

    const values = [...Array(Math.floor(maxHeight))]
        .map((v: any, index: number, arr: any[]) => fallingDamageConstant(index + 1, gravity, atmopshere))
        .filter((v) => v.numberOfDice > 0);

    let distinctValues: IFallingData[] = [];
    for (var index in values) {
        var val = values[index];
        distinctValues[val.sides * 100 + val.numberOfDice] = val;
    }

    return <>
        <p>Falling damage is affected by two things, gravity and atmosphere. The thicker the atmopshere the lower the terminal velocity. The higher the gravity the faster you fall and therefore take damage.</p>
        <p>The following table assumes 1g with earth like atmosphere. Damage absorbtion from armor is half.</p>
        <p>If you fall onto a soft surface you count as having fallen 2 meters less. A very soft surface counts as 3 meters less. An extremely soft counts as 4 meters less.</p>
        <p>You can also use acrobatics to reduce effective height, see acrobatics.</p>
        <p>It takes about 2 rounds to reach terminal velocity, after that you fall 300 meters per round.</p>
        <input type='text' value={gravity} onChange={(e) => setGravity(parseFloat(e.target.value))} title='gravity' />
        <input type='text' value={atmopshere} onChange={(e) => setAtmosphere(parseFloat(e.target.value))} title='atmosphere' />
        <ul>
            {distinctValues.map(h => <li>{h.height} meters: {h.numberOfDice}d{h.sides}</li>)}
        </ul>
    </>
}

export default Combat;