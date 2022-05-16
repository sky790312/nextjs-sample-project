import AppHead from 'components/appCommon/AppHead'
import AppHeader from 'components/appCommon/AppHeader'
import MainTopic from 'components/home/MainTopic'

const Home = () => {
  return (
    <div>
      <AppHead />
      <AppHeader />
      <MainTopic />

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <footer>footer</footer>
    </div>
  )
}

export default Home
