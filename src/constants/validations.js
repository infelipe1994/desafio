import {
  isValidCEP,
  isValidCPF,
  isValidPhone
} from '@brazilian-utils/brazilian-utils'

import { MASKED_CEP_LENGTH, MASKED_CPF_LENGTH } from '@/src/constants/lengths'
import { replaceNotNumber } from '@/src/utilities/replaceNotNumber'

const required = true

export const validations = {
  address: {
    cep: {
      maxLength: MASKED_CEP_LENGTH,
      required,
      validate: {
        input: cep => isValidCEP(replaceNotNumber(cep))
      }
    }
  },
  personalInfo: {
    cpf: {
      maxLength: MASKED_CPF_LENGTH,
      required,
      validate: {
        input: cpf => isValidCPF(replaceNotNumber(cpf))
      }
    },
    fullName: {
      required,
      validate: {
        input: fullName => !fullName.match(/[^A-Za-zÀ-ÖØ-öø-ÿ,\-\s]+/)
      }
    },
    phone: {
      required,
      validate: {
        input: phone => isValidPhone(replaceNotNumber(phone))
      }
    }
  }
}
