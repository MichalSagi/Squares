import Login from './components/Login'
import Register from './components/Register'
import WhatToWear from './components/WhatToWear'
import Navbar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <Navbar />
      {<Register /> && <Login />}
      <WhatToWear/>
    </div>
  );
}

export default App;
