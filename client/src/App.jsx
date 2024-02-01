import Header from "../src/components/header/Header"
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Pets from "./components/pets/Pets";
import AddPet from "./components/addPet/AddPet";
import PetDetails from "./components/petDetails/PetDetails";
import EditPet from "./components/editPet/EditPet";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./contexts/userContext";
import Logout from "./components/logout/Logout";

function App() {

  const [auth, setAuth] = useState({});
  console.log("THIS IS AUTH OBJECT", auth);

  const changeAuthHandler = (info) => {
    setAuth(info)
  }


  const value = {
    logged: !!auth?.username,
    username: auth?.username ?? null,
    userId: auth?.userId ?? null,
    changeAuthHandler
  }

  useEffect ( ()=> {
    console.log("THIS IS AUTH OBJECT IN USE EFFECT", auth);
    console.log("THIS IS VALUE CONTEXT IN USE EFFECT", value);
  },[auth])

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
      <Route path="/Logout" element={<Logout />} />
    </Routes>
    </UserContext.Provider>
  )
}

export default App
