import React from 'react';
import ReactDOM from 'react-dom/client';
import SmallColorUi from 'small-color-ui';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <p>调试服务：</p>
      <SmallColorUi callback={(url: string) => console.log(url)} text={'测试文本'} />
    </div>
  </React.StrictMode>,
);
