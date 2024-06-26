import React from 'react';
import { observer, useDesigner } from '@music163/tango-context';
import { SelectAction, CodeOutlined } from '@music163/tango-ui';

export const ViewSourceAction = observer(() => {
  const designer = useDesigner();
  return (
    <SelectAction
      tooltip="查看源码"
      onClick={() => {
        designer.setActiveView('code');
      }}
    >
      <CodeOutlined />
    </SelectAction>
  );
});
