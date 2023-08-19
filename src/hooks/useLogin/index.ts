import { IFormData } from '@modules/interface'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useState } from 'react'
import { loginService } from 'src/services/login'
import * as yup from 'yup'

const formData = {
  email: '',
  senha: '',
}

export const useLogin = () => {
  const [errorMessages, setErrorMessages] = useState<IFormData>(formData)

  const [inputData, setInputData] = useState<IFormData>(formData)

  const router = useRouter()

  const schema = yup.object({
    email: yup
      .string()
      .required('Email é obrigatório.')
      .email('Email inválido.'),
    senha: yup.string().required('Senha é obrigatória.'),
  })

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    setInputData({ ...inputData, [field]: event.target.value })
  }

  const handleBlur = async (inputName: string) => {
    try {
      await schema.validateAt(inputName, inputData)
      setErrorMessages({ ...errorMessages, [inputName]: '' })
    } catch (error: any) {
      setErrorMessages({ ...errorMessages, [inputName]: error.message })
    }
  }

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await setTimeout(() => {}, 2000)
    try {
      await schema.validate(inputData)
      const login = await loginService(inputData)

      if (login instanceof Error) {
        return setErrorMessages({
          ...errorMessages,
          email: 'Usuário não pode ser encontrado',
          senha: '',
        })
      }
      router.push(`/logged?name=${login.name}`)
    } catch (error: any) {
      setErrorMessages({
        ...errorMessages,
        email: 'Usuário não pode ser encontrado',
        senha: '',
      })
    }
  }

  return {
    states: { inputData, errorMessages },
    events: { handleBlur, handleChange, handleForm },
  }
}
