import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import AppHome from './components/home';
import AppAbout from './components/about';
import Studio from './components/studio';
import Artists from './artists';
import Styles from './components/styles';
import AppTestimonials from './components/testimonials';
import AppBlog from './components/blog';
import AppContact from './components/contact';
import Booking from './components/booking';
import AppFooter from './components/footer';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader/>
      </header>
      <main>
        <AppHome/>
        <AppAbout/>
        <Studio/>
        <Artists/>
        <Styles/>
        <AppTestimonials/>
        <AppBlog/>
        <AppContact/>
        <Booking/>
        <AppFooter/>
      </main>
    </div>
  );
}

export default App;
