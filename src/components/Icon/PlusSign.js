import React from 'react'
import PropTypes from 'prop-types'

export const PlusSign = ({ color, height, width, ...rest }) => {
  const style = { ...rest.style, height, width }

  return (
    <svg
      {...rest}
      aria-hidden="true"
      fill="none"
      focusable="false"
      role="img"
      style={style}
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ mixBlendMode: 'multiply' }} opacity="0.3">
        <path
          d="M4.02512 9.308H5.96912V5.996H9.13712V4.124H5.96912V0.811999H4.02512V4.124H0.857117V5.996H4.02512V9.308Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

PlusSign.defaultProps = {
  color: 'currentColor',
  height: '1.000rem',
  width: '1.000rem'
}

PlusSign.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}
