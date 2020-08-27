import React, { CSSProperties } from 'react';

interface LabelInterface {
    style?: CSSProperties;
}

export const Label: React.FC<LabelInterface> = ({ children, style }) => {
    return <label style={{ display: 'inline-block', minWidth: '140px', ...style }}>{children}</label>;
}

