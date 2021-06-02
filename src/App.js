import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app bg-gray-50">
      <div className="p-4 flex-1">
        <SearchBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
