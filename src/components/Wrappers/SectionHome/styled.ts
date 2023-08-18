import { styled } from 'styled-components'

export const SectionHome = styled.section`
  grid-area: main;
  justify-self: center;
  padding: 0 16px;
  width: 100%;

  & p:first-child {
    max-width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.extraLarge};
  }

  fieldset {
    margin-bottom: 28px;
  }

  fieldset:last-of-type {
    margin-bottom: 32px;
  }

  & button {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 800px) {
    grid-area: main;
    height: 400px;
    justify-self: left;
    max-width: 590px;
    padding-left: 140px;
    width: calc(50vw - 140px);

    & p:first-child {
      max-width: 255px;
      margin-bottom: ${({ theme }) => theme.spacing.extraLarge};
    }
  }
`
