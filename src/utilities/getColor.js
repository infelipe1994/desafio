import { theme } from '@/src/theme'

const black = theme.colors.black
const blood = theme.colors.blood
const water = theme.colors.water

export const getColor = (disabled, error) => {
  if (disabled) {
    return { borderColor: water, color: water }
  } else if (error) {
    return { borderColor: blood, color: blood }
  } else {
    return { borderColor: black, color: black }
  }
}
