
import Footer from './components/footer'
import Join from './components/join'
import MAbout from './components/mainAbout'
import MPublication from './components/mainPublication'
import MainNews from './components/mainnews'
import MupcomingTraining from './components/maintraining'
import MEvents from './components/mevents'
import MVideos from './components/mvideos'
import NavBar from './components/navigation'
import SlideShow from './components/slideshow'
export default function Home() {
  return (
    <main className=' w-full overflow-hidden'>
      <NavBar/>
      <SlideShow/>
      <hr className='mx-[6%]'/>   
      <MAbout/>
      {/* <MVideos/> */}
      <hr className='mx-[6%]'/>
      <MainNews/>
      <MEvents/>
      <hr className='mx-[6%]'/>
      <Join/>
      <hr className='mx-[6%]'/>
      <MupcomingTraining></MupcomingTraining>
      <hr className='mx-[6%]'/>
      <MPublication/>
      <Footer/>
    </main>
  )
}
