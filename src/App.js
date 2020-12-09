import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage-component/homepage.component.jsx";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

export default App;
