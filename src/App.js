import './App.css';
import {useState} from 'react'
import { BasicHeader, BasicFooter } from './components/HeaderFooter';
import NameInputs from './components/NameInputs';
import Results from './components/Results';


function App() {
  const [fullName, setFullName] = useState()
  return (
    <div className="App">
      <BasicHeader {...fullName} />
      <NameInputs {...fullName} setFullName={setFullName} />
      <Results {...fullName} />
      <BasicFooter />
    </div>
  );
}

export default App;
