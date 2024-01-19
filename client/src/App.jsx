import Header from "../src/components/header/Header"
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Pets from "./components/pets/Pets";
import AddPet from "./components/addPet/AddPet";
function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pets" element={<Pets />} />
      <Route path="/Pets/Add" element={<AddPet />} />
    </Routes>
    </>
  )
}

export default App
