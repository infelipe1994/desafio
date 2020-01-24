import React, { Children, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { layout } from 'styled-system'

import { ControlButtonGroup } from '@/src/components/Carousel/ControlButtonGroup'
import { SlideGroup } from '@/src/components/Carousel/Slide/Group'

const Component = styled.div`
  ${layout};

  position: relative;
`

export const Carousel = ({
  children,
  currentSlide,
  onChangeSlide,
  ...rest
}) => {
  const childrenCount = Children.count(children) - 1
  const [slide, setSlide] = useState(currentSlide)
  const handleNext = () => {
    const nextSlide = slide === childrenCount ? childrenCount : slide + 1

    onChangeSlide(nextSlide)
    setSlide(nextSlide)
  }
  const handlePrevious = () => {
    const nextSlide = slide === 0 ? 0 : slide - 1

    onChangeSlide(nextSlide)
    setSlide(nextSlide)
  }

  useEffect(
    () => document.getElementById(`${currentSlide}`).scrollIntoView(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <Component width={rest.width}>
      <SlideGroup {...rest}>{children}</SlideGroup>
      <ControlButtonGroup
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        slide={slide}
      />
    </Component>
  )
}

Carousel.defaultProps = {
  currentSlide: 0,
  onChangeSlide: () => {},
  width: '100%'
}

Carousel.propTypes = {
  children: PropTypes.node,
  currentSlide: PropTypes.number,
  onChangeSlide: PropTypes.func,
  width: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    ),
    PropTypes.number,
    PropTypes.string
  ])
}
