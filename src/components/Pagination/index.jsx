import React from 'react'
import { Pagination, Row } from 'antd'
import PropTypes from 'prop-types'

/***
 * 分页组件
 */
class PaginationWrapper extends React.Component {
  paginationConfig = () => {
    const {
      className,
      style,
      pageNum,
      pageSize,
      source = {},
      justify,
      onPaginationChange = () => {},
      ...restProps
    } = this.props

    return {
      total: source.total,
      current: pageNum,
      pageSize,
      showQuickJumper: true,
      showSizeChanger: true,
      ...restProps,
      onChange: (current, pageSize) => {
        onPaginationChange(current, pageSize)
      },
      showTotal(total) {
        return `共有${total}条`
      },
      onShowSizeChange: (current, pageSize) => {
        onPaginationChange(1, pageSize)
      },
    }
  }
  render() {
    console.log('props', this.props)
    const { className, style, justify, source } = this.props
    const isShowPagination = source.list && source.list.length
    return (
      <React.Fragment>
        {isShowPagination && (
          <Row justify={justify}>
            <Pagination
              style={style}
              className={className}
              {...this.paginationConfig()}
            />
          </Row>
        )}
      </React.Fragment>
    )
  }
}

// const PaginationWrapper = props => {
// const {
//   className,
//   style,
//   pageNum,
//   pageSize,
//   source = {},
//   justify,
//   onPaginationChange = () => {},
//   ...restProps
// } = props

//   const paginationConfig = () => {
//     return {
//       total: source.total,
//       current: pageNum,
//       pageSize,
//       showQuickJumper: true,
//       showSizeChanger: true,
//       ...restProps,
//       onChange: (current, pageSize) => {
//         onPaginationChange(current, pageSize)
//       },
//       showTotal(total) {
//         return `共有${total}条`
//       },
//       onShowSizeChange: (current, pageSize) => {
//         onPaginationChange(1, pageSize)
//       },
//     }
//   }

//   const isShowPagination = source.list && source.list.length

//   return (
//     <React.Fragment>
//       {isShowPagination && (
//         <Row justify={justify}>
//           <Pagination style={style} className={className} {...paginationConfig()} />
//         </Row>
//       )}
//     </React.Fragment>
//   )
// }

PaginationWrapper.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  pageNum: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  source: PropTypes.object.isRequired,
  onPaginationChange: PropTypes.func.isRequired,
}

PaginationWrapper.defaultProps = {
  justify: 'end',
}

export default PaginationWrapper
