import tw from 'tailwind-styled-components'

export const Header = tw.div`
  flex items-center justify-between
  container mx-auto w-full
  xl:px-16 xl:py-10 xl:mb-0
  px-10 py-5 mb-10
`
export const LogoContainer = tw.div`
  flex
  xl:w-[116px] xl:h-[98px]
  w-[85px] h-[72px]
`
export const Menu = tw.a`
  cursor-pointer
  xl:pl-24
  pl-8
`
