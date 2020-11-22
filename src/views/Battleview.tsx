import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React, { useState } from 'react';
import { Battlemap, Icon } from '../components/gamemaster/Battlemat';

const inputCss: CSSProperties = {
    width: '60px'
};

const inputCssTiny: CSSProperties = {
    width: '40px'
};

const alpha = 'qwertyuiopasdfghjklzxcvbnm';
const randId = () => {
    let rand = '';
    for (var counter = 0; counter < 10; counter++) {
        rand += alpha[Math.floor(Math.random() * alpha.length)];
    }
    return rand;
}

const Battleview: React.FC = () => {
    const [width, setWidth] = useState(18);
    const [height, setHeight] = useState(15);
    const [currentAddingIcon, setCurrentAddingIcon] = useState('');
    const [currentAddingIconSqs, setCurrentAddingIconSqs] = useState(0);
    const [currentAddingIconSpeed, setCurrentAddingIconSpeed] = useState(0);
    const [currentAddingIconLife, setCurrentAddingIconLife] = useState(0);

    const [icons, setIcons] = useState<Icon[]>([]);



    const addIcon = () => {
        setIcons([...icons, { symbol: currentAddingIcon, startX: icons.length, startY: 0, sequence: currentAddingIconSqs, speed: currentAddingIconSpeed, id: randId(), maxLife: currentAddingIconLife, currentLife: currentAddingIconLife }]);
        setCurrentAddingIcon('');
        setCurrentAddingIconSpeed(0);
        setCurrentAddingIconSqs(0);
        setCurrentAddingIconLife(0);
    };

    return <>
        <input type='text' title='width' style={inputCssTiny} value={width} onChange={(e) => setWidth(parseInt(e.target.value))} />
        <input type='text' title='height' style={inputCssTiny} value={height} onChange={(e) => setHeight(parseInt(e.target.value))} /> |
        <input type='text' title='sequence' style={inputCssTiny} value={currentAddingIconSqs} onChange={(e) => setCurrentAddingIconSqs(parseInt(e.target.value))} />
        <input type='text' title='speed' style={inputCssTiny} value={currentAddingIconSpeed} onChange={(e) => setCurrentAddingIconSpeed(parseInt(e.target.value))} />
        <input type='text' title='life' style={inputCssTiny} value={currentAddingIconLife} onChange={(e) => setCurrentAddingIconLife(parseInt(e.target.value))} />
        <input type='text' title='add icon' style={inputCss} value={currentAddingIcon} onChange={(e) => setCurrentAddingIcon(e.target.value)} />
        <button onClick={() => addIcon()} >Add</button>

        <br />
        <Battlemap initialIcons={icons} boardHeight={height} boardWidth={width} />
    </>;
}


export default Battleview;