import "./App.css";
import { ContextProvider } from "./Components/Header/Contextprovider";
import Navbar from "./Components/Header/Navbar";
import Sidebar from "./Components/Header/SideMenuBar";
import Hero from "./Components/ss/Test";

function App() {
  return (
    <div className="App ">
      <ContextProvider>
        <Navbar />
      </ContextProvider>
    </div>
  );
}

export default App;
