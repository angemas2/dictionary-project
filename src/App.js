import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultword="sunset" />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
