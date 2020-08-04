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
            <li>+1 If the player neither contradicts or adheres to their trait</li>
            <li>+2 If the player plays according to their traits most of the time and doesn't contradict them</li>
            <li>+3 If the player plays according to their traits exceptionally well</li>
        </ul>
        <h5>Overcoming adversity</h5>
        <p>If the character overcomes a huge challenge then they should be awarded +1. This can be anything from stopping a bomb from going off, pulling a survivor out of a burning building, defending against pirate attack or becoming elected mayor.</p>
        <h5>MVP Nomination</h5>
        <p>Finally, at the end of the game each player should nominate one other player as their nominee. Rather than announcing out load each player should write down the name of the player, and then read from the note when everyone is done.</p>
        <p>Each nomination grants a +1 experience point, it's preferred that the players choose based on characterization, cooperation and making the game fun for everyone.</p>
        <p>This is meant to encourage gratitute and cooperation among the players</p>
        <h4>Experience Multiplier</h4>
        <p>When the sources are all added up, each character multiplies their end of session experience and adds it to their pool of unsused character points.</p>
        <p>These points can be spent on anything, unlike skill exp which can only be spent on their respective skills and underlying perks.</p>
        
    </>
}

export default Experience;