import React from "react";
import Acrobatics from "../skills/acrobatics";
import Athletics from "../skills/athletics";
import Combat from "../skills/combat";
import Stealth from "../skills/stealth";
import Survival from "../skills/survival";
import MonsterStats from "./MonsterStats";


const EarthMonsters: React.FC = () => {
    return <>
        <h4>Earthian Megafauna</h4>
        <p>Due to the 6th mass extinction of Earth that ended with a ecological collapse in the 22nd century there are no species on Earth that can be classified as a mega-fauna.</p>
        <h4>Synthetic horrors</h4>
        <p>During the 21st and 22nd century many biological weapons were created, most have since been officially destroyed, others have integrated with the ecosystem and have become impossible to remove.</p>

        <MonsterStats
            strength={11}
            agility={9}
            endurance={9}
            perception={11}
            intelligence={2}
            willpower={3}
            name={'T-71 Superpredator'}
            description={"The T-71 super predator was created as a biological weapon by the North American Empire, originally based off (now extinct) mountain lions, the super predator was designed to have organic metamaterial furr that makes it invisible to visible and infrared light. Additionally its claws and fangs were altered to be as hard as steel, allowing it to bite through power armor, vehicles, etc. Additonally it has enhanced mental capacity and strength. They were originally controlled via cybernetic implants, however some escaped and bred outside captivity and those have never been recoverd. It's unknown how many exist, they typically prey on humans."}
            size={'large'}
            baseDefense={16}
            speed={10}
            naturalAttack={{
                bonusToHit: 0,
                bonusDamage: 0,
                sidesPerDice: 8,
                numberOfDice: 1,
                range: 'melee',
                armorPiercing: 1,
                numberOfAttacks: 2,
            }}
            skills={[
                {
                    ...Combat,
                    level: 9
                },
                {
                    ...Stealth,
                    level: 15
                },
                {
                    ...Athletics,
                    level: 6,
                },
                {
                    ...Acrobatics,
                    level: 6,
                },
                {
                    ...Survival,
                    level: 9
                }
            ]}
        />
    </>;
};

export default EarthMonsters;