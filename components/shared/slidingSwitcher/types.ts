import * as TabProps from '../tabs/types';

type PropsType = TabProps.default & {
  defaultActiveItem?: SlideTabItem
}

export type SlideTabItem = TabProps.TabItem & {
  data?: Record<string, any>,
  isActive?: boolean,
  index: number,
  onChange?: TabProps.TabsOnChange
}

export default PropsType;