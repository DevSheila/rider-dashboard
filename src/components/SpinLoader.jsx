import React from "react";

function SpinLoader() {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-700 border-solid border-opacity-50"></div>
    </div>
  );
}

export default SpinLoader;
