import React from 'react';
import { SmallColorUiProps } from './types';
import './assets/less/global.less';
import styles from './app.module.less';
import utils from '@small-color-ui/utils';

const SmallColorUi = React.forwardRef<HTMLDivElement, SmallColorUiProps>((props, ref) => {
  const { text = '', callback = () => void 0 } = props;

  return (
    <div ref={ref} className={styles.appBody}>
      {utils.COLOR.map((color, index) => {
        return (
          <div
            key={index}
            className={styles.itemBlock}
            style={{ backgroundColor: color, boxShadow: `0 0 5px 0 ${color}` }}
            onClick={() => {
              callback(`输入：${text}`);
            }}
          >
            色块：{color}
          </div>
        );
      })}
    </div>
  );
});

export default SmallColorUi;
