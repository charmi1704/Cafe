import React,{ Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Website/Components/Header";
import Menu from "./Website/Pages/Menu";
import Contact from "./Website/Pages/Contact";
import About from "./Website/Pages/About";
import Intro from "./Website/Pages/Intro";
import AHeader from "./Admin/Components/AHeader";
import AFooter from "./Admin/Components/AFooter";
// import Dashboard from "./Admin/Pages/Dashboard";
import Add_categories from "./Admin/Pages/Add_categories";
import Add_services from "./Admin/Pages/Add_services";
import Add_employee from "./Admin/Pages/Add_employee";
import Manage_categories from "./Admin/Pages/Manage_categories";
import Manage_employee from "./Admin/Pages/Manage_employee";
import Manage_services from "./Admin/Pages/Manage_services";
import Manage_user from "./Admin/Pages/Manage_user";
import Manage_contact from "./Admin/Pages/Manage_contact";
import Manage_feedback from "./Admin/Pages/Manage_feedback";

const Dashboard = React.lazy(() => import('./Admin/Pages/Dashboard'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Intro/><Menu/><About/><Contact/></>}></Route>
          <Route path="Intro" element={<><Intro/></>}></Route>
          <Route path="Menu" element={<><Menu/></>}></Route>
          <Route path="Contact" element={<><Contact/></>}></Route>
          <Route path="About" element={<><About/></>}></Route>


          {/* 
            Admin 
          */}

          <Route path="/admin-dashboard" element={<>
            <Suspense fallback = { <div class="spinner-border text-danger"></div> }> <AHeader/><Dashboard/><AFooter/></Suspense> 
            </>}>
          </Route>
          <Route path="/Add_categories" element={<><AHeader/><Add_categories/><AFooter/></>}></Route>
          <Route path="/Add_services" element={<><AHeader/><Add_services/><AFooter/></>}></Route>
          <Route path="/Add_employee" element={<><AHeader/><Add_employee/><AFooter/></>}></Route>
          <Route path="/Manage_categories" element={<><AHeader/><Manage_categories/><AFooter/></>}></Route>
          <Route path="/Manage_employee" element={<><AHeader/><Manage_employee/><AFooter/></>}></Route>
          <Route path="/Manage_services" element={<><AHeader/><Manage_services/><AFooter/></>}></Route>
          <Route path="/Manage_user" element={<><AHeader/><Manage_user/><AFooter/></>}></Route>
          <Route path="/Manage_contact" element={<><AHeader/><Manage_contact/><AFooter/></>}></Route>
          <Route path="/Manage_feedback" element={<><AHeader/><Manage_feedback/><AFooter/></>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
