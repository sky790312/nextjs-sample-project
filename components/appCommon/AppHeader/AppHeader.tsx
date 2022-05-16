import Link from 'next/link'
import Image from 'next/image'
import logo from 'public/logo.svg'
import * as S from './AppHeader.style'

function AppHeader() {
  return (
    <S.Header>
      <S.LogoContainer>
        <Image src={logo} />
      </S.LogoContainer>
      <div>
        <Link href="/about">
          <S.Menu>ABOUT</S.Menu>
        </Link>
        <Link href="/about">
          <S.Menu>TEAM</S.Menu>
        </Link>
        <Link href="/about">
          <S.Menu>CONTACT</S.Menu>
        </Link>
      </div>
    </S.Header>
  )
}

export default AppHeader
