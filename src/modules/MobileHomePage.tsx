import { Button } from '@components/Button'
import { MobileHeader } from '@components/Header/HeaderMobile'
import { Input } from '@components/Input'
import { ErrorMessageStyled } from '@components/Input/styled'
import { Typography } from '@components/Typography'
import { SectionHome } from '@components/Wrappers/SectionHome/styled'
import { useLogin } from '@hooks/useLogin'

export const MobileHomePage = () => {
  const { states, events } = useLogin()
  const { apiError, errorMessages, inputData } = states
  const { handleBlur, handleChange, handleForm } = events
  return (
    <>
      <MobileHeader />
      <SectionHome>
        <Typography font="Inter" size="large">
          Bem-vindo a Vittude!
        </Typography>
        <ErrorMessageStyled>{apiError}</ErrorMessageStyled>
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
    </>
  )
}
