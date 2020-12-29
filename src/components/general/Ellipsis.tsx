import React, { useState, CSSProperties } from "react";

interface IEllipsisProps {
    text: string | undefined;
    cutOff: number;
}

const cursorStyle: CSSProperties = {
    cursor: 'pointer'
}

const Ellipsis: React.FC<IEllipsisProps> = ({ text, cutOff }) => {
    const [isOpen, setIsOpen] = useState(false);
    if (text === undefined) return null;
    if (text.length < cutOff)
        return <p>{text}</p>
    else if (!isOpen && text.length >= cutOff)
        return <p className="ellipsis" style={cursorStyle} onClick={() => setIsOpen(true)}>{text.substring(0, cutOff)}...</p>
    else return <p className="ellipsis" style={cursorStyle} onClick={() => setIsOpen(false)}>{text}</p>
}

export default Ellipsis;