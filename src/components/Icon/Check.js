import React from 'react'
import PropTypes from 'prop-types'

export const Check = ({ color, height, width, ...rest }) => {
  const style = { ...rest.style, height, width }

  return (
    <svg
      {...rest}
      aria-hidden="true"
      fill="none"
      focusable="false"
      role="img"
      style={style}
      viewBox="0 0 113 113"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.5 112C87.1518 112 112 87.1518 112 56.5C112 25.8482 87.1518 1 56.5 1C25.8482 1 1 25.8482 1 56.5C1 87.1518 25.8482 112 56.5 112Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M86 34L50.3077 74L28 56.2222"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

Check.defaultProps = {
  color: 'currentColor',
  height: '1.000rem',
  width: '1.000rem'
}

Check.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}
