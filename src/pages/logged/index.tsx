import { LoggedMainStyled } from '@components/Wrappers/Main/styled'
import useResizeScreen from '@hooks/useResizeScreen'
import { DesktopLoggedPage } from '@modules/DesktopLoggedPage'
import { MobileLoggedPage } from '@modules/MobileLoggedPage'
import { useRouter } from 'next/router'

export default function Logged() {
  const router = useRouter()
  const query = router.query
  const message = `Olá ${query.name}, você realizou login`

  const { isMobile } = useResizeScreen()
  return (
    <LoggedMainStyled>
      {isMobile ? (
        <MobileLoggedPage message={message} />
      ) : (
        <DesktopLoggedPage message={message} />
      )}
    </LoggedMainStyled>
  )
}
