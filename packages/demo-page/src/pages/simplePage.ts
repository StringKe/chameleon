import {
  CNodePropsTypeEnum,
  CPageDataType,
  InnerComponentNameEnum,
  CPropObjType,
  SlotRenderType,
} from '@chameleon/model';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const columns: CPropObjType[string] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: {
      type: CNodePropsTypeEnum.SLOT,
      renderType: SlotRenderType.FUNC,
      params: ['val', 'record', 'index'],
      value: {
        id: '5',
        componentName: 'Row',
        children: [
          {
            id: '6',
            componentName: 'Button',
            props: {
              mark: 'nameRender',
              children: {
                type: CNodePropsTypeEnum.EXPRESSION,
                value: '$$context.params.val',
              },
            },
          },
          {
            id: '7',
            componentName: 'Col',
            children: [
              {
                componentName: 'Button',
                props: {
                  mark: 'nameRender',
                },
                children: [
                  {
                    id: '8',
                    componentName: 'div',
                    children: ['I am div'],
                  },
                  {
                    id: '11111',
                    componentName: 'Input',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
  },
];

export const SamplePage: CPageDataType = {
  version: '1.0.0',
  pageName: 'BaseDemoPage',
  componentsMeta: [],
  componentsTree: {
    id: '1',
    componentName: InnerComponentNameEnum.PAGE,
    props: {
      a: 1,
    },
    children: [
      {
        id: 'Modal',
        componentName: 'Modal',
        props: {
          open: false,
        },
      },
      {
        id: '2',
        componentName: 'Button',
        props: {
          type: 'primary',
        },
        children: ['123'],
      },
    ],
  },
};