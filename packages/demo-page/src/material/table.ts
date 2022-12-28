import { CMaterialType } from '@chameleon/model';

export const TableMeta: CMaterialType = {
  title: 'Table',
  componentName: 'Table',
  npm: {
    package: '@chameleon/mock-material',
    exportName: 'Table',
    version: '1.0.0',
  },
  icon: 'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_button.png',
  props: [
    {
      name: 'style',
      title: '样式',
      valueType: 'object',
      setters: ['JSONSetter'],
    },
  ],
  snippets: [
    {
      title: '表格',
      snapshot:
        'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_button.png',
      category: 'HTML 元素',
      schema: {
        props: {
          data: [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
          ],
          columns: [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },
          ],
        },
        children: ['I am a Div Table'],
      },
    },
  ],
};