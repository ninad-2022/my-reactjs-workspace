import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>React Query</h1>
      <aside className="bg-black">
        <Link to="/">Home</Link>
        <Link to="/products">product</Link>
      </aside>
    </>
  );
}

export default App;
