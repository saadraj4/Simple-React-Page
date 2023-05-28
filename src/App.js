import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import AboutPage from './pages/AboutPage';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer copyright = 'CopyRight 2023'/>
    </div>
  );
}

export default App;
