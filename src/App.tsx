import React from "react";
import { Tabs, TabData } from "./components/Tabs";
import { Grid } from "./components/Grid";

const App: React.FC = () => {
  const initialTabs: TabData[] = [
    {
      id: 1,
      label: "Grid 1",
      content: Grid,
      closable: false,
      gridState: { boxImages: Array(25).fill(null) },
    },
  ];

  return (
    <div className="container h-screen max-w-screen-md p-4 mx-auto overflow-hidden max-h-svh">
      <Tabs initialTabs={initialTabs} />
    </div>
  );
};

export default App;
