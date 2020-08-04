import React from "react";
import { Button } from "@material-ui/core";
import usePersistentState from "../../utils/usePersistentState";

interface ISection {
    title: string;
    tab?: number;
    border?: boolean | undefined;
}

const Section: React.FC<ISection> = ({ title, tab, border, children }) => {
    const [isOpen, setIsOpen] = usePersistentState<boolean>(title + tab, false);
    let tabSize = '0';
    if (tab !== undefined)
        tabSize = tab + 'px';
    return <div className={border === true ? 'bordersection' : ''} style={{ paddingLeft: tabSize }}>
        <Button onClick={() => setIsOpen(!isOpen)}>{title} {isOpen ? '-' : '+'}</Button>
        {isOpen && children}
    </div>;
}

export default Section;