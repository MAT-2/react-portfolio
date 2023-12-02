import { Outlet } from "react-router-dom";
import Nav from "./components/Tabs";
//Importing App.css file to import background color
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
