import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const GameMaster: React.FC = () => {
    const [youCant, setYouCant] = useState(['']);
    return (<div>
        <h1>Game Master</h1>
        <p>The clock is ticking. The hours are going by. The past is increasing, the future recedes. Posibilities decreasing, regrets mounting</p>
        <p>Do you understand?</p>
        <Button onClick={() => alert('I am so sorry')}>I understand</Button>
        <Button onClick={() => setYouCant([...youCant,'it is too late'])}>remain ignorant</Button>
    {youCant.map(yc => <p>{yc}</p>)}
    </div>);
}


export default GameMaster;