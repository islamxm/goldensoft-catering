import { useState, useEffect } from "react";
import { TabItem } from "../types";

const useTabsHook = (length: number, defaultActiveItem?: TabItem | TabItem['tabId']) => {
  const [activeTab, setActiveTab] = useState<TabItem>()

  useEffect(() => {
    if(length > 0) {
      if(typeof defaultActiveItem === 'object') {
        setActiveTab(defaultActiveItem)
      } 
      if(typeof defaultActiveItem === 'number') {
        setActiveTab({tabId: defaultActiveItem})
      }
    }
  }, [defaultActiveItem, length])

  return {activeTab, setActiveTab}
}

export default useTabsHook;