import { IFormData } from '@modules/interface'

interface ILoginResponse {
  message: string
  name: string
}

export const loginService = async (data: IFormData) => {
  const body = { email: data.email, password: data.senha }

  const local =
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_API_URL
      : ''

  const response: ILoginResponse | Error = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
    {
      method: 'POST',
      body: JSON.stringify(body),
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json()
      }

      throw new Error('Invalid user')
    })
    .then((responseJson) => responseJson)
    .catch((error) => error)

  return response
}
