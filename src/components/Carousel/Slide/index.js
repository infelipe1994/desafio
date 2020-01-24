import styled from 'styled-components'
import { layout } from 'styled-system'

export const Slide = styled.li`
  ${layout};

  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  margin-right: 2rem;
  scroll-snap-align: start;
  transform: scale(1);
  transform-origin: center center;
  transition: all 0.25s;
`
