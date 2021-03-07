import "./App.css";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import Order from "./components/Order";

function App() {
  return (
    <div className="container">
      <Nav />
      <Menu />
      <Order />
    </div>
  );
}

export default App;
