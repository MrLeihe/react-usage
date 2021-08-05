import React, { useState, useMemo } from 'react'
import _ from 'lodash'

function Pure() {
  const [config, setConfig] = useState({ color: 'blue' })

  const handleColor = () => {
    setConfig({ color: 'red' })
    console.log('color====', config.color)
  }

  console.log('Pure render...', config.color)

  // 更细粒度的控制
  const wrapper = useMemo(() => {
    console.log('wrapper render...')
    return (
      <>
        <div style={{ color: config.color }}>{config.color}</div>
        <button onClick={handleColor}>改变颜色</button>
      </>
    )
  }, [config.color])

  return wrapper
}

// class Pure extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       config: { color: 'blue' },
//     }
//   }

//   handleColor = () => {
//     this.setState({
//       config: { color: 'red' },
//     })
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     if (_.isEqual(this.state.config, nextState.config)) {
//       return false
//     }
//     return true
//   }

//   render() {
//     console.log('Pure render...')
//     const { config } = this.state
//     return (
//       <>
//         <div style={{ color: config.color }}>{config.color}</div>
//         <button onClick={this.handleColor}>改变颜色</button>
//       </>
//     )
//   }
// }

export default Pure
