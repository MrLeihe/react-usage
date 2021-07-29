import React from 'react'

export default function Cat(props) {
  const { x, y } = props.mouse
  return <div>{`当前坐标为：(${x}, ${y})`}</div>
}
