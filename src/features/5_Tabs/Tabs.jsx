import { useRef, useState } from "react";
import TabPanel from "./TabPanel";
import TabsList from "./TabsList";
import "./style5.scss"
export default function Tabs() {
  const tabs = [
    "All products",
    "Laptops",
    "Desktops",
    "Smartphones"
  ]
  const [ activeTab, setActiveTab ] = useState(tabs[0]);
  const handleActiveTabChange = (tab) => {
       setActiveTab(tab);
  }

  const tabsListRef = useRef(null);
  return (
    <div className="tabs-container">
      <nav>
        <TabsList 
        ref={tabsListRef}
        tabs={tabs}
        activeTab={activeTab}
        activeTabChange={handleActiveTabChange}
        />
      </nav>
      <TabPanel
      activeTab={activeTab}
      />
      
    </div>
  )
}
