import Link from 'next/link'
import { styled } from 'styled-components'

export const HeaderStyled = styled.header`
  align-items: center;
  background-color: transparent;
  display: flex;
  grid-area: header;
  height: 72px;
  justify-content: center;
  position: relative;

  @media (min-width: 800px) {
    height: 88px;
    justify-content: space-between;
    padding: 0 140px;
  }
`

export const ListHeaderOptions = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  justify-content: space-between;
  list-style-type: none;
  padding: ${(props) => props.theme.spacing.small} 0;

  li {
    margin-bottom: ${(props) => props.theme.spacing.large};
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;
    li {
      color: ${({ theme }) => theme.colors.light[100]};
      margin-bottom: 0;
      margin-right: 40px;
    }

    & li:last-child {
      margin-right: 0px;
    }
  }
`
export const LogoLink = styled(Link)`
  max-width: 108px;
  max-height: 32px;
`
