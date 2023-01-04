import React from 'react';
import { SmallColorUiProps } from './types';
import './assets/less/global.less';
import styles from './app.module.less';

const SmallColorUi = React.forwardRef<HTMLDivElement, SmallColorUiProps>((props, ref) => {
  const { text = '', callback = () => void 0 } = props;

  return (
    <div
      ref={ref}
      className={styles.appBody}
      onClick={() => {
        callback(`输入：${text}`);
      }}
    >
      {text}
    </div>
  );
});

export default SmallColorUi;
