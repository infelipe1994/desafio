export const fetchAddressByCep = async cep => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  const data = await response.json()

  return data
}
