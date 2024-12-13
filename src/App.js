import './App.css';
import Header from './components/header/header';
import HomeSectionNews from './components/home/HomeSectionNews';
import SportNewsSection from './components/sport/SportNewsSection';
import './components/styles/style.css';
import TravelSectionNews from './components/travel/TravelSectionNews';
import FutureSectionNews from './components/furure/FutureSectionNews';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeSectionNews/>
      <SportNewsSection/>
      <TravelSectionNews/>
      <FutureSectionNews/>
      <Footer/>
    </div>
  );
}

export default App;
