import "./App.css";
import Nav from "./components/Nav/Index";
import AuthButtons from "./components/AuthButtons/Index";
import Headers from "./components/Header/Index";
import Trending from "./components/Trending/Index";
function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      <div className="md:col-span-1">
        <Nav />
      </div>
      <main className="px-6 py-4 md:col-span-4 bg-cyan-100">
        <AuthButtons />
        <Headers />
        <Trending />
      </main>
    </div>
  );
}

export default App;
