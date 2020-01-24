import { MASKED_CPF_LENGTH } from '@/src/constants/lengths'
import { replaceNotNumber } from '@/src/utilities/replaceNotNumber'

export const formatCpf = cpf =>
  replaceNotNumber(cpf)
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    .substr(0, MASKED_CPF_LENGTH)
