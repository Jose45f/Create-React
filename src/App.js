import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Menu from './components/navbar';
import Login from './components/login';




function App() {
  return (
    <section className='back-Pic'>
    <Menu />
    <div className="App">
    <Login />
    
    </div>
    </section>
  );
}

export default App;
