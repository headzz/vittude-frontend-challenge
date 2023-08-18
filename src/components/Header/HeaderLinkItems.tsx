import Link from 'next/link'
import { ListHeaderOptions } from './styled'
import { HomeIcon } from '@components/Icon/Home'
import { useTheme } from 'styled-components'
import useResizeScreen from '@hooks/useResizeScreen'

export const HeaderLinkItems = () => {
  const theme = useTheme()
  const { isMobile } = useResizeScreen()
  const svgColor = isMobile ? theme.colors.dark[200] : theme.colors.light[100]
  return (
    <ListHeaderOptions>
      <li>
        <Link href="https://www.vittude.com/">Site Institucional</Link>
      </li>
      <li>
        <Link href="https://www.vittude.com/blog/">Blog</Link>
      </li>
      <li>
        <Link href="/">
          <HomeIcon fill={svgColor} />
        </Link>
      </li>
    </ListHeaderOptions>
  )
}
