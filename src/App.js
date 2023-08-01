// import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PassRegistration from "./components/Layouts/Registration/PassengerReg/PassangerRegistr";
import DriverRegistration from "./components/Layouts/Registration/DriverReg/DriverRegistr"; 
import Header from "./components/Layouts/Header/Header.jsx";
// import Main from "./components/Layouts/Main/Main";

function App() {
  // const [pass, setPass] = useState(false);
  // const [driver, setDriver] = useState(false);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="/PassangerRegistr" element={<PassRegistration />} />
        <Route path="/DriverRegistr" element={<DriverRegistration />} />
        {/* <Route path="Main" element={<Main />} /> */}
      </Routes>
    </BrowserRouter>
    {/* <button type="button" onClick={()=>{setDriver(!driver)}}>Driver</button>
      {driver ? <DriverRegistration /> : null }
    <button type="button" onClick={()=>{setPass(!pass)}}>Passenger</button>
      {pass ? <PassRegistration /> : null } */}
    </>
  );
}

export default App;
