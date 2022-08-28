// import { Home, Login } from "./Pages";
import { useAuth } from "./hook/useAuth";
import { Private } from "./Private";
import { Public } from "./Public";

function App() {
  const { token } = useAuth();
  return <div className="App">{token ? <Private /> : <Public />}</div>;
}

export default App;
