import React, { useState } from "react";
import { Button } from "@material-ui/core";

interface ISection {
    title: string;
}

const Section: React.FC<ISection> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(!isOpen)}>{title} {isOpen ? '-' : '+'}</Button>
        {isOpen && children}
    </div>;
}

export default Section;