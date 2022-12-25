import { SnippetsType } from '@chameleon/model';
import { Collapse } from 'antd';
import { capitalize } from 'lodash-es';
import React from 'react';
import { DragComponentItem } from '../DragItem';
import styles from './style.module.scss';
const { Panel } = Collapse;

export type ListViewProps = {
  dataSource: {
    name: string;
    list: SnippetsType[];
  }[];
};
export const ListView = (props: ListViewProps) => {
  const { dataSource } = props;
  const defaultActiveKey = dataSource.map((el) => el.name || '');
  if (!dataSource.length) {
    return null;
  }
  return (
    <div className={styles.ListBox}>
      <Collapse style={{ width: '100%' }} defaultActiveKey={defaultActiveKey}>
        {dataSource.map((el) => {
          const category = el.name || '';
          const contentView = (
            <div className={styles.collapsePanel}>
              {el.list.map((it) => {
                return (
                  <DragComponentItem
                    id={it.id!}
                    key={it.id!}
                    name={it.title}
                    icon={it.snapshot}
                    description={it.description || ''}
                  />
                );
              })}
            </div>
          );
          return (
            <Panel header={capitalize(category)} key={category}>
              {contentView}
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};