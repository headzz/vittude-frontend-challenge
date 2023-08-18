import { HeaderDesktop } from '@components/Header/HeaderDesktop'
import { ILoggedPage } from './interface'

export const DesktopLoggedPage: React.FC<ILoggedPage> = ({ message }) => {
  return (
    <>
      <HeaderDesktop />
      <p>{message}</p>
    </>
  )
}
