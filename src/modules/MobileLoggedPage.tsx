import { MobileHeader } from '@components/Header/HeaderMobile'
import { ILoggedPage } from './interface'

export const MobileLoggedPage: React.FC<ILoggedPage> = ({ message }) => {
  return (
    <>
      <MobileHeader />
      <p>{message}</p>
    </>
  )
}
