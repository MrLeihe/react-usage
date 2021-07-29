## Pagination

分页组件，基于 `antd` 组件 `Pagination` 的二次封装

### 何时使用

- 当加载/渲染所有数据将花费很多时间时
- 可切换页码浏览数据。

### API

```jsx | pure
import React from 'react'
import { Pagination } from 'fe-design'

this.state = {
  pageNum: 1,
  pageSize: 10,
  source: {
    total: 0,
    list: [],
  },
}

const paginationConfig = () => {
  const { pageNum, pageSize, source } = this.state
  return {
    pageNum,
    pageSize,
    source: source,
    onPaginationChange: (pageNum, pageSize) => {
      // do something
    },
  }
}

export default () => <Pagination {...paginationConfig()}></Pagination>
```
