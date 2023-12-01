import { Outlet } from "react-router-dom";
import Nav from "./components/Tabs";

function App() {
  return (
    <>
      <Nav>
        <main className="mx-3">
          <Outlet />
        </main>
      </Nav>
    </>
  );
}

export default App;
