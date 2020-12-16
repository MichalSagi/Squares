import "antd/dist/antd.css";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Navbar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoryItems from "./components/CategoryItems";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        {/* {<Register /> && <Login />} */}
        <Route path='/' exact render={() => <Dashboard />} />
        <Route path='/items' render={() => <CategoryItems />} />
      </Router>
    </div>
  );
}

export default App;
