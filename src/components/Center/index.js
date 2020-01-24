import PropTypes from 'prop-types'
import styled from 'styled-components'
import { layout, space } from 'styled-system'

export const Center = styled.div`
  ${layout};
  ${space};

  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;

  ${({ alsoCenterChildren }) =>
    alsoCenterChildren
      ? 'align-items: center; display: flex; flex-direction: column'
      : ''};

  ${({ alsoCenterText }) => (alsoCenterText ? 'text-align: center' : '')};
`

Center.defaultProps = {
  maxWidth: '40em'
}

Center.propTypes = {
  alsoCenterChildren: PropTypes.bool,
  alsoCenterText: PropTypes.bool,
  maxWidth: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    ),
    PropTypes.number,
    PropTypes.string
  ])
}
