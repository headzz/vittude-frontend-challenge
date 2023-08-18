import { useEffect, useState } from 'react'
import { MenuButton, MenuLine, MobileNavContent } from './styled'
import { HamburguerMenuProps } from './interface'

export const HamburguerMenu: React.FC<Omit<HamburguerMenuProps, 'open'>> = ({
  children,
}) => {
  const [isOpen, setOpen] = useState<boolean | null>(null)

  useEffect(() => {
    setOpen(false)
  }, [])
  return (
    <>
      <MenuButton open={isOpen} onClick={() => setOpen((value) => !value)}>
        <MenuLine open={isOpen} />
        <MenuLine open={isOpen} />
      </MenuButton>
      {isOpen && <MobileNavContent open={isOpen}>{children}</MobileNavContent>}
    </>
  )
}
