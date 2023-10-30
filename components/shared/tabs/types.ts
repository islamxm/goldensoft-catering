import { ReactNode } from "react";

type PropsType = {
  list: TabListItem[],
  defaultActiveItem?: TabItem | TabItem['tabId']
  onChange?: TabsOnChange 
}

export type TabsOnChange = <T extends object = {}>(id: TabItem['tabId'], item: TabItem, data: T) => void

export type TabListItem = ({data: Record<string, any>} & TabItem)

export type TabItem = {
  tabId: number,
  tabLabel?: ReactNode
}

export default PropsType;