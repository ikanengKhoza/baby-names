import "./App.css";
import NameData from "./babyNamesData.json"
import NameDisplay from "./NameDisplay";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Baby Names</h1>
        <NameDisplay result={NameData}/>
      </header>
    </div>
  );
}

export default App;
