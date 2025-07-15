import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PopUp = ({ children }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show">
      {children}
    </div>
  );
};

export default PopUp;
