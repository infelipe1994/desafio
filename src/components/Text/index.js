import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, typography } from 'styled-system'

export const Text = styled.p`
  ${color};
  ${typography};

  ${({ textTransform }) =>
    textTransform ? `text-transform: ${textTransform}` : ''};
`

Text.defaulProps = {
  fontSize: 'x3',
  lineHeight: 'x3'
}

Text.propTypes = {
  textTransform: PropTypes.string
}
