import styled from 'styled-components'

export const Separator = styled.hr(
  ({ theme }) => `
    border: 1px dashed ${theme.colors.water};
  `
)
