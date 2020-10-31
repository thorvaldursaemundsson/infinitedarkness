import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React, { useState } from 'react';
import Battlemap from '../components/gamemaster/Battlemat';

const inputCss: CSSProperties = {
    width: '60px'
};

interface Icon {
    symbol: string;
    startX: number;
    startY: number;
}

const Battleview: React.FC = () => {
    const [width, setWidth] = useState(18);
    const [height, setHeight] = useState(15);
    const [currentAddingIcon, setCurrentAddingIcon] = useState('');
    const [icons, setIcons] = useState<Icon[]>([]);

    const addIcon = () => {
        setIcons([...icons, { symbol: currentAddingIcon, startX: 0, startY: 0 }]);
        setCurrentAddingIcon('');
        console.log({ icons });
    };

    return <>
        <input type='text' title='width' style={inputCss} value={width} onChange={(e) => setWidth(parseInt(e.target.value))} />
        <input type='text' title='height' style={inputCss} value={height} onChange={(e) => setHeight(parseInt(e.target.value))} /> |
        <input type='text' title='add icon' style={inputCss} value={currentAddingIcon} onChange={(e) => setCurrentAddingIcon(e.target.value)} />
        <button onClick={() => addIcon()} >Add</button>

        <br />
        <Battlemap initialIcons={icons} boardHeight={height} boardWidth={width} />
    </>;
}


export default Battleview;