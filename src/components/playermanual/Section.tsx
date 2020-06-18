import React, { useState } from "react";
import { Button } from "@material-ui/core";

interface ISection {
    title: string;
    tab?: number;
}

const Section: React.FC<ISection> = ({ title, tab, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    let tabSize = '0';
    if (tab !== undefined)
        tabSize = tab + 'px';
    return <div style={{ paddingLeft: tabSize }}>
        <Button onClick={() => setIsOpen(!isOpen)}>{title} {isOpen ? '-' : '+'}</Button>
        {isOpen && children}
    </div>;
}

export default Section;