import React, { FC } from "react";

interface Props {
  feature: string;
}

const Navbar: FC<Props> = ({ feature }) => {
  return (
    <div className="bg-yellow-400 text-slate-900 h-14 flex justify-between items-center px-20 text-base">
      <div className="h-full px-4 flex justify-center items-center font-semibold">
        <h5>REACT JS + FIREBASE</h5>
      </div>
      <div className="bg-white rounded px-6 py-1">
        <h5>{feature}</h5>
      </div>
    </div>
  );
};

export default Navbar;
