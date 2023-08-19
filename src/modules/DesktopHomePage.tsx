import { Button } from '@components/Button'
import { HeaderDesktop } from '@components/Header/HeaderDesktop'
import { Input } from '@components/Input'
import { ErrorMessageStyled } from '@components/Input/styled'
import { Typography } from '@components/Typography'
import { AsideHomePage } from '@components/Wrappers/Aside/styled'
import { SectionHome } from '@components/Wrappers/SectionHome/styled'
import Image from 'next/image'
import { useLogin } from '@hooks/useLogin'

export const DesktopHomePage = () => {
  const { states, events } = useLogin()
  const { errorMessages, inputData } = states
  const { handleBlur, handleChange, handleForm } = events
  return (
    <>
      <HeaderDesktop />
      <SectionHome>
        <Typography font="Inter" size="large" bold>
          Bem-vindo a Vittude!
        </Typography>
        <form onSubmit={handleForm}>
          <Input
            errorMessage={errorMessages.email}
            handleBlur={() => handleBlur('email')}
            handleChange={(event) => handleChange(event, 'email')}
            id="email"
            label="Login"
            name="email"
            placeholder="email@exemplo.com"
            value={inputData.email}
          />
          <Input
            errorMessage={errorMessages.senha}
            handleBlur={() => handleBlur('senha')}
            handleChange={(event) => handleChange(event, 'senha')}
            id="senha"
            label="Senha"
            name="senha"
            placeholder="Insira sua senha"
            type="password"
            value={inputData.senha}
          />

          <Button primary handleClick={() => {}} type="submit">
            Acessar
          </Button>
        </form>

        <Button disabled={false} handleClick={() => {}} primary={false}>
          Esqueci minha senha
        </Button>
      </SectionHome>
      <AsideHomePage>
        <Image src="/static/business.svg" alt="" width={620} height={370} />
      </AsideHomePage>
    </>
  )
}
