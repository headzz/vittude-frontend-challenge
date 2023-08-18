import { css, keyframes, styled } from 'styled-components'
import { HamburguerMenuProps } from './interface'

export const MenuButton = styled.button<Pick<HamburguerMenuProps, 'open'>>`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 48px;
  justify-content: center;
  padding: 0;
  width: 48px;

  &:hover {
    filter: drop-shadow(0px 0px 1px rgba(35, 89, 128, 0.5));
    transition: all 0.2s ease-out;
  }
  ${({ open }) =>
    open &&
    `
    & span:first-child {
        transform: rotate(45deg) translate(3px, 3px);
    }

    & span:last-child {
        transform: rotate(-45deg) translate(3px, -3px);
    }
    `}
`

export const MenuLine = styled.span<Pick<HamburguerMenuProps, 'open'>>`
  background-color: #212529;
  border-radius: 2px;
  height: 3px;
  margin: 3px 0;
  padding: 0;
  width: 32px;

  ${({ open }) => open !== null && `transition: all 0.3s ease-in-out;`}
`
const OpenContent = keyframes`
  0%   {width:0;};
  25%  {width:17%;};
  50%  {width:35%};
  75%  {width:52%};
  100% {width:70%;};
`

const OpenMixin = css`
  animation: ${OpenContent} 0.3s linear;
  background-color: #fdfdfd;
  -webkit-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  height: calc(100vh - 72px);
  left: 0;
  padding: ${({ theme }) => theme.spacing.large};
  position: absolute;
  text-align: left;
  top: 72px;
  width: 80vw;

  @media (min-width: 800px) {
    height: calc(100vh - 88px);
    top: 88px;
  }
`

export const MobileNavContent = styled.nav<Pick<HamburguerMenuProps, 'open'>>`
  ${({ open }) => open && OpenMixin};
  z-index: 1;
`
