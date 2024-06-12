import '../../App.css'
import Home from './components/Home';
import ShortcutMain from './ShortcutMain/ShortcutMain';
// import Programs from '../Programs/Programs';
import Homeslider from './homeslider/slider';
import Testimonials from './Testimonials/Testimonials';
import Map from './Map/Map';
import Footer from '../Footer/Footer';



const HomePage = () => {
  return (
    <>
    <Homeslider />
    <ShortcutMain />
    <Testimonials />
    {/* <Programs /> */}
    <Home />
    <Map />
    <Footer/>
    </>
  )
}

export default HomePage