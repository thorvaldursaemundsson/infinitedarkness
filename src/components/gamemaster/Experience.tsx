import React from 'react';

const Experience: React.FC = () => {
    return <>
        <h3>End of Session Experience</h3>
        <p>At the end of a session players are given experience and are allowed to use their experience on skill points and potentially use them. (players may also use at the start of the session)</p>
        <p>The amount of experience should depend on multiple factors and come from these three sources</p>
        <h5>Roleplaying</h5>
        <p>The main source, and most reliable source should come from roleplaying. This is why it's important for characters to have at least 3 personality traits written down</p>
        <p>Note that it's okay to change your character's personality traits if you have a good reason, but the game master must know.</p>
        <ul>
            <li>+0 If the player directly contradicts their traits</li>
            <li>+0.5 If the player neither contradicts or adheres to their trait and does</li>
            <li>+1 If the player plays according to their traits most of the time and doesn't contradict them</li>
            <li>+2 If the player plays according to their traits exceptionally well</li>
        </ul>
        <p><i>Players that disrupt the game by breaking character during important moments, interrupts others out of character, metagames or in any way acts in a toxic way that ruins the fun for everyone should generally not get character points.
            The game master should consider whether it's appropriate to take them aside or to tell them in front of the whole group whether to tell them how they acted wrong.
            </i></p>
        <h5>Overcoming adversity</h5>
        <p>If the character overcomes a huge challenge then they should be awarded +1. This can be anything from stopping a bomb from going off, pulling a survivor out of a burning building, defending against pirate attack or becoming elected mayor.</p>
        <h5>MVP Nomination</h5>
        <p>Finally, at the end of the game each player should nominate one other player as their nominee. Rather than announcing out load each player should write down the name of the player, and then read from the note when everyone is done.</p>
        <p>Each nomination grants a +1 experience point, it's preferred that the players choose based on characterization, cooperation and making the game fun for everyone. However the players get the final say on who they give this experience to and they may do whatever they want.</p>
        <p>This is meant to encourage gratitute and cooperation among the players</p>
        <h4>Experience Multiplier</h4>
        <p>When the sources are all added up, each character multiplies their end of session experience and adds it to their pool of unsused character points.</p>
        <p>These points can be spent on anything, unlike skill exp which can only be spent on their respective skills and underlying perks.</p>
        
    </>
}

export default Experience;