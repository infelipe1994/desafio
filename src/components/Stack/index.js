import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { flexbox, space } from 'styled-system'

const Component = styled.div`
  ${flexbox};

  display: flex;

  & > * {
    margin-bottom: 0;
    margin-top: 0;
  }

  & > * + * {
    ${space};
  }
`

export const Stack = ({ direction, spaceBetween, ...rest }) => (
  <Component
    {...(['row', 'row-reverse'].includes(direction)
      ? { alignItems: 'center', marginLeft: spaceBetween }
      : { marginTop: spaceBetween })}
    {...rest}
    flexDirection={direction}
  />
)

Stack.defaultProps = {
  direction: 'column',
  justifyContent: 'flex-start',
  spaceBetween: 'x2'
}

Stack.propTypes = {
  direction: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  spaceBetween: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    ),
    PropTypes.number,
    PropTypes.string
  ])
}
