import React from 'react'
import ThemeButton from './ThemeButton'
import ThemeContext from '../context'

// const Toolbar = React.forwardRef((props, ref) => {
//   return (
//     <div ref={ref}>
//       <ThemeContext.Provider
//         value={{
//           color: 'white',
//           backgroundColor: 'red',
//         }}
//       >
//         <ThemeButton />
//       </ThemeContext.Provider>
//     </div>
//   )
// })

const Toolbar = (props) => {
  return (
    <div>
      <ThemeContext.Provider
        value={{
          color: 'white',
          backgroundColor: 'red',
        }}
      >
        <ThemeButton ref={props.toolRef} />
      </ThemeContext.Provider>
    </div>
  )
}

export default Toolbar
