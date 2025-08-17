import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col pt-14 max-w-3xl inset-0 mx-auto absolute">
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default Container;
