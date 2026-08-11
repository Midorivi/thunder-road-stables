import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { PriceList } from './pages/PriceList';
import { Gallery } from './pages/Gallery';
import { HorseOfTheMonth } from './pages/HorseOfTheMonth';
import { OurStory } from './pages/OurStory';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="boarding" element={<PriceList />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="our-story" element={<OurStory />} />
        <Route path="horse-of-the-month" element={<HorseOfTheMonth />} />
      </Route>
    </Routes>
  );
}

export default App;
