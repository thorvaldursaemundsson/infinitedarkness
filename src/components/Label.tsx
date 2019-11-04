    import React from 'react';

export const Label: React.FC<{}> = ({children}) => {
    return <label style={{display:'inline-block', minWidth:'140px'}}>{children}</label>;
}

