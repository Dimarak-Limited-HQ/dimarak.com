import React from "react";

const RotatedBar: React.FC = () => {
  return (
    <div className="-z-10">
      <div
        className="absolute -top-8 bg-[#FFB74D] -z-10 rotate-[33.2deg]"
        style={{ width: 46, height: 50 }}
      ></div>
    </div>
  );
};

export default RotatedBar;
