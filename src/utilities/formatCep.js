import { MASKED_CEP_LENGTH } from '@/src/constants/lengths'
import { replaceNotNumber } from '@/src/utilities/replaceNotNumber'

export const formatCep = cep =>
  replaceNotNumber(cep)
    .replace(/(\d{5})(\d{3})/, '$1-$2')
    .substr(0, MASKED_CEP_LENGTH)
