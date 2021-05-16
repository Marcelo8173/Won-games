import * as S from './styles'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { SearchOutline as SearchIcon } from '@styled-icons/evaicons-outline/SearchOutline'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Logo from 'components/Logo'
import { useState } from 'react'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  userName?: string
}

const Menu = ({ userName }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon aria-label="Open menu" onClick={() => setIsOpen(true)} />
        </S.IconWrapper>
      </MediaMatch>
      <S.LogoWrapper>
        <Logo hiddenOnMobile aria-label="Logo won games" />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="search" />
        </S.IconWrapper>

        <S.IconWrapper>
          <ShoppingCartIcon aria-label="open shopping cart" />
        </S.IconWrapper>
        {!userName && (
          <MediaMatch greaterThan="medium">
            <Button>Sing in</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="close menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
          {!!userName && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>
        {!userName && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <S.CreateAccount href="/">Sing up</S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
