import React, {useState} from 'react'
import {TabsClassicGroup, TabsClassicItem, TabsClassicPanel} from '@design-system-rt/rtk-ui-kit'
import {UI_STYLE_CONFIG} from '../../pureComponents/UI/constants'

import s from './PageWithTabsLayout.module.scss'

declare interface IPageWithTabsLayout {
    tabsName: string[]
}

const PageWithTabsLayout: React.FC<IPageWithTabsLayout> = ({children, tabsName}) => {
    const [selectedTab, setSelectedTab] = useState<string>('0')

    const handlerTabs = (indexTab:string) => {
        setSelectedTab(indexTab)
    }

    return (
        <div className={s.container}>
            <TabsClassicGroup
                value={selectedTab}
                onChange={handlerTabs}
                size={UI_STYLE_CONFIG.tabSize}
            >
                {tabsName.map((tabName, iTabName) => (
                    <TabsClassicItem
                        index={iTabName.toString()}
                        label={tabName}
                    />
                ))}
            </TabsClassicGroup>
            {React.Children.map(children, (child, iChild) =>
                <TabsClassicPanel
                    index={iChild.toString()}
                    value={selectedTab}
                >
                    {child}
                </TabsClassicPanel>
            )}
        </div>
    )
}

export default PageWithTabsLayout
