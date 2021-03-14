import "./App.css";
import Home from "./components/home/Home";
import IncomeAndExpenses from "./components/income-and-expenses/IncomeAndExpenses";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/operation" component={IncomeAndExpenses}></Route>
          <Router render={() => <h2>404 page not found </h2>}></Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
