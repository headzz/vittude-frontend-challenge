import { styled } from 'styled-components'

export const MainStyled = styled.main`
  display: grid;
  height: 100%;
  grid-template-areas: 'header' 'main';
  grid-template-rows: 72px 1fr;
  grid-template-columns: 1fr 1fr;

  & header {
    width: 100vw;
  }
  & header button {
    position: absolute;
    left: 16px;
  }

  @media screen and (min-width: 800px) {
    background: ${({ theme }) =>
      `linear-gradient(to right, ${theme.colors.light[100]} 50%, ${theme.colors.primary} 50%);`};
    grid-template-areas: 'header header' 'main aside';
    grid-template-rows: 88px 1fr;
    grid-template-columns: 1fr;
  }
`

export const LoggedMainStyled = styled.main`
  display: grid;
  height: 100%;
  grid-template-areas: 'header' 'main';
  grid-template-rows: 72px 1fr;
  grid-template-columns: 1fr;

  & header {
    width: 100vw;
  }

  & header button {
    position: absolute;
    left: 16px;
  }
  p {
    text-align: center;
  }
  @media screen and (min-width: 800px) {
    background: ${({ theme }) =>
      `linear-gradient(to bottom, #756767 80px, ${theme.colors.light[100]} 80px);`};
  }
`
