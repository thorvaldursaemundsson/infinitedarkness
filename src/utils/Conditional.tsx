import React, { Suspense } from "react";

interface ItemProp {
    shouldView: boolean;
  }
const Conditional: React.FC<ItemProp> = ({ shouldView, children }) => {
    if (shouldView) return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
    else return null;
  };

  export default Conditional;