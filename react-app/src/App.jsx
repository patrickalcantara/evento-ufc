import { Outlet } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";

import "./global.css";

function App() {
  return (
    <>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

export default App;
