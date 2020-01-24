import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react'

import { Carousel } from 'src/components/Carousel'
import { Plan } from 'src/components/Plan'
import { plans } from 'src/constants/plans'
import { renderWithThemeProvider } from 'src/utilities/renderWithThemeProvider'

afterEach(cleanup)

describe('Carousel', () => {
  it('should match snapshot', () => {
    const { asFragment } = renderWithThemeProvider(
      <Carousel>
        {plans.map(({ id, ...rest }) => (
          <Plan {...rest} key={id} />
        ))}
      </Carousel>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should call handler on slide change', () => {
    const handleChangeSlide = jest.fn()

    const { getAllByRole } = renderWithThemeProvider(
      <Carousel onChangeSlide={handleChangeSlide}>
        {plans.map(({ id, ...rest }) => (
          <Plan {...rest} key={id} />
        ))}
      </Carousel>
    )

    const [previousButton, nextButton] = getAllByRole('button')
    fireEvent.click(previousButton)
    fireEvent.click(nextButton)

    expect(handleChangeSlide).toHaveBeenCalledTimes(2)
  })
})
