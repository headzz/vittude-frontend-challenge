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
    & header {
      background-color: #ffffff;
      -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    }

    & a {
      color: #000;
    }

    & a svg {
      filter: drop-shadow(0px 0px 2px #221e1e);
    }

    background: ${({ theme }) =>
      `linear-gradient(to top, ${theme.colors.light[100]}, ${theme.colors.light[200]});`};
  }
`
