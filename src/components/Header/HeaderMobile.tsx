import { HamburguerMenu } from '@components/HamburgerMenu'
import { HeaderStyled } from './styled'
import { HeaderLinkItems } from './HeaderLinkItems'
import Image from 'next/image'

export const MobileHeader = () => {
  return (
    <HeaderStyled>
      <HamburguerMenu>
        <HeaderLinkItems />
      </HamburguerMenu>
      <Image
        src="/static/vittude-logo.svg"
        alt="vittude logo"
        width={107}
        height={32}
      />
    </HeaderStyled>
  )
}
