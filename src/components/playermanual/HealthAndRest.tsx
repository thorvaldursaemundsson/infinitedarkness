import React from "react";
import Indexer, { Indexed } from "../general/Indexer";
import Section from "./Section";


const HealthAndRest = () =>
    <Section title='Health and Rest'>
        <Indexer title='Health and rest'>
            <i>There are two kinds of health, mental and physical. Injury to either will result in reduced ability and can lead to eventual death</i>
            <Indexed title='Physical Health'>
                <p>Physical health represents the integrity of body. </p>
                <p>If you are injured you take penalty to all physical activities with an equal amount of damage taken. Note that merely walking is an athletics + endurance roll, severe damage may impede your ability to walk a distance.</p>
                <p>If your physical health (life) is reduced to zero you do not immediately die, rather you are partially incapacitated, any extraneous physical activity will cause you to take 1 damage. You also gain intermediate bleeding, any further damage causes bleeding to start again.</p>
                <p>If your physical health reaches full negative (-100%) you are critically incapacitated, you gain heavy bleeding, once life hits -200% you are fully dead</p>
                <h5>Pain and adrenaline</h5>
                <p>When you receive an injury during combat your body will produce adrenaline, this prevents penalties to physical activities, it lasts 1 hour, each time it happens you lose 1 mental health.</p>
                <h5>Painkillers</h5>
                <p>Painkillers can reduce the penalty to physical activities by transfering them into mental penalties. The stronger the painkiller the more it dulls the mind.</p>
                <h5>Skill bonus</h5>
                <p>You gain one additional health when your athletics skill rank reaches 9, then again at 18</p>
            </Indexed>
            <Indexed title='Mental Health'>
                <p>Mental health represents the integrity of the mind.</p>
                <p>If your mental health is injured you take a penalty to all mental activities equal to the amount of damage.</p>
                <p>Mental health injuries come from high levels of stress, over time it can accumulate.</p>
                <p>While you can not directly die from mental health injury it can debilitate you, if you reach zero you enter a state of depression: mundane tasks require a roll, if you fail you lack the motivation to act and do nothing. Even in life threatening situations since your character has lost the will to live.</p>
                <h5>Skill bonus</h5>
                <p>You gain one additional mental health when your survival skill rank reaches 9 and when your empathy reaches 9 (these stack)</p>
            </Indexed>
            <Indexed title='Ability damage'>
                <p>Ability damage recovers 1 per rest, if you have ability damage in multiple abilities then the one with the most damage recovers.</p>
                <p>Very few things cause direct ability damage, however if one ability is reduced to 0 or less then your character immediately falls unconscious</p>
                <p>Abilities reduced below 0 represent a severe handicap, stats like life, mental health, mana, sequence, carrying capacity should be recalculated based on current abilities.</p>
                <p>If maximum mental health or maximum life becomes a negative number then you are partially incapacitated. Any damage to life would count as death.</p>
            </Indexed>
            <Indexed title='Mana'>
                <h4>Mana</h4>
                <p>Mana is used for spells and activating mutations. A occations may let you expend mana for other purposes. There is no penalty to not having full mana, having below zero mana imposes a penalty equal to negative mana to all skill rolls. This stacks with other penalties.</p>
                <h5>Skill bonus</h5>
                <p>You gain one additional mana when your spells skill rank reaches 9, then again at 18</p>
            </Indexed>
            <Indexed title='Recovery'>
                <p>Recovery of life, mental health and mana generally happens when you rest. Life and mental health depends on the quality of sleep</p>
                <ul>
                    <li>No sleep, work: if you stay up all night and work then you recover life at 50% rate and lose 2 mental health. Exhaustion increases by 1 level</li>
                    <li>No sleep, no work: if you stay up all night but do nothing then you recover life at 50% and lose 1 mental health.</li>
                    <li>Horrible sleep: you wake up with a headache and your body is sore and stiff, recover life at 50% and no mental health recovery. Exhaustion decreases by 1 level</li>
                    <li>Low quality sleep: you wake up with a mild headache, life recovery rate 100% and no mental health recovery. Exhaustion decreases by 2 levels</li>
                    <li>Adequate sleep: you wake up feeling rested, life recovery rate 100% and 1 mental health Recovery. Exhaustion decreases by 3 levels</li>
                    <li>Good sleep: you wake up feeling well rested, life recovery rate 100%, 1 mental health recovery and you gain the "well rested" buff. Exhaustion decreases by 4 levels</li>
                    <li>Fantastic sleep: you wake up full or energy, life recovery rate 150%, 2 mental health recovery and you gain the "well rested" buff. Exhaustion decreases by 5 levels</li>
                </ul>
                <p>Well rested: you have +1 to all skill rolls, if you are in a situation where you may lose mental health instead dispend this buff. Lasts 12 hours</p>
                <p>The quality of your sleep depends on the quality of your situation, some things have positive effects, some negative. If the quality if dropped below horrible then you can't fall asleep</p>
                <ul>
                    <li>Sleeping on the floor with no cover: horrible sleep</li>
                    <li>Sleeping on bad mattress or bedroll: low quality sleep</li>
                    <li>Sleeping on bed: adequate quality sleep</li>
                    <li>Sleeping on good bed: good sleep</li>
                    <li>Temperature ouside of comfort (16-26): drop quality one step</li>
                    <li>Extreme temperature: drop quality two steps</li>
                    <li>Bad ventilation: drop quality one step</li>
                    <li>Sleeping in body suit armor: drop quality one step</li>
                    <li>Sleeping in plated or power armor: drop quality two steps</li>
                    <li>Sleeping with 3 or more other people in room: drop quality one step</li>
                    <li>No noice or disturbances: raise quality one step</li>
                    <li>Sleeping medication: raise quality one step</li>
                </ul>
                <p>Life recovery rate is equal to endurance / 5 per day, fractions are carried over.</p>
                <p>Mental health recovery is equal to 1 per day on adequate and good quality sleep, 2 on fantastic sleep quality. It can be accelerated through therapy and meditation</p>
                <p>Mana recovers 1 per day night cycle. It is completely unaffected by quality of sleep or effort during the day.</p>
            </Indexed>
            <Indexed title='Status'>
                <p>There are several status conditions that can affect a character</p>
                <ul>
                    <li>Frightened.<br />
                    Becoming frightened is accompanied with mental health damage, you are frightened for an equal duration to <i>total mental health damage</i>. Becoming frightened multiple times resets the timer and often drains more mental health.<br />
                    While you are frightened you are only allowed to attack if you are unable to run away. Being frightened prevents intimidation attempts.<br />
                    If you have the trait Aggressive or the perk Barbarian, and lack the brave or coward trait then there's a 50% chance you will enter a blind rage.
                    </li>
                    <li>Panicked<br />
                    Panick is the next step after frightened, it occurs when mental health is at zero or below. While panicked you may only escape, if escape is not possible then you freeze up completely unable to speak.<br />
                    </li>
                    <li>Blind Rage<br />
                    While in a blind rage you must attack the target of your fear, you're not allowed to take any defensive actions and must move towards them in a straight line. Lasts as long as frightened</li>
                    <li>Partially incapacitated<br />
                    This is what happens when your life is reduced to or below 0 but above -100%. Any straneous activity causes 1 point of damage and you are only allowed either the action or move but not both.</li>
                    <li>Critically incapacitated<br />
                    This is what happens when your life is reduced below -100% but above -200%. You are not able to take any action. Roll 2d10 + endurance vs 25, if you fail you fall unconscious.</li>
                </ul>
            </Indexed>
        </Indexer>


    </Section>;

export default HealthAndRest;