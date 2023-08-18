import Image from 'next/image'
import { HeaderLinkItems } from './HeaderLinkItems'
import { HeaderStyled, LogoLink } from './styled'

export const HeaderDesktop = () => {
  return (
    <HeaderStyled>
      <LogoLink
        href="https://www.vittude.com/"
        aria-label="redirecionamento para página institucional"
      >
        <Image
          src="static/vittude-logo.svg"
          alt="logo da empresa vittude"
          width={107}
          height={32}
        />
      </LogoLink>
      <HeaderLinkItems />
    </HeaderStyled>
  )
}
