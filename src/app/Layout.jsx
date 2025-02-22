import NavBar from "@/components/NavBar";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useState, useEffect } from "react";

const Layout = ({ children, isLoading, isEmpty }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar - Fixed Width */}
      <NavBar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900 overflow-y-auto ml-64"> 
        {/* Add `ml-64` to prevent overlapping */}
        <main className="flex flex-col items-center justify-center">
          {isLoading && !showContent ? (
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          ) : isEmpty ? (
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400">
                No data available.
              </p>
            </div>
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
};
export default Layout;
