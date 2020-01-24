import React from 'react'
import PropTypes from 'prop-types'

export const ChevronLeft = ({ color, height, width, ...rest }) => {
  const style = { ...rest.style, height, width }

  return (
    <svg
      {...rest}
      aria-hidden="true"
      focusable="false"
      role="img"
      style={style}
      viewBox="0 0 320 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
        fill={color}
      ></path>
    </svg>
  )
}

ChevronLeft.defaultProps = {
  color: 'currentColor',
  height: '1.000rem',
  width: '1.000rem'
}

ChevronLeft.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}
