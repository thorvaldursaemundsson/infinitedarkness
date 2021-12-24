import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { ISection } from "./Section";

let isMoving = false;
let xDispatcher: React.Dispatch<React.SetStateAction<number>> | undefined = undefined;
let yDispatcher: React.Dispatch<React.SetStateAction<number>> | undefined = undefined;
let offsetX = 0;
let offsetY = 0;

const mouseDown = (x: React.Dispatch<React.SetStateAction<number>>, y: React.Dispatch<React.SetStateAction<number>>, event: React.MouseEvent<HTMLDivElement, MouseEvent>, currentX: number, currentY: number) => {
    isMoving = true;
    xDispatcher = x;
    yDispatcher = y;
    console.log('start moving');
    offsetX = event.screenX - currentX;
    offsetY = event.screenY - currentY;
};

const mouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isMoving !== true) return;
    if (yDispatcher === undefined || xDispatcher === undefined) return;
    xDispatcher(event.screenX - offsetX);
    yDispatcher(event.screenY - offsetY);
    console.log(`x: ${event.pageX - offsetX}, y: ${event.pageY - offsetY}`);
};

const mouseUp = () => {
    isMoving = false;
    xDispatcher = undefined;
    yDispatcher = undefined;
};

const mouseOut = () => {
    isMoving = false;
    xDispatcher = undefined;
    yDispatcher = undefined;
};

const mouseEnter = () => {
    isMoving = false;
    xDispatcher = undefined;
    yDispatcher = undefined;
};



const FloatingSection: React.FC<ISection> = ({ title, tab, children, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    let tabSize = '0';
    if (tab !== undefined)
        tabSize = tab + 'px';
    return <div className={`boardersection ${!isOpen ? '' : 'floatsection'}`} style={{ paddingLeft: tabSize, left: `${x}px`, top: `${y}px` }}>
        <div className="floaterbox" style={{ cursor: 'pointer' }}
            onMouseDown={(e) => mouseDown(setX, setY, e, x, y)}
            onMouseUp={() => mouseUp()}
            onMouseOut={() => mouseOut()}
            onMouseLeave={() => mouseOut()}
            onMouseMove={(e) => mouseMove(e)}
            onMouseEnter={() => mouseEnter()}
        >...</div>
        <Button onClick={(event) => { setIsOpen(!isOpen); setX(event.screenX-40); setY(event.screenY-160); }}>{title} {isOpen ? '-' : '+'}</Button>
        {isOpen && children}
    </div>;
}

export default FloatingSection;