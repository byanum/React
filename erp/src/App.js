import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// javaScript

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <TextForm heading="Text Form" />
      </div>
    </>
  );
}

export default App;
