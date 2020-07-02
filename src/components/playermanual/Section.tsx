import React, { useState } from "react";
import { Button } from "@material-ui/core";

interface ISection {
    title: string;
    tab?: number;
    border?: boolean | undefined;
}

const Section: React.FC<ISection> = ({ title, tab, border, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    let tabSize = '0';
    if (tab !== undefined)
        tabSize = tab + 'px';
    return <div className={border === true ? 'bordersection' : ''} style={{ paddingLeft: tabSize }}>
        <Button onClick={() => setIsOpen(!isOpen)}>{title} {isOpen ? '-' : '+'}</Button>
        {isOpen && children}
    </div>;
}

export default Section;