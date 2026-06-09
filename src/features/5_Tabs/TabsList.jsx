import TabButton from "./TabButton";

export default function TabsList({tabs,activeTabChange,activeTab}) {
  return (
    <ul className="tabs-list">
       {
        tabs.map(tab=>
            <li key={tab}>
               <TabButton 
               tabTitle={tab} 
               active={activeTab === tab}
               activeTabChange={activeTabChange}
               />
            </li>
        )
       } 
    </ul>
  )
}
