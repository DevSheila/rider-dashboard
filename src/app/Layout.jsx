import NavBar from "@/components/NavBar";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useState, useEffect } from "react";

const Layout = ({ children, isLoading, isEmpty }) => {
  return (
    <>
      <NavBar />
      <div className="h-screen">
        <main>{children}</main>
      </div>
    </>
  );
};
export default Layout;
