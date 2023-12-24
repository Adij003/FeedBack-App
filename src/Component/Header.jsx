import React from 'react'

import PropTypes from 'prop-types'

function Header({text}) {
  return (
    <div style={{margin: '20px', display: 'flex', justifyContent: 'center'}}
    >{text}</div>
  )
}



Header.defaultProps = {
    text: 'Feedback UI'
}
export default Header