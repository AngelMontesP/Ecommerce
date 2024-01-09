import Header from "@/Components/Header";
import { BrowserRouter } from "react-router-dom";
import RoutesIndex from "@/Routes/Routes";
import { AuthProvider } from "./Context/AuthContetxt";
import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
