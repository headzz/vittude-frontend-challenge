import { MainStyled } from '@components/Wrappers/Main/styled'

import { useTheme } from 'styled-components'
import { useEffect, useState } from 'react'
import { DesktopHomePage } from 'src/modules/DesktopHomePage'
import useResizeScreen from '@hooks/useResizeScreen'
import { MobileHomePage } from '@modules/MobileHomePage'

export default function Home() {
  const theme = useTheme()
  const { isMobile } = useResizeScreen()
  const [data, setData] = useState<boolean>(false)
  useEffect(() => {
    setTimeout(() => {
      setData(true), 300
    })
  }, [])
  return (
    <MainStyled>
      {data && (isMobile ? <MobileHomePage /> : <DesktopHomePage />)}
    </MainStyled>
  )
}
