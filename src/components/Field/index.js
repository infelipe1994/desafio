import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from '@/src/theme'
import { getColor } from '@/src/utilities/getColor'
import { isDateType } from '@/src/utilities/isDateType'
import { placeholder } from '@/src/utilities/placeholder'
import { uuid } from '@/src/utilities/uuid'

const Input = styled.input(
  ({ color }) => `
    appearance: none;
    background-color: transparent;
    border: 0;
    color: ${color};
    font-size: ${theme.fontSizes.x3};
    height: ${theme.lineHeights.x3};
    line-height: ${theme.lineHeights.x3};
    outline: 0;
    transition: all 0.250s;
    width: 100%;

    &[disabled] {
      cursor: not-allowed;
    }

    ${placeholder(color)};
  `
)

const Container = styled.div(
  ({ borderColor, error }) => `
    border-bottom: 1px ${error ? 'dashed' : 'solid'} ${borderColor};
    padding-bottom: ${theme.space.x1};
    position: relative;
    transition: all 0.250s;
    width: 100%;

    & input:not(:placeholder-shown) + label {
      opacity: 1;
      transform: translateY(-${theme.lineHeights.x3});
    }
  `
)

const Label = styled.label(
  ({ color, disabled }) => `
    bottom: ${theme.space.x1};
    color: ${color};
    font-size: ${theme.fontSizes.x3};
    left: 0;
    line-height: ${theme.lineHeights.x3};
    opacity: 0;
    position: absolute;
    transition: all 0.250s;

    ${disabled ? 'cursor: not-allowed' : ''};
  `
)

export const Field = ({ disabled, error, inputRef, label, type, ...rest }) => {
  const colors = getColor(disabled, error, theme)
  const id = useRef(rest.id || uuid())
  const isDate = isDateType(type)
  const stateProps = { ...colors, disabled, error }

  return (
    <Container {...stateProps}>
      <Input
        {...rest}
        {...stateProps}
        id={id.current}
        placeholder={label}
        ref={inputRef}
        type={isDate ? 'text' : type}
      />
      <Label {...stateProps} htmlFor={id.current}>
        {label}
      </Label>
    </Container>
  )
}

Field.defaultProps = {
  type: 'text'
}

Field.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  inputRef: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.string
}
