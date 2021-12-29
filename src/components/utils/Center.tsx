import React from "react";

interface Props {
  children: React.ReactNode;
  height?: number | string;
}

const Center = ({ children, height = 100 }: Props) => {
  let useHeight;
  if (typeof height === "string") useHeight = height;
  else useHeight = height + "vh";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: useHeight,
      }}
    >
      {children}
    </div>
  );
};

export default Center;
