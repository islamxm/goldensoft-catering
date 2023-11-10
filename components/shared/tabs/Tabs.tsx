import styles from './styles.module.scss';
import { FC } from 'react'
import PropsType from './types';
import Tab from './components/tab/Tab';
import useTabsHook from './hooks/useTabsHook';

const Tabs:FC<PropsType> = ({
  list,
  defaultActiveItem,
  onChange
}) => { 
  
  const {
    activeTab, 
    setActiveTab
  } = useTabsHook(list.length, defaultActiveItem)
  
  return (
    <div className={styles.wrapper}>
      {
        list.map((item,index) => (
          <div className={styles.tab} key={index}>
            <Tab
              tabId={item.tabId}
              tabLabel={item.tabLabel}
              data={item}
              isActive={activeTab?.tabId === item.tabId}
              onChange={(...args) => {
                onChange && onChange(...args)
                setActiveTab(args[1])
              }}
              />
          </div>
        ))
      }
    </div>
  )
}

export default Tabs;