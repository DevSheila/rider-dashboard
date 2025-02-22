import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Layout from "./app/Layout";
import RideHistory from "./app/RideHistory";
import NotFound from "./app/NotFound";
import Dashboard from "./app/Dashboard";

function App() {
  return (
    <Router>
      <Toaster position="top-right" richColors />

      <Routes>
        {["/", "/history"].map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout>{path === "/" ? <Dashboard /> : <RideHistory />}</Layout>
            }
          />
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
