import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { Grid, GridProps } from "./Grid";

export interface TabData {
  id: number;
  label: string;
  content: React.ComponentType<GridProps>;
  closable: boolean;
  gridState?: GridState;
}

interface TabsProps {
  initialTabs: TabData[];
}

interface GridState {
  boxImages: (string | null)[];
}

export const Tabs: React.FC<TabsProps> = ({ initialTabs }) => {
  const [tabs, setTabs] = useState<TabData[]>(initialTabs);
  const [activeTab, setActiveTab] = useState<number>(0);

  const addNewGridTab = () => {
    const newTabId =
      tabs.length > 0 ? Math.max(...tabs.map((tab) => tab.id)) + 1 : 1;
    const newTab: TabData = {
      id: newTabId,
      label: `Grid ${newTabId}`,
      content: Grid,
      closable: true,
      gridState: { boxImages: Array(25).fill(null) },
    };
    setTabs([...tabs, newTab]);
    setActiveTab(tabs.length);
  };

  const closeTab = (id: number) => {
    const newTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(newTabs);
    if (tabs[activeTab].id === id) {
      setActiveTab(0);
    } else if (activeTab > newTabs.length - 1) {
      setActiveTab(newTabs.length - 1);
    }
  };

  const updateGridState = (tabId: number, newState: GridState) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.id === tabId ? { ...tab, gridState: newState } : tab
      )
    );
  };

  return (
    <div className="w-full h-full">
      <div className="fixed bottom-0 left-0 flex w-full max-w-full overflow-auto border-b">
        <div className="flex items-center justify-center w-full">
          <div className="flex w-full max-w-screen-md">
            {tabs.map((tab, index) => (
              <div key={tab.id} className="flex items-center">
                <button
                  className={`px-6 py-4 text-lg font-semibold focus:outline-none ${
                    index === activeTab
                      ? "border-t-2 border-blue-500 text-blue-500"
                      : "text-gray-500 hover:text-blue-500"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.label}
                </button>
                {tab.closable && (
                  <button
                    className="ml-2 text-gray-500 hover:text-red-500 focus:outline-none"
                    onClick={() => closeTab(tab.id)}
                  >
                    <X size={24} />
                  </button>
                )}
              </div>
            ))}
            <button
              className="px-4 py-2 text-green-500 hover:text-green-600 focus:outline-none"
              onClick={addNewGridTab}
            >
              <Plus size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center h-full py-4">
        {tabs.length > 0 ? (
          React.createElement(tabs[activeTab].content, {
            gridState: tabs[activeTab].gridState || {
              boxImages: Array(25).fill(null),
            },
            updateGridState: (newState) =>
              updateGridState(tabs[activeTab].id, newState),
          })
        ) : (
          <div>No tabs available. Click '+' to add a new Grid.</div>
        )}
      </div>
    </div>
  );
};
