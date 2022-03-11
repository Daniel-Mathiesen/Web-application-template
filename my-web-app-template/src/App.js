import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import NavbarTouch from './Javascripts/NavbarTouch'

function App() {
  return (
    <div className="App flex flex-col-reverse h-full">
      <Navbar />
    </div>
  );
}

export default App;
