import Header from "../src/components/header/Header"
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Pets from "./components/pets/Pets";
import AddPet from "./components/addPet/AddPet";
import PetDetails from "./components/petDetails/PetDetails";
import EditPet from "./components/editPet/EditPet";
import Login from "./components/Login/Login";
import Register from "./components/register/Register";
import { createContext, useContext, useState } from "react";

function App() {
  const UserContext = createContext();

  const [auth, setAuth] = useState({});

  const changeAuthHandler = (info) => {
    setAuth(info)
  }

  const value = {
    logged: false
  }

  return (
    <UserContext.Provider value={value}>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pets" element={<Pets />} />
      <Route path="/Pets/Add" element={<AddPet />} />
      <Route path="/Pet/:id" element={<PetDetails />} />
      <Route path="/Pet/:id/Edit" element={<EditPet />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
    </UserContext.Provider>
  )
}

export default App
