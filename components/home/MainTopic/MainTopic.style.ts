import tw from 'tailwind-styled-components'
import Image from 'next/image'

export const MainTopic = tw.div`
  container mx-auto
`
export const TitleContainer = tw.div`
  mx-4 lg:mx-0
`
export const Title = tw.h1`
  xl:text-5xl text-3xl
  font-bold
  mb-5
  xl:ml-40
`
export const Title1 = tw.b`
  text-orange-600
`
export const Title2 = tw.b`
  text-blue-900
`
export const Desc = tw.p`
  xl:text-xl text-base
  xl:w-[670px]
  mb-4
  xl:ml-40
`
export const TopicContainer = tw.div`
  xl:flex flex-wrap justify-center
  mx-4 lg:mx-0
`
export const Topic1 = tw.div`
  lg:flex
  xl:w-[700px]
  rounded-3xl shadow mb-6
  bg-cyan-400
  xl:ml-80
`
export const Topic2 = tw.div`
  lg:flex
  xl:w-[700px]
  rounded-3xl shadow mb-6
  bg-blue-500
  xl:mr-80
`
export const Topic3 = tw.div`
  lg:flex
  xl:w-[700px]
  rounded-3xl shadow mb-6
  bg-blue-900
  xl:ml-80
`
export const TopicImgContainer = tw.div`
  w-full xl:w-[320px]
`
export const TopicImg = tw(Image)`
  rounded-tl-3xl
  rounded-tr-3xl
  xl:rounded-bl-3xl
  xl:rounded-tr-none xl:rounded-br-none
`
export const TopicInfo = tw.div`
  xl:w-[380px]
  text-white
  p-4
`
export const TopicTitle = tw.div`
  text-xl
  pb-2
`
export const TopicDesc = tw.div`
  text-xs
  pl-1
`
