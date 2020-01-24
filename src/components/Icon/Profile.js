import React from 'react'
import PropTypes from 'prop-types'

export const Profile = ({ color, height, width, ...rest }) => {
  const style = { ...rest.style, height, width }

  return (
    <svg
      {...rest}
      aria-hidden="true"
      fill="none"
      focusable="false"
      role="img"
      style={style}
      viewBox="0 0 55 55"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53 53V47C53 40.3726 47.2916 35 40.25 35H14.75C7.70837 35 2 40.3726 2 47V53"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        clipRule="evenodd"
        d="M27.5 29C34.9558 29 41 22.9558 41 15.5C41 8.04416 34.9558 2 27.5 2C20.0442 2 14 8.04416 14 15.5C14 22.9558 20.0442 29 27.5 29Z"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  )
}

Profile.defaultProps = {
  color: 'currentColor',
  height: '1.000rem',
  width: '1.000rem'
}

Profile.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}
