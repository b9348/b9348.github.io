import React from 'react'
import { useRef, forwardRef, useImperativeHandle } from 'react'

const COLOR = {
  yellow: '#feca57',
  mint: '#25c2a0',
  blue: '#1877F2',
  red: '#ff5252',
}

function Highlight({ children, color, colorName }, ref) {
  if (colorName) {
    color = COLOR[colorName]
  }
  // 使用useImperativeHandle钩子函数，当组件销毁时将ref对象传递给父组件，以供父组件使用
  useImperativeHandle(
    ref, // ref对象用于保存对组件的引用
    () => {
      return {
        colorName, // 颜色名
        color, // 颜色值
      }
    }, // 返回一个对象，包含颜色名和颜色值
    [color, colorName], // 当color和colorName发生变化时，重新计算并返回新的对象
  )

  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  )
}

export default forwardRef(Highlight)
