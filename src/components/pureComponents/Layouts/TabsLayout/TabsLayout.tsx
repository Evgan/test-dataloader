
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import KeyHelper from '../../../../helpers/KeyHelper'
import {Typography} from '../../UI'
import {UI_CONSTANT} from '../../UI/constants'

import s from './TabsLayout.module.scss'

export interface ITabsLayout {
    tabsName: Array<String>
}

const TabsLayout:React.FC<ITabsLayout> = ({ tabsName, children }) => (
    <div className={s.container}>
        <Tabs className={s.tabs}>
            <TabList className={s.tabList}>
                {tabsName.map((tabName, index) => (
                    <Tab
                        key={`tab_${index}`}
                        selectedClassName={s.selected}
                    >
                        <Typography
                            variant={UI_CONSTANT.TYPOGRAPHY_VARIANTS.h4}
                        >
                            {tabName}
                        </Typography>
                    </Tab>

                ))}
            </TabList>
            <div className={s.line} />
            {React.Children.map(children, child => {
                return (
                    <TabPanel
                        //key={`tabPanel_${indexPanel}`}
                        key={KeyHelper()}
                        selectedClassName={s.tabPanelSelected}
                    >{child}</TabPanel>
                )
            })}
            {/*{children.map((tabItem: React.ReactNode, indexPanel: number) => (
                <TabPanel
                    key={`tabPanel_${indexPanel}`}
                    selectedClassName={s.tabPanelSelected}
                >{tabItem}</TabPanel>
            ))}*/}
        </Tabs>
    </div>
)

export default TabsLayout;
