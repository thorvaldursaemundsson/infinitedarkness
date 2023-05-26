import Section from "../Section";
import React, { useState } from "react";
import Indexer, { Indexed } from "../general/Indexer";
import Firearms from "../skills/firearms";

const Combat: React.FC = () => {
    return <Section title='Combat'>
        <Indexer title='combat'>
            <Indexed title='Combat start'>
                <CombatStarts />
            </Indexed>
            <Indexed title='Actions'>
                <Actions />
            </Indexed>
            <Indexed title='Turns'>
                <Turns />
            </Indexed>
            <Indexed title='Dodging and active defense'>
                <Dodging />
            </Indexed>
            <Indexed title='Blocking'>
                <Blocking />
            </Indexed>
            <Indexed title='Armor and damage reduction'>
                <DamageReduction />
            </Indexed>
            <Indexed title='Bleeding, critical and dying'>
                <Bleeding />
            </Indexed>
            <Indexed title='Melee attacking'>
                <MeleeAttacks />
            </Indexed>
            <Indexed title='Dual wielding'>
                <DualWielding />
            </Indexed>
            <Indexed title='Ranged attacks and guns'>
                <RangedAttacks />
            </Indexed>
            <Indexed title='Distance'>
                <Distance />
            </Indexed>
            <Indexed title='Cover'>
                <Cover />
            </Indexed>
            <Indexed title='Splash damage'>
                <SplashDamage />
            </Indexed>
            <Indexed title='Terrain'>
                <Terrain />
            </Indexed>
            <Indexed title='Damage Types'>
                <DamageTypes />
            </Indexed>
            <Indexed title='Massive Damage'>
                <MassiveDamage />
            </Indexed>
        </Indexer>
    </Section >;
}

const DamageTypes = () => {
    return <>
        <p>Damage types oftend do not matter. In a case when they do some extra effect may come into play. If a damage source counts as two or more then protection needs to protect against both.</p>
        <ul>
            <li><b>Slashing</b> - Done by blade weapons like knives, swords, claws, teeth</li>
            <li><b>Piercing </b> - Done by pointy weapons like spears, crossbows, bows, also when stabbing with a blade weapon, horns (when impaling)</li>
            <li><b>Bludgeoning</b> - Done by blunt weapons, clubs, fists, horns. Falling damage counts as bludgeoing</li>
            <li><b>Ballistic</b> - Done by firearms that fire projectiles</li>
            <li><b>Thermal</b> - Done by flame, lasers, heat, plasma.</li>
            <li><b>Electrical</b> - Done by lightning bolts, shocks, plasma</li>
            <li><b>Blast</b> - Done by explosives and shockwaves</li>
        </ul>
    </>;
};

const Terrain = () => {
    return <>
        <p>There are generally three types of terrain, normal, difficult and hazardous</p>
        <h5>Normal terrain</h5>
        <p>Normal terrain typically means flat hard ground that you can easily travel across and stand on. Terrain is assumed normal if not stated otherwise</p>
        <h5>Difficult Terrain</h5>
        <p>Difficult terain is any kind of terrain that is difficult to traverse, it may be uneven or soft or sticky. Difficult terrain requires 2 meters of movement for each 1 meter traveled.
            To move faster you need to make an 2d10 + agility + acrobatics roll, DC depends on speed. If you fail by 10 points or more you stumble and fall prone, with your movement and action used up.
            <br />
            If you have penalties from exhaustion or carrying too much then these apply here too. (-5 per level) Note that exhaustion and carrying over capacity limits maximum speed.
        </p>
        <ul>
            <li>Power walk: 15</li>
            <li>Jog: 20</li>
            <li>Run: 25</li>
            <li>Sprint: 30</li>
        </ul>
        <h5>Hazardous terrain</h5>
        <p>Hazardous terrain refers to any terrain that is dangerous to travel across. It is usually also difficult terrain.</p>
    </>;
}

const CombatStarts = () => {
    return <>
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
    </>;
}

const Actions = () => {
    return <>
        <p>During combat characters make take actions on their turn, actions use action points. At the start of your turn your action points are refreshed.</p>
        <h5>Move action</h5>
        <p>Moving 1 meter uses 1 action point, if you spend 3 action points on moving you may move up to your remaining movement speed without spending action points.
            You can move multiple times, if you take other actions then your move is interrupted.</p>
        <p>Falling prone uses 1 action point, standing up uses 3. Swiming, climbing and jumping counts individual as move actions.
            So if you run and then jump you must use a total of 6 action points.</p>
        <h5>Ending your turn</h5>
        <p>If you end your turn with action points remaining you add an equal amount to your active defense until the start of your next turn.</p>
        <p>For example, if you have 5 action points and 20 active defense, you end your turn doing nothing.
            Your defense increases by 5, 5 + 20 = 25. Until your next turn your defense is 25</p>
        <h5>Overextend</h5>
        <p>You can overextend your action points, meaning you can use more action points than you have, doing so puts you into negative action points.
            And you can go into negative equal to your max action points. And when you end your turn your negative is deducted from your defense.
            Additionally, overextending action points are deducted from your next turn action points.</p>
        <p>For example if you have 5 action points, active defense 20 and run and then jump, using 6 action points, you now have -1 action points.
            You end your turn with -1 action points, your active defense is 19 until the start of your next turn. On the start of your next turn you only have 4 action points.
        </p>
        <h5>Reaction</h5>
        <p>A reaction is an action that is can be taken immediately in response to an action, reactions describe the situations they may be taken.
            Reactions uses action points same as actions on your turn, you can go into negative action points same as if you were overextending, and same rules apply when you do,</p>
        <p>For example, you have 5 action points and active defense 20. You take an action that uses 3, you now have 2 action points remaining.
            You then end your turn with 22 active defense, an enemy throws a grenade at you, you are allowed to roll a contested acrobatics vs explosives and you succeed.
            You use your reaction to move out of the blast radius, using 3 action points to move. This causes you to overextend and your active defense drops to 19.
            At the start of your next turn you have 4 action points.
            <br/>
            However if before your next turn another enemy throws another grenade and you react again to move you will go into 16 active defense and have overextended to -4.
            If someone then attacks you, you do not have enough action points to attempt to block, because blocking uses more action points than you can overextend.
        </p>
    </>;
}

const Turns = () => {
    return <>
        <p>Each turn starts with the characters performing one action in order of highest sequence to lowest</p>
        <p><b>Optional Rule</b>: give players limited time to decide what they do on each of their turns, it discourages players to think they can delibarate and ponder when everyone is waiting for them.
            The recommended time for that is between 10-30 seconds and maximum one question. Exceeding this means the player character takes the active dodge action.<br />
            A secondary benefit is that the players feel the tension of battle more intensely.</p>
    </>;
}

const Dodging = () => {
    return <>
        <p>To hit you in combat a creature must make a roll that equals or exceeds your defense</p>
        You use your base defense (the first number) when
        <ul>
            <li>You are not expecting to be attacked (eg, surprised)</li>
            <li>You are doing something that requires concentration</li>
            <li>You are doing something that requires stillness</li>
            <li>You are immobilized</li>
        </ul>
        You use your active defense (the last number) when:
        <ul>
            <li>You are in combat</li>
        </ul>
    </>;
}

const DamageReduction = () => {
    return <>
        <p>Armor gives you damage reduction, this damage reduction is always applied before damage multipliers and after damage reducers. Damage calculation is always calculated to the maximum benefit of the wearer of the armor.</p>
    </>;
}

const Bleeding = () => {
    return <>
        <p>A character has five stages of life</p>
        <ol>
            <li>Undamaged: Life is at 100%, no damage has been taken.</li>
            <li>Nominal: Life is above 0, during combat they suffer no negative penalties, after combat they gain one exhaustion and mental health damage. The damage they've taken is also applied to all physical skill checks as determined by the GM.</li>
            <li>Critical: Life is 0 or less, but more than -100%. They must roll 2d10 + endurance vs total damage taken to stay conscious, they take 1 point of damage if they do any physically challenging activity.
                <br />A critical character can be forcefully awakened with adrenaline (administer medicine 20). Doing so imposes one exhaustion and mental health damage. They still take damage and can bleed.</li>
            <li>Dying: Life is below -100% but above -200%. They are unconscious and can not perform any action, they can not be awakened.</li>
            <li>Dead: Life is equal or below -200%. This state is permanent and irreversible, there's no coming back, roll up a new character.</li>
        </ol>
        <p>Exhaustion and mental health damage is cumulative. So if you are brought to dying you gain 3 levels of exhaustion at the end of combat, 4 if adrenaline was administered.
            <br />Note that damage to mental health prevents recovery of mental health so if a character is damaged daily with no time for recovery they will break down psychologically.
        </p>
        <p>
            Bleeding happens when you take a certain amount of damage or if the GM decides it is appropriate, bleeding can happen once per turn and can stack. Damage from bleeding does not cause further bleeding even if it takes you below a life threshold.
            <br />A single first aid will stop all bleeding.
        </p>
        <ul>
            <li>While nominal if you take 50% or more of your life in a single round: Light bleeding deals 1 damage per minute for 1d10 minutes. Certain weapons can guarantee bleeding</li>
            <li>While critical if you take any damage: Intermediate bleeding deals 1 damage per 4 rounds for a total of 4 x 1d20 rounds</li>
            <li>While dying if you take any damage: Heavy bleeding deals 1 damage every turn, lasts until character bleeds out or has first aid performed on them.</li>
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
    </>;
}

const MeleeAttacks = () => {
    return <>
        <p>A melee attack is anything from a punch to a cut with a sword. You roll 2d10 + Combat (skill), if the roll is equal or exceeds the targets defense then you hit. Uses action points, different types of attacks uses different amount of action points.</p>
         <h5>Flanking (optional rule)</h5>
        <p>When a target is flanked (facing more than one melee combatant) the attackers will gain bonus to hit equal to the number of flankers x2. This does not apply if they are flanked too.</p>
        <h5>Two weapon fighting</h5>
        <p>When you are using two melee weapons you may make one second attack immediately after the first on the same target. This attack does not benefit from your agility bonus to hit or strength bonus to damage. The second weapon must be a light weapon if your strength is 6 or less.
            If you use multiple attacks option with two weapons only the first attack gets a bonus attack from the off-hand weapon, multi-attack penalty applies to off-hand weapon.
        </p>
        <h5>Special attack options</h5>
        <p>Special attack options can replace a single attack or one of many multiattacks.</p>
        <ul>
            <li><b>Grapple</b>: Uses 4 action points. You may attempt to grab someone, make a 2d10 + combat + agility roll vs the target's defense.
                Followed by an contest of 2d10 + strength + athletics vs 2d10 + strength + athletics or 2d10 + agility + acrobatics.<br />
                If you win the target is grappled, while grappled the target may not move, if you move you can drag them with you using 2 meters of movement per 1 meter moved.</li>
            <li><b>Wrestle</b>: Uses 4 action points. You may attempt to wrestle a target that you are currently grappling. You make roll 2d10 + strength + athletics contest by 2d10 + strength + athletics or 2d10 + agility + acrobatics of the target.<br />
                If you succeed you must use your action every turn to restrain them, while restrained they may only use their action to attempt to break free.</li>
            <li><b>Shove</b>: Uses 4 action points. You may attempt to shove someone, make a 2d10 + combat + agility roll vs the target's defense.
                Followed by an contest of 2d10 + strength + athletics vs 2d10 + strength + athletics or 2d10 + agility + acrobatics.<br />
                If you win you can either push them the length of the space you occupy (minimum 1 meter) or push them prone. That decision must be made before you roll the dice.</li>
            <li><b>Disarm</b>: Uses 4 action points. You may attempt to grab an item the target is holding with their hands.make a 2d10 + combat + agility roll vs the target's defense.<br />
                If you hit you now both hold the item in your hand and on subsequent turns you can use your action to prevent them from using their action to use the item, if you do so they waste their action.<br />
                You may as a part of the disarm action (or the target on their turn with their action) may also attempt to pull it from their hands, to do so roll 2d10 + strength + athletics vs 2d10 + strength + athletics.<br />
                If you win you take the item from them, if you fail you lose your grip.
            </li>
        </ul>
        <p>If multiple creatures attempt to perform grapple, shove or disarm the same target they can work together, they must perform the same action in consecutive turn order.<br />
            The second creature receives a +3 bonus on their strength roll.<br />
            The third creature receives a +6 bonus on their strength roll.<br />
            The fourth and every after receives a +9 bonus on their strength roll.
        </p>
    </>;
}

const Blocking = () => {
    return <>
        <p>Blocking is an reactive action that can be done against melee attacks. When you are hit with a melee attack you may use your melee attack to block.
            Roll 2d10 + agility + combat, if you exceed their attack roll then you block the attack and damage is reduced by 1/2 rounded down.
        </p>
        <p>Blocking uses 3 action points </p>
        </>;
}

const RangedAttacks = () => {
    return <>
        <p>
            When you shoot someone your roll must hit the targets active defense to hit.
            Guns have multiple types of attacks, snipe shots, aimed shots, semi-burst, burst and oppressive fire
        </p>
        <p>Using a weapon that has a higher strength requirement imposes a burden to your aiming, penalty to aiming is 10x what you are missing</p>
        {Firearms.useCases.map(uc => <>
            <h5>{uc.name} ({uc.attribute})</h5>
            <p>{uc.description}</p>
            <ul>
                {uc.results !== undefined ? uc.results.map(r => <li key={`c_ra_li_${r}`}>{r}</li>) : null}
            </ul>
        </>)}
        <h5>Firearm loudness and hearing loss</h5>
        <p>(Optional rule) Firearms can be heard from away, but it varies heavily on the caliber and conditions. Without ear protection firearms can cause temporary hearing loss.</p>
        <h5>Firing into melee range</h5>
        <p>Shooting someone who is standing within melee range and has melee weapons or unarmed available allows them to use their reaction to reduce your attack roll by 2d10 + agility + combat, doing so counts as a blocking action and follows similar rules.</p>
    </>;
}

const SplashDamage = () => {
    return <>
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
    </>;
}

const Distance: React.FC = () => {
    const [n, setN] = useState(6);
    const strs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const weights = [0.2, 0.5, 1, 2, 4, 5, 8, 10, 15, 20, 25, 30, 50, 75, 100];
    const distancePenalty = 5;
    return <>
        <h5>Range penalty</h5>
        <p>Targets become harder to hit when they are further away, each {distancePenalty} meters away gives you a -1 to hit penalty. Some conditions affect range penalties, these conditions stack with other conditions, perks and weapon stats.</p>
        <ul>
            <li>No gravity and no atmosphere: range penalties halfed (does not apply to lasers)</li>
            <li>Rain or heavy winds: double range penalties</li>
            <li>Light mist or smoke: double range penalites</li>
            <li>Mist or smoke: quadrouple range penalties</li>
        </ul>
        <p>Guns have a maximum range, beyond this it's impossible to hit. In space this range is 2x</p>
        <p>Bullets slow down and lose energy to the air, depending on the gun you may deal lower damage, as an optional rule you may reduce damage by 50% at half firearm range, this should stack with any inherit firearm range damage penalty.</p>
        <h5>Throwing</h5>
        <p>
            Throwing maximum distance is a matter of strength, each meter adds -1 hit penalty. Throwing an object that is not balanced may impose double or more penalty.
            <br />Maximum range is N x strength / Square root of mass of object in kg. However some objects may allow you to exceed this by swinging it around your body to build momentum. Using your entire turn you can up to double maximum distance.
            <br />Where N depends on your species. For <button onClick={() => setN(6)}>humans</button> it is 6, for <button onClick={() => setN(5)}>Merlions and Nekovians</button> it is 5, for <button onClick={() => setN(4)}>Shambras</button> it is 4.
            <br />You may consult the following table
        </p>
        <p>Humans have half distance penalty when throwing.</p>
        <table>
            <thead>
                <tr><th>Weights Strengths</th>{strs.map(s => <th key={`c_d_th_${s}`}>{s}</th>)}</tr>
            </thead>
            {weights.map(w => <tr key={`c_d_tr_${w}`}>
                <td>{w}</td>
                {strs.map(s => <td key={`c_d_td_${s}`}>
                    {Math.floor(((s / Math.sqrt(w)) * n))}
                </td>)}
            </tr>)}
        </table>
    </>;
}

const Cover = () => {
    return <>
        <p>Hinding behind a cover, whether partially or fully gives your character cover, cover grants both base defense and damage reduction</p>
        <p>Damage reduction depends on the type of material is covering you, thickness and hardness matter. When damage absorbtion from cover is applied it stacks with all other sources, armor piercing is applied only once to the entire stack.
            Cover does not grant any benefits from close range combat rolls or thrown explosive rolls, only firearms and non-explosive thrown like knives.
            Firearms that deal splash damage like shotguns and missile launchers always apply base defense and cover damage absorbtion, but may destroy the cover depending on the damage.
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
        <p>Low cover (25% +) of your body is covered, you gain +4 base defense, 25% chance to apply damage absorbtion from cover</p>
        <h5>High cover</h5>
        <p>Mid cover (50% +) of your body is covered, you gain +8 base defense, 50% chance to apply damage absorbtion from cover</p>
        <h5>Massive cover</h5>
        <p>High cover (75% +) of your body is covered, you gain +12 base defense, 75% chance to apply damage absorbtion from cover</p>
        <h5>total cover</h5>
        <p>Your entire body is covered, you gain +20 base defense if the enemy knows where you are, if they do not then they must guess the hex, 100% chance to apply damage absorbtion from cover.
            Total cover also prevents you from attacking.
        </p>
    </>;
}

const DualWielding = () => {
    return <>
        <p>You can use two weapons, one in each hand, but without an appropriate perk you lose your ability and skill bonuses to the off-hand. The off-hand also gains no bonus to damage from strength. Your off hand counts as having 2 lower strength for the purpose of strength requirement</p>
        <p>With the Double Handed trait both hands count as your main hand, you can use either hand for a weapon. If </p>
        <p>If you put medium or large weapon in your off hand then the strength requirement increases to 3. Attempting to use a large weapon with one hand increases strength requirement by 2.</p>
        <p>Small melee weapons have a default strength requirement of 1. Medium melee weapons have a default strength requirement of 3. Large melee weapons have a default requirement of 5.</p>
        <p>Two handed firearms (anything but hand-guns and the Fantry Lasergun) can not be dual wielded.</p>
    </>;
}


const MassiveDamage = () => {
    return <>
        <p><i>Optional rule</i></p>
        <p>When you take more than or equal to 75% or your life att once or causes you to be reduced to dying state (-100% but above -200%) you roll on the massive damage table.
            You roll on different tables depending on the source of the damage. If the damage has multiple types (such as plasma weapons) then you roll on both.
            <br />
            * Means that this injury will naturally heal or is not permanent, otherwise a you need medical assistance. (surgery, medicine, cloning, etc)
            <br />
            <br /> Any injury that causes a penalty to agility also inflicts the same penalty to your active defense
            You do not roll on the massive damage table if you are brought to a dying state due to bleeding.
        </p>
        <p>Roll a 1d10, subtract from the result by an amount equal to life left if above 0</p>
        <Section title='Slashing'>
            <table>
                <thead>
                    <tr><th>Roll</th><th>Injury</th><th>Effect</th></tr>
                </thead>
                <tbody>
                    <tr> <td>0</td> <td>No injury</td> <td>If the result is 0 or below there is no effect</td></tr>
                    <tr> <td>1-3</td> <td>Huge scar</td> <td>If allowed to heal naturally this will leave a huge ugly scar</td></tr>
                    <tr> <td>4-5</td> <td>Ruptured tendons</td> <td>Roll a d4 (or d8 for shambra) to determine which limb has ruptured tendons, this limb can not take actions.</td></tr>
                    <tr> <td>6-7</td> <td>Hemorrhage</td> <td>You are rapidly bleeding, at the end of your turn you lose 1 life for 1d10 rounds</td></tr>
                    <tr> <td>8</td> <td>Lose a finger</td> <td>Roll a d10 to determine which finger, if you use the hand with a missing finger you must roll willpower + 2d10 vs 15 to ignore the pain</td></tr>
                    <tr> <td>9</td> <td>Eye injury</td> <td>Roll a d2 (or d4 for shambra) to determine which eye is injured, this eye can not see anything</td></tr>
                    <tr> <td>10</td> <td>Lose a limb</td> <td>Roll a dice to determine which arm or leg, roll a d100 to determine how much is lost (100=all).
                        This limb can no longer be used to take actions
                    </td> </tr>
                </tbody>
            </table>
        </Section>
        <Section title='Piercing'>
            <table>
                <thead>
                    <tr><th>Roll</th><th>Injury</th><th>Effect</th></tr>
                </thead>
                <tbody>
                    <tr> <td>0</td><td>No injury</td><td>If the result is 0 or below there is no effect</td> </tr>
                    <tr> <td>1-2</td> <td>Punctured muscle</td> <td>Roll 1d4 (or 1d8 for shambra), a limb has a punctured muscle and whenver you take an action with that limb you suffer -3 penalty.
                        If it is a leg you lose 1 speed.</td> </tr>
                    <tr> <td>3-4</td> <td>Punctured belly</td> <td>Your digestive tract has been punctured, you are stunned for 1d2 rounds and lose 1 speed.</td> </tr>
                    <tr> <td>5-6</td> <td>Punctured artery</td> <td>You lose 2 life at the end of each your turns for 1d4 rounds</td> </tr>
                    <tr> <td>7-8</td> <td>Punctured lung</td> <td>One of your lungs is punctured and can't be used, add 3 levels of exhaustion.
                        If your other lung is punctured you can no longer breathe,
                        you fall unsconsious when you run out of breath (as per holding breath rules), your brain dies 10 minutes later</td> </tr>
                    <tr> <td>9</td> <td>Ruptured organ</td> <td>You can't heal without medical assitance and surgery</td> </tr>
                    <tr> <td>10</td> <td>Pierced head</td> <td>Roll a 1d4, on 1 and 2 an eye is destroyed, on 3 and 4 an ear is destroyed</td> </tr>
                </tbody>
            </table>

        </Section>
        <Section title='Bludgeoning'>
            <table>
                <thead>
                    <tr><th>Roll</th><th>Injury</th><th>Effect</th></tr>
                </thead>
                <tbody>
                    <tr> <td>0</td><td>No injury</td><td>If the result is 0 or below there is no effect</td> </tr>
                    <tr> <td>1-3</td> <td>Broken nose</td> <td>Your nose is broken</td> </tr>
                    <tr> <td>3-4</td> <td>Internal bleeding</td> <td>You lose 1 life at the end of your round for 1d10 rounds due to internal bleeding</td> </tr>
                    <tr> <td>5-6</td> <td>Broken rib</td> <td>You have a broken rib, you can only use 1 action</td> </tr>
                    <tr> <td>7</td> <td>Broken jaw</td> <td>Your jaw is broken, you can't speak or chew or bite</td> </tr>
                    <tr> <td>8-9</td> <td>Broken limb</td> <td>Roll a 1d4 (or 1d8 for shambra), that limb is has a fractured bone and can not be used to take actions.</td> </tr>
                    <tr> <td>10</td> <td>Concussion</td> <td>You are stunned for 1d4 rounds and can take no actions during that time. You can't take actions that require intelligence or a skill check, your willpower, agility and perception count as 1.
                        Someone must use their move action every turn for 1 hour to prevent you from falling asleep and entering a coma.
                        Takes 4 weeks of healing to recover, or 1 week with a medicine check vs 20</td> </tr>
                </tbody>
            </table>

        </Section>
        <Section title='Ballistic'>
            <table>
                <thead>
                    <tr><th>Roll</th><th>Injury</th><th>Effect</th></tr>
                </thead>
                <tbody>
                    <tr> <td>0</td><td>No injury</td><td>If the result is 0 or below there is no effect</td> </tr>
                    <tr> <td>1-2</td> <td>Punctured muscle</td> <td>Roll 1d4 (or 1d8 for shambra), a limb has a punctured muscle and whenver you take an action with that limb you suffer -3 penalty.
                        If it is a leg you lose 1 speed.</td> </tr>
                    <tr> <td>3-4</td> <td>Punctured belly</td> <td>Your digestive tract has been punctured, you are stunned for 1d2 rounds and lose 1 speed.</td> </tr>
                    <tr> <td>5-6</td> <td>Ruptured artery</td> <td>You lose 1 life at the end of each your turnfor 1d10 rounds</td> </tr>
                    <tr> <td>7-8</td> <td>Punctured lung</td> <td>One of your lungs is punctured and can't be used, add 3 levels of exhaustion.
                        If your other lung is punctured you can no longer breathe,
                        you fall unsconsious when you run out of breath (as per holding breath rules), your brain dies 10 minutes later</td> </tr>
                    <tr> <td>9</td> <td>Ruptured organ</td> <td>You can't heal without medical assitance and surgery</td> </tr>
                    <tr> <td>10</td> <td>Blasted bone</td> <td>Roll 1d4 (or 1d8 for shambra), a limb has had its bones completely shattered and can not be used for any action.</td></tr>
                </tbody>
            </table>

        </Section>
        <Section title='Thermal'>
            <table>
                <thead>
                    <tr><th>Roll</th><th>Injury</th><th>Effect</th></tr>
                </thead>
                <tbody>
                    <tr> <td>0</td><td>No injury</td><td>If the result is 0 or below there is no effect</td> </tr>
                    <tr> <td>1-3</td> <td>Burn scar</td> <td>You have an ugly burn scar</td> </tr>
                    <tr> <td>4-5</td> <td>Heat stroke</td> <td>You gain 1 exhaustion</td> </tr>
                    <tr> <td>6-7</td> <td>First degree burns</td> <td>Natural healing is halved and suffer -2 penalty to all strength and agility checks, restored when fully halved or perception + medicine vs 20.
                        If you get this again you suffer second degree burns</td> </tr>
                    <tr> <td>8</td> <td>Second degree burns</td> <td>Natural healing is halved, suffer -4 penalty to all strength and agility checks and you lose 1d4 maximum life. Perception + medicine vs 25 recovers this.
                        If you get this again you suffer third degree burns</td> </tr>
                    <tr> <td>9</td> <td>Third degree burns</td> <td>Natural healing is reduced to a quarter, suffer -6 penalty to all strength and agility checks and you lose 2d4 maximum life.
                        Perception + medicine vs 25 recovers this.
                        This effect is cumulative if you get first or second or third again.</td> </tr>
                    <tr> <td>10</td> <td>Burning flesh</td> <td>You are burning, you take 1d6 fire damage at the start of your turn, this is not reduced by any damage absorbtion, you (or someone else) can put it out using an action (agility + athletics vs 15).
                        The fire distracts you and you can not take any perception actions, you have -3 on agility actions</td> </tr>
                </tbody>
            </table>

        </Section>
        <Section title='Electric'>
            <table>
                <thead>
                    <tr><th>Roll</th><th>Injury</th><th>Effect</th></tr>
                </thead>
                <tbody>
                    <tr> <td>0</td><td>No injury</td><td>If the result is 0 or below there is no effect</td> </tr>
                    <tr> <td>1-2</td> <td>System shock</td> <td>You are stunned for 1 round</td> </tr>
                    <tr> <td>3-4</td> <td>Arc flash burn</td> <td>Roll on the thermal table</td> </tr>
                    <tr> <td>5-6</td> <td>Muscle spasms</td> <td>You suffer -3 penalty to actions that require agility as your muscles spasm for 1d4 rounds</td> </tr>
                    <tr> <td>7</td> <td>Brain damage</td> <td>You suffer brain damage, roll 1d6, you suffer that much penalty to all actions that use agility, perception, intelligence or willpower.
                        Heals naturally at the rate of 1 per long rest</td> </tr>
                    <tr> <td>8</td> <td>Fibrillation</td> <td>You are stunned for 1d4 rounds, after that you have -5 on all endurance checks. Heals naturally after 2 long rests.</td> </tr>
                    <tr> <td>9</td> <td>Severe nerve damage</td> <td>You can no longer feel anything, you don't suffer from pain and automatically fail all perception checks that rely on touch.
                        Your agility is reduced by 3.
                        Medicine vs 25 allows this to recover after 4 long rests, otherwise it naturally heals after 10 years.</td> </tr>
                    <tr> <td>10</td> <td>Cardiac arrest</td> <td>You are stunned for 1d10 rounds, first aid check can undo this.
                        If you are stunned for more than 8 rounds like this then your heart does not start on its own and you die.</td> </tr>
                </tbody>
            </table>

        </Section>
        <Section title='Blast'>
            <table>
                <thead>
                    <tr><th>Roll</th><th>Injury</th><th>Effect</th></tr>
                </thead>
                <tbody>
                    <tr> <td>0</td><td>No injury</td><td>If the result is 0 or below there is no effect</td> </tr>
                    <tr> <td>1-2</td> <td>Tinnitus</td> <td>You hear a constant ringing noise and suffer -2 on all perception checks. This naturally heals after 10 long rests but every once in a while you will hear a ringing noise.</td> </tr>
                    <tr> <td>3-4</td> <td>Vertigo</td> <td>Your balance is upset, you must make a perception + acrobatics vs 10 to stand up and perception + acrobatics vs 15 to walk or run otherwise you fall prone. This lasts 1d6 rounds.</td> </tr>
                    <tr> <td>5-6</td> <td>Migranes</td> <td>Every day there is a 10% chance you will have a migrane 1d6 hours after you wake up. While in a migrane you suffer a -6 to all agility, intelligence and perception actions.
                        The migrane lasts for 1d4 hours.
                        This can only be healed with a intelligence + medicine check vs 25 at a clinic.</td> </tr>
                    <tr> <td>7-8</td> <td>Concussion</td> <td>You are stunned for 1d4 rounds and can take no actions during that time. You can't take actions that require intelligence or a skill check, your willpower, agility and perception count as 1.
                        Someone must use their move action every turn for 1 hour to prevent you from falling asleep and entering a coma.
                        Takes 4 weeks of healing to recover, or 1 week with a medicine check vs 20</td> </tr>

                    <tr> <td>9-10</td> <td>Collapsed lung</td> <td>One of your lungs is collapsed and can't be used, add 3 levels of exhaustion.
                        If your other lung is collapsed you can no longer breathe,
                        you fall unsconsious when you run out of breath (as per holding breath rules), your brain dies 10 minutes later</td> </tr>
                </tbody>
            </table>

        </Section>
    </>;
}

export default Combat;