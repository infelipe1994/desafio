import { MASKED_PHONE_LENGTH } from '@/src/constants/lengths'
import { replaceNotNumber } from '@/src/utilities/replaceNotNumber'

export const formatPhone = phone =>
  replaceNotNumber(phone)
    .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2 - $3')
    .substr(0, MASKED_PHONE_LENGTH)
