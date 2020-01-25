import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { withTranslation } from '@/i18n'
import { Icon } from '@/src/components/Icon'
import { theme } from '@/src/theme'

const ControlButton = styled.a`
  align-items: center;
  appearance: none;
  background: none;
  border: 0;
  display: flex;
  cursor: pointer;
  line-height: 0;
  outline: 0;
`

const Component = styled.div(
  ({ theme }) => `
    & ${ControlButton} {
      height: 100%;
      position: absolute;
      top: 0;
    }

    & ${ControlButton}:nth-child(1) {
      left: calc(-1.000rem - ${theme.space.x3});
      padding-right: ${theme.space.x3};
    }

    & ${ControlButton}:nth-child(2) {
      padding-left: ${theme.space.x3};
      right: calc(-1.000rem - ${theme.space.x3});
    }
  `
)

export const ControlButtonGroup = withTranslation('common')(
  ({ handleNext, handlePrevious, slide, t }) => (
    <Component aria-label={t('Controles de navegação.')} role="group">
      <ControlButton
        aria-label={t('Anterior.')}
        href={`#${slide}`}
        onClick={handlePrevious}
        role="button"
      >
        <Icon color={theme.colors.water} name="chevronLeft" />
      </ControlButton>
      <ControlButton
        aria-label={t('Próximo.')}
        href={`#${slide}`}
        onClick={handleNext}
        role="button"
      >
        <Icon color={theme.colors.water} name="chevronRight" />
      </ControlButton>
    </Component>
  )
)

ControlButtonGroup.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrevious: PropTypes.func.isRequired,
  slide: PropTypes.number.isRequired,
  t: PropTypes.func.isRequired
}
