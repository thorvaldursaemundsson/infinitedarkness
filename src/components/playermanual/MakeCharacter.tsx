import Section from "./Section";
import React from "react";

const MakeCharacter: React.FC =() => {
    return <Section title='How to make a character'>

        <h3>Step 1 - concept</h3>
        <p>The first step is conceptual and mostly abstract, but will feed into the next steps. Begin by answering at least all of these questions.</p>
        <h4>Where was my character born?</h4>
        <h4>How old is my character currently?</h4>
        <h4>What kind of upbringing did my character have?</h4>
        <h4>How does my character's upbringing bias my character's point of view?</h4>
        <h4>What major events happened in my characters life?</h4>
        <h4>How did those events shape my characters personality?</h4>
        <h4>What lessons and skills did my character learn from that?</h4>
        <p>There may be more questions you want to ask depending on your answers.</p>
        <h3>Step 2 - outlining your character</h3>
        <p>Based on the answer in step 1...</p>
        <h4>Adjust your age</h4>
        <p>The older you start at the more character points (applicable experience) you start with.</p>
        <p>Finally the younger you are the bigger your multiplier, whenever you gain character points in game you multiply them by this.</p>
        <p>You also have a maximum character point ceiling, this is based off your current age and you can not exceed it</p>
        <h4>Adjust your attributes</h4>
        <p>They are as expensive as they are valuable. Choose with care. Save points for skills and perks</p>
        <h4>Select between 2 and 4 "main skills" and as many additional secondary skills as you need.</h4>
        <p>You'll want to put points into your main skills, note that the cost increases rapidly.
            The cost for each step is what you have + 1
    Save some character points for perks</p>
        <p>Also notice that your attributes play a part in your skill total,
            for example pilot is a perception skill,
    when you roll for pilot you roll 2d10 + pilot + perception</p>
        <h3>Step 3 - choose your perks</h3>
        <p>Perks are specializations, they either grant new capabilities under a skill or make a specific skill usage more powerful/likely to succeed (skills have multiple uses)</p>
        <p>Note that perks often come with skill requirements, and for skills that you don't put points into are often not worth taking.</p>

    </Section>;
}


export default MakeCharacter;