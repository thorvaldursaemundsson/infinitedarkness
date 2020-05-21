import React from 'react';
import MakeCharacter from '../components/playermanual/MakeCharacter';
import Combat from '../components/playermanual/Combat';
import Equipment from '../components/playermanual/Equipment';
import Wealth from '../components/playermanual/Wealth';
import Experience from '../components/playermanual/Experience';
import Vehicles from '../components/playermanual/Vehicles';
import Section from '../components/playermanual/Section';

const PlayerManual: React.FC = () => {
    return (<div>
        <hr />
        <MakeCharacter />
        <hr />
        <Wealth />
        <hr />
        <Experience />
        <hr />
        <Combat />
        <hr />
        <Equipment />
        <hr />
        <Vehicles />
        <hr />
        <Health />
    </div>);
}


const Health = () =>
    <Section title='health'>
        <h3>Health</h3>
        <i>There are two kinds of health, mental and physical. Injury to either will result in reduced ability and can lead to eventual death</i>
        <h4>Physical Health</h4>
        <p>
            Physical health represents the integrity of body.
        </p>
        <p>If you are injured you take penalty to all physical activities with an equal amount of damage taken.</p>
        <p>If your physical health (life) is reduced to zero you do not immediately die, rather you are partially incapacitated, any extraneous physical activity will cause you to take 1 damage</p>
        <p>If your physical health reaches full negative (-100%) you become unconcious and start to die, you lose 1 life every x number of minutes (x = you endurance), once it hits -200% you are fully dead</p>
        <h5>Pain and adrenaline</h5>
        <p>When you receive an injury during combat your body will produce adrenaline, this prevents penalties to physical activities, it lasts 1 hour, each time it happens you lose 1 mental health.</p>
        <h5>Painkillers</h5>
        <p>Painkillers can reduce the penalty to physical activities by transfering them into mental penalties. The stronger the painkiller the more it dulls the mind.</p>
        <h5>Recovery</h5>
        <p>You heal physical injury generally slowly, you recover 1 per day that you do not perform any extraneous activity. If you perform extraneous activities you heal at the rate of 1 per 2 days. Recovery can not happen if you are injured, recovery starts the day after injury.</p>
        <h4>Mental Health</h4>
        <p>
            Mental health represents the integrity of the mind.
        </p>
        <p>
            If your mental health is injured you take a penalty to all mental activities equal to the amount of damage.
        </p>
        <p>Mental health injuries come from high levels of stress, over time it can accumulate.</p>
        <p>While you can not directly die from mental health injury it can debilitate you, if you reach zero you enter a state of depression: mundane tasks require a roll, if you fail you lack the motivation to act and do nothing. Even in life threatening situations since your character has lost the will to live.</p>
        <h5>Recovery</h5>
        <p>Mental health recovery works similar to physical recovery, you recover 1 per day that you do not perform any highly stressful activity, in addition being exposed to a positive environment will increase it to 2 per day</p>
    </Section>;

export default PlayerManual;