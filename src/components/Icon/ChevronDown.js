import React from 'react'
import PropTypes from 'prop-types'

export const ChevronDown = ({ color, height, width, ...rest }) => {
  const style = { ...rest.style, height, width }

  return (
    <svg
      {...rest}
      aria-hidden="true"
      focusable="false"
      role="img"
      style={style}
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
        fill={color}
      ></path>
    </svg>
  )
}

ChevronDown.defaultProps = {
  color: 'currentColor',
  height: '1.000rem',
  width: '1.000rem'
}

ChevronDown.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}
