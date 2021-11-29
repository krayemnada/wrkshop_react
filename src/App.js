import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import First from './components/First/First';
import Footer from './components/Footer/Footer';
import Second from './components/Second/Second';
function App() {
  return (
    <div className="App">
     <Header/>
     <First/>
     <Second/>
     <Footer/>
    </div>
  );
}

export default App;
