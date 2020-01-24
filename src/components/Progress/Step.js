import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Step = styled.li(
  ({ isCurrent, theme }) => `
    background-color: ${isCurrent ? theme.colors.green : theme.colors.water};
    display: block;
    height: 0.250rem;
    width: 0.250rem;
  `
)

Step.propTypes = {
  isCurrent: PropTypes.bool.isRequired
}
