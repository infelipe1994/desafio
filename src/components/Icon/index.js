import React from 'react'
import PropTypes from 'prop-types'

import { ArrowLeft } from '@/src/components/Icon/ArrowLeft'
import { BioRitmo } from '@/src/components/Icon/BioRitmo'
import { Check } from '@/src/components/Icon/Check'
import { ChevronDown } from '@/src/components/Icon/ChevronDown'
import { ChevronLeft } from '@/src/components/Icon/ChevronLeft'
import { ChevronRight } from '@/src/components/Icon/ChevronRight'
import { NotFound } from '@/src/components/Icon/NotFound'
import { PlusSign } from '@/src/components/Icon/PlusSign'
import { Profile } from '@/src/components/Icon/Profile'
import { SmartFit } from '@/src/components/Icon/SmartFit'
import { theme } from '@/src/theme'

export const Icon = ({ name, ...rest }) => {
  switch (name) {
    case 'arrowLeft':
      return <ArrowLeft {...rest} />
    case 'bioRitmo':
      return <BioRitmo {...rest} />
    case 'check':
      return <Check {...rest} />
    case 'chevronDown':
      return <ChevronDown {...rest} />
    case 'chevronLeft':
      return <ChevronLeft {...rest} />
    case 'chevronRight':
      return <ChevronRight {...rest} />
    case 'plusSign':
      return <PlusSign {...rest} />
    case 'profile':
      return <Profile {...rest} />
    case 'smartFit':
      return <SmartFit {...rest} />
    default:
      return <NotFound {...rest} color={theme.colors.blood} />
  }
}

Icon.defaultProps = {
  color: 'currentColor',
  height: '1.000rem',
  width: '1.000rem'
}

Icon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string
}
