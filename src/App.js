import React from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topBar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";

export default function App() {
  return (
    <> 
      <TopBar/>
      <Settings/>
    </>
  );
}
