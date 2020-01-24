import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from '@/src/components/Icon'
import { theme } from '@/src/theme'
import { getColor } from '@/src/utilities/getColor'
import { placeholder } from '@/src/utilities/placeholder'
import { uuid } from '@/src/utilities/uuid'

const Chevron = styled(Icon)`
  bottom: ${theme.space.x1};
  pointer-events: none;
  position: absolute;
  right: 0;
  transition: all 0.25s;
`

const Input = styled.select(
  ({ color }) => `
    appearance: none;
    background-color: transparent;
    border: 0;
    color: ${color};
    font-size: ${theme.fontSizes.x3};
    line-height: ${theme.lineHeights.x3};
    outline: 0;
    transition: all 0.250s;
    width: 100%;

    &[disabled] {
      cursor: not-allowed;
    }

    & option:checked {
      display: none;
    }

    ${placeholder(color)};
  `
)

const Container = styled.div(
  ({ borderColor, error, hasSelected }) => `
    border-bottom: 1px ${error ? 'dashed' : 'solid'} ${borderColor};
    display: flex;
    padding-bottom: ${theme.space.x1};
    position: relative;
    transition: all 0.250s;
    width: 100%;

    & ${hasSelected ? '' : 'select:active +'} label {
      opacity: 1;
      transform: translateY(-${theme.lineHeights.x3});
    }

    & select:active ~ svg {
      transform: rotate(180deg);
    }
  `
)

const Label = styled.label(
  ({ disabled, color, hasSelected }) => `
    bottom: ${theme.space.x1};
    color: ${color};
    font-size: ${theme.fontSizes.x3};
    left: 0;
    line-height: ${theme.lineHeights.x3};
    opacity: 1;
    position: absolute;
    transition: all 0.250s;

    ${disabled ? 'cursor: not-allowed' : ''};
    ${hasSelected ? '' : 'pointer-events: none'};
  `
)

export const Select = ({ disabled, error, inputRef, label, ...rest }) => {
  const colors = getColor(disabled, error)
  const hasSelected = !!(rest.defaultValue || rest.value)
  const id = useRef(rest.id || uuid())
  const stateProps = { ...colors, disabled, error, hasSelected }

  return (
    <Container {...stateProps}>
      <Input
        {...rest}
        {...stateProps}
        id={id.current}
        placeholder={label}
        ref={inputRef}
      />
      <Label {...stateProps} htmlFor={id.current}>
        {label}
      </Label>
      <Chevron color={colors.color} name="chevronDown" />
    </Container>
  )
}

Select.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  inputRef: PropTypes.func,
  label: PropTypes.string.isRequired
}
