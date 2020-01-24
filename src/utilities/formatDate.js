import { MASKED_DATE_LENGTH } from '@/src/constants/lengths'
import { replaceNotNumber } from '@/src/utilities/replaceNotNumber'

export const formatDate = date =>
  replaceNotNumber(date)
    .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')
    .substr(0, MASKED_DATE_LENGTH)
