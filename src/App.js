
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import '../src/styles/main.scss';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
