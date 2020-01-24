import React from 'react'
import PropTypes from 'prop-types'

export const ArrowLeft = ({ color, height, width, ...rest }) => {
  const style = { ...rest.style, height, width }

  return (
    <svg
      {...rest}
      aria-hidden="true"
      fill="none"
      focusable="false"
      role="img"
      style={style}
      viewBox="0 0 28 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.19043 7.99999H27"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M9.14286 1L2 8L9.14286 15"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

ArrowLeft.defaultProps = {
  color: 'currentColor',
  height: '1.000rem',
  width: '1.000rem'
}

ArrowLeft.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}
