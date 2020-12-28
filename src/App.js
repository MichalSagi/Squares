import "antd/dist/antd.css";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Navbar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoryItems from "./components/CategoryItems";
import { ItemsProvider } from "./contexts/ItemsProvider";
import './App.css'

function App() {
  return (
    <div className="App">
      <ItemsProvider>
        <Router>
          {/* <Navbar /> */}
          {/* {<Register /> && <Login />} */}
          <Route path="/" exact render={() => <Dashboard />} />
          <Route path="/item" render={() => <CategoryItems />} />
        </Router>
      </ItemsProvider>
    </div>
  );
}

export default App;
