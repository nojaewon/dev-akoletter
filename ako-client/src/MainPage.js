import './App.css';
import './App768.css';
import './App1440.css';


import Header from "./components/Header.js";
import LoginBanner from "./components/LoginBanner.js"
import Footer from './components/Footer.js';
import BoardGrid from './components/BoardGrid.js';

function MainPage() {
  return (
    <div className="App">
      <Header />
      <LoginBanner />
      <BoardGrid />
      <Footer />
      <a href="#" className='edit-button'>
        <span className="material-symbols-outlined ">edit_square</span>
      </a>
    </div>
  );
}

export default MainPage;