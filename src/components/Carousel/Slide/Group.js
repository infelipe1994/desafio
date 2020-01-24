import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { layout } from 'styled-system'

import { Slide } from '@/src/components/Carousel/Slide'

const Component = styled.ul`
  ${layout};

  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`

export const SlideGroup = ({ children, width, ...rest }) => (
  <Component {...rest} role="region" tabIndex="0">
    {Children.map(children, (child, i) => (
      <Slide id={i} width={width}>
        {child}
      </Slide>
    ))}
  </Component>
)

SlideGroup.defaultProps = {
  width: '100%'
}

SlideGroup.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    ),
    PropTypes.number,
    PropTypes.string
  ]).isRequired
}
