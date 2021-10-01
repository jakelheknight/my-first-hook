import './App.css';
import { BasicHeader, BasicFooter } from './sharedComponents/HeaderFooter';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchActors from "./pages/SearchActors";
import SearchMovies from "./pages/SearchMovies";
import User from "./pages/User";
import AppContextProvider from './AppContextProvider';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter className="App">
        <BasicHeader />
        <Route exact path="/" component={Home} />
        <Route path="/actors" component={SearchActors} />
        <Route path="/movies" component={SearchMovies} />
        <Route path="/user" component={User} />
        <BasicFooter />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
