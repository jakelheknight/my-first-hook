import './App.css';
import { BasicHeader, BasicFooter } from './components/HeaderFooter';
import NameInputs from './components/NameInputs';
import Results from './components/Results';


function App() {
  return (
    <div className="App">
      <BasicHeader />
      <NameInputs />
      <Results />
      <BasicFooter />
    </div>
  );
}

export default App;
