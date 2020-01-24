import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Component = styled.button(
  ({ isFullWidth, isOutlined, theme }) => `
    appearance: none;
    align-items: center;
    background-color: ${isOutlined ? 'transparent' : theme.colors.green};
    border: 1px solid ${theme.colors.green};
    border-radius: 100rem;
    box-shadow: none;
    color: ${isOutlined ? theme.colors.green : theme.colors.smoke};
    cursor: pointer;
    display: inline-flex;
    font-size: ${theme.fontSizes.x1};
    font-weight: ${theme.fontWeights.x3};
    height: 2.5rem;
    justify-content: center;
    outline: none;
    padding: 0 ${theme.space.x4};
    position: relative;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.250s;
    user-select: none;
    vertical-align: top;
    white-space: nowrap;

    &:hover, &:focus {
      background-color: ${theme.colors.green};
      border-color: ${theme.colors.green};
      color: ${theme.colors.smoke};
    }
    
    &:active {
      background-color: ${theme.colors.ocean};
      border-color: ${theme.colors.ocean};
      color: ${theme.colors.smoke};
    }

    &[disabled]{
      background-color: ${isOutlined ? 'transparent' : theme.colors.stone};
      border-color: ${theme.colors.stone};
      color: ${isOutlined ? theme.colors.stone : theme.colors.smoke};
      cursor: not-allowed;
    }

    ${isFullWidth ? 'display: flex; width: 100%' : ''};
  `
)

export const Button = p => <Component {...p} />

Button.propTypes = {
  isFullWidth: PropTypes.bool,
  isOutlined: PropTypes.bool
}
