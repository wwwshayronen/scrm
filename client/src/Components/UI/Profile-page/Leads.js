import React, {useState } from 'react';
import { Card } from 'antd';
import NewLeads from './NewLeads';
  const tabListNoTitle = [
    {
      key: 'new_leads',
      tab: 'new leads',
    },
    {
      key: 'app',
      tab: 'app',
    },
    {
      key: 'project',
      tab: 'project',
    },
  ];
  
  const contentListNoTitle = {
    new_leads: <NewLeads />,
    app: <p>app content</p>,
    project: <p>project content</p>,
  };

export default function Leads() {
const [activeTabKey1, setActiveTabKey1] = useState('tab1');
  const [activeTabKey2, setActiveTabKey2] = useState('app');

  const onTab1Change = key => {
    setActiveTabKey1(key);
  };
  const onTab2Change = key => {
    setActiveTabKey2(key);
  };
  return (
    <>
      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={<a href="#">More</a>}
        onTabChange={key => {
          onTab2Change(key);
        }}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  );
}
